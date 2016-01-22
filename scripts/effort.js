$(document).ready(function(){
  $.ajax({ 
    url: 'https://demo.controlshiftlabs.com/efforts/forecast-the-facts.json', 
    dataType: 'jsonp', 
  })
  .done(function( data ) {
    console.log(data); 
    $('#effort').append('<h3>' + data['title'] + '</h3> <p>' + data['description'] +'</p>')
    $.each(data['petitions'], function( index, obj) {
      $('#effort-petitions').append( "<p><a href='"+ obj.url +"'>" + obj.title + "</a></p>" );
    }); 
  });
});