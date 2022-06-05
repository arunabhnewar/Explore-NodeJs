// Path
const path = require('path');

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename('./app/app.js'));
console.log(path.dirname('./module/module.js'));
console.log(path.extname('./app/app.js'));
console.log(path.isAbsolute('./module/module.js'));
console.log(path.isAbsolute(__filename));
console.log(path.join(__dirname, "app", "app.js"));
console.log(path.resolve(__dirname, "app", "app.js"));
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