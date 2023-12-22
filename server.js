const http = require('http');
const port = '1090';
const host = '127.0.0.1';

const server = http.createServer(function(req, res) {
  res.write("<h1>YashwanthChandolu</h1>");
  res.end();
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})
// const h=require('http');
// const port='4200';
// const server=h.createServer(function(req,res)
// {
//     res.write("<h1>balaji</h1>");
//     res.end();

// });
// server.listen(port)