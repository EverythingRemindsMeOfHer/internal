function* gen1(i) {
    console.log("This is first statement");
    yield i = i + 10;
    
    console.log("This is second statement");
    yield i = i + 20;
}
const ob = gen1(20);

const b1 = ob.next();
console.log(b1); 
const b2=ob.next()
console.log(b2.value); 
const b3=ob.next()
console.log(b3); 
