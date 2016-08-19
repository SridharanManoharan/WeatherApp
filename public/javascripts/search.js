google.maps.event.addDomListener(window, 'load', intilize);
function intilize()
{
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete'));
  google.maps.event.addListener(autocomplete, 'place_changed', function(){
    var place = autocomplete.getPlace();
    var location = place.formatted_address;
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    var weatherRes = "?lat=" + lat + "&" + "lon=" + lng + "&appid=14486129fdee1bec5bae028e7c3e3d2b";
    myCall(weatherRes);
  });
}
