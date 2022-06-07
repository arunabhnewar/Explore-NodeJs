const http = require('http');
const fs = require('fs')


// Create a server
const server = http.createServer((req, res) => {

    // console.log(req.url);
    // console.log(req.method);

    if (req.method.toLowerCase() === 'get' && req.url === '/') {
        // console.log('This is Home route');

        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write('This is home page');
        res.end();
    }
    else if (req.method.toLowerCase() === 'get' && req.url === '/about') {
        // console.log('This is about route');

        res.writeHead(200, { 'content-type': 'text/html' });
        const indexPage = fs.readFileSync('./index.html');
        res.write(indexPage);
        res.end();
    }
    else {
        // console.log('404 not found!!');

        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write('Not Found');
        res.end();
    }
})


// 


// http listen
server.listen(7000, 'localhost', () => {
    console.log('Server is running on port 7000');
})