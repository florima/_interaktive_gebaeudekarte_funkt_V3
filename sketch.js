$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 2018,
    values: [ 1992, 2018 ],
    slide: function( event, ui ) {
      $( "#Vvon" ).val(ui.values[ 0 ]);
      $( "#Vbis" ).val(ui.values[ 1 ]);
    }
  });
  $( "#Vvon" ).val( $( "#slider-range" ).slider( "values", 0 ));
  $( "#Vbis" ).val( $( "#slider-range" ).slider( "values", 1 ));
} );

var data;
var hit = false;

function preload(){
  data = loadJSON("data2.json");
}

function setup() {
  createCanvas(800, 600);
}



function draw() {
  translate(400, 350);
  scale(1.5);
  background(200);

  var Pvon = select('#Vvon').value();
  var Pbis = select('#Vbis').value();

//---------- graue Häuser ---------------

  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

      fill(255);
      noStroke();
      beginShape();
      for(var vIndex = 0; vIndex < obj.vertices.length; vIndex++ ) {
        var knotenpunkte = obj.vertices[vIndex];

        var x = knotenpunkte[0];
        var y = knotenpunkte[1];

        vertex(x, y);
      }
      endShape(CLOSE);
    }
    fill(255,100);
    ellipse(mouseX,mouseY,10,10);


  //---------- variable Häuser ---------------

  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

    if (int(obj.erbaut) >= int(Pvon) && obj.erbaut <= int(Pbis) ) {

//    if (obj.erbaut == Pvon) {
      // if (obj.area == "Sonnwiese") {
      // fill(0)
      // }
      noStroke();
      fill(0);

      beginShape();
      for(var vIndex = 0; vIndex < obj.vertices.length; vIndex++ ) {
        var knotenpunkte = obj.vertices[vIndex];

        var x = knotenpunkte[0];
        var y = knotenpunkte[1];

        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
