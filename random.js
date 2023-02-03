const pi = 3.14159265358979323846;
var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");
var lastClicked = 0;
var x2 = 0,
  rx = 0,
  ry = 0,
  rr = 0,
  y2 = 0;
area = 0;

canvas.onclick = function (e) {
  //for time and distance

  var timeNow = new Date().getTime();
  var dist = Math.sqrt(Math.pow(rx - x2, 2) + Math.pow(ry - y2, 2)) * 0.026458;
  x2 = rx;
  y2 = ry;
  rr = rr * 0.026458;
  area = pi * rr * rr;
  console.log(
    "time = " +
      (timeNow - lastClicked) / 1000 +
      " distance = " +
      Math.round(dist * 100) / 100 +
      " area of circle = " +
      Math.round(area * 100) / 100
  );
  lastClicked = timeNow;
  // making circles

  rr = Math.ceil(30 * Math.random() + 20);
  rx = Math.ceil(590 * Math.random());
  ry = Math.ceil(590 * Math.random());
  context.fillStyle = randomColor();

  context.beginPath();
  context.arc(rx, ry, rr, 0, 2 * Math.PI);
  context.fill();
};

function randomColor() {
  var color = [];
  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(",") + ")";
}
