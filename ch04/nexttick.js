var x=0, y=0, z=0;
function displayValues(){
  console.log("X=%d; Y=%d; Z=%d", x, y, z);
}

var fs = require("fs");
fs.stat("nexttick.js", function(err, stats){
  if(stats) { console.log("nexttick.js Exists"); }
});

setImmediate(function(){
  console.log("Immediate Timer 1 Executed");
});
setImmediate(function(){
  console.log("Immediate Timer 2 Executed");
});
process.nextTick(function(){
  console.log("Next Tick 1 Executed");
});
displayValues();
process.nextTick(function(){
  console.log("Next Tick 2 Executed");
});