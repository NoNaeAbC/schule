
function lih(){
}

function lit(){
}
function lie(){
}
function onNavIn() {
  var nav = document.getElementById('nav');
    nav.style = "display:block;";
}
function onNavOut() {
  var nav = document.getElementById('nav');
  nav.style = "display:none;";
}

function w() {
  document.getElementById('b').innerHTML = "";
}

function ocl() {
  var x =document.getElementById('werDasLiestIstToll');
  w();
  x.style = "display:block;"
  x.scrollIntoView();
}
function oclt() {
  var x =document.getElementById('werDasLiestIstBesser');
  w();
  x.style = "display:block;"
  x.scrollIntoView();
}

function oclw() {
  var x = document.getElementById('hbrt');
  x.innerHTML = "";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  for(var i = 0;i<document.getElementsByClassName("next").length;i++){
    document.getElementsByClassName("next")[i].style = "background-color: #012;";
  }
  
  
  showSlides(slideIndex = n);
}
function t1(what){
  document.getElementById("fenster").innerHTML='<img id="big" src="'+what+'">';
  document.getElementById("fenster").style = "display:block;";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style="display:none;";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slides[slideIndex-1]!=undefined){
  slides[slideIndex-1].style= "display:block;";
  dots[slideIndex-1].className += " active";
  }
}

function windowrem(){
  document.getElementById("fenster").innerHTML='';
  document.getElementById("fenster").style = "display:none;";
}

