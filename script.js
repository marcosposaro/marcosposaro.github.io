/* ==== COUNTER ==== */

var total = 15512; 
var amountPerSecond = total/86400; 
console.log("per second amount is "+amountPerSecond);
var runningTotal = 0// set a running total which will change

function updateAmount(){   console.log("updateAmount running");
  console.log(runningTotal);
 var integer = parseInt(runningTotal);
   runningTotal = runningTotal+amountPerSecond;
  document.getElementById('counter').innerHTML = integer;
}
setInterval(updateAmount, 1000);
