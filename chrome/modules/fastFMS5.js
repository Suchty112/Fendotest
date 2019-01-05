function fastFMS5() {
  var next_clicked = false;
  var nextVehicle = document.getElementsByClassName('btn btn-success');
  var count = 0;
  for (var i = 0; i < nextVehicle.length; i++) {
    if (nextVehicle.length > 0 && nextVehicle[i].innerText.match('Zum nächsten Fahrzeug im Status 5')) {
      nextVehicle[i].click();
      next_clicked = true;
    } else {
      count++;
    }
  }

  var backToMission = document.getElementById('btn_back_to_mission');
  if (backToMission !== null && !next_clicked) {
    backToMission.click();
  }

  var label = document.getElementsByClassName('alert alert-success');
  var allTransported = false;
  for (var i = 0; i < label.length; i++) {
    if (label[i].innerText.match('transportiert')) {
      allTransported = true;
    }
  }
  if (backToMission === null && count === nextVehicle.length && allTransported) {
    location.href="javascript:tellParent('lightboxClose();'); void 0";
  }
}

fastFMS5();
