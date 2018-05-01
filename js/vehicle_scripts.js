function fastFMS5() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/fastFMS5.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function (result) {
  if (result.option9 == true){
    fastFMS5();
  }
});
