function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 8, 
                center: {
                    lat: 63.398579,
                    lng: 13.085930, 
                }
            });
            var labels = "ABCDEFGHIJKLMNOPQRSTUVXZ";

            var locations = [
                {   lat: 63.295949286246476, lng: 13.129427880412242 },
                {   lat: 63.43188884453516, lng: 13.093321300196674 },
                {   lat: 63.44590952804618, lng: 12.738693263125974 },
                {   lat: 63.34624387660388, lng: 13.275689974200136 },
                {   lat: 63.31689302129877, lng: 13.347438997541532 },
                {   lat: 63.196807586019524,lng: 12.978796265878193 },
            ];

            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location, 
                    label: labels [i % labels.length],
                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
        }