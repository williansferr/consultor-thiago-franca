var one = $('#pricing ul').slice(0,1);
var second = $('#pricing ul').slice(1,2);
var third = $('#pricing ul').slice(2,3);
var slideIndex = 1;
var path_imgTh = "./img/thiago2-1.jpg";
var myIndex = 0;

var loadElement_about = document.getElementById('about');
var loadElement_sobre = document.getElementById('sobre');
var loadElement_sobre_small = document.getElementById('sobre-small');
var loadElement_pacotes = document.getElementById('pacotes');
var loadElement_smal_pacotes = document.getElementById('smal-pacotes');

loadElement_about.ontouchmove = metodo_event_element_about;
loadElement_about.onclick = metodo_event_element_about;

loadElement_sobre.onclick = metodo_event_element_about;
loadElement_sobre_small.onclick = metodo_event_element_about;
// loadElement_sobre.ontouchmove = metodo_element_sobre;
loadElement_pacotes.onclick = metodo_event_tabela_precos;
loadElement_smal_pacotes.onclick = metodo_event_tabela_precos_smal;

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});

function metodo_event_tabela_precos(e){
  if(e.type === "click")
    adicionaEfeitoTabelaPrecos();
}

function metodo_event_tabela_precos_smal(e){
  if(e.type === "click")
    adicionaEfeitoTabelaPrecosSmall();
}

function metodo_event_element_about(e) {

  $( "#imagem-about" ).attr( "src", "");
  if(e.type === "click"){
    setTimeout(function(){
      load_img_about_left();
    },1000);

  } 
  
}


// function metodo_element_sobre(e){
//   if(e.type === "click"){
//   }
// }


var dropdown_login = document.getElementById('dropdown-login');
dropdown_login.onmouseleave = metodo_eventOnDropdown;

function metodo_eventOnDropdown(e){
  if(e.type === "mouseleave"){
    var dropdown = document.getElementById('dropdown-login');
      dropdown.className = dropdown.className.replace(" w3-show", "");
  }
}


//Metodo carousel
var myIndex = 0;
var myIndex2 = 0;
carousel();
carousel2();

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

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel2, 2000); // Change image every 2 seconds
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
  img_thiago.classList.add('w3-animate-left');
  setTimeout(function(){
  img_thiago.classList.remove('w3-animate-left');
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

// function view_span_left(){
//   var span = $('span');
//   span.addClass('w3-animate-left');
//   setTimeout(function(){
//   span.removeClass('w3-animate-left');
//   },300);

// }


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

  one.hide();
  second.hide();
  third.hide();
  setTimeout(function(){ 
    one.show();
    one.addClass('w3-animate-top'); }, 1000);
  setTimeout(function(){ 
    second.show();
    second.addClass('w3-animate-left'); }, 2000);
  setTimeout(function(){ 
    third.show();
    third.addClass('w3-animate-bottom'); }, 3000);
  removeClassOnTabelaPrecos();
      
  }

  function adicionaEfeitoTabelaPrecosSmall(){

  one.hide();
  second.hide();
  third.hide();
  setTimeout(function(){ 
    one.show();
    one.addClass('w3-animate-lef'); }, 1000);
  setTimeout(function(){ 
    second.show();
    second.addClass('w3-animate-right'); }, 3000);
  setTimeout(function(){ 
    third.show();
    third.addClass('w3-animate-left'); }, 5000);
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
