// Load express module
const express = require('express');

// Create express application
const app = express();

// Load worker_threads module
const { Worker } = require('worker_threads');

// Define route for GET requests to '/'
app.get('/', (req, res) => {
    // Create a new worker using the worker.js file
    const worker = new Worker('./worker.js');

    // Register an event listener for the 'message' event emitted by the worker
    worker.on('message', (counter) => {
        // Log the message received from the worker
        console.log(counter);
    });

    // Send a message to the worker, triggering its 'message' event
    // Here 'start counting' is just a dummy message, could be any value or meaningful as per your worker requirement
    worker.postMessage('start counting');
    
    // Send a response to the client
    res.send('hello');
});

// Start the server and listen on port 3001
app.listen(3001, () => {
    console.log('server is listening on port 3001');
});
