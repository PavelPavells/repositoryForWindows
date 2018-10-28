//<!DOCTYPE html>
//<html lang="en">
//<head>
//	<meta charset="UTF-8">
//	<title>Document</title>
//</head>
//<body>
//	<script>
//		var xhr = new XMLHttpRequest();
//		xhr.open('POST', 'http://localhost:7777/', true);
//		xhr.responseType = 'json';
//		xhr.onloadend = function() {
//			console.log(xhr.response);
//		};
//		xhr.send(JSON.stringify({q : 1, w : 'data'}));
//	</script>
//</body>
//</html>


// SERVER //

//var http = require('http'),
//	hostname = 'localhost',
//	port = 7777;
//http.createServer(function(req, res) {
//	console.log('NEW REQUEST');
//	var data = '';
//	res.writeHead(200, {
//		'Content-Type' : 'text/javascript',
//		'Access-Control-Allow-Origin' : '*'
//	});
//	req.setEncoding('utf8');
//	req.on('data', function(buf) {
//		data = data.concat(buf);
//	});
//	req.on('error', function() {
//		res.end('{}');
//	});
//	req.on('end', function() {
//		data = JSON.parse(data);
//		res.end(JSON.stringify(data));
//	});
//}).listen(port, hostname, function() {
//	console.log(`Server running at http://${hostname}:${port}/`);
//});