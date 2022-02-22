import http, { IncomingMessage, ServerResponse } from 'http';
import HTTPServer from '../httpServer';

describe("httpServer", () => {
    
    let server: HTTPServer;
    const responseMessage = "Hello world!";
    const port = 8080;
    
    beforeEach(async () => {
        const handler = (_request: IncomingMessage, response: ServerResponse) => {
            response.end(responseMessage);
        };
        server = new HTTPServer(port, handler);
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
        let resultBody: string = "";
        httpResult.on('data', (chunk) => {
            resultBody += chunk;
        });
        await new Promise<void>(resolveFn => httpResult.on('end', resolveFn));

        expect(resultBody).toBe(responseMessage);
    });
});
