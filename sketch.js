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
var haueserinfo;
var hit = false;
//var para;

function preload(){
  data = loadJSON("data2.json");
}

function setup() {
  createCanvas(800, 600);
  noLoop();

  // haueserinfo = createInput("jklo");
  // haueserinfo.input(updateText);
}

function updateText() {
    document.getElementById("informationen").innerHTML = haueserinfo;
    console.log(haueserinfo);
//    redraw();
//    loop();

}

// function updateText() {
//   para = haueserinfo;
// //  para = createP();
// //  para = haueserinfo;
//   console.log(para);
// }

function mousePressed() {
  redraw();
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

  //---------- variable Häuser ---------------

  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

    if (int(obj.erbaut) >= int(Pvon) && obj.erbaut <= int(Pbis) ) {

        for(var indexBeschriftung = 0; indexBeschriftung < data.houses.length; indexBeschriftung++) {

          haueserinfo = (obj.Familie + ", " + obj.Adresse + " " + obj.Hausnummer);
          updateText();
//          document.getElementById("informationen").innerHTML = haueserinfo;

      }

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

//      console.log(obj.Familie + ", " + obj.Adresse + " " + obj.Hausnummer);


//      createP(haueserinfo).addClass('text');
//noLoop();
//      console.log
//      haueserinfo.input(updateText);
    }
  }

}
