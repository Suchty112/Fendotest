var s = document.createElement('script');
s.src = chrome.extension.getURL("modules/fendos_api.js");
s.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL("modules/jquery.ba-replacetext.js");
s.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
