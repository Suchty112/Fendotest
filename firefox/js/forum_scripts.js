/*function forum_extender() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("modules/forumextender.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.storage.local.get(null, function(result) {
  if (result.option16 == true) {
    forum_extender();
  }
});
*/
