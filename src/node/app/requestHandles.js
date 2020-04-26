// const exec = require('child_process').exec;
// const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(response, request) {
    console.log('start ok!')
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end()
}

function upload(response, request) {
    console.log('upload ok!')
    const form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        try {
            fs.renameSync(files.upload.path, '/tmp/test.png')
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write('upload ok!');
            response.write('<img src="/show">');
            response.end()
        } catch(e) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error);
            response.end()
        }
    })
}

function show(response, request) {
    console.log('show ok!');
    fs.readFile('/tmp/test.png', 'binary', function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error, '/n');
            response.end()    
        } else {
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(file, 'binary');
            response.end()    
        }
    })
}
exports.start = start;
exports.upload = upload;
exports.show = show;