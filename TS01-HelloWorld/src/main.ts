// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import { IncomingMessage, ServerResponse } from 'http';
import HTTPServer, { HTTPHandler } from './httpServer';

// Define a message handler for our server
const handler : HTTPHandler = (_request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
};

// Main function
async function main(): Promise<void> {
    const port = 3000;
    const hostname = "127.0.0.1";
    try {
        // Create the HTTP Server
        const server: HTTPServer = new HTTPServer(port, hostname, handler);

        // Start the HTTP Server
        console.log("Starting HTTP Server..");
        await server.StartServer();
        console.log("Started HTTP Server listening on " + `http://${hostname}:${port}`);

        // Wait 15 seconds
        // Ref: https://zellwk.com/blog/converting-callbacks-to-promises/
        await new Promise(resolveFn => setTimeout(resolveFn, 15000));

        // Stop the HTTP Server
        await server.stopServer();
        console.log("Terminated HTTP Server, exiting..");
    }
    catch (e) {
        // Something went wrong
        console.log(`Error encountered. Details follow:`);
        console.log(e);
    }
}

// Invoke the main function
main();
