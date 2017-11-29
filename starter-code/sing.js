console.log("sing.js loaded");

var numberOfBottles = prompt("How many bottles of beer on the wall?");
var bottles = "bottles";
while (numberOfBottles > 0){
 console.log(numberOfBottles + " " + bottles + " of beer on the wall,");
 console.log(numberOfBottles + " " +  bottles + " of beer");
 console.log("Take one down and pass it around,");
 numberOfBottles = numberOfBottles - 1;
 if (numberOfBottles === 1)
 {
   bottles = "bottle"
 }
 if (numberOfBottles === 0)
 {
   console.log("No more bottles of beer on the wall!");
 }
 else
 {
   console.log(numberOfBottles + " " + bottles + " of beer on the wall!");
 }
}
