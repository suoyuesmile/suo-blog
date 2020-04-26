const http = require('http');
const url = require('url');

function createServer(route, handles) {
    http.createServer(function(request, response) {
        const pathname = url.parse(request.url).pathname;
        route(pathname, handles, response, request);
    }).listen(8888);
    console.log('server ok!')
}

exports.createServer = createServer;

