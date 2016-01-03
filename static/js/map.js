import fetch from 'isomorphic-fetch'

const baseUrl = "/maps/"

var map;

var waypoints = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: -180, lng: -180},
  })

  handleWaypoints(waypoints)

  fetchDataPoints()
    .then(response => response.json())
    .then(handleWaypoints)
}

window.initMap = initMap


// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function fetchDataPoints() {
  const url = baseUrl + getParameterByName()
  return fetch(url)
}

function handleWaypoints(waypoints) {
  addLines(waypoints)
  addMarkers(waypoints)
  fitWaypoints(waypoints)
}

function fitWaypoints(waypoints) {
  const bounds = waypoints.reduce((bounds, waypoint) => {
      const pos = new google.maps.LatLng(waypoint.lat, waypoint.lng)
      return bounds.extend(pos)
    }, new google.maps.LatLngBounds())
  map.setCenter(bounds.getCenter())
  map.fitBounds(bounds)
}

function addMarkers(waypoints) {

  const circle = {
    fillColor: "CC0000",
    strokeColor: "CC0000",
    path: google.maps.SymbolPath.CIRCLE,
    scale: 6,
    strokeWeight: 2
  }

  for (let waypoint of waypoints) {
    new google.maps.Marker({
      position: waypoint,
      map: map,
      icon: circle
    })
  }
}

function addLines(waypoints) {
  const path = new google.maps.Polyline({
    path: waypoints,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  })

  path.setMap(map)
}
