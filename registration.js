var angle = 180;
function rot() {
  var time = setInterval (function(){
    if (angle > 360){window.location.href ="SignInPage.html";}
    else {
  var t = document.getElementById("trianglee");
  t.style.transform = "rotate("+angle+"deg)";
  angle+=1;
}
},5);}
