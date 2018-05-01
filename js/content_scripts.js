function chatExtender() {
  var chatPath = chrome.runtime.getURL("css/chat.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = chatPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);

  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/chatoptions.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function hideAlliaBuildings() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/hideAlliaBuildings.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function noMap() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/noMapDesign.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);

  var noMapPath = chrome.runtime.getURL("css/noMapDesign.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = noMapPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function antonSpecial() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/hideBackground.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function progressBeauty() {
  var progressPath = chrome.runtime.getURL("css/progressBar.css");
  var styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.href = progressPath;
  document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function hideInvolved() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/hideInvolved.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

function hideComplete() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/hideComplete.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function(result) {
  if (result.option1 == true) {
    noMap();
  }
  if (result.option5 == true) {
    hideAlliaBuildings();
  }
  if (result.option11 == true) {
    progressBeauty();
  }
  if (result.option12 == true) {
    hideInvolved();
  }
  if (result.option14 == true) {
    chatExtender();
  }
  if (result.option15 == true) {
    antonSpecial();
  }
  if (result.option17 == true) {
    hideComplete();
  }
});
