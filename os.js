const os = require('os');
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
var c = os.cpus();
console.log(c.length);
// console.log(c);