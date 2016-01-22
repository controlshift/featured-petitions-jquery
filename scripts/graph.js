$(document).ready(function(){
  $.ajax({ 
    url: 'http://demo.controlshiftlabs.com/api/graph/me.json', 
    dataType: 'jsonp', 
  })
  .done(function( data ) {
    console.log(data); 
    $('#me').append( JSON.stringify(data) );
  });
});