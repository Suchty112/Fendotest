function clickCount() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/clickCounter.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);

  var mainPath = chrome.runtime.getURL("css/main.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = mainPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function stornoButton() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/stornoButton.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function reloadButton() {
  //Verschiebt den Button am unteren Rand der Fahrzeugliste nach oben
  var botButton = $('.missing_vehicles_load:eq(1)').detach();
  $('#aao-tabs').after(botButton);
}

//Kombi Button Share/Alarmieren/Weiter
function kombiButton() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/combiButton.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

//Tastaturalarmierung
function keyUseFu() {

  var key1 = '';
  var key2 = '';
  var key3 = '';
  var key4 = '';
  var key5 = '';
  var key6 = '';
  var key7 = '';

  chrome.storage.local.get(null, function(result) {
    var key1 = result.option1001;
    var key2 = result.option1002;
    var key3 = result.option1003;
    var key4 = result.option1004;
    var key5 = result.option1005;
    var key6 = result.option1006;
    var key7 = result.option1007;

    $(document).keydown(function(e) {
      if (!($("input").is(":focus"))) {
        e.stopPropagation();
        switch (true) {
          case (e.keyCode == key1):
            $("input[value='Alarmieren']")[0].click();
            break;
          case (e.keyCode == key2):
            $(".alert_next")[0].click();
            break;
          case (e.keyCode == key3):
            $(".alert_next_alliance")[0].click();
            break;
          case (e.keyCode == key4):
            $("#mission_next_mission_btn")[0].click();
            break;
          case (e.keyCode == key5):
            $("#mission_previous_mission_btn")[0].click();
            break;
          case (e.keyCode == key6):
            $("#mission_alliance_share_btn")[0].click();
            break;
          case (e.keyCode == key7):
            $(".missing_vehicles_load")[0].click();
            break;
        }
        return e.returnValue;
      }
    });
  });
}

//Select ALL Button
function selectAllButton() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/selectAllButton.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function progressBeauty() {
  var progressPath = chrome.runtime.getURL("css/progressBar.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.id = "progressBarBeauty";
  styleElement.href = progressPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

//Osterei klicker
/*function easterKlick() {
  $('a').each(function() {
    if ($(this).is('[href*="easteregg"')) {
      document.querySelector('#missionH1 a').click();
    }
  });
}*/

chrome.storage.local.get(null, function(result) {
  if (result.option2 == true) {
    clickCount();
  }
  if (result.option3 == true) {
    stornoButton();
  }
  if (result.option4 == true) {
    reloadButton();
  }
  if (result.option6 == true) {
    kombiButton();
  }
  if (result.option7 == true) {
    keyUseFu();
  }
  if (result.option8 == true) {
    selectAllButton();
  }
  if (result.option11 == true) {
    progressBeauty();
  }
  /*if (result.option100 == true) {
    easterKlick();
  }*/
});
