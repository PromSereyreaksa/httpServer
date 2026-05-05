// create small route object 


const routes = {
  '/' : {
    status: 200,
    body: 'Welcome to my http!',
    contentType: 'text/plain'
  },
  '/hello' : {
    status: 200,
    body: 'Hello there',
    contentType: 'text/plain'
  },
  '/goodbye' : {
    status : 200,
    body: 'goodbnye',
    contentType: 'text/plain'
  }
};

export function getRouteResponse(path) {
  const route = routes[path];

  if (route) return {
    status: route.status || 200,
    body: route.body ?? '',
    contentType: route.contentType || 'text/plain'
   };

   console.log('ROUTE:', route);

  return { status: 404, body: '', contentType: 'text/plain' };
}
