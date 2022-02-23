// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import http, { IncomingMessage, ServerResponse } from 'http';
import HTTPServer from '../httpServer';

describe("httpServer", () => {
    
    let server: HTTPServer;
    const responseMessage = "Unit Test message!";
    const hostname = "127.0.0.1";
    const port = 3000;
    
    beforeEach(async () => {
        const handler = (_request: IncomingMessage, response: ServerResponse) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(responseMessage);
        };
        server = new HTTPServer(port, hostname, handler);
        await server.StartServer();
    });

    afterEach(async () => {
        await server.stopServer();
    });

    it("returns status code 200", async () => {
        const httpResult = await new Promise<IncomingMessage>(resolveFn => http.get("http://localhost:" + port, resolveFn));
        expect(httpResult.statusCode).toBe(200);
    })

    it("returns string from handler", async () => {
        const httpResult = await new Promise<IncomingMessage>(resolveFn => http.get("http://localhost:" + port, resolveFn));

        // https://stackoverflow.com/questions/31006711/get-request-body-from-node-jss-http-incomingmessage
        let resultBody = "";
        httpResult.on('data', (chunk) => {
            resultBody += chunk;
        });
        await new Promise<void>(resolveFn => httpResult.on('end', resolveFn));

        expect(resultBody).toBe(responseMessage);
    });
});
