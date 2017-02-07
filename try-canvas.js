const draw = function (){
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  //ctx.fillStyle = 'rgb(200,0,0)';
  //ctx.fillRect(25,25,100,100);
  //ctx.clearRect(40,40,70,70);
  //ctx.strokeRect(50,50,50,50);

//triangle
  /*ctx.beginPath();
  ctx.moveTo(75,50);
  ctx.lineTo(100,75);
  ctx.lineTo(100,25);
  ctx.fill();*/

// smiley face
  /*ctx.beginPath();
  ctx.arc(75,75,50,0, Math.PI*2, true);
  ctx.moveTo(110,75);
  ctx.arc(75,75,35,0, Math.PI, false);
  ctx.moveTo(50,65);
  //ctx.arc(60,65,5,0, Math.PI*2, true); // for eyes
  ctx.lineTo(60,65);  // for close eyes
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0, Math.PI*2, true); //for eyes
  //ctx.lineTo(100,65); // for close eyes
  ctx.stroke();*/

  /*// two triangles
  //filled triangle
  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(105,25);
  ctx.lineTo(25,105);
  ctx.fill();
  //Stroked triangle
  ctx.beginPath();
  ctx.moveTo(125,125);
  ctx.lineTo(125,45);
  ctx.lineTo(45,125);
  ctx.closePath();
  ctx.stroke();*/

  //Quadratric curves example
  ctx.beginPath();
  ctx.moveTo(75,25);
  ctx.quadraticCurveTo(25,25,25,62.5);
  ctx.quadraticCurveTo(25,100,50,100);
  ctx.quadraticCurveTo(50,120,30,125);
  ctx.quadraticCurveTo(60,120,65,100);
  ctx.quadraticCurveTo(125,100,125,62.5);
  ctx.quadraticCurveTo(125,25,75,25);
  ctx.closePath();
  ctx.stroke();

  //to understand quadratic curve and position
  ctx.beginPath();
  ctx.moveTo(75,25);
  ctx.lineTo(25,62.5);
  ctx.closePath();
  ctx.stroke();



};
