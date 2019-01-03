var asyncAdd=(a,b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' & typeof b==='number'){
                resolve(a+b);
            }
            else{
                reject('Argument must be numbers');
            }

        },1500);

    });
};

asyncAdd(5,4).then((res)=>{
    console.log('Result',res);
    return asyncAdd(res,33);
}).then((res)=>{
    console.log('should be 42=',res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});











// var somePromise=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//        // resolve('hey it workied');
//         reject('unable to full fill promises');
//    },2500);
// });
// somePromise.then((message)=>{
//     console.log('success: ',message);
// },(errormessage)=>{
//     console.log('Error: ',errormessage);
// });