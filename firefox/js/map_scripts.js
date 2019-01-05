function mapDesign() {
  var MapPath = chrome.runtime.getURL("css/MapDesign.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = MapPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
  //$('#lightbox_box').append('#lightbox_close');
}

function hideAlliaBuildings() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/hideAlliaBuildings.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function (result) {
  if (result.option1 == true){
    mapDesign();
  }
  if (result.option5 == true){
    hideAlliaBuildings();
  }
});
