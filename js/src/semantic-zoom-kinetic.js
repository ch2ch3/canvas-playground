var stage, layer, context;

$(document).ready(function(){
  
  stage = new Kinetic.Stage({
    container: 'container',
    width: 1200,
    height: 500,
    draggable: true
  });

  layer = new Kinetic.Layer();

  var rect = new Kinetic.Rect({
    x: 239,
    y: 75,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    name: 'shape',
    offset: {
      x: 50,
      y: 25
    }
  });
  
  var circle = new Kinetic.Circle({
    x: 300,
    y: 260,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    name: 'shape',
    offset: {
      x: 35,
      y: 35
    }
  });
    
  var hexagon = new Kinetic.RegularPolygon({
    x: stage.getWidth() / 2,
    y: 200,
    sides: 6,
    radius: 70,
    fill: 'aqua',
    stroke: 'black',
    strokeWidth: 4,
    name: 'shape',
    offset: {
      x: 35,
      y: 35
    }
  });

  layer.add(hexagon);
  layer.add(circle);
  layer.add(rect);
  stage.add(layer);

  var tween = new Kinetic.Tween({
    node: layer,
    duration: 0.5,
    scaleX: 1.5,
    scaleY: 1.5
  })

  var shapes = stage.find('.shape');
  var tweens = [];

  $('#scaleUp').on('click', function(){
    tween.play()

    shapes.forEach(function(shape) {          
      tweens.push(new Kinetic.Tween({
        node: shape, 
        duration: 0.5,
        scaleX: 0.666666667,
        scaleY: 0.666666667,
      }).play());
    });
  })

  $('#scaleDown').on('click', function(){
    tween.reverse();
    tweens.forEach(function(tween){
      tween.reverse();
    })
  })
  
});