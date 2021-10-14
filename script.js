function disp(){
  var op = document.getElementById("op");
  var build = "";

   $.ajaxSetup({async: false});
    var APIURL = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
    var data = $.getJSON(APIURL).responseJSON;
    //console.log(data);

    for (var i = 0; i <data.length ; i++){
      var crash_time = data[i].crash_time;
      var borough = data[i].borough;
      var latitude = data[i].latitude;
      var longitude = data[i].longitude;
      var car1 = data[i].vehicle_type_code1;
      var car2 = data[i].vehicle_type_code2;

      build += `<div class=cards>`;
      build += `Crash Time: ${crash_time} <br>`;
      build += `Borough: ${borough}<br>`;
      build += `Latitude: ${latitude}<br>`;
      build += `Longitude: ${longitude}<br>`;
      build += `Car 1: ${car1}<br>`;
      build += `Car 2: ${car2}<br>`;
      build += `</div>`;
    }
    
    op.innerHTML= build;
}
