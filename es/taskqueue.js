// const p = new Promise(function(resolve) {
//     resolve("");
// });
// (async () => {
//     await p;
//     console.log('await end');
// })();
// p.then(() => {
//     console.log('then 1');
// }).then(() => {
//     console.log('then 2');
// });
// let p = Promise.resolve(2);

// async function fn() {
//     return 1;
// }

// async function fn_1() {
//     return p;
// }

// let a = async function() {
//     console.log('1-1');
//     await fn();
//     console.log('1-2');
// };
// let b = async function() {
//     console.log('2-1');
//     await fn_1();
//     console.log('2-2');
// };

// a().then((data) => {
//     console.log("a: ", data);
// });

// b().then((data) => {
//     console.log("b: ", data);
// });

// p.then(function(d) {
//     console.log("d-1: ", d);
// }).then(function(d) {
//     console.log("d-2: ", d);
// }).then(function(d) {
//     console.log("d-3: ", d);
// });

// const p = Promise.resolve("1");

// (async function() {
//     await p;
//     console.log('after await');
// })();

// p.then(() => {
//     console.log('a');
// }).then(() => {
//     console.log('b');
// });

function async1(){
    console.log('async1 start');
    const p = async2();
    return Promise.resolve(p)
        .then(() => {
            console.log('async1 end')
        });
}
    
function async2(){
    console.log('async2');
    return Promise.resolve();
}
    
async1();

function async3(){
    console.log('async3 start');
    const p = async4();
    return new Promise(function(resolve) {
        resolve();
    }).then(() => {
        console.log('async4 end')
    });
}
    
function async4(){
    console.log('async4');
    return Promise.resolve();
}
    
async3();