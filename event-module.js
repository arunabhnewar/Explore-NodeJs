const Event = require('events');
const events = new Event();
const events2 = new Event();


//  Event listener
events.on('myEvent', (para1, para2) => {
    console.log(para1 + ' ' + para2);
})

events2.on('goolgool', (para1) => {
    console.log(para1);
})



// Event trigger in asynchronous way
setTimeout(() => {
    events.emit('myEvent', 'real', 'madrid')
}, 2000)

setTimeout(() => {
    events2.emit('goolgool', {
        name: 'GoolGool',
        coming: '2019',
        age: '3 Yr'
    })
}, 2000)