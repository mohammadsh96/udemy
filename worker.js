// Import the parentPort object from the worker_threads module
const { parentPort } = require('worker_threads');

// Register an event listener for the 'message' event emitted by the main thread
parentPort.on('message', (message) => {
    // Log the message received from the main thread
    console.log('Received: ', message);

    // Perform the CPU-intensive task
    let counter = 0;
    while(counter < 1e9) {
        counter++;
    }

    // Send a message back to the main thread
    parentPort.postMessage(counter);
});
