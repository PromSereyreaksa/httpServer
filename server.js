import net from "net";
import { parseRequest } from "./requestParser.js";
import { getRouteResponse } from "./router.js";

// create small route project

const routes = {
  "/": "Welcome to souHTTP!",
  "/hello": "Greeting from the server!",
  "/goodbye": "Goodbye from the server!",
};

// port to use
const PORT = 8080;

const server = net.createServer((socket) => {
  // net is node.js's TCP networking module
  // createServer() creates a TCP server that listens for incoming connections.
  console.log("Client connected");

  socket.on("data", (data) => {
    // add request log
    const start = Date.now();
    const {method, path } = parseRequest(data);
    const { status, body } = getRouteResponse(path);
    console.log(`[${new Date().toISOString()}] ${method} ${path}`);

    const response = `HTTP/1.1 ${status} ${status === 404 ? "Not Found" : "OK"}\r\n` +
`Content-Type: text/plain\r\n` +
`Content-Length: ${Buffer.byteLength(body)}\r\n` +
`\r\n` +
body;


    socket.write(response);

    // basic observability
    const duration = Date.now() - start;
    console.log (`-> ${status} (${duration}ms)`);
    socket.end();
  });
});

server.listen(PORT, () => console.log(`souHTTP listening on port ${PORT}`));
