var connect = require('connect');
var serveStatic = require('serve-static');
var port = (process.argv.length > 2) ? process.argv[2] : 3000;
connect().use(serveStatic(__dirname+"/root/")).listen(parseInt(port));
console.log("Simple static web server running on port "+port);