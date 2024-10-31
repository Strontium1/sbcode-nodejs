const http = require('node:http');

http.createServer(function(request, respond) {
    respond.write("Hello World!");
    respond.end();
}).listen(1945);