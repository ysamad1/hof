/*
 ****************************************************************************
 *                                                                          *
 * Copyright 2010 - 2019 Ellucian Company L.P. and its affiliates.          *
 *                                                                          *
 ****************************************************************************
  AUDIT TRAIL: 8.9.1
  1. Defects# BXEGS-1790 MH             				09/24/2019
     Setting the 8x SSB HTTPOnly parameter to secure in Cascade forces the sign-out to a sign-in button
  2. Defect CR-000168189/BXEGS-2341 JC					10/01/2019
     Session cookie data can be displayed at the top of the Self-Service homepage

  AUDIT TRAIL: 8.6.0.1
  1. Defects# 1-1C9JM7J             					04/09/2013
     Added ADMSESSID to Context for enabling signOut link on certain BWSKALOG pages.
	 
  AUDIT TRAIL: 8.6
  1. Defect 1-13X3FA4                                 CM 16/10/2012
	 Added the global Footer div to display the footer information on Cascade pages.
  2. RPE 1-1ABJJ0V		  		      				  CM 11/12/2012
     Skinning of Cascade, Removing of the Hard-coded styles from jQuery & pull the same from CSS files
  3. RPE 1-1B953XI                                     CM 10/01/2013
	 Enabling the copyright Disclaimer information in Cascade UI. 
	 
  AUDIT TRAIL: 8.5
  1. Defect 1-YYWAQF                                  JM 07/10/2011
     Logout Page is cut off with the positioning of the 
	 logout information window
  1. Defect 1-10QD3FN                                 PR 07/12/2011
     After login to proxy access, the signin link was 
	 displayed instead of signout link.
  
  AUDIT TRAIL: 8.4.2.1
  1. Defect 1-QCK3PR                                  PR 13/07/2011
     To avoid exposure of variables in the HTML source, 
	 variables are encoded in the javascript
  2. Defect 1-U3RQ0F                                  PR 13/07/2011
	 Modified welcome message to handle cross scripting issue.
  3. Defect 1-CSM094                                  PR 09/08/2011
	 Fix for Login page after timeout has different format 

  AUDIT TRAIL: 8.4.1.1
  1. Defect 1-MKRX28                                  PR 05/05/2011
     In Cascade, when using IE, Javascript error occurs on pages
     that have javascript events waiting for a return value.
  2. Defect 1-FDT7L1                                  PR 05/05/2011
     Submit buttons are not working in IE 8 with Cascade; 
  3. Defect: 1-MBW4CP                                  PR 05/10/2011
     Javascript errror prevent self-service from being accessible via firefox 4   
  AUDIT TRAIL: 8.4.1
  1. Defect 1-DD1H1R                                        SVA
     Information Text that is entered using html paragraph tags 
     for a page displays differently for the same page to users who 
     access it via the non-secure vs secure links. 
  2. Defect 1-D0A3XO                                        SVA
     Page title on unauthenticated pages is not visible.
  3. Defect 1-CU1KD4                                        SVA
     Help page containing javascript does not open up in cascade.
  4. Defect 1-B37AGH                                        SVA
     Add audit trails.
  
  AUDIT TRAIL: 8.4 
  1. Defect 1-CVCH41 - Error thrown by TWBKLIST due to calling 
     twbkwbis.p_wwwlogin in all lower case. 
  2. Cascade installation changes. Fetch values into variable 
     Context.sslTrustStorePassword, Context.sslTrustStoreType, Context.sslTrustStore
  3. Defect 1-CUFU31                                        SVA 07/05/2010  
     CASCADE interface not picking up NLS_LANG correctly for session
  4. Defect 1-DMZM2J & RPE 1-3HDMKV
     Ability to specify help window height and width in web tailor 
     parameters.
    
  AUDIT TRAIL: 8.3.0.4 
  1. Defect 1-B1LD5B                                        SVA 03/05/2010
     The Cascade UI displays a different layout for the login page depending 
     on the case of the procedure in the URL.
     
  AUDIT TRAIL END

  FILE NAME..: cascade-parser.js
  RELEASE....: 8.9.1
  PRODUCT....: WTLWEB
  COPYRIGHT..: Copyright 2010 - 2019 Ellucian Company L.P. and its affiliates.
*/
/**
 * @author Jai.Chandramouli
 */

"use strict";


/**
 * @class Handles parsing of the HTML dom and rendering the new interface
 * @author Jai chandramouli
 */
var Parser = {
	/**
	 * Container for menu content
	 */
	menuContent:null,
	/**
	 * Container for body content
	 */
	bodyContent: null,
	
	contentHeight: 0,
	
	initialize: function() {
		
		Context.standalone 	= false;
		
		// show the body content since all data has been loaded
		$('body').css('display', 'block');
		
		//---------------------------------------------------------------------
		/*var procException = false;
		Application.initialize();
		try{
			if ($.inArray(Application.getProc(), proc_depth.exceptions) != -1) {
					pageDepth = 4;
					procException = true;
			}
  	}
		catch(E) {
		}
		// set global variables
		if(!procException)*/
var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
var		homepageBanner 		= typeof(homepage_banner) == "undefined" || homepage_banner == "" ? 'wtlgifs/main-banner-image.png' : homepage_banner;
		
		// 1-QCK3PR, To avoid exposure of variables in the HTML source, variables are encoded in the javascript
		Context.sslTrustStorePassword = typeof(s_pd) == "undefined" || s_pd == "" ? null : s_pd;
		Context.sslTrustStoreType = typeof(s_type) == "undefined" || s_type == "" ? null : s_type;
		Context.sslTrustStore = typeof(s_store) == "undefined" || s_store == "" ? null : s_store;
		//1-QCK3PR end
		/* 8.4 Changes  Context locale settings */
		Context.locale_settings = typeof(locale_val) == "undefined" || locale_val == "" ? null : locale_val;
		Context.locale_lang = typeof(locale_lang) == "undefined" || locale_lang == "" ? null : locale_lang;
		
		/* 8.4 Defect 1-DMZM2J */
		Context.helpWinHeight = typeof(help_height) == "undefined" || help_height == "" ? "500" : help_height;
		Context.helpWinWidth = typeof(help_width) == "undefined" || help_width == "" ? "450" : help_width;
			
		Parser.menuContent 	= $('body').find('.headerlinksdiv table:first-child td:has(a)');
		
		// find window.open code inside scripts and modify the height/width
		this.updateScripts();
		
		if($('body').find('.pageheaderlinks').length == 0){
		  	pageDepth = 0;
		} 

		//---------------------------------------------------------------------
		
		// hide all body elements before re-layouting the screen
		$('body').children().hide();
		
		//===================================================================================
		
		/*
		 * ------------------------------------------------------------
		 * GLOBAL VARIABLES
		 * ------------------------------------------------------------
		 */
		
		var $header 		= $("<div id='pageheader'>"
								 + "<div id='pagetitle'/>"
								 + "<div id='welcomemessage'/>"
								 + "</div>"
								 );
		
		var $pageBody 		= $("<div id='pagebody'/>");
		var $contentPanel 	= $("<div id='contentpanel'/>");
		
		var $pageFooter 	= $("<div id='pagefooter'/>");
		
		var $search 		= $("<div id='search'>"
								+ "<div class='searchBase' />"
								+ "</div>"
								);
		var bodyContainer 	= $("<div id='bodyContainer'></div>");
		
		var $globalFooter	= $("<div id='globalFooter' />");
		
		function loadContent() {
			
			// map to the content section in the Magellan UI
			var $body = $('#content'); //$('body');
			
			// add the anchor tags
			$body.append('<a name="top"></a>');
			
			$body.append(bodyContainer);
			$body.prepend($search);
			
			bodyContainer.append($header);
			
			bodyContainer.append($pageBody.append(contentHolder()))
				.append($pageFooter);	
				
			bodyContainer.append($globalFooter);
			
			//==================================================================
			
			/*
			 * ------------------------------------------------------------
			 * CHECK LOCALIZATION 
			 * ------------------------------------------------------------
			 */
			LocalizeImages.initialize();
	
			/*
			 * ------------------------------------------------------------
			 * CHECK FONT RESIZE 
			 * ------------------------------------------------------------
			 */
			FontResizeDetector.initialize();
		
			/*
			* ------------------------------------------------------------
			* HEADER IMAGE settings 
			* ------------------------------------------------------------
			*/
			
			var headerImgSrc = $('#headerImage .headerImg:first').attr('src');
			
			if(typeof(headerImgSrc) != "undefined") {
				Theme.updateInstitutionalLogoImage("url('"+headerImgSrc+"') no-repeat");
			}
			
			/*
			 * ------------------------------------------------------------
			 * PAGE HEADER - LINKS - headerlinksdiv, pageheaderlinks
			 * ------------------------------------------------------------
			 */
			HeaderLinks.initialize();
			
			/*
			 * ------------------------------------------------------------
			 * CRUMB INITIALIZATION 
			 * ------------------------------------------------------------
			 */
			Crumb.initialize(pageDepth, $header);
			
			/*
			 * ------------------------------------------------------------
			 * RELEASE TEXT INITIALIZATION 
			 * ------------------------------------------------------------
			 */
			FooterText.initialize();
			
			/*
			 * ------------------------------------------------------------
			 * GLOBAL FOOTER TEXT INITIALIZATION 
			 * ------------------------------------------------------------
			 */
			GlobalFooterText.initialize();
			
			/*
			 * ------------------------------------------------------------
			 * if this is a level 0 page, check for anonymous page type
			 * ------------------------------------------------------------
			 */
			if( pageDepth == 0 ) {
				
				/* remove browse for anonymous pages */
				$('body').find('#areas').remove()
				/* remove sitemap link */
					.end()
					.find('.sitemaplink').remove();
				// moved this from below for Defect 1-D0A3XO
				// 8.4 Changes Defect fix
				var loginList = Context.loginProc;
				$.each(
						Context.loginProc,
						function( intIndex, objValue ){
						
							loginList.push(objValue.toLowerCase());
						}
				);
				
				/* empty header of all elements except the crumb container */
				if(showHeader) {
					$('body').find('#pageheader')
					.children().each(function(i) {
						// Defect 1-D0A3XO - added pagetitle condition
						if($(this).attr('id') != 'crumb' && $(this).attr('id') != 'pagetitle') {
							$(this).remove();
						}
					});
					// Defect 1-107FWXX - added the height of the div#pageheader only for the homepage & login screen
					// this will avoid the hiding of  Breadcrumb and title in Cascade UI on MSIE non-secured pages 
					// and the logout page is displayed correctly without any 'cutting off' the logout 
					// information happening in MSIE browsers.
					
					
						// Defect 1-YYWAQF - make height of div#pageheader of logout page to 0px 
						// for any browser other than IE. This will avoid 'cutting off' the logout 
						// information happening in IE browser.
						if((Application.getProc().indexOf('homepage') != -1 || Application.getProc().indexOf('P_WWWLogin') != -1) 
										&& jQuery.browser.msie){
							$('body').find('#pageheader').css({height:0});
						}
						// Defect 1-YYWAQF  - END
					
					// Defect 1-107FWXX- END

					//Defect 1-D0A3XO
					if ( $.inArray(Application.getProc().toLowerCase(), Context.unauthenticatedHomeProc) == -1 
					&& $.inArray(Application.getProc().toLowerCase(), loginList) == -1) {
						$header.find('#welcomemessage').hide();
						var pageTitle = $header.find('#pagetitle');
						var titleTag = $('body').find('.pagetitlediv table:first td:has(H2)');
						pageTitle.html(jQuery.trim($(titleTag).text()));
					}

					/* apply anonymous class */
					$pageBody.addClass('anonymous');
				} else {	/* if showHeader is false, this could be a popup page. so, empty header of all elements except the page title */
					$('body').find('#pageheader')
					.children().each(function(i) {
						if($(this).attr('id') != 'pagetitle') {
							$(this).remove();
						}
					})
					.end()
					.addClass('popup');
					
					// remove header space in popup windows
					$('#content').addClass('popup');
					
					$header.find('#welcomemessage').hide();
					var pageTitle = $header.find('#pagetitle');
					var titleTag = $('body').find('.pagetitlediv table:first td:has(H2)');
					pageTitle.html(jQuery.trim($(titleTag).text()));
					
					$('body').find('#contentHolder').attr('width', 'auto');
				}
				// Defect 1-D0A3XO remove the login List code to above if condition
				/* if unauthenticated home */
				if ($.inArray(Application.getProc().toLowerCase(), Context.unauthenticatedHomeProc) != -1) 
				{
					$pageBody.addClass('home');
					contentHolder().hide();
					generateUnauthenticatedHome( $('body').find('.menuplaintable tr'), $pageBody);
				}
				/* 8.4 Changes if login page */ 
				else if ($.inArray(Application.getProc().toLowerCase(), loginList) != -1) 
				{
					LoginScreen.initialize($('.pagebodydiv'), $pageBody);
				}
				// Defect 1-CSM094 check if the right messages are present, remove class check.
				/*else if($('.pagebodydiv').children().hasClass('.plaintable')) {
							alert(" in parser new code");
								var alertMsg = $('.pagebodydiv').find('.plaintable td:eq(1)').html();
								
								if(alertMsg != null){
								$.each(
								Context.alertMsgs,
								function( intIndex, objValue ){
										if(alertMsg.toLowerCase().indexOf(objValue.toLowerCase()) >= 0){
											alert("matched :"+alertMsg);									
											$header.find('#pagetitle').hide();										
											Crumb.remove();
											Crumb.addUnauthenticatedHome();
											LoginScreen.initialize($('.pagebodydiv'), $pageBody);
											level_depth="0";
											
										}
									}
								);	
							}
														
				} */
				else if (checkAlertMessages()){
					//alert("checkAlertMessages :"+checkAlertMessages);
					
											$header.find('#pagetitle').hide();										
											Crumb.remove();
											Crumb.addUnauthenticatedHome();
											LoginScreen.initialize($('.pagebodydiv'), $pageBody);
											level_depth="0";
				}
                // Defect 1-CSM094 check if the right messages are present, remove class check.
				else /* for all other anonymous pages */
				{
					//Changes for Downgrade DEFAULT Defect : 1-MKRX28,1-FDT7L1
					// if($.inArray(Application.getProc(), CascadeDowngrade.exceptions) != -1) {
						DowngradeCascade.apply();
						return;
					// }
					
					// remove document.loginform.reset code
					$('body script').each(function(e, elem) {
						if($.trim($(elem).html()).indexOf('document.loginform.reset();') != -1) {
							$(elem).remove();
						}
					});
					
					contentHolder().find('#contentBelt').remove();
					$('body').find('.menuplaintable').removeClass('menuplaintable');
					contentHolder().append($('body').find('.pagebodydiv').contents());
					
					// remove the horizontal line
					$('.bgtabon').removeClass();
					
					// Defect 1-DD1H1R
					$('body').find('.infotext').find('p').prepend('<br>');
					$('body').find('.bordertable').after('<br>');
					
					// remove blue background from rows that are not headers
					contentHolder().find('th[class="ddlabel"][scope="row"]').css({
						'background': 'none',
						'color': '#000'
					});
					
					/* some pages might have directory listing of alphabets along with footer links. ExtraLinks is a helper class to 
					 * manage both
					 */
					
                    var pagefooterlinks = contentHolder().find('.pagefooterlinks');
                    pagefooterlinks.each(function(e, element) {
                         var links = $(element).find('a[class!="skiplinks"]');
                         if( links.length > 0 ) {
                              ExtraLinks.initialize(links, $(element).parent());
                         }
                         $(element).remove();
                    });

					var links = $('body').find('.pagefooterlinks a[class!="skiplinks"]');
					if( links.length > 0 ) {
			            ExtraLinks.initialize(links, contentHolder());
						links.parent().remove();
					}
					
					/* if this is "bwskwpro.P_WebProspectMain" page, do this extra formatting */
					//RPE 1-1ABJJ0V
					if ($.inArray(Application.getProc(), Context.webProspectMainProc) != -1) 
					{
						//resize web_info
						$("[name=web_info]").css({
							 "height" : StyleManager.getStyle('webProspectMainProc_web_info','height'),
							 "width" : StyleManager.getStyle('webProspectMainProc_web_info','width')
						 });
						//resize web_note
						$("[name=web_note]").css({
							"width" : StyleManager.getStyle('webProspectMainProc_web_note','width'),
							"height" : StyleManager.getStyle('webProspectMainProc_web_note','height'),
							"margin-top" : StyleManager.getStyle('webProspectMainProc_web_note','margin-top')
						 });
						 $("[name=web_note]").attr('src', '/wtlgifs/web_note_cascade.png')
						//position required image
						$("[name=web_required_new]").each(function(i) {
							//apply background to parent TD
							$(this).parent().parent().css({
								"background" : StyleManager.getStyle('webProspectMainProc_web_required','background'),
								"padding-right" : StyleManager.getStyle('webProspectMainProc_web_required','padding-right')
							});
							//remove SPAN
							$(this).parent().css({
								"display" : StyleManager.getStyle('webProspectMainProc_web_required','display')
							});
						});
					}
				}
				
				/* convert button to custom skin */ 
				HTMLButtonFormatter.initialize();
				
				
				/*
				 * ------------------------------------------------------------
				 * HistoryManager - Initialize
				 * ------------------------------------------------------------
				 */
				HistoryManager.initialize();
				
//				$('#content').css('height', (document.body.offsetHeight - ($('#header').height()+30))+'px');
				
				return;
			}
			
			// else continue -------------------------------------------------		
			
			// load UDC XML and navigation entries
			callUdcXmlService(sessionToken);
			
			/*
			 * ------------------------------------------------------------
			 * PAGE HEADER - WELCOME MESSAGE (pagebodydiv)/TITLE (pagetitlediv)
			 * ------------------------------------------------------------
			 */
			if(showHeader) {
				if(pageDepth < 4) {
					$header.find('#pagetitle').hide();
					var welcomeMessage = $header.find('#welcomemessage');
					
					
					
					/**  Defect : 1-U3RQ0F Modifications for the cross scripting issue **/
					if (wcMessage.indexOf('script') >= 0){
					welcomeMessage.html('*ERROR* Invalid characters found. Please contact the site administrator or re-enter your information.<BR>'+wcMessage);
					}
					else{				  
						welcomeMessage.html(wcMessage);
					}
					
					/** End odifications for the cross scripting issue **/
					
					// add last accessed time to body
					if(pageDepth == 1 && typeof(LastWebAccess) != "undefined") {
						$pageFooter.append('<SPAN class="lastaccess">' + LastWebAccess + '</SPAN>');
					}

				} else {
					$header.addClass('level4');
					$header.find('#welcomemessage').hide();
					var pageTitle = $header.find('#pagetitle');
					var titleTag = $('body').find('.pagetitlediv table:first td:has(H2)');
					pageTitle.html(jQuery.trim($(titleTag).text()));
				}
			}
			
			/*
			 * ------------------------------------------------------------
			 * PAGE SEARCH - 
			 * ------------------------------------------------------------
			 */
			var inputSearchContent = $('body').find('form[action$="twbksrch.P_ShowResults"]');
			
			searchField().appendTo($search);
		
			/*
			 * ------------------------------------------------------------
			 * NAVIGATION ITEMS - pageheaderlinks2
			 * ------------------------------------------------------------
			 */
			if(pageDepth < 4) {
				MenuNavigation.initialize($pageBody, pageDepth);
			} else {
				MenuNavigation.initialize($('#content'), pageDepth);
			}
			
			
			/*
			 * ------------------------------------------------------------
			 * HTML BUTTON - Submit/Reset/Button
			 * 
			 * Initialize HTMLButtonFormatter before structuring page content (specifically level 4)
			 * ------------------------------------------------------------
			 */
			
			HTMLButtonFormatter.initialize();
			
			
			/*
			 * ------------------------------------------------------------
			 * PAGE BODY - NAVIGATION ITEMS DESCRIPTION TEXT - menulinkdesctext, pagebodydiv
			 * ------------------------------------------------------------
			 */
			
			var content = "";
			
			if(pageDepth == 1) {
				// generate level 1 content
				HistoryManager.add("", PageRenderer.renderHome, 
								{content:$('body').find('.menuplaintable tr'), 
									type:'html', 
									pageReferrerId: '',
									container:contentHolder()}
								);
								
			}
			if(pageDepth == 2) {
				$('#content').addClass('level2');
				// generate level 2 content			
				
				HistoryManager.add("", PageRenderer.renderSecondLevel, 
								{content: $('body').find('.menuplaintable tr'), 
									type:'html', 
									pageReferrerId: '',
									container:contentHolder()}
								);
			}
						
			if(pageDepth == 3) {
				$('#content').addClass('level3');
				// generate level 2 content
				HistoryManager.add("", PageRenderer.renderSecondLevel, 
								{content:$('body').find('#secondLevelmenu td'), 
									type:'html', 
									pageReferrerId: '',
									container:contentHolder()}
								);
								
				// generate level 3 content
				HistoryManager.add("", PageRenderer.renderThirdLevel, 
								{content:$('body').find('.menuplaintable tr'), 
									type:'html', 
									pageReferrerId: '',
									container:contentHolder()}
								);
								
			}
			
			if(pageDepth == 4) {
				//Changes for Downgrade DEFAULT Defect : 1-MKRX28,1-FDT7L1
				// if ($.inArray(Application.getProc(), CascadeDowngrade.exceptions) != -1) {
					DowngradeCascade.apply();
				// }
				
				HistoryManager.add("", PageRenderer.renderFourthLevel, 
								{content:$('body').find('.pagebodydiv'), 
									type:'html', 
									pageReferrerId: '',
									container:contentHolder()}
								);
			}
			
			/*
			 * ------------------------------------------------------------
			 * HistoryManager - Initialize
			 * ------------------------------------------------------------
			 */
			HistoryManager.initialize();

			/*
			 * ------------------------------------------------------------
			 * PageRenderer - Initialize
			 * ------------------------------------------------------------
			 */
			PageRenderer.initialize();
			
		}
		
		/*
		 * ------------------------------------------------------------
		 * Application - Initialize
		 * ------------------------------------------------------------
		 */
		
		Application.initialize();
		
		//===================================================================================
		// 	MAGELLAN PLATFORM INITIALIZATION
		//===================================================================================	
		
		/**
		 * Message handler registered with the Magellan application.
		 * Use this handler only to receive information from the magellan platform.
		 * DO NOT USE Messenger.send() for broadcasting back messages to the common ui if 
		 * running in IE. The current implementation doesn't use the upcomm.html file for 
		 * providing hash fragment support in IE. 
		 * 
		 * @param {Object} data
		 */
		function messageHandler(data) {
			var data = stringToDoc(data);
			var messageContext = $(data).find('request').text();
			switch(messageContext) {
				case 'help':
					
					if (helpWin != null) helpWin.window.close();
                    // Defect 1-DMZM2J
					//var win_sett = 'width=481,height=448,menubar=no,status=no,location=yes,toolbar=no,scrollbars=yes';
					var win_sett = 'width=' + Context.helpWinWidth  + ',height=' + Context.helpWinHeight + ',menubar=no,status=no,location=yes,toolbar=no,scrollbars=yes';
					// Defect 1-CU1KD4
					if(Context.extHelpURL == 'FALSE') {
						var helpWin = window.open('', 'helpWinId', win_sett);
						
						if (helpWin != null) {
							helpWin.document.open();
							HelpWindow.initialize(Context.helpURL, helpWin);
							if (helpWin.opener == null) {
								helpWin.opener = self;
							}
						} else {
							alert("Failed to open help window");
						}
					} else {
						var helpWin = window.open(Context.helpURL, 'helpWinId', win_sett);
					}

					break;
				case 'signin':
					Application.navigateToURL(Context.loginURL); // Defect fix 8.4 changes
					break;
					
				case 'signout':
					Application.navigateToURL(Context.logoutURL);
					break;
			}
		}
		
		var SESSID = getCookie('SESSID');
		var CPSESSID = getCookie('CPSESSID');
        var CASCADE = getCookie('CASCADE');
		// 1-1C9JM7J: fetching ADMSESSID to enable SignOut link 
		var ADMSESSID = getCookie('ADMSESSID');
		// 1-1C9JM7J,end 
		// Defect 1-10QD3FN- proxy access login not displaying signout link since user is not created.
		var PROXY_HASH = getCookie('PROXY_HASH');
		// Defect 1-10QD3FN - END
		
		if((Context.standalone || Context.isLocal) && typeof(userID) != 'undefined') {
			CookieManager.set("username", userID);
			//set the user
			CommonContext.user = userID;	/* RTL Support */
		} else {
			if( ( CPSESSID || SESSID || CASCADE ) && typeof(userID) != 'undefined' ) {
				CookieManager.set("username", userID);
				//set the user
				CommonContext.user = userID;

				if (CASCADE && Application.getProc().indexOf('homepage') != -1) {
					pageDepth = 0;
				}
			}else if(PROXY_HASH != null){// Defect 1-10QD3FN- proxy access login not displaying signout link
			//since cookieManager.user was not getting set in proxy access login functionality

				CookieManager.set("username", PROXY_HASH);
				CommonContext.user = PROXY_HASH;
				// Defect 1-10QD3FN - END
			}else if(ADMSESSID != null){// 1-1C9JM7J- Admission login not displaying signout link
				//since cookieManager.user was not set in Admission login functionality
				CookieManager.set("username", ADMSESSID);		
				CommonContext.user = ADMSESSID;
				// 1-1C9JM7J, end
			}else {
				CookieManager.remove('username');
				pageDepth = 0;
			}
		}
		 //8.4 Changes for internationalization
		 CookieManager.set("locale", Context.locale_lang);
		
		var globalNav = false;
		if (pageDepth > 0) {
			globalNav = true;
		}
		
		var showHeader = true;
		
		// if pageDepth is set to 0, and if the user is logged in, then this might be a popup window. In such case, hide header
		if(pageDepth == 0 && (SESSID || Context.isLocal) 
		&& $.inArray(Application.getProc().toLowerCase(), Context.unauthenticatedHomeProc) == -1 
		&& $.inArray(Application.getProc().toLowerCase(), Context.loginProc) == -1
		&& $.inArray(Application.getProc().toLowerCase(), Context.logoutProc) == -1) {
			showHeader = false;
			// set the size of popup windows
//			window.innerHeight += 175;
//			window.innerWidth += 100;
		}
		
		CommonPlatform.initialize({ standalone: true, globalNav: globalNav, header: showHeader, footer: true, handler:messageHandler});
		
		
		//===============================
	
		loadContent();
		/*
		*------------------------------------------------------------
		* Diclaimer information is added to the page
		*------------------------------------------------------------
		*/ // RPE 1-1B953XI : Adding disclaimer information
		Disclaimer.initialize();
		// finally if this is IE6 apply patch
		if(jQuery.browser.msie && parseInt(jQuery.browser.version) <= 6) {
			IE6Patch.apply();
		}
	},
	
	updateScripts: function() {
		// adjust window.open script to new height/width
		var winRegex = new RegExp('window.open');
		var widthIncrement = 100;
		var heightIncrement = 175;
		
		$(document).find('script').each(function(e, elem) {
			var code = $(elem).html();
			
			if(winRegex.test(code)) {
				var origMatch = code.match(/window.open.+;/);
				var match = code.match(/window.open.+;/);
				for(var k=0; k<match.length; k++) {
					var props = match[k].split(',');
					for(var j=0; j<props.length; j++) {
						var arr = props[j].split('=');
						var key = $.trim(arr[0]);
						var val = $.trim(arr[1]);
						if(key == 'width') {
							val = parseInt(val) + widthIncrement;
						} else if(key == 'height') {
							val = parseInt(val) + heightIncrement;
						}
						
						props[j] = key;
						if(val != '') {
							props[j] = props[j]+"="+val;
						}
					}
					match[k] = props.join(',')+"');";
				}
				
				//replace with new code
				for(var n=0; n<match.length; n++) {
					code = code.replace(origMatch[n], match[n]);
				}
				
				// IE doesn't support innerHTML, fails, and uses .text instead
				try {
					elem.innerHTML = code;
				} catch(e){
					elem.text = code;
				}
			}
		});
	}
}
