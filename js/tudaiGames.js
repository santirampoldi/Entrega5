document.addEventListener("DOMContentLoaded", function (event) {

  $('.filtros-container .card .btn-link').on('click', function (e) {
    var btnAcordion = $(this).children('span.fa');
    if (btnAcordion.hasClass('fa-plus')) {
      btnAcordion.removeClass('fa-plus');
      btnAcordion.addClass('fa-minus');
    }
    else {
      btnAcordion.addClass('fa-plus');
      btnAcordion.removeClass('fa-minus');
    }
  });

  createSticky($('header'), 8);
  createSticky($('.filtros-container'), 80);
  createSticky($('.filtros-utilizados'),80);
  updatePriceLabels();
});

function createSticky(sticky, distancia) {
	
	if (typeof sticky !== "undefined") {
		var	pos = sticky.offset().top,
    win = $(window);			
		win.on("scroll", function() {
    		win.scrollTop() >= (pos - distancia) ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
		});			
  }
};

function updatePriceLabels() { 
  //avoids slider overlap 
  var sliders = document.querySelectorAll(".price-slider input"); 
  var val1 = parseInt(sliders[0].value); 
  var val2 = parseInt(sliders[1].value); 
  
  if (val1 >= val2) { sliders[0].value = val2 - 3; return; } 
  if (val2 <= val1) { sliders[1].value = val1 + 3; return; } 
  
  //adds color when a range is selected 
  if (val1 > 0 || val2 < 99) { 
      sliders[0].style.background = sliders[1].style.background = "-webkit-gradient(linear, 0 0,100% 0, color-stop(0, white), color-stop(" + (val1 / 100) + ", white),color-stop(" + (val1 / 100) + ", #f0f0f0), color-stop(" + (val2 / 100) + ", #f0f0f0), color-stop(" + (val2 / 100) + ", white))"; 
  } 
  else { 
      sliders[0].style.background = sliders[1].style.background = ''; 
  } 
} 


function getDatos() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(function (json) {
      mostrarDatos(json);
    });
}

function mostrarDatos(json) {
  let html = '';
  for (var i = 0; i < 10; i++) {
    console.log(json[i]);
    html += "<tr id=" + json[i].id + ">"
    html += "<td>" + json[i].email
    html += "</td><td>" + json[i].name
    html += "</td><td>" + json[i].body
    html += "</td></tr>";
  }
  let jqHTML = $(html);
  $(".comments").html('').append(jqHTML);
}
