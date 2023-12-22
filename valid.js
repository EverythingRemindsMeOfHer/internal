
var exp = /^[A-Z a-z 0-9]+$/;
var prep= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

var user = "yashChandolu123"
var pass = "a1@1234Yas"

console.log(exp.test(user));
console.log(prep.test(pass));