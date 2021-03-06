function tokensToDollars() {
	var tokenCount = document.getElementsByClassName("tokencount")[0];
	var tokens = parseInt(tokenCount.innerHTML);
	var value = tokens * 0.05;//Chaturbate's Current Token to Dollar Ratio
	var displayValue = 0;
	var tokenCountLink = document.getElementsByClassName("tokencountlink")[0];
	
	var tokenDisplay = document.createElement("span");
	tokenDisplay.classList.add("tokencount");
	tokenDisplay.textContent = tokens + " Tkns";
	
	var style = document.createElement("style");
	style.type = 'text/css';
	style.textContent = '.moneycount {margin: 0 0 0 2%; color: #C00;} .moneycountinfo {position: absolute; top: -39%; right: -6%; font-size: 1.1em !important;} .tokencountlink {font-size: 12px !important;} .tokencountlink:hover {text-decoration: none !important;} .tokencount:hover {text-decoration: underline;}';
	document.getElementsByTagName('head')[0].appendChild(style);
	
	var span = document.createElement("span");
	span.classList.add("moneycount");
	if (value > 1) {
		displayValue = Math.floor(value);
	}
	else {
		displayValue = Math.ceil(value * 100) / 100;
	};
	span.textContent = span.textContent + "($" +  displayValue + ")";
	
	var link = document.createElement("a");
	link.textContent = "?";
	link.setAttribute('target', '_blank');
	link.href = "https://igetboth.github.io/Token-Dollar-Converter/";
	link.classList.add("moneycountinfo");
	
	document.getElementsByClassName("overflow")[0].style.overflow = "visible";
	tokenCountLink.style.position = "relative";
	tokenCountLink.textContent = "";
	tokenCountLink.appendChild(tokenDisplay);
	tokenCountLink.appendChild(span);
	span.appendChild(link);
};
tokensToDollars();
var display = document.getElementsByClassName("tokencount")[0];
var config = {childList:true, subtree:true};
var callback = function(mutationsList) {
	for (var mutation of mutationsList) {
		if (mutation.type == 'childList') {
			tokensToDollars();
			observer.disconnect();
			observer.observe(document.getElementsByClassName("tokencount")[0], config);
		};
	};
};
var observer = new MutationObserver(callback);
observer.observe(display, config);