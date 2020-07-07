import './components/useFetch';
import L from "leaflet";

(function($){
var m = {
  map: null,
  markers: [],//put markers in array so we can fit bounds
  markersById: {},//so we can find easily to popup
  assetUrl: location.protocol+'//'+location.hostname + '/wp-content/themes/pcc-farmlandtrust2017/dist/',
  data: useFetch('https://wa-farmland-trust.local/wp-json/wp/v2/protected_farms',
  buildMap(id) {
    var token = 'pk.eyJ1IjoicGF0dHlvayIsImEiOiJjajdqcGgyMWMwZ2xiMzJ0NmR4Z3dlbGJ5In0.H4J5-M_pciTtUsxekcSoww';
    L.mapbox.accessToken = token;
    L.MakiMarkers.accessToken = token;
    m.map = L.mapbox.map(id, 'mapbox.outdoors').setView([47.6478787,-121.9140074], 14);
    m.map.options.maxZoom = 12;
    m.map.options.tap = false;
    $.each(m.data, function(index, val){
      var lat = val.acf.lookup_location.lat;
      var lng = val.acf.lookup_location.lng;;
      var id = val.post_id;
      var padding = new L.Point(20, 40);
      var popup = L.popup({
        autoPanPadding: padding
      }).setContent(val.title.render);
      var coords = [lat, lng];
      m.markers.push(coords);
      //var icon = L.MakiMarkers.icon({icon: "farm", color: "#993620", size: "l"});
      var icon = L.icon({
        iconUrl: m.assetUrl + 'images/farm_map_marker.png',
        iconAnchor:   [4, 28],
        popupAnchor:  [8, -28]
        //shadowUrl: m.assetUrl + 'images/images/farm_map_marker_shadow_03.png',
        //iconSize: [54, 40]
      });
      var marker = L.marker(coords, {title:id}).addTo(m.map);
      m.map.on('click', function(e){
        m.highlightItem(); //remove highlight when clicking on the map
      });
      m.markersById[id] = marker;
      marker.bindPopup(popup);
      marker.on('click', function(e){
        m.highlightItem(id);
      });
    });
    m.map.fitBounds(m.markers, {padding: [20, 40]});

    //control zooming;
    m.map.scrollWheelZoom.disable();
    m.map.on('focus', function() { m.map.scrollWheelZoom.enable(); });
    m.map.on('blur', function() { m.map.scrollWheelZoom.disable(); });

  },
  highlightItem(id) {
    $('.farm-item').removeClass('selected');
    if (typeof id !== 'undefined') {
      $('.farm-item[data-id="'+ id + '"]').addClass('selected');
    }
  }
};


$( document ).ready( function (  ) {
  if ($('.wp-block-mapped-posts-archive').length) {
    m.buildMap('farm-map');
  }

  $('.farm-item a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('data-id');
    m.markersById[id].openPopup();
    m.highlightItem(id);
   $('html, body').animate({
        scrollTop: $("#farm-map").offset().top
    }, 500);
  });
});
})(jQuery);