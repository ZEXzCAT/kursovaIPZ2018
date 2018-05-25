$(document).ready(function() {

  // Populate the user table on initial page load
  populateBidsTable();

  // Home
  $('#_183').on('click', goHome);

  // Services
  $('#_184').on('click', goServices);

  // Bids
  $('#_185').on('click', goBids);

  // log out
  $('#_186').on('click', goLogout);

  // bidform
  $('#_188').on('click', goBidform);

  // Accept
  $('#_226').on('click', Accept);

  // Cancel
  $('#_227').on('click', Cancel);

  // Report
  $('#_226_1').on('click', Report);

  // Check
  $('#_226_2').on('click', Check);

});

// Fill table with data
function populateBidsTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON('/bid/bidlist', function(data) {

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function() {
      if (this.status == "очікується") {
        tableContent += '<tr>';
        tableContent += '<td>' + this._id + '</td>';
        tableContent += '<td>' + this.username + '</td>';
        tableContent += '<td>' + this.service + '</td>';
        tableContent += '<td>' + this.car + '</td>';
        tableContent += '<td>' + this.time + '</td>';
        tableContent += '<td>' + this.status + '</td>';
        tableContent += '</tr>';
      }
    });

    // Inject the whole content string into our existing HTML table
    $('#_189 tbody').html(tableContent);
  });
};

function Accept(event) {
  event.preventDefault();
  var newData = {
    'status': 'прийнято'
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'PUT',
    data: newData,
    url: '/bid/updatebid/' + $('#_223').val(),
  }).done();
  window.location = "/bids";
}

function Cancel(event) {
  event.preventDefault();
  var newData = {
    'status': 'відхилено',
    'explain': $('#_225').val()
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'PUT',
    data: newData,
    url: '/bid/updatebid/' + $('#_223').val(),
  }).done();
  window.location = "/bids";
}

/*function Report(event) {
  event.preventDefault();
  var Content = "";

  // jQuery AJAX call for JSON
  $.getJSON('/bid/bidlist', function(data) {

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function() {
      Content += this._id + ' ';
      Content += this.username + ' ';
      Content += this.service + ' ';
      Content += this.car + ' ';
      Content += this.time + ' ';
      Content += this.status + '\n';
    });
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'POST',
      data: Content,
      url: '/bid/report', //+ $('#_223').val(),
      dataType: 'TXT'
    }).done();
    window.location = "/bids";
  });
});

function Check(event) {

});*/

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

function goBidform(event) {
  event.preventDefault();
  window.location = "/bids/bidform";
}
