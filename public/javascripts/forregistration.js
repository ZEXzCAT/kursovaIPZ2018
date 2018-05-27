$(document).ready(function() {
  // Home
  $('#_234').on('click', goHome);

  // Services
  $('#_235').on('click', goServices);

  // Registrate
  $('#_239').on('click', goRegistrate);

});

function goHome(event) {
  event.preventDefault();
  window.location = "/";
}

function goServices(event) {
  event.preventDefault();
  window.location = "/services";
}

function goRegistrate(event) {
  event.preventDefault();
  var newUser = {
    'username': $('#_240_1').val(),
    'email': $('#_241').val(),
    'password': $('#_243').val(),
    'number': $('#_242').val(),
    'fullname': $('#_240').val(),
    'status': 'user'
  }
    console.log(newUser);
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: newUser,
    url: '/users/adduser',
    dataType: 'JSON'
  }).done();
  alert("Реєстрація успішна");
  document.cookie = "username=" + $('#_240_1').val();
  document.cookie = "status=" + "user";
  window.location = "/";
}
