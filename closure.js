function fun()
{
    var a=89;
    function b()
    {
        console.log(a)
    }
    // a=890;
    return b;
}
var f = fun()
f();