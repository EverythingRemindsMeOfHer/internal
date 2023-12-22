let a = {
    name:"yashwatn",
    age:15
}
let b={
    name1:"vikas rushi",
    fun : ()=>{
        console.log("hii bal");
    }
}
console.log(b.name1);
a.__proto__=b
a.fun()
console.log(b.name1);