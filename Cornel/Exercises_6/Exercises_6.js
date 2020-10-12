var array = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,25,7],[21,4,6,17],[3,5,26,3]];
console.log(array[1][1],array[4][2],array[5][3],array[2][3],array[2][1]);

var array2 = [array[1][1],array[4][2],array[5][3],array[2][3],array[2][1]];

console.log(array2);
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById( "p" ).innerHTML = array2 ;
    
});