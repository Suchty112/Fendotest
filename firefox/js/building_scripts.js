function ErweiterteWachenansicht() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/ErweiterteWachenansicht.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function (result) {
    ErweiterteWachenansicht();
});
