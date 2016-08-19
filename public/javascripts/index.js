////function that is called on windows load
var json_data;
window.onload=function(){
  //api call for retrieveing the ip of the device
  //console.log("this function is getting called");
  //var url='http://api.ipify.org/?format=jsonp&callback=?';
  var url='http://freegeoip.net/json/?callback=?';
  xmlhttprequestfunction(url,check_location);
}

//checking if the navigator support the geolocation or not
function check_location(data){
  if(data===0){
    //console.log("Some error happened");
  }
  var json_string = data.slice(2, -2);
  json_data = JSON.parse(json_string);
  //console.log("json_data",json_data);
  var url1 = 'http://localhost:3000/getdash';
  $.post(url1,{ip:json_data.ip},function(data){
    console.log("data populated successfully");
    populatedashboard(data);
  });
  if (typeof(Storage) !== "undefined") {
     localStorage.ip=json_data.ip;
     localStorage.cityName=json_data.city;
     //console.log("localStorage",localStorage.ip,localStorage.city);
  } else {
     alert('No localstorage avalilable');
  }
  //checking if the device is geloocation capable or not
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(getLocation);
  }
  else
  {
    //console.log("browser does not support geolocation");
    alert("browser does not support geolocation");
  }
}

//retrieve the location of the device and pass it to plotting function
function getLocation(position){
    //console.log(position.coords.latitude,position.coords.longitude);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    localStorage.lat=lat;
    localStorage.lng=lng;
    var url = 'http://api.openweathermap.org/data/2.5/forecast/city?'+"lat=" + lat + "&" + "lon=" + lng +'&APPID=bfbfccb0b8cb44018d9282c12bb57409';
    xmlhttprequestfunction(url,rawtoactualdataconverter);
}


google.maps.event.addDomListener(window, 'load', intilize);
function intilize()
{
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete'));
  google.maps.event.addListener(autocomplete, 'place_changed', function(){
    var place = autocomplete.getPlace();
    var location = place.formatted_address;
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    localStorage.cityName=place.address_components[0].long_name;
    localStorage.lat=lat;
    localStorage.lng=lng;
    //console.log("googleapi",localStorage.cityName,localStorage.lat,localStorage.lng,localStorage.ip);
    var weatherRes = "?lat=" + lat + "&" + "lon=" + lng + "&appid=14486129fdee1bec5bae028e7c3e3d2b";
    myCall(weatherRes);
  });
}
