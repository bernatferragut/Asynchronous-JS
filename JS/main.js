// JS - Promises

// 1.Creating a Promise
// let prmoise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         var val = Math.random();
//         if( val > .5){
//             resolve(val);
//         }
//         else {
//             reject(val);
//         }
//     }, 5000);
// });

// // 2.Extracting the Promise Results with event and catch methods

// prmoise1.then(function(val) {
//     console.log('Resolved: ' + val);
// }).catch(function(err){
//     console.log('Error: '+ err);
// });

// 2. Chaining Promises

let promise1 = Promise.resolve('Bernat');
let promise2 = promise1.then(function(val){
    return 'I love you ' + val; // I love you Bernat
});

promise2.then(function(val) {
    return val;
}).then(function(val){
    return val + '!!!';
}).then(function(val) {
    return val.toUpperCase();
    // return Promise.resolve('done');
}).then(function(val){
    console.log(val);
});