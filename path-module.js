// Path
const path = require('path');

console.log(__dirname);  // return the full current directory path
console.log(__filename);  // return the full current file path

const filePath = __filename;

console.log(path.basename(__filename));
path.basename(filePath);  // take a file path or directory path and return the basename
console.log(path.basename('./app/app.js'));

console.log(path.dirname('./module/module.js'));
path.dirname(filePath);  // take a file path and return the directory path of the file

console.log(path.extname('./app/app.js'));
path.extname(filePath);   // take a file path and return the file extension name.

console.log(path.isAbsolute('./module/module.js'));
path.isAbsolute(filePath);   // take a path and return (true/false ) the path is absolute or not.
console.log(path.isAbsolute(__filename));

console.log(path.join(__dirname, "app", "app.js"));   // take name and return the full path after joining
console.log(path.resolve(__dirname, "app", "app.js"));  // take name and return the full path after joining

path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});

path.parse('/home/user/dir/file.txt');    // return a path object
console.log(path.parse("https://i.ytimg.com/vi/tuPHm37D0h0/maxresdefault.jpg"));
console.log(path.parse(__filename));

const pathObj = {
    root: 'D:\\',
    dir: 'D:\\W3Schools Tutorial\\coding club\\Node Js\\Global Object, Module , Path, OS Module',
    base: 'index.js',
    ext: '.js',
    name: 'index'
}

console.log(path.format(pathObj));