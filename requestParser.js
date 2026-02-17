// understand the HTTP request and respond differently based on method and path.

// to do: 

/* Parse incoming HTTP requests (method, path, headers).

Respond differently depending on the route.

Keep it minimal and readable */


export function parseRequest(data) {
const [requsetLine, ...headerlines] = data.toString().split('\r\n');
// Split the request by \r\n to separate lines.

const [method, path, version] = requsetLine.split(' ');

// The first line contains the method, path, and HTTP version.

// Remaining lines are headers (key: value).
const headers = {};
headerlines.forEach(line => {
    if (line.includes(':')) {
        const [key, value] = line.split(': ');
        headers[key.toLowerCase()] = value;
    }
})

  return { method, path, version, headers };
}