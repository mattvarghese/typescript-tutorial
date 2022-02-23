// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import { IncomingMessage, ServerResponse } from 'http';
import HTTPServer from './httpServer';

const handler = (_request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
};

async function main(): Promise<void> {
    const port = 3000;
    const hostname = "127.0.0.1";
    try {
        const server: HTTPServer = new HTTPServer(port, hostname, handler);
        console.log("Starting HTTP Server..");
        await server.StartServer();
        console.log("Started HTTP Server listening on " + `http://${hostname}:${port}`);
        // Ref: https://zellwk.com/blog/converting-callbacks-to-promises/
        await new Promise(resolveFn => setTimeout(resolveFn, 15000));
        await server.stopServer();
        console.log("Terminated HTTP Server, exiting..");
    }
    catch (e) {
        console.log(`Error encountered. Details follow:`);
        console.log(e);
    }
}

main();
