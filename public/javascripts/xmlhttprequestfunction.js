function xmlhttprequestfunction(url,callback){
  //console.log("xmlhttpfunction",url,callback);
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.send(null);
  xhr.onreadystatechange=function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE)
    {
      if (xhr.status === OK)
      {
        //console.log(xhr.responseText);
        callback(xhr.responseText);
      }
    }
    else
    {
        //console.log('Error: ' + xhr.status); // An error occurred during the request.
        callback(0);
    }
   }
}
