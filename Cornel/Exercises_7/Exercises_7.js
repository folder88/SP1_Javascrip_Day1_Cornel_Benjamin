var players = ["Cornel","Benny","Kathi","Accilio","Samira","Nik"];
var name = "The most valuable player of the match is ";
var final = name + players[2];
console.log(final);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById( "p" ).innerHTML = final ;
    
});