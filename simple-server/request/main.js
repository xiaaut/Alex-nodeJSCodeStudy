import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const server = createServer(async (request, response) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Hello World\n");

    if (request.url === '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        const htmlFile = await readFile("./index.html", "utf-8");
        response.end(htmlFile);
    }

    if (request.url === '/data') {
        response.writeHead(200, { "content-type": "application/json" })
        const jsonFile = await readFile("./data.json", "utf-8");

        response.end(jsonFile);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server running at http://127.0.0.1:3000/");
});

