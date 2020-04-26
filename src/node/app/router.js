function route(pathname, handles, response, request) {
    console.log(pathname);
    if (typeof handles[pathname] === 'function') {
        return handles[pathname](response, request);
    } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('404 not found!');
        response.end()
    }
}

exports.route = route;