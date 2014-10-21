$(document).ready(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  

  // canvas.style.top = 500;
  // canvas.style.left = (viewportWidth - 1200) / 2 +"px";

  // var rect = new Kinetic.Rect({
  //   x: 239,
  //   y: 75,
  //   width: 100,
  //   height: 50,
  //   fill: 'green',
  //   stroke: 'black',
  //   strokeWidth: 4,
  //   name: 'shape',
  //   offset: {
  //     x: 50,
  //     y: 25
  //   }
  // });
  
  context.beginPath();
  context.arc(300, 260, 70, 0, 2 * Math.PI, false)
  context.fillStyle = 'red';
  context.fill();
  context.strokeStyle = 'black';
  context.strokeWidth = '4'
  context.stroke();
  context.closePath();
  
})