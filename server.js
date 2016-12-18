var connect = require('connect');
var serveStatic = require('serve-static');
var port = /*(process.argv.length > 2) ? process.argv[2] : */(process.env.PORT || 3000);

function setHeaders(res, path) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}

connect().use(serveStatic(__dirname+"/root/",{
	"setHeaders": setHeaders,
})).listen(parseInt(port));
console.log("Simple static web server running on port "+port);