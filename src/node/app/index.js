const server = require('./server');
const router = require('./router');
const requestHandles = require('./requestHandles');

const handles = {};
handles['/'] = requestHandles.start;
handles['/upload'] = requestHandles.upload;
handles['/show'] = requestHandles.show;

server.createServer(router.route, handles);