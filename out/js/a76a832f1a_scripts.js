if (typeof hof === "undefined")
{
   var hof = {};
}
if (typeof hof.hofapps === "undefined")
{
   hof.hofapps = {};
}

hof.inServices = false;
if (location.href.indexOf("services.jsp") > -1)
{
	hof.inServices = true;
}

hof.hofapps.bannerlinks = (function() 
{	
	/*
	 * Make a request out to the server to find all quick links for this user on this page. Update classes to show that a user does or
	 * does not have a link favorited.
	 */
	var findFavorites = function() {
		var list = $(".fa-ul li");
		var i;

		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			'type': 'GET',
			'url': '/quick-links-portlet/get-links'
		}).success(function(response){
			var links = response;
			var i;
			for(i = 0; i < links.length; i++) {
				$("a[href='" + links[i].url + "']").prev().removeClass('fa-star-o').addClass('fa-star').addClass('fa-star-gold');
			}
		}).error(function(a,b,c) {
			$('body').prepend("<div id='quick-link-danger' class='alert alert-danger text-center' role='alert' style='z-index: 999999; width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><i class='fa fa-exclamation-triangle fa-lg pull-left alert-icon'></i>An error has occurred while retrieving your quick links. Please refresh the page and try again.</div>")
			$('#quick-link-danger').affix();
		});
	};

	
	// We are using the text for the url as the id so clean it
	var fixName = function(name)
	{
		var fixedName = name.replace(/ /g, '');
		fixedName = fixedName.replace(/'/g, '');
		return fixedName.toLowerCase();
	};

	// Global js link fixer.
	var fixJSLink = function(jsLink)
	{
		return jsLink.replace(/"/g, '\\"');
	};
	
	// Main method to parse results
	var parseLinks = function(data, isPersonal)
	{
		var topLevelLinks = [];
		var finalHTML = "";
		for (var i=0; i<data.length; i++)
		{
			if (data[i].children.length == 0)
			{
				topLevelLinks.push(data[i]);
			}
			else
			{
				finalHTML += "<div id='" + fixName(data[i].text) + "' class='row'><div class='col-sm-12'><h3>" + data[i].text + "</h3></div></div>";
				finalHTML +="<div class='row'><div class='col-sm-12'><ul id='" + fixName(data[i].text) + "-ul' class='list fa-ul'>";
				$("#side-nav").append("<li><a class='list-group-item' href='#" + fixName(data[i].text) + "'>" + data[i].text + "</a></li>");
				// Set up sections with children
				for (var x=0; x<data[i].children.length; x++)
				{
					finalHTML += "<li><i class='banner-links fa-li fa fa-star-o fa-lg favorite tip' data-animation='true' data-toggle='tooltip' data-placement='top' title='Click to add to QuickLinks'></i>";
					// handle javascript links
					if (data[i].children[x].url.indexOf("javascript:") > -1)
					{
						finalHTML += "<a href=\"" + fixJSLink(data[i].children[x].url) + "\">" + data[i].children[x].text + "</a>";
					}
					else if (data[i].children[x].url.indexOf("http://") > -1 || data[i].children[x].url.indexOf("https://") > -1)
					{
						finalHTML += "<a href='" + data[i].children[x].url + "' target='_blank'>" + data[i].children[x].text + "</a>";
					}
					// Handle mailto and relative links
					else if (data[i].children[x].url.indexOf("mailto:") > -1 || data[i].children[x].url.charAt(0) === "/")
					{
						finalHTML += "<a href='" + data[i].children[x].url + "'" + (("target" in data[i].children[x] && data[i].children[x].target !== "") ? " target='" + data[i].children[x].target + "'" : "") + ">" + data[i].children[x].text + "</a>";
					}
					else
					{
						finalHTML += "<a href='" + (hof.inServices ? "/hofapps/home/ssb.jsp" : "/web/home-community/ssb") + "?utf=" + data[i].children[x].url + "'>" + data[i].children[x].text + "</a>";
					}
					finalHTML += (data[i].children[x].desc != "" ? " - " + data[i].children[x].desc : "") + "</li>";
				}
				finalHTML += "</ul></div></div>";
			}
		}
		// Parse out top level no category links
		var topLevelHTML = "<div id='" + (isPersonal ? "personalinformation" : "general") + "' class='row'><div class='col-sm-12'><h3>" + (isPersonal ? "Personal Information" : "General") + "</h3></div></div>";
		for (var y=0; y<topLevelLinks.length; y++)
		{
			$("#side-nav").prepend("<li><a class='list-group-item' href='#" + (isPersonal ? "personalinformation" : "general") + "'>" + (isPersonal ? "Personal Information" : "General") + "</a></li>");
			topLevelHTML += "<ul class='list fa-ul'>";
			for (var y=0; y<topLevelLinks.length; y++)
			{
				topLevelHTML += "<li><i class='banner-links fa-li fa fa-star-o fa-lg favorite tip' data-animation='true' data-toggle='tooltip' data-placement='top' title='Click to add to QuickLinks'></i>";
				// Handle javascript links
				if (topLevelLinks[y].url.indexOf("javascript:") > -1)
				{
					topLevelHTML += "<a href=\"" + fixJSLink(topLevelLinks[y].url) + "\">" + topLevelLinks[y].text + "</a>";
				}
				// Handle external links
				else if (topLevelLinks[y].url.indexOf("http://") > -1 || topLevelLinks[y].url.indexOf("https://") > -1)
				{
					topLevelHTML += "<a href='" + topLevelLinks[y].url + "' target='_blank'>" + topLevelLinks[y].text + "</a>";
				}
				// Handle mailto and relative links
				else if (topLevelLinks[y].url.indexOf("mailto:") > -1 || topLevelLinks[y].url.charAt(0) === "/")
				{
					topLevelHTML += "<a href='" + topLevelLinks[y].url + "'" + (("target" in topLevelLinks[y] && topLevelLinks[y].target !== "") ? " target='" + topLevelLinks[y].target + "'" : "") + ">" + topLevelLinks[y].text + "</a>";
				}
				else
				{
					topLevelHTML += "<a href='" + (hof.inServices ? "/hofapps/home/ssb.jsp" : "/web/home-community/ssb") + "?utf=" + topLevelLinks[y].url + "'>" + topLevelLinks[y].text + "</a>";
				}
				topLevelHTML += (topLevelLinks[y].desc != "" ? " - " + topLevelLinks[y].desc : "") + "</li>";
			}
			topLevelHTML += "</ul></div></div>";
		}
		$("#hoislinks").html($("#hoislinks").html() + topLevelHTML + finalHTML);
	};
	

		
	$(function() {
		$.ajax(
		{
			url: "/hofapps/applications/bannerlinks/getLinks.jsp?pkg=" + bannerPKG,
			dataType: "json",
			cache: false
		})
		.done(function(data)
		{
			parseLinks(data, 0);
			
			$("a[href*='#']:not([href='#'])").click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
				{
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length)
					{
						$('html,body').animate(
						{
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
			
			// Only call this method if the page has css available for it. 
			if($(".fa-ul li").length) {		
				findFavorites();
			}
			
			$('.tip').tooltip();
		});
	
		$('body').scrollspy({ target: '#sidebar' });
		
	});
});
document.addEventListener("DOMContentLoaded", hof.hofapps.bannerlinks);
