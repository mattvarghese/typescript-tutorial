// Copyright (C) 2022 Matt Varghese
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-tutorial

import http, { IncomingMessage, ServerResponse } from 'http';
import HTTPServer, { HTTPHandler } from '../httpServer';

// Each describe block defines a test suite.
// There can also be describe blocks inside a test suite, defining a nested test suite.
describe("httpServer", () => {
    
    // Test sutie level variables.
    let server: HTTPServer;
    const responseMessage = "Unit Test message!";
    const hostname = "127.0.0.1";
    const port = 3000;
    
    // The beforeEach method is run before each test case to do required setup
    beforeEach(async () => {
        // Define HTTP handler
        const handler : HTTPHandler = (_request: IncomingMessage, response: ServerResponse) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(responseMessage);
        };
        // Create server
        server = new HTTPServer(port, hostname, handler);
        // Start server
        await server.StartServer();
    });

    // The afterEach method is run after each test case to do required teardown
    afterEach(async () => {
        // Stop server
        await server.stopServer();
    });

    // Each it block defines a single test case
    it("returns status code 200", async () => {
        // Run the test case
        const httpResult = await new Promise<IncomingMessage>(resolveFn => http.get("http://localhost:" + port, resolveFn));
        // Validate
        expect(httpResult.statusCode).toBe(200);
    })

    // Each it block defines a single test case
    it("returns string from handler", async () => {
        // Run the test case
        const httpResult = await new Promise<IncomingMessage>(resolveFn => http.get("http://localhost:" + port, resolveFn));
        // https://stackoverflow.com/questions/31006711/get-request-body-from-node-jss-http-incomingmessage
        let resultBody = "";
        httpResult.on('data', (chunk) => {
            resultBody += chunk;
        });
        await new Promise<void>(resolveFn => httpResult.on('end', resolveFn));
        // Validate
        expect(resultBody).toBe(responseMessage);
    });
});
