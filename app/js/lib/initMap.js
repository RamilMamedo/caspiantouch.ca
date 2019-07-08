
// Initialize and add the map
function initMap() {
    var kitchener = {lat: 43.451600, lng: -80.492500};
    var mississauga = {lat: 43.589000, lng: -79.644100};
    var burlington = {lat: 43.325500, lng: -79.799000};
    var niagara = {lat: 43.058200, lng: -79.290200};
    var brampton = {lat: 43.731500, lng: -79.762400};
    var icon_marker = {
        url: "./img/location-01.png",
        origin: new google.maps.Point(0, 0),
        size: new google.maps.Size(44, 44),
        scaledSize: new google.maps.Size(44, 44),
    }
    // The location of toronto
    var toronto = {lat: 43.653200, lng: -79.383200};
    // The map, centered at toronto
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 8,
            center: toronto,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
            ]

        });
    // The marker, positioned at toronto
    var marker = new google.maps.Marker({
        position: kitchener,
        map: map,
        icon:  icon_marker
    });
    var marker2 = new google.maps.Marker({
        position: mississauga,
        map: map,
        icon:  icon_marker
    });
    var marker3 = new google.maps.Marker({
        position: burlington,
        map: map,
        icon:  icon_marker
    });
      var marker4 = new google.maps.Marker({
      position: niagara,
      map: map,
      icon:  icon_marker
  });
      var marker5 = new google.maps.Marker({
      position: brampton,
      map: map,
      icon:  icon_marker
  });
}
