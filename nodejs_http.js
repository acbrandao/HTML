////////////////////////////////////////////////////
// nodejs_http.js:: NodeJs simple web server on port 8081
//  
// a beginners template for service web content ona  sepcific port
/////////////////////////////////////////////

const http = require('http');
const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {

  var date = new Date();
  var current_hour = date.getHours();

// Proper HTTP response code 200 - Normal
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><head></head><body><h1>Hello World</h1><p>Current Time: '+date+'</p> </body></html>');

//Setup the hours
var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress;

console.log("Server Request from "+ip+" at time "+date);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
