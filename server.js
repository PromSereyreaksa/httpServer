import net from 'net';

// port to use
const PORT = 8080;

const server = net.createServer(socket => {
  // net is node.js's TCP networking module
  // createServer() creates a TCP server that listens for incoming connections.
  console.log('Client connected');

  socket.on('data', data => {
    console.log('Recieved Data:\n', data.toString());
  

  const response = `HTTP/1.1 200 OK
  Content-Type: text/plain

  Hello from SouHTTP!`;

  socket.write(response);
  socket.end();
  });
  socket.on('end', () => console.log('Client disconnected'));
});

server.listen(PORT, () => console.log(`souHTTP listening on port ${PORT}`));
