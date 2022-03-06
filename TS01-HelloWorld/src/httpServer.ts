// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

// Define a handler type
export type HTTPHandler = (request: IncomingMessage, response: ServerResponse) => void;

// Define the server class
export class HTTPServer {
    // Private fields
    private port: number;
    private hostname: string;
    private handler: HTTPHandler;
    private server: Server;

    // constructor
    public constructor(port: number, hostname: string, handler: HTTPHandler) {
        this.port = port;
        this.handler = handler;
        this.hostname = hostname;
        this.server = createServer(this.handler);
    }

    //methods
    public async StartServer(): Promise<void> {
        await new Promise<void>(resolveFn => this.server.listen(this.port, this.hostname, resolveFn));
    }
    public async stopServer(): Promise<void> {
        await new Promise<Error | undefined>(resolveFn => this.server.close(resolveFn));
    }
}

// export the HTTPServer as the default for the module
export default HTTPServer;
