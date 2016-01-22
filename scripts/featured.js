$(document).ready(function(){
  $.ajax({ 
    url: 'http://demo.controlshiftlabs.com/featured.json', 
    dataType: 'jsonp', 
  })
  .done(function( data ) {
    console.log(data); 
    $.each(data, function( index, obj) {
      $('#petitions').append( "<p><a href='"+ obj.url +"'>" + obj.title + "</a></p>" );
    }); 
  });
});