$(document).ready(function() {
  // Home
  $('#_21').on('click', goHome);

  // Services
  $('#_22').on('click', goServices);

  // Bids
  $('#_22_1').on('click', goBids);

  // login
  $('#_23').on('click', goLogin);

  // Registration
  $('#_24').on('click', goRegistration);

  // log out
  $('#_24_1').on('click', goLogout);

});

function goHome(event) {
  event.preventDefault();
  window.location = "/";
}

function goServices(event) {
  event.preventDefault();
  window.location = "/services";
}

function goBids(event) {
  event.preventDefault();
  window.location = "/bids";
}

function goLogin(event) {
  event.preventDefault();
  window.location = "/login";
}

function goLogout(event) {
  event.preventDefault();
  document.cookie = "username=" + '';
  document.cookie = "status=" + '';
  window.location = "/";
}

function goRegistration(event) {
  event.preventDefault();
  window.location = "/registration";
}
