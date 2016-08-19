//function to convert the raw data from weather app to actual data used by d3 graphs
function rawtoactualdataconverter(temp_json){
  var date_array = [];
  var data_array =[];
  var count_array= [];
  for(var i=0;i<temp_json.list.length;i++){
    //console.log(temp_json.list[i].dt_txt,temp_json.list[i].main.temp);
    var d = new Date(temp_json.list[i].dt_txt.split(' ')[0]);
    var new_date = d.getDate();
    var index = date_array.indexOf(new_date);
    console.log(index);
    if(index===-1){
      date_array.push(new_date);
      data_array.push(parseInt(temp_json.list[i].main.temp));
      count_array.push(1);
    }else{
      data_array[index]=data_array[index]+parseInt(temp_json.list[i].main.temp);
      count_array[index]= count_array[index]+1;
    }
  }

  var final_data = [];
  for(var k=0;k<date_array.length;k++){
    var obj={};
    obj["date"]=date_array[k];
    obj["temp"] = data_array[k]/count_array[k];
    final_data.push(obj);
  }
  plot_graph(final_data);
}
