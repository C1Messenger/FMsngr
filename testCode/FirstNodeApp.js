//Sample Node App to test the installation - 08/02/2015 - 01:26 AM
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Welcome to Capital One Messenger Integration \n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
