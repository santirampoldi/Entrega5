document.addEventListener("DOMContentLoaded", function(event) {

  $('.filtros-container .card .btn-link').on('click', function (e) {
    var btnAcordion = $(this).children('span.fa');
    if(btnAcordion.hasClass('fa-plus')){
      btnAcordion.removeClass('fa-plus');
      btnAcordion.addClass('fa-minus');
    }
    else{
      btnAcordion.addClass('fa-plus');
      btnAcordion.removeClass('fa-minus');
    }

  });


});


function getDatos() {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(function(json) {
    mostrarDatos(json);
  });
}

function mostrarDatos(json) {
  let html ='';
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
