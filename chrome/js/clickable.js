function clickable_links(){
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/clickableLinks.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function(result) {
  if (result.option13 == true) {
    clickable_links();
  }
});
