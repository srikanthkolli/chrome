window.onload = function() {
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: "color-divs"
	    });
	}
	document.getElementById("forms").onclick = function() {
		chrome.extension.sendMessage({
	        type: "select-forms"
	    });
	}
}