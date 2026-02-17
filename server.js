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
    const { path } = parseRequest(data);
    const { status, body } = getRouteResponse(path);

    const response = `HTTP/1.1 ${status} ${status === 404 ? "Not Found" : "OK"}\r
Content-Type: text/plain\r
Content-Length: ${body.length}\r
\r
${body}`;


    socket.write(response);
    socket.end();
  });
});

server.listen(PORT, () => console.log(`souHTTP listening on port ${PORT}`));
