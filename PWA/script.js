function iniciarMap(){
    var coord = {lat:45.4251284, lng: -73.6008962};
    var map = new google.maps.Map(document.getElementById('map_canvas'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}