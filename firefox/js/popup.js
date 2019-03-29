var version = chrome.runtime.getManifest().version;
document.getElementById("versionnr").innerHTML = version;

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// Saves options to chrome.storage.local.
function save_options() {

  var keyCode = document.getElementById('theKey_1').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_1').innerText = keyCode;

  var keyCode = document.getElementById('theKey_2').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_2').innerText = keyCode;

  var keyCode = document.getElementById('theKey_3').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_3').innerText = keyCode;

  var keyCode = document.getElementById('theKey_4').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_4').innerText = keyCode;

  var keyCode = document.getElementById('theKey_5').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_5').innerText = keyCode;

  var keyCode = document.getElementById('theKey_6').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_6').innerText = keyCode;

  var keyCode = document.getElementById('theKey_7').value.toUpperCase().charCodeAt(0);
  document.getElementById('response_7').innerText = keyCode;

  var check1 = document.getElementById('noMapDesign').checked;
  var check2 = document.getElementById('clickCounter').checked;
  var check3 = document.getElementById('unchecker').checked;
  var check4 = document.getElementById('reloadVehicleButton').checked;
  var check5 = document.getElementById('hideAlliBuildings').checked;
  var check6 = document.getElementById('combiButton').checked;
  var check7 = document.getElementById('keyUse').checked;
  var check8 = document.getElementById('AllButton').checked;
  var check9 = document.getElementById('FMS5').checked;
  var check10 = document.getElementById('missionHelp').checked;
  var check11 = document.getElementById('progressBeauty').checked;
  var check12 = document.getElementById('missionInvolved').checked;
  var check13 = document.getElementById('klickLinks').checked;
  var check14 = document.getElementById('chatExtender').checked;
  var check15 = document.getElementById('antonSpecial').checked;
  //var check16 = document.getElementById('forumExtender').checked;
  var check17 = document.getElementById('hideComplete').checked;
  var check18 = document.getElementById('extAlli').checked;
  //var check100 = document.getElementById('easterKlicker').checked;
  var check1001 = document.getElementById('response_1').innerText;
  var check1002 = document.getElementById('response_2').innerText;
  var check1003 = document.getElementById('response_3').innerText;
  var check1004 = document.getElementById('response_4').innerText;
  var check1005 = document.getElementById('response_5').innerText;
  var check1006 = document.getElementById('response_6').innerText;
  var check1007 = document.getElementById('response_7').innerText;
  var check2001 = document.getElementById('theKey_1').value;
  var check2002 = document.getElementById('theKey_2').value;
  var check2003 = document.getElementById('theKey_3').value;
  var check2004 = document.getElementById('theKey_4').value;
  var check2005 = document.getElementById('theKey_5').value;
  var check2006 = document.getElementById('theKey_6').value;
  var check2007 = document.getElementById('theKey_7').value;
  var check2008 = document.getElementById('value_1').value;
  chrome.storage.local.set({
    'option1': check1,
    'option2': check2,
    'option3': check3,
    'option4': check4,
    'option5': check5,
    'option6': check6,
    'option7': check7,
    'option8': check8,
    'option9': check9,
    'option10': check10,
    'option11': check11,
    'option12': check12,
    'option13': check13,
    'option14': check14,
    'option15': check15,
    //'option16': check16,
    'option17': check17,
    'option18': check18,
    //'option100': check100,
    'option1001': check1001,
    'option1002': check1002,
    'option1003': check1003,
    'option1004': check1004,
    'option1005': check1005,
    'option1006': check1006,
    'option1007': check1007,
    'option2001': check2001,
    'option2002': check2002,
    'option2003': check2003,
    'option2004': check2004,
    'option2005': check2005,
    'option2006': check2006,
    'option2007': check2007,
    'option2008': check2008
  });
  on();
  setTimeout(function() {
    off();
  }, 2000);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    'option1': false,
    'option2': false,
    'option3': false,
    'option4': false,
    'option5': false,
    'option6': false,
    'option7': false,
    'option8': false,
    'option9': false,
    'option10': false,
    'option11': false,
    'option12': false,
    'option13': false,
    'option14': false,
    'option15': false,
    //'option16': false,
    'option17': false,
    'option18': false,
    //'option100': false,
    'option1001': '',
    'option1002': '',
    'option1003': '',
    'option1004': '',
    'option1005': '',
    'option1006': '',
    'option1007': '',
    'option2001': '',
    'option2002': '',
    'option2003': '',
    'option2004': '',
    'option2005': '',
    'option2006': '',
    'option2007': '',
    'option2008': ''
  }, function(items) {
    document.getElementById('noMapDesign').checked = items.option1;
    document.getElementById('clickCounter').checked = items.option2;
    document.getElementById('unchecker').checked = items.option3;
    document.getElementById('reloadVehicleButton').checked = items.option4;
    document.getElementById('hideAlliBuildings').checked = items.option5;
    document.getElementById('combiButton').checked = items.option6;
    document.getElementById('keyUse').checked = items.option7;
    document.getElementById('AllButton').checked = items.option8;
    document.getElementById('FMS5').checked = items.option9;
    document.getElementById('missionHelp').checked = items.option10;
    document.getElementById('progressBeauty').checked = items.option11;
    document.getElementById('missionInvolved').checked = items.option12;
    document.getElementById('klickLinks').checked = items.option13;
    document.getElementById('chatExtender').checked = items.option14;
    document.getElementById('antonSpecial').checked = items.option15;
    //document.getElementById('forumExtender').checked = items.option16;
    document.getElementById('hideComplete').checked = items.option17;
    document.getElementById('extAlli').checked = items.option18;
    //document.getElementById('easterKlicker').checked = items.option100;
    document.getElementById('response_1').innerText = items.option1001;
    document.getElementById('response_2').innerText = items.option1002;
    document.getElementById('response_3').innerText = items.option1003;
    document.getElementById('response_4').innerText = items.option1004;
    document.getElementById('response_5').innerText = items.option1005;
    document.getElementById('response_6').innerText = items.option1006;
    document.getElementById('response_7').innerText = items.option1007;
    document.getElementById('theKey_1').value = items.option2001;
    document.getElementById('theKey_2').value = items.option2002;
    document.getElementById('theKey_3').value = items.option2003;
    document.getElementById('theKey_4').value = items.option2004;
    document.getElementById('theKey_5').value = items.option2005;
    document.getElementById('theKey_6').value = items.option2006;
    document.getElementById('theKey_7').value = items.option2007;
    document.getElementById('value_1').value = items.option2008;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */
(function() {
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;
  var delay = determineDelay();

  generateArrays();

  function generateArrays() {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  // For easy reference
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
  };

  // Add or substract depenign on key pressed
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // Bind listeners
  for (i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };

  function addListeners(index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // Build an array with all tabs (<button>s) in it
    tabs[index].index = index;
  };

  // When a tab is clicked, activateTab is fired to activate it
  function clickEventListener(event) {
    var tab = event.target;
    activateTab(tab, false);
  };

  // Handle keydown on tabs
  function keydownEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

        // Up and down are in keydown
        // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };

  // Handle keyup on tabs
  function keyupEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    };
  };

  // When a tablistâ€™s aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  function determineOrientation(event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // Either focus the next, previous, first, or last tab
  // depening on key pressed
  function switchTabOnArrowPress(event) {
    var pressed = event.keyCode;

    for (x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    };

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        } else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        } else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };

  // Activates any given tab panel
  function activateTab(tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    deactivateTabs();

    // Remove tabindex attribute
    tab.removeAttribute('tabindex');

    // Set the tab as selected
    tab.setAttribute('aria-selected', 'true');

    // Get the value of aria-controls (which is an ID)
    var controls = tab.getAttribute('aria-controls');

    // Remove hidden attribute from tab panel to make it visible
    document.getElementById(controls).removeAttribute('hidden');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

  // Deactivate all tabs and tab panels
  function deactivateTabs() {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    };

    for (p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    };
  };

  // Make a guess
  function focusFirstTab() {
    tabs[0].focus();
  };

  // Make a guess
  function focusLastTab() {
    tabs[tabs.length - 1].focus();
  };

  // Detect if a tab is deletable
  function determineDeletable(event) {
    target = event.target;

    if (target.getAttribute('data-deletable') !== null) {
      // Delete target tab
      deleteTab(event, target);

      // Update arrays related to tabs widget
      generateArrays();

      // Activate the closest tab to the one that was just deleted
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      } else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };

  // Deletes a tab and its panel
  function deleteTab(event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };

  // Determine whether there should be a delay
  // when user navigates with the arrow keys
  function determineDelay() {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      } else {
        // If no value is specified, default to 300ms
        delay = 300;
      };
    };

    return delay;
  };

  //
  function focusEventHandler(event) {
    var target = event.target;

    setTimeout(checkTabFocus, delay, target);
  };

  // Only activate tab on focus if it still has focus after the delay
  function checkTabFocus(target) {
    focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    };
  };
}());
