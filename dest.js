const arr=['apple','and','hero','shiva']
const [a,b]=arr
console.log("a is:"+a)
console.log("b is:"+b)

const [x,,y]=arr
console.log("a is:"+x)
console.log("b is:"+y)

const [p,q,...r]=arr
console.log(p)
console.log(q)
console.log(r)

const [b1,b2,b3=20,,b4=10]=arr
console.log(b1+" "+b2+" "+b3+" "+b4)


var ob ={
    "name1":"yash",
    "age":46
}
const {name1,age}=ob
console.log(name1+" "+age);
