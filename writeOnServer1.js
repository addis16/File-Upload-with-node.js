var http = require('http');

//create server:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type:' 'text/html'});
	res.write('Hey, jesus christ man... can you believe you can create a server and fuck with it with JS, damn man I think php is on its last legs bro.');
	res.end();
}).listen(8080);