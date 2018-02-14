var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT || 3000;
function setHeaders(res, path) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}
connect().use(serveStatic(__dirname+"/root/",{
	"setHeaders": setHeaders,
})).listen(parseInt(port));
console.log("Simple static web server running on port "+port);
