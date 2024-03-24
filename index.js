'use strict'

// Promiselarni birma-bir ishga tushirish. Launch Promises one by one

const request = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },time);
    });
};

// request(1000).then(()=>{console.log("Request 1000 ms")});
// request(2000).then(()=>{console.log("Request 2000 ms")});
// request(3000).then(()=>{console.log("Request 3000 ms")});

// Promiselarni hammasi bajarib bo'lingandan keyin ishga tushirish | Launch after all Promises launched

// Promise.all([request(1000),request(2000),request(3000)]).then(()=>{
//     console.log("All")
// });


// Qaysi biri promise ishga tushsa o'shabirinchi ishga tushiruvchi "race" metodi | Method of "race" which promise launch first this promisa launched in "race" method

Promise.race([request(1000),request(2000),(request(3000))]).then(()=>{
    console.log("All");
})