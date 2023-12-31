// Create web server
// Usage: node comments.js

var http = require('http');
var url = require('url');
var fs = require('fs');

var ROOT_DIR = "html";

http.createServer(function (req, res) {
	var urlObj = url.parse(req.url, true, false);
	fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if (err) {
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(8080);

console.log('Server started on port 8080');