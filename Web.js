// web.js

var http = require('http');
var fs = require('fs');

var servercb = function(request, response) {
fs.readFile('index.html', function(err, data) {
	response.writeHead(200);
	response.write(data);
	response.end();
 });
}

http.createServer(servercb).listen(8080);