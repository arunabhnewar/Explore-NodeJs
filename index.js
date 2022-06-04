// Global Object
console.log(global);


// Require
const { add, numb } = require('./main');
const { sum } = require('./app/app');

console.log(add(3, 4));
console.log(sum(5, 6));

const others2 = require('fs');


// es6 syntax
// import { sub } from './module/module.js';
// import all, { substitute } from './module/module.js';

// console.log(all);
// console.log(substitute);


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


// OS Module
const os = require('os');
console.log(os.);