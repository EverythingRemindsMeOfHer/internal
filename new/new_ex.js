const express = require('express')
const app = express()
const fs=require('fs')
const bp=require('body-parser')
const stu = require(`./students.json`)
const port =5060
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


app.get('/',(req,res)=>
{
    res.send("<h1>Welcome to My API</h1>")
    res.end();
});
app.get('/students',(req,res)=>
{
    
    fs.readFile('./students.json',(err,data)=>{
        res.send(data);
        res.end()
    });
});

app.post('/students',(req,res)=>{
    var newStu = req.body
    
    console.log(newStu)
    stu.push(newStu)
    writeDataBack(stu)
    // res.send("<h1>New Record Added Successfully</h1>")
    res.end()
})
function writeDataBack(data)
{
    fs.writeFile('./students.json',JSON.stringify(data),(err)=>{
        if(err)
        console.log(err)
        else
        console.log("success");
    })
}
app.listen(port,()=>{
    console.log("App is listening on the port :"+port);
})