chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
 	switch(message.type) {
		case "select-forms":
			var form = document.querySelectorAll("form");
			if(form.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<form.length; i++) {
					form[i].style.backgroundColor = message.color;
				}
			}
		break;
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0){
				alert("There are no any divs in the page.");
			}else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	}
});