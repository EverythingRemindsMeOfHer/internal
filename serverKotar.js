const http=require('http')
const fs=require('fs')
const url=require('url')
const stu=require('./student.json')
const { error } = require('console')
const port=5040
const server=http.createServer(function(req,res)
{
    if(req.url==="/")
    {
        res.write("<h1>Welcome to my API</h1>")
        res.end();
    }
    if(req.method==="POST")
    {
        var newStu=url.parse(req.url,true).query
        stu.push(newStu)
        writeDataBack(stu)
        res.write("<h1>Student record added</h1>")
        res.end()
    }

    function writeDataBack(data)
    {
        fs.writeFile("student.json",JSON.stringify(data),function(err)
        {
            console.log(err)
        })
    }

})

server.listen(port,function()
{
    console.log("Server is listening on port :"+port)
})