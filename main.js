window.onload = function() {
  /* Introducir año actual en la información del Copyright */
  var date = new Date();
  var currentYear = date.getFullYear();
  document.getElementById("currentYear").innerText = currentYear;
};
