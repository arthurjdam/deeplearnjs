import '../demo-header';
import '../demo-footer';

import {
    Array1D,
    CostReduction,
    Graph,
    InCPUMemoryShuffledInputProviderBuilder,
    NDArrayMathCPU,
    Session,
    SGDOptimizer,
    Tensor
} from '../deeplearn';

enum CostFunctions {
    mse,
    sce
}

enum ActivationFunctions {
    tanh,
    sigmoid
}

/*
* Hyper-parameters
 */
const BATCH_SIZE = 5;
const STEPS = 10000;
const EPOCH = 1000;
const ACTIVATION:ActivationFunctions = ActivationFunctions.sigmoid; // or tanh
const COST:CostFunctions = CostFunctions.mse;
const LEARNING_RATE = 0.05;

/*
* Set input and output data
 */
const inputArray = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
].map(x => Array1D.new(x));

const targetArray = [
    0,
    1,
    1,
    0
].map(x => Array1D.new([x, 1 - x]));

/*
* Instantiate the graph we'll be adding our network to
 */
const graph = new Graph();

/*
* Instantiate the math processor (either NDArrayMathCPU or NDArrayMathGPU)
 */
const math = new NDArrayMathCPU();

/*
* Create placeholders for input and output
 */
const x = graph.placeholder('x', [2]);
const y = graph.placeholder('y', [2]);

/*
* Set up the hidden layer, with a given activation function
 */
let hiddenLayer: Tensor;
if (ACTIVATION === ActivationFunctions.sigmoid) {
    hiddenLayer = graph.layers.dense(
        'hiddenLayer',
        x,
        5,
        (x) => graph.sigmoid(x), true);
} else if (ACTIVATION === ActivationFunctions.tanh) {
    hiddenLayer = graph.layers.dense(
        'hiddenLayer',
        x,
        5,
        (x) => graph.tanh(x), true);
}

/*
* Set up the output layer
 */
const output = graph.layers.dense(
    'outputLayer',
    hiddenLayer,
    2);

/*
* Set up a method to calculate cost
 */
let costTensor: Tensor;
if (COST === CostFunctions.mse) {
    costTensor = graph.meanSquaredCost(output, y);
} else if (COST === CostFunctions.sce) {
    costTensor = graph.softmaxCrossEntropyCost(output, y);
}

/*
* Instantiate a new Sessions
 */
const session = new Session(graph, math);

/*
* Initialize the Optimizer. In this case: we're using a Stochastic Gradient
* Descent optimizer
 */
const optimizer = new SGDOptimizer(LEARNING_RATE);

math.scope(() => {
    /*
     * Train the model
     */
    for (let i = 0; i < STEPS; ++i) {
        /*
        * Shuffle the input and output arrays
         */
        const [
            inputProvider,
            targetProvider
        ] = new InCPUMemoryShuffledInputProviderBuilder([
            inputArray,
            targetArray
        ]).getInputProviders();

        const feedEntries = [
            {tensor: x, data: inputProvider},
            {tensor: y, data: targetProvider}
        ];

        session.train(
            costTensor,
            feedEntries,
            BATCH_SIZE,
            optimizer,
            CostReduction.MEAN);

        if (i % EPOCH === 0) {
            // console.log(cost.get());
            console.log(i);
        }
    }

    /*
     * Test the model
     */
    for (let i = 0; i < 4; i += 1) {
        const data = inputArray[i];
        const val = session.eval(output, [{tensor: x, data}]);
        console.log(data.dataSync(), val.dataSync()[0]);
    }
});
