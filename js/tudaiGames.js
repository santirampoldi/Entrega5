document.addEventListener("DOMContentLoaded", function(event) {


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
