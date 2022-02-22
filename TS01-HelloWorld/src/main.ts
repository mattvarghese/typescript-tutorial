import { IncomingMessage, ServerResponse } from 'http';
import HTTPServer from './httpServer';

const handler = (_request: IncomingMessage, response: ServerResponse) => {
    response.end("Hello world!");

};

async function main(): Promise<void> {
    const port = 8080;
    try {
        const server: HTTPServer = new HTTPServer(port, handler);
        console.log("Starting HTTP Server..");
        await server.StartServer();
        console.log("Started HTTP Server listening on port " + port);
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