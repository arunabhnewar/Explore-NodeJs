const fs = require('fs');
const readStream = fs.createReadStream('./bit.txt');
const writeStream = fs.createWriteStream('./bit2.txt')

// Read data
readStream.on('data', (chunk) => {
    console.log(chunk);

    // write a data on a new file
    writeStream.write(chunk)
})


// write a data on a new file 
readStream.pipe(writeStream);



// Create a server
const http = require('http');
const server = http.createServer((req, res) => {

    const data = fs.readFileSync('./bit.txt');
    res.write(data);
    res.end();


    const data = fs.createReadStream('./bit.txt');
    data.on('data', (chunk) => {
        res.write(chunk);
    })

    data.on('end', () => {
        res.end()
    })


    const videoFile = fs.readFileSync('./NewFolder/video-1646664670.mp4');
    res.writeHead(200, { "Content-type": "video/mp4" })
    res.write(videoFile);
    res.end();

});

server.listen(3000, () => console.log('Server is running'))