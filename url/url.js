const http = require('http');
const url = require('url');


// Create a new server
const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method = req.method.toLowerCase();
    const path = parseUrl.pathname;
    const queryObj = parseUrl.query;
    const reqHeaders = req.headers;

    // Store Data in a n array
    const bufferData = [];
    let body;

    req.on('data', (chunk) => {
        bufferData.push(chunk);
    })


    req.on('end', () => {
        body = Buffer.concat(bufferData).toString();
        console.log(body);

        res.end();
    })

});



// Server listen
server.listen(3000, () => {
    console.log('Server is running')
});