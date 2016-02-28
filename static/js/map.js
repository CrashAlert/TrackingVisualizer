import fetch from 'isomorphic-fetch'
import _ from 'lodash'

const baseUrl = "/map/"

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

  // handleData(waypoints)

  fetchDataPoints()
    .then(response => response.json())
    .then(handleData)
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
  const url = baseUrl + getParameterByName("fileName")
  return fetch(url)
}

function maxError(elem) {
  return _.max([elem.err_lat, elem.err_lng])
}

function getColumns(data, columnNames) {
  return _.map(data, (elem) => _.pick(elem, columnNames))
}

function handleData(rawData) {
  let data
  if (getParameterByName('filterData') != '') {
    let filterVal = parseInt(getParameterByName('filterData'))
    data = _.filter(rawData, elem => {
      return maxError(elem) < filterVal
    })
  } else {
    data = rawData
  }

  const waypoints = getColumns(data, ['lat', 'lng'])
  const bearings = getColumns(data, ['bearing'])

  addLines(waypoints)
  addMarkers(waypoints)
  addBearings(waypoints, bearings)
  fitWaypoints(waypoints)
  if (getParameterByName('showErrors') == '1') {
    addErrors(data)
  }
}

function fitWaypoints(waypoints) {
  const bounds = waypoints.reduce((bounds, waypoint) => {
      const pos = new google.maps.LatLng(waypoint.lat, waypoint.lng)
      return bounds.extend(pos)
    }, new google.maps.LatLngBounds())
  map.setCenter(bounds.getCenter())
  map.fitBounds(bounds)
}

function addErrors(data) {
  _.forEach(data, elem => {
    let location = _.pick(elem, ['lat', 'lng'])
    let error = maxError(elem)
    new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      map: map,
      center: location,
      radius: error
    })
  })
}

function addMarkers(waypoints) {
  const circle = {
    fillColor: "CC0000",
    strokeColor: "CC0000",
    path: google.maps.SymbolPath.CIRCLE,
    scale: 3,
    strokeWeight: 1
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

function getBearingPoint(point, bearing) {
  const dist = google.maps.geometry.spherical.computeDistanceBetween
  const length = 10

  const latConv = dist(point, new google.maps.LatLng(point.lat() + 0.1, point.lng())) * 10
  const lngConv = dist(point, new google.maps.LatLng(point.lat(), point.lng() + 0.1)) * 10
  const lat = length * Math.cos(bearing * Math.PI / 180) / latConv
  const lng = length * Math.sin(bearing * Math.PI / 180) / lngConv
  return new google.maps.LatLng(point.lat() + lat, point.lng() + lng)
}

function addBearings(waypoints, bearings) {
  const arrowSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    fillColor: "CC0000",
    strokeColor: "CC0000",
    strokeWeight: 2
  }

  for (let i in waypoints) {
    const point = new google.maps.LatLng(waypoints[i].lat, waypoints[i].lng)
    const bearing = bearings[i].bearing
    const bearingPoint = getBearingPoint(point, bearing)

    new google.maps.Polyline({
      path: [point, bearingPoint],
      icons: [{
        icon: arrowSymbol
      }],
      map: map
    })
  }
}
