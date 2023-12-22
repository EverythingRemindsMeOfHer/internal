var printDoc= new Promise(function (resolve,reject) {
    let done=false;
    if(done)
        resolve("printed document")
    else
        reject("printer error!!")
});


printDoc.then((value)=>
{
    console.log(value);
    console.log("document is printed");
}).catch((error)=>{
    console.log(error);
    console.log("document is not printed");
});