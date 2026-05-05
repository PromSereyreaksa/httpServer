import net from "net";
import { parseRequest } from "./requestParser.js";
import { getRouteResponse } from "./route.js";

// port to use
const PORT = 8080;

const server = net.createServer((socket) => {
  // net is node.js's TCP networking module
  console.log("Client connected");

  socket.on("data", (data) => {
    // add request log
    const start = Date.now();
    const {method, path } = parseRequest(data);
    const { status, body, contentType } = getRouteResponse(path);
    console.log(`[${new Date().toISOString()}] ${method} ${path}`);

    const safeBody = body ?? '';


    // construct response
    const response = `HTTP/1.1 ${status} ${status === 404 ? "Not Found" : "OK"}\r\n` +
`Content-Type: ${contentType}\r\n` +
`Content-Length: ${Buffer.byteLength(safeBody)}\r\n` +
`\r\n` +
safeBody;


    socket.write(response);

    // basic observability
    const duration = Date.now() - start;
    console.log (`-> ${status} (${duration}ms)`);
    socket.end();
  });
});

server.listen(PORT, () => console.log(`souHTTP listening on port ${PORT}`));
