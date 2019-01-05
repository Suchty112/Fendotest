function noMap() {
  //Fendos NavBar einfügen
  if (window.location.pathname === '/') {
    var fendoNavBar = document.createElement('div');
    fendoNavBar.setAttribute("style", "position:absolute;top:14px;left:60px;");
    fendoNavBar.setAttribute('id', 'fendosLssScripteNavBar');
    $('#col_navbar_holder > nav').append(fendoNavBar);
  }

  // No Map Design
  if (!(window.location.search != '')) {
    $('#btn-alliance-new-mission').parent().detach().insertAfter('#missions .btn-group').addClass('pull-right');
    $('#missions_outer').addClass('col-md-12');
    $('#buildings_outer').addClass('col-md-3');
    $('#chat_outer').addClass('col-md-5');
    $('#radio_outer').addClass('col-md-4');
    $('#eventInfo').prependTo('#content');

    //Map Button einfügen
    $('#fendosLssScripteNavBar').append('<a href="/?mapview=true" class="btn btn-xs btn-default lightbox-open" id="map_button">Karte öffnen</a>');

    //Verschiebt den Verbandseinsätze Zähler in die Navbar
    var movedAllianceCounter = $('#btn-group-mission-select').detach();
    $('#fendosLssScripteNavBar').append(movedAllianceCounter);

    //Minimap
    if (window.location.pathname === '/' && !(window.location.search != '')) {
      $('#fendosLssScripteNavBar').append('<button class="btn btn-xs btn-default" id="mapToggle_button" style="margin-left:10px">Minimap</button>');
      document.getElementById("map_outer").style.display = "none";
      document.getElementById("missions_outer").style.width = "100%";

      function toggleMap() {
        var x = document.getElementById("map_outer");
        var y = document.getElementById("missions_outer");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.width = "75%";
        } else {
          x.style.display = "none";
          y.style.width = "100%";
        }
      }
      $(document).ready(function() {
        $("#mapToggle_button").click(toggleMap);
      });
    }
  }
}

noMap();
