var list = document.getElementsByTagName('li');

function currentLocation() {
  navigator.geolocation.getCurrentPosition(getUserLocation);
}
function getUserLocation(position){
  list[0].innerHTML = "<b>Longitude:</b>"+ position.coords.longitude;
  list[1].innerHTML = "<b>Latitude:</b>" + position.coords.latitude;
}
