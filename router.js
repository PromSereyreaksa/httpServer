// create small route object 


const routes = {
  '/': 'Welcome to souHTTP!',
  '/hello': 'Hello there!',
  '/goodbye': 'Goodbye from souHTTP!',
};

export function getRouteResponse(path) {
  const responseText = routes[path];
  if (responseText) return { status: 200, body: responseText };
  return { status: 404, body: '404 Not Found' };
}
