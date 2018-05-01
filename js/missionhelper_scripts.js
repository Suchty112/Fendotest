function missionHelperNew() {
  var missionHelperMarker = '<div class="alert alert-warning" id="demo"></div>';
  $('#mission-form').prepend(missionHelperMarker);

  var missions, i, j, x = "";
  var missionsLink = chrome.runtime.getURL("js/missions.json");
  var missionId = $('#mission_help').attr('href').split("/").pop();

  $.getJSON(missionsLink, function(data) {
    mission = data[missionId];
    if (mission == null) {
      x = "<h4>Noch keine Missionsdaten verfügbar</h4>";
      document.getElementById("demo").innerHTML = x;
    } else {
      if (mission.patienten != 0) {
        x += "<span class='badge'>" + mission.patienten + " Patienten</span>";
      }
      if (mission.gefangene != 0) {
        x += "<span class='badge'>" + mission.gefangene + " Gefangene</span>";
      }
      if (mission.gefangene != 0 || mission.patienten != 0) {
        x += "<br>";
      }
      for (i in mission.hiorgs) {
        x += "<br><h4>" + mission.hiorgs[i].name + "</h4>";
        for (j in mission.hiorgs[i].cars) {
          x += mission.hiorgs[i].cars[j] + "<br>";
        }
      }
      if (mission.credits != "0") {
        x += "<br><span class='badge'>Credits: ~ " + mission.credits + "</span>";
      }
      document.getElementById("demo").innerHTML = x;
    }
  });
}

chrome.storage.local.get(null, function(result) {
  if (result.option10 == true) {
    missionHelperNew();
  }
});
