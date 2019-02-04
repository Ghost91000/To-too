var angle = 0;
function rot() {
  var time = setInterval (function(){
    if (angle > 180){window.location.href ="registration.html";}
    else {
  var t = document.getElementById("trianglee");
  t.style.transform = "rotate("+angle+"deg)";
  angle+=1;
}
},5);}
