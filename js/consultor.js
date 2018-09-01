var one = $('#pricing ul').slice(0,1);
var second = $('#pricing ul').slice(1,2);
var third = $('#pricing ul').slice(2,3);
var slideIndex = 1;
var path_imgTh = "./img/thiago2-1.jpg";
var myIndex = 0;

var loadElement_about = document.getElementById('about');
var loadElement_sobre = document.getElementById('sobre');
var loadElement_price = document.getElementById('pricing');
var loadElement_price = document.getElementById('pricing');

loadElement_about.ontouchmove = metodo_event_element_about;
loadElement_about.onmouseenter = metodo_event_element_about;
loadElement_about.onmouseleave = metodo_event_element_about;

loadElement_sobre.onclick = metodo_element_sobre;
loadElement_sobre.ontouchmove = metodo_element_sobre;

loadElement_price.onmouseenter = metodo_event_tabela_precos;

// document.onkeyup = listener;

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

function metodo_event_tabela_precos(e){
  if(e.type === "mouseenter" ){
    adicionaEfeitoTabelaPrecos();
  }

}

function metodo_event_element_about(e) {

 if(e.type === "touchmove"){
    load_img_about_top();
 
  }else if(e.type === "mouseenter"){
    setTimeout(function(){
      load_img_about_left();
    },1000);
  
  }else if( e.type === "onmouseleave"){
  $( "#imagem-about" ).attr( "src", "");
  }
}

function metodo_element_sobre(e){
  if(e.type === "click"){
    load_img_about_top();
  }else if(e.type === "touchmove"){
    load_img_about_top();
  }
}


//chama metodo carousel para slide shows e realizar a indexação das imagens
showDivs(slideIndex);
carousel();

//Ouvintes de ações para tela inicial
$( "#imagem-about" ).attr( "src", "");

var dropdown_login = document.getElementById('dropdown-login');
dropdown_login.onmouseleave = metodo_eventOnDropdown;

function metodo_eventOnDropdown(e){
  if(e.type === "mouseleave"){
    var dropdown = document.getElementById('dropdown-login');
      dropdown.className = dropdown.className.replace(" w3-show", "");
  }
}



document.getElementById('dropdown-login').addEventListener("click", function(){
});
document.getElementById('about').addEventListener("mouseenter", function(){
  view_span_left();
});
document.getElementById('myNavbar').addEventListener("mouseenter", function(){
  view_span_top();
  $( "#imagem-about" ).attr( "src", path_imgTh);
});
document.getElementById('myNavbar').addEventListener("mouseleave", function(){
  $( "#imagem-about" ).attr( "src", path_imgTh );
});


//Metodo carousel
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

//indexação de imagens
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

//Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace("w3-black", "w3-red");
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace("w3-red", "w3-black");
    }
}



function load_img_about_left(){
  $( "#imagem-about" ).attr( "src", path_imgTh);
  var img_thiago = document.getElementById('imagem-about');
  img_thiago.classList.add('w3-animate-zoom');
  setTimeout(function(){
  img_thiago.classList.remove('w3-animate-zoom');
  },200);
}

function load_img_about_top(){
  $( "#imagem-about" ).attr( "src", path_imgTh );
  var img_thiago = document.getElementById('imagem-about');
  img_thiago.classList.add('w3-animate-top');
  setTimeout(function(){
  img_thiago.classList.remove('w3-animate-top');
  },200);

}

function view_span_top(){
  var span = $('span');
  span.addClass('w3-animate-top');
  setTimeout(function(){
  span.removeClass('w3-animate-top');
  },300);

}

function view_span_left(){
  var span = $('span');
  span.addClass('w3-animate-left');
  setTimeout(function(){
  span.removeClass('w3-animate-left');
  },300);

}


function show_dropdown() {
    var x = document.getElementById("dropdown-login");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function closeDropdown(){
   var x = document.getElementById("dropdown-login");
    x.className = x.className.replace(" w3-show", "");
}


function adicionaEfeitoTabelaPrecos(){
    setTimeout(function(){ one.addClass('w3-animate-top'); }, 1000);
    setTimeout(function(){ second.addClass('w3-animate-left'); }, 2000);
    setTimeout(function(){ third.addClass('w3-animate-bottom'); }, 3000);
    removeClassOnTabelaPrecos();
      
  }   

function removeClassOnTabelaPrecos(){
  setTimeout(function(){ 
    managerClassInHTML(one,'w3-animate-top',0);
    managerClassInHTML(second,'w3-animate-left',0);
    managerClassInHTML(third,'w3-animate-bottom',0);
  }, 3500);
}       

// Adicionar ou remover Class no elemento
function managerClassInHTML(elemento, nameOfClass, addOrRemove){
  if(verifyIsClass(elemento,nameOfClass)){
    if(addOrRemove == 1 && elemento != null){
      elemento.addClass(nameOfClass);   
    }
    if(addOrRemove == 0 && elemento != null){
      elemento.removeClass(nameOfClass);
    }
  }
}


//Verificar se existe a Class no Elemento
// retorna true se existe classe
function verifyIsClass(element, nameOfClass){
  if(element != null){
    if(element.attr('class').indexOf(nameOfClass) == -1){
      return false;
    }else{
      return true;
    }
  }

}