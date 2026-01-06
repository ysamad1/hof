var hof = hof || {};

/* Hofstra fix for opener vulnerability */
$(document).ajaxStop(function() 
{
    var anchorLinks = document.querySelectorAll("a[target]:not([rel='noopener'])");
    Array.from(anchorLinks).forEach(function(anchor) 
    {
    	if(window.location.hostname === "mytest3.hofstra.edu")
    	{
			if(anchor.href.startsWith("https://mytest3.hofstra.edu/hofapps/") || anchor.href.startsWith("https://mytest3.hofstra.edu/web/home-community/"))
			{
				// do nothing  
			}
			else
			{
				anchor.rel = "noopener";
			}
		}
		else if(window.location.hostname === "portaltest.hofstra.edu")
    	{
			if(anchor.href.startsWith("https://portaltest.hofstra.edu.hofstra.edu/hofapps/") || anchor.href.startsWith("https://portaltest.hofstra.edu.hofstra.edu/web/home-community/"))
			{
				// do nothing  
			}
			else
			{
				anchor.rel = "noopener";
			}
		}
		else if(window.location.hostname === "my.hofstra.edu")
		{
			if(anchor.href.startsWith("https://my.hofstra.edu/hofapps/") || anchor.href.startsWith("https://my.hofstra.edu/web/home-community/"))
			{
				// do nothing  
			}
			else
			{
				anchor.rel = "noopener";
			}
		}
    });
});

hof.resizeHeight = function(a){
	if(window.self !== window.top) {
		if(a){
			$('#' + window.frameElement.id, window.parent.document).height($(a).height());
		}
		else{
			if($("html").height() == 0){
				$('#' + window.frameElement.id, window.parent.document).height($("body").height());
			}
			else{
				$('#' + window.frameElement.id, window.parent.document).height($("html").height());
			}
		}
		
		/*
		if(window.self.frameElement.id === "course-include"){
		    $('#' + window.frameElement.id, window.parent.document).height($("body").height());
			$('#' + window.frameElement.id, window.parent.document).height($(".container-fluid").height());
		}
		else{
			$('#' + window.frameElement.id, window.parent.document).height($("html").height());
		}
		*/
	};
};

/**
  * Set up contract for iframe and same domain.
  */
  hof.loadListenerMessage = [];
  hof.setSSBDomain = function(id, callback) {

	// Set up variables for additional arguments
	var args = [];
	var i;
	for(i = 2; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	
	// Find out what the ssb domain that we should be posting to
	var domain = 'https://hofstraonline.hofstra.edu';
	if (window.location.hostname === "portaltest.hofstra.edu") {
		domain = 'https://testhofstraonline.hofstra.edu:8001';
	} else if (window.location.hostname === "mytest3.hofstra.edu") {
		domain = 'https://testhofstraonline.hofstra.edu:8010';
	} 
	
	// Create an event listener for a postMessage for a domain-set being sent back from SSB
	window.addEventListener('message', function messageListener(event){
		// Confirm origin
		if(event.origin !== domain) return;
		
		// Make sure message is domain-set
		if(event.data === "domain-set") {
			// Remove this event listener
			window.removeEventListener('message', messageListener);

			// Perform callback with arguments
			if(callback) {
				callback(args);
			}
			
			// Nullify callback
			callback = undefined;
		}
	}, true);
	
	// Only add this load listener for this iframe once.
	if(hof.loadListenerMessage.indexOf(id) === -1) {
		hof.loadListenerMessage.push(id);
		$('#' + id).load(function() {
			$('#' + id)[0].contentWindow.postMessage("set-domain", domain);
		});
	}
};

hof.setDomain = function() {
	//If you are in an iframe
	if((window.self !== window.top)){
		var host = window.self.location.hostname;
		var prefix = "https://" + host;
		//Check if whoever embedded this iframe is the portal
		if(document.referrer.substring(0, prefix.length) == prefix) {
			window.document.domain = "hofstra.edu";
		}
	}
	else{
		window.document.domain = "hofstra.edu";
	}
};

hof.setDomain();

$(window).resize(function() {
	var t = setTimeout(function() {
		hof.resizeHeight();
	}, 1500);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function() {
	hof.resizeHeight();	

	var mobileParam = getParameterByName("isHofstraMobile", document.location.search);

	if(mobileParam != null){
		var styleCSS = document.createElement('link');
		styleCSS.setAttribute('href', 'https://my.hofstra.edu/hofstra/css/hofstra-styles.css');
		styleCSS.setAttribute('rel', 'stylesheet');
		
		document.getElementsByTagName('head')[0].appendChild(styleCSS);
	}
	
});

if (window.self !== window.top) {
        window.onload = function() {
                $("head").prepend($("link", window.top.document).clone());
        }        
}