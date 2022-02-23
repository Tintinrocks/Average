var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0 
function weightavg () {
  for(i=0;i<weight.length;i++){
  sum = sum + weight[i];
  }
  var avg = sum/weight.length;
  console.log(avg);
}
function setup() {
  createCanvas(400,400);
weightavg();
}

function draw() 
{
  background(30);
}

 

