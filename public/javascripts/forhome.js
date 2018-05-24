$(document).ready(function() {

  // Services
  $('#_8').on('click', goServices);

  // login
  $('#_9').on('click', goLogin);

  // Registration
  $('#_10').on('click', goRegistration);

});

function goServices(event) {
  event.preventDefault();
  window.location = "/services";
}

function goLogin(event) {
  event.preventDefault();
  window.location = "/login";
}

function goRegistration(event) {
  event.preventDefault();
  window.location = "/registration";
}
