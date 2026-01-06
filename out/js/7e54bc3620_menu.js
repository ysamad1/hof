function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var hof = hof || {};

	// Populate menu items
$(function() {
	hof.menuItems = function() {

		var items = "";

		// Left Side Menu 
		$.ajax({
			type: 'GET',
			cache: false,
			url: '/hofapps/applications/menu/menuItems.jsp',
			dataType: 'json',
			success: function (data, status) {
				
				for(i=0; i<data.length; i++) {
					var hasActive = false;
						// If we have children handle rendering of it
						// Also find active page and apply active style to it
						if (data[i].children !== undefined)
						{
							var active = false;
							var add ="";
							for (z=0; z<data[i].children.length; z++)
							{
								if(data[i].children[z].url === getParameterByName('utf')) {
									active = true;
									hasActive = true;
								} else {
									active = false;
								}
								var link = data[i].children[z].link ? data[i].children[z].link : "/web/home-community/services?utf=" + data[i].children[z].url;
								var text = data[i].children[z].label ? data[i].children[z].label : data[i].children[z].text;
								var target = data[i].children[z].target !== undefined ? data[i].children[z].target : "_self";
								add += "<li class='" + (active ? "active" : "") + "'><a href='" + link + "' target='" + target + "'>" + text + "</a></li>";
							}
							items += "<li class='dropdown " + (hasActive ? 'open' : '') + "'>" +
							"<a class='dropdown-toggle dropdown-toggle-sidemenu " + (hasActive ? 'active' : '') + "' href='#' data-toggle='dropdown'><span class='" + data[i].icon + "' aria-hidden='true'></span>" + data[i].label + "<span class='fa fa-chevron-down dropdown-icon pull-right' aria-hidden='true'></span></a>" +
							"<ul class='dropdown-menu navmenu-nav left-sub-menu-items'>" + add + "</ul></li>";

						}
						else
						{
							if(getParameterByName('utf') == null) {
								// Standard no submenu links
								items += "<li " + (location.pathname === data[i].link ? "class='active'" : '') + " title='" + data[i].label + "'><a href='" + (data[i].link.length > 0 ? data[i].link : "#") + "' " 
								+ (data[i].target.length > 0 ? "target='"+data[i].target+"'" : "") + "><span class='" + data[i].icon + "' aria-hidden='true'></span>"
								+ data[i].label + "</a></li>";
							} else {
								var active = "";
								if(data[i].link.indexOf(getParameterByName('utf')) >= 0) {
									active = "active";
								}

								items += "<li " + "class='" + active + "' title='" + data[i].label + "'><a href='" + (data[i].link.length > 0 ? data[i].link : "#") + "' " 
								+ (data[i].target.length > 0 ? "target='"+data[i].target+"'" : "") + "><span class='" + data[i].icon + "' aria-hidden='true'></span>"
								+ data[i].label + "</a></li>";
							}
						}
						
					}

					// Add menu items				
					$("#menu-items").html(items);

					// Add home menu item and check whether it's active or not
					if(location.pathname === "/" || location.pathname === "/web/home-community") {
						$("#menu-items").prepend("<li class='active' ><a href='/'><span class='fa fa-home' aria-hidden='true'></span>Home</a></li>");
					} else {
						$("#menu-items").prepend("<li><a href='/'><span class='fa fa-home' aria-hidden='true'></span>Home</a></li>");
					}

					// Add menu logout
					$("#menu-items").append("<li><a href='/c/portal/logout'><span class='fa fa-sign-out' aria-hidden='true'></span>Logout</a></li>");

					// Add hover functionality
					$("#menu-items li a").hover(function() {
						$(".sidebar-hover-elem").css('top', $(this).offset().top + 'px');
					});
					$("#menu-items li a").mouseleave(function() {
						$(".sidebar-hover-elem").css('top', '-150px');
					});
					
					// If there is an active menu item, toggle the menu
					if(hasActive) {
						if(!$("#wrapper").hasClass("toggled")) {
							$("#wrapper").toggleClass("toggled");
						}
					}

					// Default icon for side menu if none is found
					$(".dropdown-toggle-sidemenu span.undefined").addClass("fa fa-external-link");
					$.each( $(".sidebar-nav li a span"), function( i, val ) {
						if(!$(val).hasClass('fa')) {
							$(val).addClass('fa fa-external-link');
						}
					});
					
					// Allow multiple dropdowns to be open at once.
					$('.sidebar-nav .dropdown').on({
						"shown.bs.dropdown": function() { this.closable = false; },
						"click":             function() { this.closable = true; },
						"hide.bs.dropdown":  function() { return this.closable; }
					});
				}
			});		
	}();

	if($(window).width() > 992) {
		var menuUser = hof.lum.Luminis.getUser();
		menuUser.addEventListener(hof.lum.event.EventType.LOAD, function() {
			if((hof.lum.Luminis.getUser().getPreference("menu-closed") != 0) && (hof.lum.Luminis.getUser().getPreference("menu-closed") != null)) {
				$("#wrapper").addClass("toggled");
				var menuItems = $('#menu-items li');
				$.each( menuItems, function( key, value ) {
					$(value).attr('title', $(value)[0].innerText);
				});
			} else {

					$("#wrapper").removeClass("toggled");
					$('#menu-items li').removeAttr('title');
			}
		});
	}

	// Menu functionality
	$("#menu-btn").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
		if($(window).width() >= 992) {
			$.ajax({
				type: 'GET',
				cache: false,
				url: '/hofapps/applications/menu/toggle-menu.jsp?closed=' + ($("#wrapper").hasClass("toggled") ? 1 : 0),
				dataType: 'json',
				success: function (data, status) {
					if($("#wrapper").hasClass("toggled")) {
						var menuItems = $('#menu-items li');
						$.each( menuItems, function( key, value ) {
							$(value).attr('title', $(value)[0].innerText);
						});
					} else {
						$('#menu-items li').removeAttr('title');
					}
				}
			});		
		}
	});

	// If the search button is clicked, close the menu.
	// This element is also only visible at mobile.
	$("#search-bar").click(function() {
		$("#wrapper").addClass("toggled");
	})

	// Navbar scroll fade
	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			var bgColor = $('.navbar-default').css('backgroundColor').replace(')', ', 0.75)');
			var boColor = $('.navbar-default').css('borderColor').replace(')', ', 0.75)');
			$('.navbar-default').css({ backgroundColor: bgColor });
			$('.navbar-default').css({ borderColor: boColor });
		} else {
			var bgColor = $('.navbar-default').css('backgroundColor').replace(/, (0.7)[0-9.]*\)/g, ')');
			var boColor = $('.navbar-default').css('borderColor').replace(/, (0.7)[0-9.]*\)/g, ')');
			$('.navbar-default').css({ backgroundColor: bgColor });
			$('.navbar-default').css({ borderColor: boColor });
		}
	});


	$("#sidebar-wrapper").niceScroll({cursorborder:"#333"});
});