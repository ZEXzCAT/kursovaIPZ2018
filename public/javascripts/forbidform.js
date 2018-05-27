$(document).ready(function() {
  // Home
  $('#_98').on('click', goHome);

  // Services
  $('#_99').on('click', goServices);

  // Bids
  $('#_100').on('click', goBids);

  // log out
  $('#_102').on('click', goLogout);

  // log out
  $('#_119').on('click', goSendForm);

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

function goLogout(event) {
  event.preventDefault();
  document.cookie = "username=" + '';
  document.cookie = "status=" + '';
  window.location = "/";
}

function goSendForm(event) {
  event.preventDefault();
  var newBid = {
    'username': $('#_116_1').val(),
    'service': $('#_116').val(),
    'car': $('#_117').val(),
    'time': $('#_118').val(),
    'status': 'очікується'
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: newBid,
    url: '/bid/addBid',
    dataType: 'JSON'
  }).done();
  alert("Заявку відправлено");
  window.location = "/bids";
}
