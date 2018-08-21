var slideIndex = 1;
var path_imgTh = "./img/thiago2-1.jpg";
var myIndex = 0;
var loadElement_sobre = $('#sobre');
var loadElement_about = $('#about');


//chama metodo carousel para slide shows e realizar a indexação das imagens
showDivs(slideIndex);
carousel();

//Ouvintes de ações para tela inicial
$( "#imagem-about" ).attr( "src", "");
document.getElementById('dropdown-login').addEventListener("mouseleave", function(){
  var dropdown = document.getElementById('dropdown-login');
    dropdown.className = dropdown.className.replace(" w3-show", "");
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
loadElement_sobre.on('click',function(){
  load_img_about_top();
})
loadElement_sobre.on('ontouchmove',function(){
  load_img_about_top();
})
loadElement_about.on('ontouchmove',function(){
  load_img_about_top();
})
loadElement_about.on('mouseenter',function(){
  setTimeout(function(){
    load_img_about_left();
  },1000);
})
loadElement_about.on('mouseleave',function(){
  $( "#imagem-about" ).attr( "src", "");
})


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
    setTimeout(carousel, 3000); // Change image every 2 seconds
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

// function myMap()
// {
//   myCenter=new google.maps.LatLng(41.878114, -87.629798);
//   var mapOptions= {
//     center:myCenter,
//     zoom:12, scrollwheel: false, draggable: false,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

//   var marker = new google.maps.Marker({
//     position: myCenter,
//   });
//   marker.setMap(map);
// }

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

