const fs = require('fs');
const path = require('path');


const status = fs.statSync('./global.js');
console.log(status);


const fileStatus = fs.statSync(__filename);
console.log(fileStatus);


// fs.readFileSync();  //Work in Synchronous way
const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data);


fs.readFile();      //Work in Asynchronous way
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(data.toString());
    }
})
console.log('Barca dogs');


//open(), Opens a file
fs.open(path.join(__dirname, 'test.txt'), 'r', (err, fd) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(fd);

        fs.close(fd);
    }
})


//open(), Opens a file. read(), Reads the content of a file
fs.open(path.join(__dirname, 'test.txt'), 'r', (err, fd) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(fd);

        fs.read(fd, (err, totalByte, buf) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log(buf.toString());
            }
        })


        fs.close(fd, (err) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log('File successfully close');
            }
        });
    }
})


// unlink(), Removes a link
fs.unlink('./test2.txt', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('File successfully deleted');
    }
})


// writeFile(), Writes data to a file
const data = '14 Champions League Winner Real Madrid'

fs.writeFile('./test3.txt', data, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("File has been written");
    }
})


// appendFile(), Appends data to a file
const data = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores corporis saepe, molestiae architecto vero laudantium non molestias, facilis, nam similique in repellat delectus veritatis fugit iste debitis omnis quod?'

fs.appendFile('./test3.txt', data, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("File has been written successfully");
    }
})


//mkdir(), Makes a new directory
fs.mkdir('./NewFolder', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Folder has been created successfully");
    }
})