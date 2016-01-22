$(document).ready(function(){
  var input = document.getElementById('effort-lookup-input');
  var options = { }
  autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.addListener('place_changed', getPetitions);
});

function getPetitions() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();


  // It turns out we do not need all of this code for building up a location object from the
  // Autocomplete response, but it is generally useful for this sort of app, so I'm leaving it in. 

  var locationComponent = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  var locationParams = { }


  // Get each component of the address from the place details
  // and build it up into location params
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (locationComponent[addressType]) {
      var val = place.address_components[i][locationComponent[addressType]];
      locationParams[addressType] = val;
    }
  }
  console.log(locationParams);


  // get the targets and petitions (if they exist) for the effort near the place specified.
  $.ajax({ 
    url: 'https://demo.controlshiftlabs.com/efforts/forecast-the-facts/near.json', 
    dataType: 'jsonp', 
    data: {
      'location[query]': place.formatted_address,
      'location[latitude]': place.geometry.location.lat(),
      'location[longitude]': place.geometry.location.lng()
    }
  })
  .done(function( data ) {
    console.log(data); 
    $('#lookup-results').append( JSON.stringify(data) );
  });

}