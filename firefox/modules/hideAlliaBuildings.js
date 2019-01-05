function hideAlliaBuildings() {
  $.each($('.leaflet-marker-pane > img'), function() {
    var icon = $(this);
    if (icon.attr('src').indexOf('_other') >= 0) {
      icon.hide();
    }
  });
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.innerHTML = `
    $.each(building_markers_cache, function(i,e){
      if(e.user_id==null){
        e.icon = "";
        e.building_marker_image = "";
      }
    });
  `;
  document.getElementsByTagName('head')[0].appendChild(script);
}

hideAlliaBuildings();
