var AjaxRequest = function(url,callback, failCallback) {
  var xmlhttp;

  if (window.XMLHttpRequest)
    xmlhttp=new XMLHttpRequest();
  else
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onload = function() {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200){
        callback(xmlhttp.responseText, url);
      }
      else
        failCallback(url);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};
