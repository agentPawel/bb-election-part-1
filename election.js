$(document).ready(function() {

  $('<ul>').on

  $.ajax({
    method: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    dataType: 'JSON'
  }).done(function(data){
    for(var i=0; i < data.candidates.length; i++) {
     $('#list').append('<li> Name: ' + data.candidates[i].name + '</li>')
     $('#list').append('<li> Votes: ' + data.candidates[i].votes + '</li><br>')
    };
  });
});
