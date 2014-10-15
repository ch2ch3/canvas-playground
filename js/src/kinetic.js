$(document).ready(function() {

  var stage = new Kinetic.Stage({
    container: 'container',
    width: 14400,
    height: 7200
  });

  var layer = new Kinetic.Layer();

  var scale = 1;
  var min_scale = 0.1;

  $('#graph').bind('mousewheel MozMousePixelScroll',    function(event, delta, deltaX, deltaY){
    event.preventDefault();
    onMouseWheel(event,delta,deltaX,deltaY);
  });

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/coords.txt', false);
  xhr.send(null);
  var data = xhr.responseText.split('\n');
  var dataArray = JSON.parse("[" + data + "]");

  dataArray.forEach(function(point){
    layer.add(
      new Kinetic.Rect({
        x: (point[1]+180)*5,
        y: (180-(point[0]+90))*5,
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

function onMouseWheel(e, delta,dx,dy) {
  
  // mozilla fix...
  if (e.originalEvent.detail){
    delta = e.originalEvent.detail;
  }
  else{
    delta = e.originalEvent.wheelDelta;
  }
  
  if (delta !== 0) {
    e.preventDefault();
  }

  var cur_scale;
  if (delta > 0) {
    cur_scale = scale + Math.abs(delta / 640);
  } else {
    cur_scale = scale - Math.abs(delta / 640);
  }

  console.log('>>>>',e,delta,e.detail);
  //check for minimum scale limit
  console.log(cur_scale, min_scale);
  if (cur_scale > min_scale) {
    
    var d=document.getElementById('graph');
    var cnvsPos=getPos(d);
    var Apos = stage.getAbsolutePosition();
    var mousePos = stage.getPosition();
    
    console.log(d,cnvsPos,Apos,mousePos);
    var smallCalc  = (e.originalEvent.pageY - Apos.x - cnvsPos.x)/scale;
    var smallCalcY = (e.originalEvent.pageY - Apos.y - cnvsPos.y)/scale;

    var endCalc = (e.originalEvent.pageY - cnvsPos.x) - cur_scale*smallCalc;
    var endCalcY = (e.originalEvent.pageY - cnvsPos.y) - cur_scale*smallCalcY;

    scale = cur_scale;

    stage.setPosition( endCalc, endCalcY);

     layer.setScale(cur_scale);
     layer.draw();
  }

}

function getPos(el){
  for (var lx=0, ly=0;
       el != null;
       lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}