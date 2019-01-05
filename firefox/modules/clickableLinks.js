  $('body *').replaceText(/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})/gi, '<a target="_blank" href="mailto:$1">$1</a>'); // valid email addresses
	$('body *').replaceText(/((https?|ftp):\/\/[^\s\/$.?#,\(\)].[^\s,]*)/gi, '<a target="_blank" href="$1">$1</a>'); // complete urls
	$('body *').replaceText(/(((www.)?)([A-Z0-9])([^\s,]*)\.(com|be|co\.uk|net|org|edu|gov|ca|de|fr|us|ru|ch|it|nl|se|no|es|ly|am)([^\s,\(\)]*))/gi, '<a target="_blank" href="http://$1">$1</a>'); // incomplete urls
	$('body *').replaceText(/((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/gi, '<a target="_blank" href="http://$1">$1</a>'); // ip addresses

	$(document).bind(hookFunction('allianceChat', function() {
	  $('body *').replaceText(/([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})/gi, '<a target="_blank" href="mailto:$1">$1</a>'); // valid email addresses
	  $('body *').replaceText(/((https?|ftp):\/\/[^\s\/$.?#,\(\)].[^\s,]*)/gi, '<a target="_blank" href="$1">$1</a>'); // complete urls
	  $('body *').replaceText(/(((www.)?)([A-Z0-9])([^\s,]*)\.(com|be|co\.uk|net|org|edu|gov|ca|de|fr|us|ru|ch|it|nl|se|no|es|ly|am)([^\s,\(\)]*))/gi, '<a target="_blank" href="http://$1">$1</a>'); // incomplete urls
	  $('body *').replaceText(/((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/gi, '<a target="_blank" href="http://$1">$1</a>'); // ip addresses
	}));
