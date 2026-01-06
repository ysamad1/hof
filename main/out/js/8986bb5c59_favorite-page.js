var hof = hof || {};

/*=====================================================================================================================
 * Author: Dominick Piganell
 *
 * favorite-page.js calls web apis that are sitting at quick-links-portlet. The purpose of this javascript file
 * is to toggle favorite links that have stars next to them with classes of '.favorite' and a star icon next to them.
 * The application will toggle the star, and make the necessary api calls to add or delete the quick link.
 * 
 *=====================================================================================================================*/
hof.favoritePage = function(){
	/*
	 * Tie a click event to the class favorite. This is what will toggle the necessary classes and make the 
	 * ajax calls to the web api to create or delete the quick link
	 */
	var favoriteClick = function() {
		$(document).on('touchstart click', '.favorite', function() {
			
			// User has clicked a star that was previously favorited and is looking to remove it.
			if($(this).hasClass('fa-star-gold')){
				var quickLink = {};
				
				quickLink.url = $(this).next().attr('href');
				quickLink.text = $(this).next().text();
				// Bugfix for tooltip
				if(!quickLink.url) {
					quickLink.url = $(this).next().next().attr('href');
					quickLink.text = $(this).next().next().text();
				}
				
				$(this).removeClass('fa-star-gold').removeClass('fa-star').addClass('fa-star-o');

				$.ajax({
					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
					},
					'type': 'POST',
					'url': '/quick-links-portlet/delete-quick-link',
					'data': JSON.stringify(quickLink),
					'dataType': 'json'
				}).success(function(){
					$('body').prepend("<div id='quick-link-success' class='alert alert-success text-center' role='alert' style='width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><span aria-hidden='true' class='fa fa-check fa-lg pull-left alert-icon'></span>Your page has been successfully removed your quick link!</div>");
					$("#quick-link-success").affix().fadeTo(2000, 500).slideUp(1000, function(){});
				}).error(function(a,b,c) {
					$('body').prepend("<div id='quick-link-danger' class='alert alert-danger text-center' role='alert' style='width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><span aria-hidden='true' class='fa fa-exclamation-triangle fa-lg pull-left alert-icon'></span>An error has occurred while removing your quick link. Please refresh the page and try again.</div>");
					$('#quick-link-danger').affix();
				});	
			} else { // User has clicked a star that was not favorited and is looking to add it.
				var quickLink = {};
				quickLink.url = $(this).next().attr('href');
				quickLink.text = $(this).next().text();
				// Bugfix for tooltip
				if(!quickLink.url) {
					quickLink.url = $(this).next().next().attr('href');
					quickLink.text = $(this).next().next().text();
				}
				
				$(this).removeClass('fa-star-o').addClass('fa-star').addClass('fa-star-gold');

				$.ajax({
					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
					},
					'type': 'POST',
					'url': '/quick-links-portlet/create-quick-link',
					'data': JSON.stringify(quickLink),
					'dataType': 'json'
				}).success(function(){
					$('body').prepend("<div id='quick-link-success' class='alert alert-success text-center' role='alert' style='z-index: 999999; width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><span aria-hidden='true' class='fa fa-check fa-lg pull-left alert-icon'></span>Your page has been successfully added to quick links!</div>");
					$("#quick-link-success").affix().fadeTo(2000, 500).slideUp(1000, function(){});
				}).error(function(a,b,c) {
					$('body').prepend("<div id='quick-link-danger' class='alert alert-danger text-center' role='alert' style='z-index: 999999; width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><span aria-hidden='true' class='fa fa-exclamation-triangle fa-lg pull-left alert-icon'></span>An error has occurred while attempting to add your page to quick links. Please refresh the page and try again.</div>");
					$('#quick-link-danger').affix();
				});
			}
		});
	};

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
			'url': '/quick-links-portlet/get-links?' + new Date().getTime()
		}).success(function(response){
			var links = response;
			var i;
			for(i = 0; i < links.length; i++) {
				$("a[href='" + links[i].url + "']").prev().removeClass('fa-star-o').addClass('fa-star').addClass('fa-star-gold');
			}
		}).error(function(a,b,c) {
			if(!hof.inDR) {
				$('body').prepend("<div id='quick-link-danger' class='alert alert-danger text-center' role='alert' style='z-index: 999999; width: 100%'><button type='button' class='close' data-dismiss='alert'>×</button><span aria-hidden='true' class='fa fa-exclamation-triangle fa-lg pull-left alert-icon'></span>An error has occurred while retrieving your quick links. Please refresh the page and try again.</div>");
				$('#quick-link-danger').affix();
			}
		});
	};

	$(function() {
		favoriteClick();

		// Only call this method if the page has css available for it. 
		if($(".fa-ul li").length) {		
			findFavorites();
		}
	});
}();

