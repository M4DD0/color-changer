var weight=[45,50,30,79,37];
var sum=0;
function setup() {
  createCanvas(400,400);
  for(var i=0;i<weight.length;i++){
      sum=sum+weight[i];
    }
    var avarage=sum/weight.length;
    console.log(avarage)
}

function draw() 
{
  background(30);

}




