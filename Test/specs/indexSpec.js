var urlValue = 'http://api.ipify.org/?format=jsonp&callback=';
var data = '{"city":{"id":1851632,"name":"Shuzenji","coord":{"lon":138.933334,"lat":34.966671},"country":"JP","population":0,"sys":{"population":0}},"cod":"200","message":0.009,"cnt":35,"list":[{"dt":1471705200,"main":{"temp":298.4,"temp_min":298.4,"temp_max":299.869,"pressure":1007.41,"sea_level":1016.43,"grnd_level":1007.41,"humidity":99,"temp_kf":-1.47},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":7.37,"deg":30.5038},"rain":{"3h":0.01},"sys":{"pod":"n"},"dt_txt":"2016-08-20 15:00:00"},{"dt":1471716000,"main":{"temp":298.78,"temp_min":298.78,"temp_max":299.882,"pressure":1007.53,"sea_level":1016.48,"grnd_level":1007.53,"humidity":100,"temp_kf":-1.1},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":6.63,"deg":40.0021},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-08-20 18:00:00"}]}';
var pd= '{  "ip": "203.91.192.5",  "country_code": "IN",  "country_name": "India",  "region_code": "KA",  "region_name": "Karnataka",  "city": "Electronics City",  "zip_code": "560100",  "time_zone": "Asia/Kolkata",  "latitude": 12.8458,  "longitude": 77.6727,  "metro_code": 0}';
describe("index ", function(){

  it("should ", function () {
    var callbackFn= jasmine.createSpy("success spy");
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send');

    xmlhttprequestfunction(urlValue,callbackFn);
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
    expect(callbackFn).toHaveBeenCalled();

  });

  it("check", function(){
    spyOn(Date.prototype,'toLocaleDateString');
    spyOn(Date.prototype,'getDate');
    spyOn(Date.prototype,'getMonth');

      rawtoactualdataconverter(data);
      expect(Date.prototype.toLocaleDateString).toHaveBeenCalled();
      expect(Date.prototype.getDate).toHaveBeenCalled();
      expect(Date.prototype.getMonth).toHaveBeenCalled();
      dataValue = JSON.parse(data);
      expect(dataValue.list[1].main.temp).toEqual(298.78);


  });

  it("pd", function(){

    populatedashboard(pd);
    expect($('#side-menu')).toBeDefined();
  });

});
