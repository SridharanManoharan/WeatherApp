function populatedashboard(jsondata){
  var json_data = JSON.parse(jsondata);   //parsing the json data from json string
  //console.log("populatedashboardsize",json_data);

  //for all the json data create a button element and add in the list of navigation bar
  for(var i=0;i<json_data.length;i++){

    var newdivision = document.createElement('div');
    var btndivision = document.createElement('div');
    var spandivision = document.createElement('div');

    btndivision.setAttribute("class","col-sm-11");
    spandivision.setAttribute("class","col-sm-1");
    btndivision.style.padding = 0;
    spandivision.style.padding =0;
    spandivision.style.textAlign="center";
    spandivision.style.background="#909090";

    var btn = document.createElement('button');
    var t = document.createTextNode(json_data[i].cityName);
    btn.appendChild(t);

    //adding attributes to the button
    btn.addEventListener("click",update_graph);
    btn.setAttribute("data-lat",json_data[i].lat);
    btn.setAttribute("data-lng",json_data[i].lng);
    btndivision.appendChild(btn);

    //creating new span for deleting the dashboard
    var newspan = document.createElement('span');
    newspan.setAttribute("class","glyphicon glyphicon-remove-circle");
    newspan.addEventListener("click",deletedash);
    newspan.setAttribute("cityName",json_data[i].cityName);
    newspan.setAttribute("ip",json_data[i].ip);
    newspan.style.paddingTop="5px";
    spandivision.appendChild(newspan);

    newdivision.appendChild(btndivision);
    newdivision.appendChild(spandivision);

    var element = document.getElementById('side-menu');
    element.appendChild(newdivision);
  }
}

//function getting called when the dashboard got updated
function addtobdashboard(){
  //console.log("Method add to dashbard is called");
  var url = 'http://localhost:3000/addnewdash';
  $.post(url,{cityName:localStorage.cityName,lat:localStorage.lat,lng:localStorage.lng,ip:localStorage.ip},function(data,err){
    alert(data);
    location.reload();
  });
}

//functon is called for updating tha graph on button clicked
function update_graph(){
  //console.log("this function is getting called when the buttons are called",this);
  var lat = this.getAttribute("data-lat");
  var lng = this.getAttribute("data-lng");
  var url = 'http://api.openweathermap.org/data/2.5/forecast/city?'+"lat=" + lat + "&" + "lon=" + lng +'&APPID=bfbfccb0b8cb44018d9282c12bb57409';
  xmlhttprequestfunction(url,rawtoactualdataconverter);
}

function deletedash(){
  //console.log("deletedash",this);
  var url="http://localhost:3000/deletedash";
  $.post(url,{ip:this.getAttribute("ip"),cityName:this.getAttribute("cityName")}, function(data){
      alert(data);
      location.reload();
  });
}
