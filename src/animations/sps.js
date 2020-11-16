TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 2 });

var svg  = document.querySelector("svg");
var wave = document.querySelector("#wave");

var width = 800;
var sinus = new CustomEase("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

var amplitude = 225;
var frequency = 30;
var segments  = 1000;
var interval  = width / segments;

for (var i = 0; i <= segments; i++) {
  
  var norm  = 1 - i / segments;
  var point = wave.points.appendItem(svg.createSVGPoint());
  
  point.x = i * interval;
  point.y = amplitude / 2 * sinus.getRatio(norm);  
  
  var progress = norm * frequency * (0.5 + sinus.getRatio(norm * 0.5));
  
  TweenMax.to(point, 0.3, { 
    y: -point.y, 
    repeat: -1, 
    yoyo: true, 
    reversed: true 
  }).progress(-progress);  
}