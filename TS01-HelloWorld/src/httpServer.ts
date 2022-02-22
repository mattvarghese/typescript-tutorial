// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

type HTTPHandler = (request: IncomingMessage, response: ServerResponse) => void;

export class HTTPServer {
    private port: number;
    private handler: HTTPHandler;
    private server: Server;
    public constructor(port: number, handler: HTTPHandler) {
        this.port = port;
        this.handler = handler;
        this.server = createServer(this.handler);
    }
    public async StartServer(): Promise<void> {
        await new Promise<void>(resolveFn => this.server.listen(this.port, resolveFn));
    }
    public async stopServer(): Promise<void> {
        await new Promise<Error | undefined>(resolveFn => this.server.close(resolveFn));
    }
}

export default HTTPServer;
