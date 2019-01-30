var t = setInterval(moveEye(),100);
var pos = 0;
var eye = document.get.ElementById("moveEye");

function moveEye(){
  pos += 1;
  eye.style.left = pos+"px";
}
