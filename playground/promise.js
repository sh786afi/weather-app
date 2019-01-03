var somePromise=new Promise((resolve, reject) => {
    setTimeout(()=>{
       // resolve('hey it workied');
        reject('unable to full fill promises');
   },2500);
});
somePromise.then((message)=>{
    console.log('success: ',message);
},(errormessage)=>{
    console.log('Error: ',errormessage);
});