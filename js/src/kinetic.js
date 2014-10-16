$(document).ready(function() {

  var stage = new Kinetic.Stage({
    container: 'container',
    width: 1440,
    height: 720
  });

  var layer = new Kinetic.Layer();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/world.txt', false);
  xhr.send(null);
  var data = xhr.responseText.split('\n');
  var dataArray = JSON.parse("[" + data + "]");

  dataArray.forEach(function(point){
    layer.add(
      new Kinetic.Rect({
        x: (point[1]+180)*4,
        y: (180-(point[0]+90))*4,
        width: 2,
        height: 2,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 1
      })
    )
  })

// rect.on('mouseover', function(){
//   this.stroke('orange');
//   layer.draw();
// })

// rect.on('mouseout', function(){
//   this.stroke('black');
//   layer.draw();
// })

// stage.getContainer().addEventListener('click', function(){
//   var hello = new Kinetic.Rect({
//       x: 209.555223,
//       y: 108.635942,
//       width: 10,
//       height: 10,
//       stroke: 'black',
//       strokeWidth: 1
//   })
//   layer.add(hello);
//   stage.add(layer);
// })

  stage.add(layer);

});