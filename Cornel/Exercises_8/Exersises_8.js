
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a+b+c+d+e;

var f = '1';
var g = 15;
var h = 8;
var i ="1";

var product = f*g*h*i;

var final = sum/product;
console.log(sum);
console.log(product);
console.log(final);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById( "h1" ).innerHTML = final ;
    
});