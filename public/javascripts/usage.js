function myCall(res){
  var url = 'http://api.openweathermap.org/data/2.5/forecast' + res;
  xmlhttprequestfunction(url,rawtoactualdataconverter);
}
