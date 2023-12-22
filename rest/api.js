const http = require('http')
const fs = require('fs')
const url1 = require('url')
var stu = require('./student.json')
// const {error}=require('console')
const port = 4040
const server = http.createServer((req, res) => {
    var { url, method } = req
    if (url === "/") {
        res.write("Welcome to my api")
        res.end()
    }
    if (url === '/student' && method === 'GET') {
        fs.readFile('./student.json', (err, data) => {
            res.write(data)
            res.end()
        });
    }
    if (method === 'POST') {
        var urlTxt = ""
        var ns = url1.parse(url, true).query;
        stu.push(ns);
        wD(stu);
        res.end();
    }
    if (method === 'PUT') {
        var uplStu = url1.parse(req.url,true).query
        for(s in stu)
        {
            if(stu[s]['name']==uplStu['name'])
            {
                stu[s]['age']=uplStu['age']
                wD(stu)
                res.write("<h1>Student record updated successfully</h1>")
            }

        }
        res.end()
    }
    if (method === 'DELETE') {
        var delStu = url1.parse(req.url,true).query
        for(s in stu)
        {
            if(stu[s]['name']==delStu['name'])
            {
                stu.splice(s,1)
                wD(stu)
                res.write("<h1>Student record deleted successfully</h1>")
            }

        }
        res.end()
    }
});
server.listen(port, () => {
    console.log("servecris listen");
});
function wD(data) {
    fs.writeFile("./student.json", JSON.stringify(data), (err) => {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
}
