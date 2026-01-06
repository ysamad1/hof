/*
-- ******************************************************************************
-- *                                                                            *
-- * Copyright 2010-2022 Ellucian Company L.P. and its affiliates.              *
-- *                                                                            *
-- ******************************************************************************
     
  AUDIT TRAIL: 8.9.2
  1. Security Fixes
     RT 06/10/2022
     
  AUDIT TRAIL: 8.9.1
  1. CR-000165523                             JC 09/18/2019
     Fixed issue with Cascade not correctly displaying an error message when a
     non-database URL is clicked and the "Database Procedure" check box is still
     checked in Web Tailor.

  AUDIT TRAIL: 8.8.4
  1. CR-000151475                             JC 05/18/2018
     Fixed issue with confirmation message not displaying when security questions
     or PIN are updated.
  2. CR-000156315                             JC 10/26/2018
     Generated minified version of this file that was missed in Web Tailor 8.8.3
	 release.

  AUDIT TRAIL: 8.8.3
  1. CR-000145488                             EM 10/10/2017
     Fixed issue with Edge Browser.Creating dynamic hidden field not required 
     before form submit.

  AUDIT TRAIL: 8.7
  1. CR-000108552             		      			EM 04/30/2014
     if the href is having '.htm' then we will add helpBasePath also with href.
  2. CR-000111955             		      			EM 05/20/2014
     Added UnEscapeHTML() function to the helpURL variable to unescape.
  3. CR-000114394            		      			EM 05/20/2014
     Added code to replace the apostrophe i.e(replace(/'/g,"&#39;");).	 
  3. CR-000114129           		      			EM 05/20/2014
     Added code to check if cascade.css file is having property for id 
	 #mainBannerImage' then use that location otherwise get the 
	 homebanner image from the variable declared.	 
  AUDIT TRAIL: 8.6.1
  1. Defect# 1-1FTGOOC             		      			EM 10/09/2013
     Changed helpURL.indexOf('http') == -1 to helpURL.split(" ").length >0.
  2. Defect# CR-000106143  			       		        EM 11/19/2013
     Added code to check if the browser is IE11 then assign  version to 11.
  3.Defect# 1-1ARBCN0                                  	EM 12/04/2013
	Added the new class contentHolderTab to contentHolder div if the page is 
	'bwpktetm.P_EnterTimeSheet'.
  4. Defect# CR-000104591 			       		        EM 12/11/2013
     Commented the condition to check the IE version==7 since we removed 
	 the IEemulate meta tag from twbkwbis package.
	 Also added /rv/i.test(userAgent) for IE11.

  AUDIT TRAIL: 8.6.0.1
  1. Defects# 1-1BTU34H             					CM 04/09/2013
     Removed HTML Tags around Breadcrumbs.
  2. Defects# 1-1C9JM7J             					CM 04/09/2013
     Added ADMSESSID to Context for enabling signOut link on certain BWSKALOG pages.
	 
  AUDIT TRAIL: 8.6
  1. Defects# 1-1546DWP             					EM 12/18/2012
     Alter the code to add the app-overrides.css and cascade.common.css files 
     to the pages.
  2.Defects# 1-13X3FA4                                  CM 16/10/2012
	Added the global Footer div to display the footer information on Cascade pages.
  3.Defects# 1-13M5YI9                                  CM 23/10/2012
	Alter the code to align the Login page information text properly after the <ul> & <ol> tags.
  4. Defect #1-1546DWP									CM 11/12/2012
	 Getting nonsecure items message in IE when hitting Help in Cascade SSL
  5. RPE 1-1ABJJ0V		  								CM 11/12/2012
     Skinning of Cascade, Removing of the Hard-coded styles from jQuery & pull the same from CSS files
  6. Defect #1-1B7N2AO									CM 09/01/2013
	 Lines between Cascade Menu Items are not lining up when using Google Chrome
  7. RPE 1-1B953XI                                     CM 10/01/2013
	 Enabling the copyright Disclaimer information in Cascade UI.
  8. Defect #1-1BFUHTD                                 CM 29/01/2013
	 Javascript pop up window does not display in Cascade theme via Firefox browser, version 17 and 18 & MSIE 9.

   AUDIT TRAIL: 8.5.1
  1. Defects# 1-11SBDKG              					JM 08/02/2012
     Information text does not display in sequenctial order
	 on twbkwbis.P_WWWLogin

	 AUDIT TRAIL: 8.5
  1. Defects# 1-Z08QAU, 1-Z08QAX, 1-Z08QB0              JM 05/10/2011
     Removed un-necessory symbols displayed on the page. The
	 three defects are similar and were related to footer 
	 links labels not cleaned up properly.
  2. Defect 1-10QD3FN                                      JM 14/11/2011
     Cascade UI does not disable the links when a proxy is 
     accessing another persons info

   AUDIT TRAIL: 8.4.2.1
  1. Defect# 1-MFYYHK                                   JM 12/07/2011
     Populate helpUrl variable with empty string(''), if help url
     is not present, so java script will not break for helpUrl
     being undefined.	 
  2. Defect# 1-OZ4FEO                                   JM 12/07/2011
     The 'loop' whcih was consuming more memory is replaced with 
     better looping logic available in jQuery.
  3. Defect# 1-SYZIR2                                   JM 12/07/2011
     Bullet image should not over write menu text
  4. Defect# 1-TU34IP                                   JM 12/07/2011
     fetch global image details from json and render it only if 
     no bullet image is present
  5. Defect# 1-TQ8AQL                                   PR 13/07/2011
     When trying to perform a class search from Student,
     Class Search button is not working.
  6. Defect# 1-TQ8ARX                                   PR 13/07/2011
     Changes to simply hit enter to log in from login page(putting
     focus properly).
  6. Defect# 1-K6VDMT                                   PR 26/07/2011
     Browser specific substring logic for creating image url
	 is added.
  7. Defect# 1-UUDHVP                                   JM 26/07/2011
     Browser specific substring logic for creating image url
	 is added.
  8. Defect# 1-VENKZX                                   PR 03/08/2011
	 Cascade not supporting multiple info texts in login page.
  9. Defect 1-VWFE73                                    JM 09/08/2011
	 Fix to find the IE version 10, add check for correct
	 trident verison of IE 10.
 10. Defect 1-CSM094                                    PR 09/08/2011
	 Fix for Login page after timeout has different format 
 11. Defect 1-Y7GNHV                                    JM 13/09/2011
     Enable login button by default on Enter key press - IE8.
	 

  AUDIT TRAIL: 8.4.1.3
  1. Defect# 1-RT469O                                   JM 10/06/2011
     select incorrectly positioned links and place it inside 
     the correct parent dom element.
  2. Defect# 1-S57O57                                   JM 10/06/2011
     Use the label element with styles instead of label text, 
     to create new label
  3. Defect# 1-S5LDK0                                   JM 10/06/2011
     Remove Confirmation message box if present, 
     for home bread crumb link
  4. Defect# 1-RT469R                                   PR 05/04/2011
     Replace default image(green check image) of information 
     text box, with user selected image.	
  5. Defect# 1-MNQG6F                                   JM 05/06/2011
     IE9 support, JQuery.browser property of jQuery 
     version currentlty used not supporting IE9. 
     Added logic to dertermin IE9
  6. Defect 1-RNN90S                                    JM 05/06/2011
     Info text for menus, after closing, not removing the 
     space since the text was hiddend but not removed.
  7. Defect Defect 1-RADAVX                             JM 05/06/2011
     Infotext showing html characters since they were 
     not escaped/unescaped. 

  AUDIT TRAIL: 8.4.1.1
  1. Defect# 1-Q6KMRB                                 PR 05/04/2011
     External Links not working in Help Window. 
  2. Defect 1-MKRX28                                  PR 05/05/2011
     In Cascade, when using IE, Javascript error occurs on pages
     that have javascript events waiting for a return value.
  3. Defect 1-FDT7L1                                  PR 05/05/2011
     Submit buttons are not working in IE 8 with Cascade; 
  4. Defect: 1-MBW4CP                                  PR 05/10/2011
     Javascript errror prevent self-service from being accessible via firefox 4
  5. Defect :1-QCCOP0                                   PR 05/10/2011
     Google Analytics snippet causes code to display on page  
  6. Defect :1-QKOH2J                                   PR 05/16/2011
     HTML tag with list item and href item the information text 
     is displayed as a plain text 
        
  AUDIT TRAIL: 8.4.1
  1. Defect 1-B4OHQA                                        SVA 01/31/2011
     When you add a external websites link to the Homepage menu in web tailor, 
     it errors out. IE gives "cannot connect to the server error". Firefox
     gives a "PROCEDURE DOESN'T EXIST" error.
  2. Defect 1-B4RT2R                                        SVA 01/28/2011
     "Break in attempt has been detected" functionality not working.
  3. Defect 1-DOWM78                                        SVA 01/28/2011
     When resizing the browser window using Internet Explorer 6 and the 
     Cascade UI, the page is refreshed and all the entered data is lost.
  4. Defect 1-B5UNUA                                        SVA 01/28/2011
     Scrollable menu buttons to be enabled when a window is resized.
  5. Defect 1-DEWUE3                                        SVA 01/31/2011
     Translation for the label "Home" even if translated in the 
     common-platform.xml file and xml file deployed as required does show in 
     English or switches between English and French in a unilingual French 
     environment.
  6. Defect 1-FFP4CR                                        SVA 01/31/2011
     HTML text on homepage is not formatted when values coming from pl/sql.
  7. Defect 1-FG3A7X                                        SVA 01/31/2011
     Image references are defined using a relative path these images don't 
     display in Cascade HELP.
  8. Defect 1-CU1KD4                                        SVA 01/28/2011
     Help page containing javascript does not open up in cascade.
  9. Defect 1-E0HUQP                                        SVA 01/31/2011
     Cascade version of Student SS - Student - Student Accounts - 
     Account Detail by Term page does not display the ID, Name and Date/Time.
  10. Defect 1-G4RAXV                                        SVA 01/31/2011
     Access a Menu Item with more than one ampersand (&) in URL text in a 
     Cascade environment throws up error.
  11. Defect 1-B37AGH                                        SVA 01/31/2011
     Add audit trails.  
      
  AUDIT TRAIL: 8.4
  1. Defect 1-C0XF8R                                        SVA 
     Fix to handle the Complete URL links for 2nd and 3rd level pages.
  2. Defect 1-CVCH41                                        SVA 
     Error thrown by TWBKLIST due to calling twbkwbis.p_wwwlogin in 
     all lower case. Fix to handle the urls case insensitive.
  3. Defect 1-CY0JZQ                                        SVA 
     Fix for Javascript error in IE6. 
  4. Cascade Installation step Changes                      SVA 
     Changes to include the sslTrustStorePassword, 	sslTrustStoreType, 
     sslTrustStore, locale_settings variable.
  5. Defect 1-D8H7BF                                        SVA 
     Changes for information text for menu pages.
  6. Defect 1-CUFU31                                        SVA 07/05/2010  
     CASCADE interface not picking up NLS_LANG correctly for session
  7. Defect 1-DMZM2J & RPE 1-3HDMKV
     Ability to specify help window height and width in web tailor 
     parameters.
          
  AUDIT TRAIL: 8.3.1
  1. Defect 1-CD00L7                                        SVA 
     If LDAP / forgot pin is disabled, No forgot Pin button appears
     Instead a help link will appear.
  
  AUDIT TRAIL: 8.3.0.4 
  1. Defect 1-B37BXL, 1-BCCZRJ                              SVA 03/05/2010
     Submit buttons with return do not work when using IE8 and Cascade UI.
  2. Defect 1-98FK84, 1-BCCZRJ	                            SVA 03/05/2010
     Newly added preference is not displayed on page.
  3. Defect 1-AUGHH3                                        SVA 03/05/2010
     Ret_code parameter is ignored by twbkwbis.P_WWWLogin in Cascade UI.
  4. Defect 1-B3F002                                        SVA 03/05/2010
     Down-grade web pages display the header image twice when using the Cascade UI.
  5. Defect 1-B52MYC                                        SVA 03/05/2010
     Adding JavaScript in a menu link using the Menu Items option in 
     Web Tailor does not work with the Cascade UI.
  6. Defect 1-B1LD5B                                        SVA 03/05/2010
     The Cascade UI displays a different layout for the login page depending 
     on the case of the procedure in the URL.
  7. Defect 1-B8E768                                        SVA 03/05/2010
     Whenever the browser window is resized, the page refreshes.  
     The refresh causes data entered by the user to be lost on pages.
  8. Defect 1-AVJ7RI                                        SVA 07/05/2010
     main menu items do not display correctly when the Link Text/Description 
     has HTML tags.
  9. Defect 1-AWWLI0                                        SVA 07/05/2010
     The release number is inconsistent and is based upon previous navigation.

  AUDIT TRAIL END

  FILE NAME..: cascade-controls.js
  RELEASE....: 8.9.2
  PRODUCT....: WTLWEB
  COPYRIGHT..: Copyright 2010-2022 Ellucian Company L.P. and its affiliates.
*/
/**
 * @class Contains configuration values for the application
 * @author Jai chandramouli
 */
var Context = {
	/**
	 * Runs the application locally, where SESSID cookie is not present
	 */
	isLocal: false,
	/**
	 * Flag to run the application as standalone demo. This mode load static
	 * html pages for each level and doesn't connect to service for menu items.
	 */
	standalone: false,
	/**
	 * The URL of the help page. This is update on every page refresh from
	 * within generate* methods
	 */
	helpURL: null,
	/**
	 * variable to identify external or internal help URL
	 * Defect 1-CU1KD4
	 */
	extHelpURL: null,
	/**
	 * The URL for the logout page. This is populated in the HeaderLinks class.
	 */
	logoutURL: null,
	/**
	 * The URL for the login page.
	 * Defect fix : 1-B1LD5B, 1-CVCH41
	 */
	loginURL: 'twbkwbis.P_WWWLogin',
	/**
	 * The URL for the unauthenticated home page.
	 */
	homeURL: 'twbkwbis.P_GenMenu?name=homepage',
	
	/* 
	 * Indicator for Proxy Access to disable the Home and Search Links
	 */
	disableHome: null,
	/**
	 * Procedure name of the unauthenticated home page.
	 */
	unauthenticatedHomeProc:['unauthenticated_home.html', 'homepage'],
	/**
	 * Procedure name of the login screen. 
	 * 'twbkwbis.P_ValLogin'
	 * Defect fixes : 1-B1LD5B, 1-CVCH41
	 */
	loginProc:['login.html', 'twbkwbis.P_WWWLogin'],
	
	// Defect 1-CSM094 putting alert messages correctly to display the right loging window.
	/**
	 * Alert Messages in the login screen
	 * 'A break in attempt has been detected! Please login again.'
	 */
	 alertMsgs: ['A break in attempt has been detected','web session timeout','Authorization Failure - Invalid User ID or PIN'],
	// Defect 1-CSM094 End
	/**
	 * Procedure name of the logout screen.
	 * Defect Fix: 1-B1LD5B, 1-CVCH41
	 */
	logoutProc:['logout.html', 'twbkwbis.P_Logout'],
	/**
	 * Procedure name of Prospect Name page
	 */
	webProspectMainProc: ['web_prospect_main.html', 'bwskwpro.P_WebProspectMain'],
	/**
	 * values for standalone demo
	 */
	level1Page: "home.html",
	level2Page: "level2.html",
	level3Page: "level3.html",
	level4Page: "level4.html",
	WTAdminPage: "wtadmin.html",
	siteMapPage: "sitemap.html",
	
	level2URL: "xml/cascade.student.xml",
	level3URL: "xml/cascade.registration.xml",
	searchURL: "xml/cascade.search.personal.xml",
	/**
	 * 8.4 changes - Cascade Installation step & Internationalization Changes & Defect 1-DMZM2J
	 */
    sslTrustStorePassword : "",
	sslTrustStoreType : "",
	sslTrustStore : "",
	locale_settings : "EN",
	locale_lang:"en_US",
	helpWinHeight: "500",
	helpWinWidth: "450"
};
/**
 * Global Error handler for all service calls
 * 
 * @param {Object}
 *            XMLHttpRequest
 * @param {Object}
 *            textStatus
 * @param {Object}
 *            errorThrown
 * @author Jai chandramouli
 */
function errorHandler(XMLHttpRequest, textStatus, errorThrown) {
	
	Blocker.unblock();
	
	var msg = "";
	msg += "readyState:" + XMLHttpRequest.readyState + "\n";
	msg += "responseBody:" + XMLHttpRequest.responseBody + "\n";
	msg += "responseText:" + XMLHttpRequest.responseText + "\n";
	msg += "responseXML:" + XMLHttpRequest.responseXML + "\n";
	msg += "status:" + XMLHttpRequest.status + "\n";
	msg += "statusText:" + XMLHttpRequest.statusText + "\n";
	msg += "timeout:" + XMLHttpRequest.timeout + "\n";

	msg += "\n";
	msg += "textStatus:" + textStatus + "\n";
	msg += "errorThrown:" + errorThrown;
}

/**
 * @class Contains application specific details.
 */
var Application = {
	
	appDetails: [],
	
	/**
	 * Ex: http://m038034.sct.com:8000/s14s80/twbkwbis.P_GenMenu
	 */
	initialize: function() {
		Application.appDetails = Application.getURL().split("//");
	},
	/**
	 * Returns the complete window location url
	 */
	getURL: function() {
		return window.location.href;
	},
	/**
	 * Returns the protocol. Ex: http:
	 */
	getProtocol: function() {
		return Application.appDetails[0];
	},
	/**
	 * Returns the host name of the application. Ex: m038034.sct.com:8000
	 */
	getHost: function() {
		var end_at = Application.appDetails[1].indexOf('/');
		return Application.appDetails[1].substring(0, end_at);
	},
	/**
	 * Returns the application path from the window location. Ex:
	 * http://m038034.sct.com:8000/s14s80
	 */
	getApplicationPath: function(){
        var end_at = Application.appDetails[1].indexOf('/');
        var app = Application.appDetails[1].substring(end_at + 1, Application.appDetails[1].lastIndexOf('/'));
		var protocol = Application.getProtocol();
		var host  = Application.getHost();
        return protocol + "//" +  host + "/" + app;
    },
    /*8.4 changes for internationalization and installation step*/
    getDadName : function() {
		var end_at = Application.appDetails[1].indexOf('/');
		var app = Application.appDetails[1].substring(end_at + 1,
				Application.appDetails[1].lastIndexOf('/'));
		return app;
	},
	/**
	 * Returns the package.procedure name of the current page. Ex:
	 * bmenu.P_MainMnu
	 */
	getProc: function() {
		var procDetails = Application.appDetails[1].split('?');
		if(procDetails[1]) {
			var paramObj = deparam(procDetails[1], true);
			if(paramObj.name) {
				return paramObj.name;
			}
		}
		// if paramObj.name doesn't exist, continue
		var start_at = procDetails[0].lastIndexOf('/');
		return procDetails[0].split('#')[0].substring(start_at+1);
	},
	
	isUserAuthenticated: function() {
		var username = CommonContext.user;
		if(username) {
			return true;
		} else {
			return false;
		}
	},
	
	/**
	 * Redirects the browser to the specified <code>url</code>. In case of
	 * IE, the method ensures that the 'HTTP_REFERER' header is sent by simulating an
	 * anchor link click.
	 * 
	 * @param {String}
	 *            url
	 */
	navigateToURL: function(url) {
		if(!jQuery.browser.msie) {
			document.location = url;
			return;
		}
		var a = document.createElement("a");
		a.setAttribute("href", url);
		a.style.display = "none";
		$("body").append(a);
		a.click();
	}
};

/**
 * Generates a unique id based on the url (package.procedure name).
 * 
 * @param {Object}
 *            url
 */
var UIDGenerator = {
	
	token: 0,
	identifier: '___UID',
	dotSeperator: '--',
	
	getUIDFromURL: function(url) {
		// Defect 1-B52MYC
		if(url.indexOf('javascript') != -1) {
			return 'javascript' + this.uniqueID();
		}
		return url.replace('.', this.dotSeperator) + this.uniqueID();
	},
	
	getURLFromUID: function(uid) {
		return uid.substring(0, uid.indexOf(this.identifier)).replace(this.dotSeperator, '.');
	},
	
	uniqueID: function() {
		return this.identifier+this.token++;
	}
}
// Defect 1-CSM094
function checkAlertMessages(){
			var alertInd = false;
			if($('.pagebodydiv').children().hasClass('.plaintable')) {
								var alertMsg = $('.pagebodydiv').find('.plaintable td:eq(1)').html();
								
								if(alertMsg != null){
								$.each(
								Context.alertMsgs,
								function( intIndex, objValue ){
										if(alertMsg.toLowerCase().indexOf(objValue.toLowerCase()) >= 0){
											alertInd = true;								
											
										}
									}
								);	
							}
				}
			return alertInd;
		}
// Defect 1-CSM094		

/**
 * funciotn to find exact version of IE, even in copatibilityMode, where IE 8,9 may display MSIE version as 7
 * this is written, since jQuery.browser.version(in jQuery 1.3.2) was returning as 7 if IE 8,9 is in compatibility Mode.
 *
 * written as part of defect 1-MNQG6F
 * 
 * @author John Michael
 */
 function findIEVersion(){
	var version="NA";
	var userAgent = navigator.userAgent;
	// Look for msie and make sure its not opera in disguise
	//if(/msie/i.test(userAgent) && (!window.opera)){
	if((/msie/i.test(userAgent) || /rv/i.test(userAgent)) && (!window.opera)){
		// also check for spoofers by checking known IE objects
		//if(window.attachEvent && window.ActiveXObject){	//commented for IE11	

			// Get version displayed in user agent
			version = parseInt((userAgent.match( /.+ie\s([\d.]+)/i ) || [])[1]);
			// for IE7 or IE 8/9, running in 7 or compat mode for 7, version will appear as 7

			 
			//if(version == 7){
				// check if it is IE 8/9, pretending to be IE 7 or in compat mode					
				if(document.documentMode){// documentMode is supported in IE 8 or greater
					// so if document mode is supported, it is IE > 7.
					
					// IE in Compat mode will mention Trident in the useragent
					if(/.+Trident\/([\d.]+)/i .test(userAgent)){// check if trident is present in useragent string.
						
						// parsing triden version(4 - IE8, 5 - IE9)
	      					var tridenVersion = parseFloat((userAgent.match( /.+Trident\/([\d.]+)/i ) || [])[1]);
						
						if(tridenVersion == 4){// IE 8
							version = 8;
						}
						if(tridenVersion == 5){// IE 9
							version = 9
						}
						// Defect 1-VWFE73 
						if(tridenVersion == 6){// IE 10
							version = 10
						}
						// Defect 1-VWFE73 
						if(tridenVersion == 7){// IE 11
							version = 11
						}						
					}// end of if stmt to check if tridend it available
				}// end of if stmt to check document mode supported
			//}// end of if stmt to check version == 7
		//}// end of if stmt to chekc if browser is windows using known objects
	}// end of if stmt to check IE
				 
	return version;
}



/**
 * Submit handler for all html submit buttons
 * 
 * @author Jai chandramouli
 */
function beforeSubmit(e) {
	/*
	 * MSIE Fix In MSIE, buttons submit the innerHTML instead of the data in the
	 * Value attribute.
	 * 
	 * Solution1: Replace innerHTML with value so that the correct value is
	 * submitted. But, in case you are using a <Button> control with custom
	 * skinning (which is usually added as innerHTML, replacing the innerHTML
	 * would remove the skin as well.
	 * 
	 * Solution2: Inject a hidden field cloning the submitted button attributes
	 * before submitting. Remember to add it before the actual control so that
	 * the values of the new control takes precedence.
	 * 
	 * DONOT: change the <name> parameter of the existing controls, otherwise
	 * PLSQL will throw an <Bad parameter name> or <SIGNATURE (parameter names)
	 * MISMATCH> exception.
	 */
	if(jQuery.browser.msie) {
		if(parseInt(jQuery.browser.version) <= 6) {
			for(j=0; j<e.form.elements.length; j++)
                if( e.form.elements[j].tagName == 'BUTTON' )
                    e.form.elements[j].disabled = true;
					
			var hiddenField = $('<INPUT TYPE="hidden" NAME="' + e.name + '" VALUE="' + e.attributes['value'].value + '">');
			if(e.type == 'submit') {
				$(e).before(hiddenField);
				e.disabled = true;
			}
		} else if(findIEVersion() < 9){ // Defect 1-MNQG6F
			var hiddenField = $('<INPUT TYPE="hidden" NAME="' + e.name + '" VALUE="' + e.attributes['value'].value + '">');
			if(e.type == 'submit') {
				$(e).before(hiddenField);
				e.disabled = true;
			}
		}else{
/*		
			// 1-TQ8AQL, add class search button to hidden field list
			// in IE 9, if the button name is not empty and any of the following, we need hidden field to submit the form properly
			if(e.name == 'SUB_BTN' || e.name == 'ADD_BTN' || e.name =='btnSelected' || e.name == 'complete' || e.name == 'REG_BTN' || e.name == 'SUBMITBUTTON'){
			
				var hiddenField = $('<INPUT TYPE="hidden" NAME="' + e.name + '" VALUE="' + e.attributes['value'].value + '">');
				if(e.type == 'submit') {
					$(e).before(hiddenField);
					e.disabled = true;
				}
			}
*/
			// commented out the had coding fix for button issue and including generic fix.
			// 1-UUDHVP, provide hidden filed of those submit buttons with name.
			if(e.name != undefined && e.name != '')	{
				if(e.type == 'submit') {
					var hiddenField = $('<INPUT TYPE="hidden" NAME="' + e.name + '" VALUE="' + e.attributes['value'].value + '">');
					$(e).before(hiddenField);
					e.disabled = true;
				}
			}
					
		}
	} else if(jQuery.browser.safari){	
		/*
		 * In safari, the clicked button id is not submitted for the method type
		 * is "POST".
		 */

     /* Not Required in higher versions. submit button values are populated on submit click button */
    
    /* 
		var hiddenField = $('<INPUT TYPE="hidden" NAME="' + e.name + '" VALUE="' + e.attributes['value'].value + '">');
		if(e.type == 'submit') {
			$(e).before(hiddenField);
			e.disabled = true;	
		}
    */
	}
}

function enableButtonsInForm(f) {
	
	function _enableBtns(f) {
		// check if this is a jquery object, if so, override variable to point
		// to the DOM object.
		if(f.get) {
			f = f.get(0);
		}
			
		if(f.form) {
			for(j=0; j<f.form.elements.length; j++)
		                if( f.form.elements[j].tagName == 'BUTTON' )
		                    f.form.elements[j].disabled = false;	
		} else {
			if(f.tagName == 'BUTTON') {
				f.disabled = false;
			}
		}
	}
	
	setTimeout(function(){
		_enableBtns(f);
	}, 1000);
}

/**
 * HTML button control
 * 
 * @param {Object}
 *            options
 * @author Jai chandramouli
 */
function HTMLButton(options) {
	var target 		= this;
	var id 			= options.id;
	var name		= options.name;
	var value		= escapeHTML(options.value);
	var url 		= options.url;
	var type 		= options.type;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var inputType	= options.inputType;
	var disabled	= options.disabled;
	
	//EapenM - case 01133921
	value = value.replace(/'/g,"&#39;");	
	
	if (typeof(value) == "undefined") {
        value = "";
    }

	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(type) == "undefined") {
        type = "blank";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(inputType) == "undefined") {
        inputType = "button";
    }
		
	if (typeof(disabled) == "undefined") {
        disabled = false;
    }
	
	var buttonString;
	if(typeof(name) == "undefined" || name == "" || name == null) {
		buttonString = "<button id='id_" + id + "' type='" + inputType + "' value='" + value + 
		"' onclick='beforeSubmit(this)'" +
		"' class='htmlButton" + '' + "' url='" + url + "'>"
	} else {
		buttonString = "<button id='id_" + id + "' type='" + inputType + "' name='" + name + "' value='" + value + 
		"' onclick='beforeSubmit(this)'" +
		"' class='htmlButton" + '' + "' url='" + url + "'>"
	} 	
	
	var b = $(buttonString
			+ "<div class='"+ type +"'>"
            + "<div>"
            + "<div>" + value + "</div>"
            + "</div>"
			+ "</div>"
 			+ "</button>"
			);
	
	
	if(disabled) {
		var elem = b.find('.' + type);
		elem.css('color', '#000000');
		b.css('cursor', 'default');
		
		b.attr('disabled', 'disabled');
	}
	
	b.mouseover(function(){
		if(type == 'defaultButton') {
			$(this).children().css("background-position", "0px -108px");
			$(this).children().children().css("background-position", "right -81px");
			$(this).children().children().children().css("background-position", "0px -135px");
		} else {
			$(this).children().css("background-position", "left -44px");
            $(this).children().children().css("background-position", "right -44px");
            $(this).children().children().children().css("background-position", "0px -66px");
		}
		
    }).mouseout(function(){
		if(type == 'defaultButton') {
			$(this).children().css("background-position", "0px -27px");
			$(this).children().children().css("background-position", "right 0px");
			$(this).children().children().children().css("background-position", "0px -54px");
		} else {
			$(this).children().css("background-position", "left 0px");
            $(this).children().children().css("background-position", "right 0px");
            $(this).children().children().children().css("background-position", "0px -22px");
		}
		
    });
	
	b.click(function(){
		if (typeof(callback) == "function") {
			callback({
				id: id,
				value: value,
				url: url,
				type: type,
				selected: selected,
				target: target
			});
		}
	});
	return b;
}

/**
 * Navigation button control
 * 
 * @param {Object}
 *            options
 * @author Jai chandramouli
 */
function NavigationButton(options) {
	var target 		= this;
	var id 			= options.id;
	var name		= options.name;
	var value		= escapeHTML(options.value);
	var label 		= escapeHTML(options.label);
	var url 		= options.url;
	var type 		= options.type;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var inputType	= options.inputType;
	var disabled	= options.disabled;
	
	if (typeof(value) == "undefined") {
        value = label;
    }

	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(type) == "undefined") {
        type = "blank";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(inputType) == "undefined") {
        inputType = "button";
    }
	if (typeof(disabled) == "undefined") {
        disabled = false;
    }
	
	var buttonString;
	if(typeof(name) == "undefined" || name == "" || name == null) {
		buttonString = "<button id='" + id + "' type='" + inputType + "' value='" + value 
		+ "' class='htmlButton " + type + 'baseButton' + "' url='" + url + "'>"
	} else {
		buttonString = "<button id='" + id + "' type='" + inputType + "' name='" + name + "' value='" + value 
		+ "' class='htmlButton " + type + 'baseButton' + "' url='" + url + "'>"
	} 	
	
	var b = $(buttonString
            + "<div class='menu'>"
			+ "<div><span>" + label + "</span></div>"
			+ "</div>"
 			+ "</button>");
	
 	function select() {
		highlight(true);
		selected = true;
		
		EventDispatcher.dispatchEvent('highlight', {
			id: id,
			label: label,
			url: url,
			type: type,
			selected: selected,
			target: target
		});
	}
	
	function highlight(flag) {
		if(flag) {
			b.find('.' + type).css("background-position", "0px -50px");
			// Begin of Defect #1-1B7N2AO
			if (/chrome/.test(navigator.userAgent.toLowerCase()) || /safari/.test(navigator.userAgent.toLowerCase()) )	
				b.find('.' + type).css("margin", "1px 11px 5px 5px");
			if (jQuery.browser.msie && jQuery.browser.version ==8 )
				$("#navigationcontrol").css("margin-top", "-30px");
			// End of Defect #1-1B7N2AO
			b.find('.' + type).children("div").css("background-position", "right -50px");
			b.find('.' + type).children("div").children("span").css("background-position", "right -164px");
		} else {
			b.find('.' + type).css("background-position", "0px 0px");
			// Begin of Defect #1-1B7N2AO
			if (/chrome/.test(navigator.userAgent.toLowerCase()) || /safari/.test(navigator.userAgent.toLowerCase()) ) 
				b.find('.' + type).css("margin", "1px 11px 5px 5px");
			if (jQuery.browser.msie && jQuery.browser.version ==8 )
				$("#navigationcontrol").css("margin-top", "-30px");
			// Begin of Defect #1-1B7N2AO
			b.find('.' + type).children("div").css("background-position", "right 0px");
			b.find('.' + type).children("div").children("span").css("background-position", "0px -103px");
		}
	}
	
	b.mouseover(function() {
	   	highlight(true)
    }).mouseout(function() {
		if (selected) {
			return;
		}
		highlight(false);
    }).click(function(){
		if (typeof(callback) == "function") {
			callback({
				id: id,
				label: label,
				url: url,
				type: type,
				selected: selected,
				target: target
			});
		}
		select();
	}).select = select;
	
	if(selected) {
		highlight(true);
	}
	
	// add listener
	EventDispatcher.addEventListener('highlight', function(data) {
		if(label != data.label) {
			highlight(false);
			selected = false;
		}
	});

	return b;
}
/**
 * Navigation button control
 * 
 * @param {Object}
 *            options
 * @author Jai chandramouli
 */
function NavigationSmallButton(options) {
	var target 		= this;
	var id 			= options.id;
	var name		= options.name;
	var value		= escapeHTML(options.value);
	var label 		= escapeHTML(options.label);
	var url 		= options.url;
	var type 		= options.type;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var inputType	= options.inputType;
	var disabled	= options.disabled;
	
	if (typeof(value) == "undefined") {
        value = label;
    }

	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(type) == "undefined") {
        type = "blank";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(inputType) == "undefined") {
        inputType = "button";
    }
	if (typeof(disabled) == "undefined") {
        disabled = false;
    }
	
	var buttonString;
	if(typeof(name) == "undefined" || name == "" || name == null) {
		buttonString = "<button id='" + id + "' type='" + inputType + "' value='" + value 
		+ "' class='htmlButton " + type + 'BaseButton' + "' url='" + url + "'>"
	} else {
		buttonString = "<button id='" + id + "' type='" + inputType + "' name='" + name + "' value='" + value 
		+ "' class='htmlButton " + type + 'BaseButton' + "' url='" + url + "'>"
	} 	
	
	var b = $(buttonString
			+ "<div class='"+type+"'>"
            + "<div><div>" + label + "</div></div>"
			+ "</div>"
 			+ "</button>");
	
 	function select() {
		
		b.find('.' + type).addClass(type+'Highlight');
		
		selected = true;
		
		EventDispatcher.dispatchEvent(type+'Highlight', {
			id: id,
			label: label,
			url: url,
			type: type,
			selected: selected,
			target: target
		});
	}
	
	b.mouseover(function() {
	   $(this).find('.' + type).addClass(type+"Over");
	   
    }).mouseout(function() {
	   $(this).find('.' + type).removeClass(type+"Over");
	   
    }).click(function(){
		
		if (typeof(callback) == "function") {
			callback({
				id: id,
				label: label,
				url: url,
				type: type,
				selected: selected,
				target: target
			});
		}
		select();
		
	}).select = select;
	
	if(selected) {
		b.find('.' + type).addClass(type+'Highlight');
	}
	
	// add listener
	EventDispatcher.addEventListener(type+'Highlight', function(data) {
		if(label != data.label) {
			b.find('.' + type).removeClass(type+'Highlight');
			
			selected = false;
		}
	});

	return b;
}
/**
 * Link control
 * 
 * @param {Object}
 *            id
 * @param {Object}
 *            label
 * @param {Object}
 *            url
 * @param {Object}
 *            callback
 * @author Jai chandramouli
 */
function Link(options){

	var target 		= this;
	var id 			= options.id;
	var label 		= escapeHTML(options.label);
	var url 		= options.url;
	var styleName	= options.styleName;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var enabled		= options.enabled;
	
	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(enabled) == "undefined") {
        enabled = true;
    }
	
	if (typeof(styleName) == "undefined") {
        styleName = "";
    }
	
	var b = $(""
			+ "<a href='javascript:void(0)' class='"+styleName+"'>"
			+ label
 			+ "</a>"
			);
	
	if(!enabled) {
		b.css('cursor', 'default');
	}	

 	function select() {
		b.find('.' + styleName).addClass(styleName+'Highlight');
		
		selected = true;
		
		EventDispatcher.dispatchEvent(styleName+'Highlight', {
			id: id,
			label: label,
			url: url,
			styleName: styleName,
			selected: selected,
			enabled: enabled,
			target: target
		});
	}
	
	b.hover(function() {
	   
    }).mouseleave(function() {
	   
    }).click(function(){
		if (enabled) {
			if (typeof(callback) == "function") {
				callback({
					id: id,
					label: label,
					url: url,
					styleName: styleName,
					selected: selected,
					enabled: enabled,
					target: target
				});
			}
			select();
		}
		return false;
	}).select = select;
	
	if(selected) {
		b.addClass(styleName+'Highlight');
	}
	
	// add listener
	EventDispatcher.addEventListener(styleName+'Highlight', function(data) {
		if(label != data.label) {
			b.removeClass(styleName+'Highlight');
			selected = false;
		}
	});

	return b;
};

/**
 * level2Button control
 * 
 * @param {Object}
 *            options
 * @author Jai chandramouli
 */
function level2Button(options){

	var target 		= this;
	var id 			= options.id;
	var label 		= options.label; /* Defect 1-AVJ7RI */
	var description	= options.description; /* Defect 1-AVJ7RI */
	var url 		= options.url;
	var styleName	= options.styleName;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var enabled		= options.enabled;
	var hasChildren = options.hasChildren;
	
	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(description) == "undefined") {
        description = "";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(enabled) == "undefined") {
        enabled = true;
    }
	
	if (typeof(styleName) == "undefined") {
        styleName = "";
    }
	
	if (typeof(hasChildren) == "undefined") {
        hasChildren = false;
    }
	
	var b = $("<div id='"+id+"' class='"+styleName+"'>"
			+ "<h3>"
			+ label
 			+ "</h3>"
			+ ((description != "") ? "<p>" + description + "</p>" : "")
			+ "</div>");
	
	if(!hasChildren) {
		b.find('h3').css('background', 'none');
	}
	
	function select() {
		b.addClass("selected");
		selected = true;
		
		EventDispatcher.dispatchEvent('level2ButtonSelected', {
			id: id,
			label: label,
			description: description,
			url: url,
			selected: selected,
			target: target
		});
		
		// fix to remove the auto scroll issue in IE.
		// Whenever a level2 button is clicked, the page automatically scroll up
		// exactly one block.
// b.focus();
	}
	
	if(!enabled) {
		b.css('cursor', 'default');
	}	
	
	if(selected) {
		b.addClass("selected");
	}
	
	b.mouseenter(function() {
		$(this).addClass("hover");
	});
	b.mouseleave(function() {
		$(this).removeClass("hover");
	});
	
	b.click(function(){
		if (enabled) {
			if(!selected) {
				select();
			}
			else
			{
				b.removeClass("selected");
				selected = false;
			}
			
			if (typeof(callback) == "function") {
				callback({
					id: id,
					label: label,
					description: description,
					url: url,
					styleName: styleName,
					selected: selected,
					enabled: enabled,
					target: target
				});
			}
		}
	});
	
	b.select = select;
	b.id = id;
	
	// add listener
	EventDispatcher.addEventListener('level2ButtonSelected', function(data) {
		
		if(label != data.label) {
			b.removeClass("selected");
			selected = false;
			b.blur();
		}
	});
	
	return b;
};

/**
 * subMenuRightButton control
 * 
 * @param {Object}
 *            options
 * @author Jai chandramouli
 */
function subMenuRightButton(options){

	var target 		= this;
	var id 			= options.id;
	var label 		= options.label; /* Defect 1-AVJ7RI */
	var description	= options.description; /* Defect 1-AVJ7RI */
	var url 		= options.url;
	var styleName	= options.styleName;
	var callback 	= options.callback;
	var selected 	= options.selected;
	var enabled		= options.enabled;
	var showDesc	= options.showDesc;
	
	if (typeof(url) == "undefined") {
        url = "";
    }
	
	if (typeof(description) == "undefined") {
        description = "";
    }
	
	if (typeof(selected) == "undefined") {
        selected = false;
    }
	
	if (typeof(enabled) == "undefined") {
        enabled = true;
    }
	
	if (typeof(styleName) == "undefined") {
        styleName = "";
    }
	
	if (typeof(showDesc) == "undefined") {
        showDesc = true;
    }
	
	var b = $("<a id='"+id+"' title='"+description+"' href='javascript:void(0)'>"
			+ "<h3>"
			+ label
 			+ "</h3>"
			+ ((showDesc && description != "") ? "<p>" + description + "</p>" : "")
			+ "</a>");
	
	if(!enabled) {
		b.css('cursor', 'default');
	}	
	
	b.click(function(){
		if (enabled) {
			if (typeof(callback) == "function") {
				callback({
					id: id,
					label: label,
					description: description,
					url: url,
					styleName: styleName,
					selected: selected,
					enabled: enabled,
					target: target
				});
			}
		}
		return false;
	});
	
	return b;
};

/**
 * container for holding all content inside the SSB page
 * 
 * @author Jai chandramouli
 */
function contentHolder() {
	if(typeof(_contentHolder) == "undefined") {
		_contentHolder = $("<div id='contentHolder'>"
							+ "<div id='contentBelt'>"						
							+ "</div>"
							+ "</div>"
							);
	}
	return _contentHolder;
}

/**
 * Login window.
 * 
 * @author Jai chandramouli
 */
function LoginWindow() {
	return out = $('<div id="loginPanel">' + '<div id="topCap"></div>'
			+ '<div id="middle">' + '<h1 class="loginHeading">Sign In</h1>'
			+ '<span id="loginmessage"></span>' + '<ol>' + '<li>'
			+ '<label for="txtUID">User ID</label>'
			+ '<input id="txtUID" type="text" />' + '</li>' + '<li>'
			+ '<label for="txtPIN">PIN</label>'
			+ '<input id="txtPIN" type="text" />' + '</li>' + '</ol>'
			+ '<div class="buttonRow">' + '<div class="defaultButton2">'
			+ '<div>' + '<div>Sign In</div>' + '</div>' + '</div>'
			+ '<div class="defaultButton2">' + '<div>'
			+ '<div>Forgot PIN?</div>' + '</div>' + '</div>' + '</div>'
			+ '</div>' + '<div id="bottomCap"></div>' + '</div>');
};


function generateFourthLevel(content, type, pageReferrerId, container) {
	// if this page is not downgraded, do this
	if($.inArray(Application.getProc(), CascadeDowngrade.exceptions) == -1) {

		// enable scroll
		$('#content').addClass('level4');
		$('#pagebody').addClass('level4');
		
		
		contentHolder().find('#contentBelt').remove();
		
		var tabContent = $('body').find('.pagebodydiv table table td[class^="tab"]');
		if( tabContent.length > 0 ) {
			InnerTabs.initialize(tabContent, $('#pagebody'));
			$('body').find('.pagebodydiv table table td[class^="tab"]').parent().remove();
		}
		
		// render the page content into the pageBody element
		$('body').find('.menuplaintable').removeClass('menuplaintable');
		
		contentHolder().append($('body').find('.pagebodydiv:first').contents());
		
		// add static headers
		var staticHeadersContent = $('body').find('.staticheaders').html();
		if( staticHeadersContent )
		$('#pageheader').append("<div class='staticheaders'>" + staticHeadersContent + "</div>");
		
		// remove the horizontal line
		$('.bgtabon').removeClass();
		
		$('body').find('.infotext').find('p').prepend('<br>');
		
		$('body').find('.bordertable').after('<br>');
		
		/*
		 * some pages might have directory listing of alphabets along with
		 * footer links. ExtraLinks is a helper class to manage both
		 */
        var pagefooterlinks = contentHolder().find('.pagefooterlinks');
        pagefooterlinks.each(function(e, element) {
              var links = $(element).find('a[class!="skiplinks"]');
              if( links.length > 0 ) {
                    ExtraLinks.initialize(links, $(element).parent());
              }
              $(element).remove();
        });

		// adds the bottom most footerlinks
		var links = $('body').find('.pagefooterlinks a[class!="skiplinks"]');
		if( links.length > 0 ) {
            ExtraLinks.initialize(links, contentHolder());
			links.parent().remove();
		}
		
		// remove blue background from rows that are not headers
		contentHolder().find('th[class="ddlabel"][scope="row"]').css({
			'background': 'none',
			'color': '#000'
		});
	}
}

/**
 * Generate third level content
 * 
 * @param {Object}
 *            content
 * @param {String}
 *            type
 * @param {Object}
 *            container
 * @param {String}
 *            pageReferrerId
 * @author Jai chandramouli
 */	
function generateThirdLevel(content, type, pageReferrerId, container) {
	
	pageDepth = 3;
	
	var btn = null;

	PageRenderer.selectButton(pageReferrerId);
	
	btn = PageRenderer.getSelectedButton()
	
	if(typeof(type) == "undefined") {
		type = 'html';
	}
	
	if(typeof(container) == "undefined") {
		container = contentHolder();
	}
	
	var rowId = btn == null ? 1 : btn.data('rowId');
	var level3Container = container.find('.row'+rowId);
	
	if(btn) {
		level3Container.addClass(btn.id);
	}
	
	// clear right sub menu content, if any
	var h = level3Container.height();
	level3Container.empty();

	function callback(data) {
		if(Context.standalone) {
			Application.navigateToURL(Context.level4Page);
			return;
		}
		// if the link points to a 4th level page, then exit.
		if(data.url.indexOf('mailto') != -1 || data.url.indexOf('http') != -1) {	// mailto,
																					// direct
																					// links
			Application.navigateToURL(data.url);
			return;
		} else if(data.url.indexOf('javascript') != -1) { // defect 1-B52MYC
			// execute the java script
			if(window.execScript) {	// if this is MSIE
				window.execScript(data.url);
			} else {
				eval(data.url);
			}
			return;
		} else {
			Application.navigateToURL(Application.getApplicationPath()+ "/" +data.url);
			return;
		}
	}
		
	// ===================================================
	level3Container.append("<ul class='items'/>");
	
	var panelHeight = 0;
	
	if (type == 'html') {
		
		content.each(function(e, element){
		
			var node = $(element).find('td:eq(1)');
			
			var label = node.find('a').html();
			var url = node.find('a').attr('href');
			// Defect 1-C0XF8R
			if(url.indexOf('http') == -1) {
				    url = url.substring(url.lastIndexOf('/') + 1, url.length);
			}
			
			var desc = node.find('.menulinkdesctext').html();
			
			var item = new subMenuRightButton( {
				id : 'contentItem' + rowId + e,
				label : label,
				description : desc,
				url : url,
				styleName : '',
				showDesc : false,
				callback : callback
			});
			var li = $("<li></li>");
			li.append(item);
			level3Container.find('ul').append(li);
			var e = li;
			var itemHeight = e.height();
			var marginTop = e.css('margin-top') == 'auto' ? 0 : parseInt(e
					.css('margin-top'), 10);
			var marginBottom = e.css('margin-bottom') == 'auto' ? 0 : parseInt(
					e.css('margin-bottom'), 10);
			var paddingTop = e.css('padding-top') == 'auto' ? 0 : parseInt(e
					.css('padding-top'), 10);
			var paddingBottom = e.css('padding-bottom') == 'auto' ? 0
					: parseInt(e.css('padding-bottom'), 10);
			panelHeight += itemHeight + marginTop + marginBottom + paddingTop
					+ paddingBottom;
		});
	} else if (type == 'xml') {
		$(content).find('levelEntries navigationEntryValueObject').each(
				function(e, element) {
					// 1-SYZIR2, render bullet image and menu link image for the submenu, if the images are present.
					var label = "";
					
					var bulletImageDetails = $(element).attr('bulletImageDetails')
					if(bulletImageDetails != undefined && bulletImageDetails != ''){
						
						var imageDetails = bulletImageDetails.split("-;-");
						
						var bulletImageTag = "<IMG SRC=" + imageDetails[0] 
							+ " ALIGN='" + imageDetails[1] + "'" 
							+ " ALT='" + imageDetails[2] + "'" 
							+ " class='headerImg'" 
							+ " TITLE='" + imageDetails[3]  + "'"  
							+ " NAME='" + imageDetails[4]  + "'"
							+ " HSPACE=0 VSPACE=0 BORDER=0 "
							+ " WIDTH=" + imageDetails[5]  
							+ " HEIGHT=" + imageDetails[6]  + "/>";
						
						label += bulletImageTag + "<br/>";
					}else{ // 1-TU34IP, render globla image, only if no bullet image is present
						var globalImageDetails = $(element).attr('globalImageDetails')
						if(globalImageDetails != undefined && globalImageDetails != ''){
							var imageDetails = globalImageDetails.split("-;-");
							var bulletImageTag = "<IMG SRC=" + imageDetails[0] 
								+ " ALIGN='" + imageDetails[1] + "'" 
								+ " ALT='" + imageDetails[2] + "'" 
								+ " class='headerImg'" 
								+ " TITLE='" + imageDetails[3]  + "'"  
								+ " NAME='" + imageDetails[4]  + "'"
								+ " HSPACE=0 VSPACE=0 BORDER=0 "
								+ " WIDTH=" + imageDetails[5]  
								+ " HEIGHT=" + imageDetails[6]  + "/>";
							
							label += bulletImageTag + "<br/>";
						}
						// 1-TU34IP end
					}
					var linkImagDetails = $(element).attr('linkImageDetails')
					if(linkImagDetails != undefined && linkImagDetails != ''){

						var imageDetails = linkImagDetails.split("-;-");
						
						var linkImageTag= "<IMG SRC=" + imageDetails[0] 
							+ " ALIGN='" + imageDetails[1] + "'" 
							+ " ALT='" + imageDetails[2] + "'" 
							+ " class='headerImg'" 
							+ " TITLE='" + imageDetails[3]  + "'"  
							+ " NAME='" + imageDetails[4]  + "'"
							+ " HSPACE=0 VSPACE=0 BORDER=0 "
							+ " WIDTH=" + imageDetails[5]  
							+ " HEIGHT=" + imageDetails[6]  + "/>";

						label += linkImageTag + "<br/>";
					}
					
					label += UnEscapeHTML($(element).attr('menu'));
					// 1-SYZIR2 end of image rendering logic

					var url = UnEscapeHTML($(element).attr('path'));
					//url = url.replace('&amp;', '&'); 1-G4RAXV
					url = url.replace(/&amp;/gi, '&');
					var options = $(element).attr('options');
					if (typeof (options) != 'undefined' && options != '') {
						options = options.replace('&amp;', '&');
						if (url.indexOf("?") != -1) {
							url = url + "&" + options;
						} else {
							url = url + "?" + options;
						}
					}
					var desc = UnEscapeHTML($(element).attr('description'));
					var item = new subMenuRightButton( {
						id : 'contentItem' + rowId + e,
						label : label,
						description : desc,
						url : url,
						styleName : '',
						showDesc : false,
						callback : callback
					});
					var li = $("<li></li>");
					li.append(item);
					level3Container.find('ul').append(li);
					var e = li;
					var itemHeight = e.height();
					var marginTop = e.css('margin-top') == 'auto' ? 0
							: parseInt(e.css('margin-top'), 10);
					var marginBottom = e.css('margin-bottom') == 'auto' ? 0
							: parseInt(e.css('margin-bottom'), 10);
					var paddingTop = e.css('padding-top') == 'auto' ? 0
							: parseInt(e.css('padding-top'), 10);
					var paddingBottom = e.css('padding-bottom') == 'auto' ? 0
							: parseInt(e.css('padding-bottom'), 10);
					panelHeight += itemHeight + marginTop + marginBottom
							+ paddingTop + paddingBottom;
				});
		var helpURL = UnEscapeHTML($(content).find('extra').attr('url'));

		// 1-MFYYHK, check if helpURL is not null, and proceed with logic only if it is not 'undefined'.
		if(helpURL){
			$('.helpText').css('display', 'block');
			if(helpURL.split(" ").length >0){
				if(helpURL.indexOf('/') === 0) {
					helpURL = helpURL.substring(1);
				}
				else{ // get the url correctly if the help is not a URL but an infotext.
					helpURL = Application.getDadName() + "/twbkfrmt.P_DispHelp?pagename_in=" + UIDGenerator.getURLFromUID( pageReferrerId);
				}
				Context.helpURL = Application.getProtocol() + "//" + Application.getHost() + "/" + helpURL;
				Context.extHelpURL = 'FALSE';
			} else {
				Context.helpURL = helpURL;
				Context.extHelpURL = 'TRUE';
			}
		}else{
			$('.helpText').css('display', 'none');
		}
		//1-MFYYHK,  End
		// this is to rest the release Defect 1-AWWLI0
		var rel = $(content).find('extra').attr('release');
		FooterText.reset(rel);

		// add breadcrumbs
		Crumb.generateCrumb(content, pageReferrerId, pageDepth);
		
		// add the information text got from services. 1-D8H7BF 
		var infoText = $(content).find('extra').attr('infoText');
		
		infoText = UnEscapeHTML(infoText); // Defect 1-RADAVX
		
		// Defect# 1-RT469R Start, Replace default image with user selected image			
		var imageName = $(content).find('extra').attr('imageName');
		var imageUrl = $(content).find('extra').attr('imageUrl');
		var imageAlt = $(content).find('extra').attr('imageAlt');
		var imageHeight = $(content).find('extra').attr('imageHeight');
		var imageWidth = $(content).find('extra').attr('imageWidth');
		var imageTag;
		if(imageName != null){
			imageTag = '<IMG SRC="'+imageUrl+ '" ALT="'+imageAlt+'" TITLE="'+imageAlt+'" NAME= "'+imageName+'" HEIGHT="'+imageHeight+'" WIDTH="'+imageWidth+'" /> ';
		}
		
		
		if(imageTag != undefined){
		infoText = imageTag + infoText;
	 	}
		 // Defect# 1-RT469R END
		
		container.find('#contentBelt').append('<SPAN class="serviceInfotext">' + infoText + '</SPAN>');
		ConfirmationMessage.show($('#contentBelt'));
		
		// Add title to head
        document.title = $('#'+pageReferrerId + ' h3').text();
        
      

	}
	
	level3Container.css({height: 'auto', display: 'block'});
	// match the height for all items
	var maxHeight = 0;
	level3Container.find('li').each(function(i, e) {
		var id = $(this).find('a').attr('id');
		var itemHeight = document.getElementById(id).offsetHeight;
		if( itemHeight > maxHeight ) {
			maxHeight = itemHeight;
		}
	});
	if(maxHeight > 0)
	level3Container.find('li').css('height', maxHeight)
	
	var newH = level3Container.height()+parseInt(level3Container.css('margin-top'))+parseInt(level3Container.css('margin-bottom'));
	
	if(h == 0) {
		level3Container.css({
			display: 'none'
		});
		level3Container.slideDown();
	} else {
		level3Container.css({
			height: h
		});
		level3Container.animate({'height': newH}, 'normal');
	}
				
};

	 
/**
 * Search control
 * 
 * @author Jai chandramouli
 */
function searchField(searchURL) {
	    
	var out = $("<div id='searchField'>"
			+ "<span class='findicon'/>"
            + "<input class='searchInput' type='text' value=''/>"
            + "<span class='closeicon'/>"
            + "</div>");    
   	
	var dataType = null;
	
	/* Check for Proxy Access to disable Search Link */
	if(Context.disableHome != true){
	
	function genURL() {

		keyword = out.find("input").attr('value');
		/*8.4 changes for internationalization and installation step*/
		searchString = keyword + "/" + sessionToken + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
		searchURL = DEFAULT_SEARCH_URL + searchString;
		out.find("input").setOptions( {
			url : searchURL
		});
		return 0;
	}
		
	function parse(data){
		if(dataType == 'json') {
			data = stringToDoc( $.json2xml(data).replace(/\+/g, '%20') );			
		}
		
		var parsed = [];
		$(data).find('navigationEntryValueObject').each(function(e, element){
			parsed[parsed.length] = {
				data: [Url.decode($(this).attr('name'))],
				value: Url.decode($(this).attr('path')),
				result: []
			};
		});
		
		return parsed;
	}
	
	
	
	out.find("input").focus(function() {
        if(this.value == ResourceManager.getString("find_a_page")) {
	        this.value = "";
		}
		$("#searchField").css("background-position", "left -33px");
    });
    
    out.find("input").blur(function() {
		$("#searchField").css("background-position", "left top");
        if(this.value == "") {
	        this.value = ResourceManager.getString("find_a_page");
			out.find(".closeicon").removeClass('enabled');
			$("#searchField span.closeicon").css("visibility", "hidden");
		}
    });
    
	out.find("input").keyup(function() {
		if($(this).attr('value') != '') {
			$("#searchField span.closeicon").css("visibility", "visible");
			out.find(".closeicon").addClass('enabled');
		} else {
			$("#searchField span.closeicon").css("visibility", "hidden");
			out.find(".closeicon").removeClass('enabled');
		}
	});
	
	out.find(".closeicon").click(function() {
		if(out.find(".closeicon").hasClass('enabled')) {
			out.find("input").attr('value', '');
			out.find(".closeicon").removeClass('enabled');
			out.find("input").focus();
			out.find("input").hideResults();
		}
	});
	
	out.find("input").result(function(event, data, formatted) {
		if (Context.standalone) {
			Application.navigateToURL(Context.level4Page);
		} else {
			Application.navigateToURL(formatted);
		}
	});
	
	if(Context.standalone) {
		dataType = 'xml';
		out.find("input").autocomplete(Context.searchURL, {
                                        max: 1000,
                                        selectFirst: false,
                                        parse: parse,
										dataType: dataType,
										minChars: SearchConstants.searchStartLength,
										highlight: false
                                        }).css('width','500px');
	}
	else
	{
		out.find("input").attr('value', ResourceManager.getString("find_a_page"));
		
		var DEFAULT_SEARCH_URL = Bannerservice.url + Bannerservice.endpoints[1];
		var keyword = "";
		/*8.4 changes for internationalization and installation step*/
		var searchString = keyword + "/" + sessionToken + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
		if (searchURL == null) {
			searchURL = DEFAULT_SEARCH_URL + searchString;
		}
		dataType = 'json';
		out.find("input").autocomplete(searchURL, {
	                                            max: 1000,
	                                            selectFirst: false,
	                                            parse: parse,
												extraParams: {id:genURL},
	                                            dataType: dataType,
												minChars: SearchConstants.searchStartLength
	                                            });		
	}
	
	EventDispatcher.addEventListener(Localization.events.localeChange,
			        function() {
			            out.find("input").attr('value', ResourceManager.getString("find_a_page"));
			        });

	}
	return out;
}
	
/**
 * Generates the second level content by rendering the content into the
 * subMenuLeft panel
 * 
 * @param {Object}
 *            content
 * @param {String}
 *            type
 * @param {Object}
 *            container
 * @author Jai chandramouli
 */
function generateSecondLevel(content, type, pageReferrerId, container, isHome) {
	
	if(typeof(isHome) == 'undefined') {
		isHome = false;
	}
	pageDepth = 2;
	// empty the array
	PageRenderer.subMenuButtons = [];
	// select the button if not selected
	MenuNavigation.selectButton(pageReferrerId);
	
	if(typeof(type) == "undefined") {
		type = 'html';
	}
	if(typeof(container) == "undefined" || container == null) {
		container = contentHolder();
	}
	
	// close confirmation message, if exists
	//ConfirmationMessage.hide();
	
	// clear the description text
	$('.descriptionText').remove();
	// clear content, if any
	container.find('#contentBelt').empty();
	// reset position
	$('#contentBelt').css('left', 0);
	// set style for level2-3 items
	$('#contentBelt').addClass('menucontent');
	
	function callback(data) {
		
		if(Context.standalone) {
			$.get(Context.level3URL, "", function(data) {
				generateThirdLevel( decodeURIComponent(encodeURIComponent(data)), 'xml', container, "Registration" );	
			}, 'xml');
			return;
		}
		// else
		var btn = PageRenderer.getButton(data.id);
		var rowId = btn.data('rowId');
		
		if(!btn.hasClass("selected")) {
			PageRenderer.closeLevel3Container(contentHolder().find('.row'+rowId));
		}
		else 
		{
			// if the link points to a 4th level page, then load the url in the
			// browser.
			// also handle external links
			if(data.url.indexOf('mailto') != -1 || data.url.indexOf('http') != -1) {
				Application.navigateToURL(data.url);
				return;
			} else if(data.url.indexOf('javascript') != -1) { // defect
																// 1-B52MYC
				// execute the java script
				if(window.execScript) {	// if this is MSIE
					window.execScript(data.url);
				} else {
					eval(data.url);
				}
				return;
			} else if( data.url.indexOf('P_GenMenu') == -1 || isHome) {
				Application.navigateToURL(Application.getApplicationPath()+ "/" +data.url);
				return;
			}
			
			var pageName = data.id;
			var parameters = "false";
			
			var params = {pageName: pageName, pageReferrerId: pageReferrerId, pageDepth:3, options:parameters};
			HistoryManager.set(params);
		}
	}
	
	var maxHeight = 0;

	// ===================================================
	if( type == 'html' ) {
		
		content.each(function(e, element) {
			var node = $(element);
			// 1-SYZIR2, bullet images should not overwrite menu text.

			// Find all elements(text/images) coming in the sub menu title area and 
			// assign all as lable, so that images and menu text will be rendered together
			var label = "";
			$.each(node.find('a'), function(index, aTag){ 
        			label += $(aTag).html();
        	});
			// 1-SYZIR2 end

			var url = node.find('a').attr('href');
			// Defect 1-C0XF8R
			if(url.indexOf('http') == -1) {
				url = url.substring(url.lastIndexOf('/') + 1, url.length);
			}
			
			var id;
			if(url.indexOf('name=') != -1) {
				id = UIDGenerator.getUIDFromURL(url.split('name=')[1]);
			} else {
				id = UIDGenerator.getUIDFromURL(url);
			}
			
			// Defect 1-FFP4CR var desc = node.find('.menulinkdesctext').text();
			var desc = node.find('.menulinkdesctext').html();
			if(desc == null || typeof (desc) == 'undefined') {
				desc = '';
			}
			
			var selected = false;
			if(node.hasClass('menulinkSelected')) {
				selected = true;
			}
			var hasChildren = true;
			if (url.indexOf('P_GenMenu') == -1) {
				hasChildren = false;
			}
			var item = new level2Button( {
				id : id,
				label : label,
				description : desc,
				url : url,
				selected : selected,
				styleName : 'htmlButtonLevel2-3',
				hasChildren : hasChildren,
				callback : callback
			});
			PageRenderer.subMenuButtons.push(item);
			container.find('#contentBelt').append(item);
			if (document.getElementById(id).offsetHeight > maxHeight)
				maxHeight = document.getElementById(id).offsetHeight;
		});
		ConfirmationMessage.show($('#contentBelt'));
	} else if (type == 'xml') {
		$(content)
				.find('navigationEntryValueObject')
				.each(
						function(e, element) {
							// 1-SYZIR2 , render bullet image and menu link image for the submenu, if the images are present.
							var label = "";
							
							var bulletImageDetails = $(element).attr('bulletImageDetails');
							if(bulletImageDetails != undefined && bulletImageDetails != ''){
								
								var imageDetails = bulletImageDetails.split("-;-");
								
								var bulletImageTag = "<IMG SRC=" + imageDetails[0] 
									+ " ALIGN='" + imageDetails[1] + "'" 
									+ " ALT='" + imageDetails[2] + "'" 
									+ " class='headerImg'" 
									+ " TITLE='" + imageDetails[3]  + "'"  
									+ " NAME='" + imageDetails[4]  + "'"
									+ " HSPACE=0 VSPACE=0 BORDER=0 "
									+ " WIDTH=" + imageDetails[5]  
									+ " HEIGHT=" + imageDetails[6]  + "/>";
								
								label += bulletImageTag + "<br/>";
							}else{// 1-TU34IP, render global image, only if no bullet image is present.
								var globalImageDetails = $(element).attr('globalImageDetails')
								if(globalImageDetails != undefined && globalImageDetails != ''){
								var imageDetails = globalImageDetails.split("-;-");
								var bulletImageTag = "<IMG SRC=" + imageDetails[0] 
									+ " ALIGN='" + imageDetails[1] + "'" 
									+ " ALT='" + imageDetails[2] + "'" 
									+ " class='headerImg'" 
									+ " TITLE='" + imageDetails[3]  + "'"  
									+ " NAME='" + imageDetails[4]  + "'"
									+ " HSPACE=0 VSPACE=0 BORDER=0 "
									+ " WIDTH=" + imageDetails[5]  
									+ " HEIGHT=" + imageDetails[6]  + "/>";
								
								label += bulletImageTag + "<br/>";
								}
								// 1-TU34IP end
							}
							var linkImagDetails = $(element).attr('linkImageDetails');
							if(linkImagDetails != undefined && linkImagDetails != ''){

								var imageDetails = linkImagDetails.split("-;-");
								
								var linkImageTag= "<IMG SRC=" + imageDetails[0] 
									+ " ALIGN='" + imageDetails[1] + "'" 
									+ " ALT='" + imageDetails[2] + "'" 
									+ " class='headerImg'" 
									+ " TITLE='" + imageDetails[3]  + "'"  
									+ " NAME='" + imageDetails[4]  + "'"
									+ " HSPACE=0 VSPACE=0 BORDER=0 "
									+ " WIDTH=" + imageDetails[5]  
									+ " HEIGHT=" + imageDetails[6]  + "/>";

								label += linkImageTag + "<br/>";
							}
							//1-1BTU34H, extract the text content from HTML String
							label += extractText(UnEscapeHTML($(element).attr('menu')));
							//1-1BTU34H,end
							// 1-SYZIR2 end of image rendering logic
							
							var options = UnEscapeHTML($(element).attr(
									'options'));
							var url = UnEscapeHTML($(element).attr('path'));
							//url = url.replace('&amp;', '&'); 1-G4RAXV
							url = url.replace(/&amp;/gi, '&');
							if (typeof (options) != 'undefined'
									&& options != '') {
								options = options.replace('&amp;', '&');
								// /&amp;/gi -> case insensitive replace all occurrences Defect - NEW - solution center
								if (url.indexOf("?") != -1) {
									url = url + "&" + options;
								} else {
									url = url + "?" + options;
								}
							}
							var id;
							if (url.indexOf('name=') != -1) {
								id = UIDGenerator.getUIDFromURL(url
										.split('name=')[1]);
							} else {
								id = UIDGenerator.getUIDFromURL(url);
							}
							var desc = UnEscapeHTML($(element).attr(
									'description'));
							var hasChildren = true;
							if (url.indexOf('P_GenMenu') == -1) {
								hasChildren = false;
							}
							var item = new level2Button( {
								id : id,
								label : label,
								description : desc,
								url : url,
								styleName : 'htmlButtonLevel2-3',
								hasChildren : hasChildren,
								callback : callback
							});
							PageRenderer.subMenuButtons.push(item);
							container.find('#contentBelt').append(item);
							var elem = document.getElementById(id);
							if (elem) {
								if (document.getElementById(id).offsetHeight > maxHeight)
									maxHeight = document.getElementById(id).offsetHeight;
							}
						});
		var helpURL = UnEscapeHTML($(content).find('extra').attr('url'));

		// 1-MFYYHK, check if helpURL is not null, and proceed with logic only if it is not 'undefined'.
		if(helpURL){
			$('.helpText').css('display', 'block');
			if(helpURL.split(" ").length >0){
				if (typeof (helpURL) != 'undefined' && helpURL.indexOf('/') == 0) {
					helpURL = helpURL.substring(1);
				}
				else{ // get the url correctly if the help is not a URL but an infotext.
					helpURL = Application.getDadName() + "/twbkfrmt.P_DispHelp?pagename_in=" + UIDGenerator.getURLFromUID( pageReferrerId);
				}
				Context.helpURL = Application.getProtocol() + "//" + Application.getHost() + "/" + helpURL;
				Context.extHelpURL = 'FALSE';
			} else {
				Context.helpURL = helpURL;
				Context.extHelpURL = 'TRUE';
			}
		}else{
			$('.helpText').css('display', 'none');
		}
		// 1-MFYYHK, End
		// this is to rest the release Defect 1-AWWLI0
		var rel = $(content).find('extra').attr('release');
		FooterText.reset(rel);

		// add the information text got from services. 1-D8H7BF 
		// Fix Defect : 1-J413RX
		var infoText = $(content).find('extra').attr('infoText');
		
		infoText = UnEscapeHTML(infoText);
		
		// Defect# 1-RT469R Start, Replace default image with user selected image
		var imageName = $(content).find('extra').attr('imageName');
		var imageUrl = $(content).find('extra').attr('imageUrl');
		var imageAlt = $(content).find('extra').attr('imageAlt');
		var imageHeight = $(content).find('extra').attr('imageHeight');
		var imageWidth = $(content).find('extra').attr('imageWidth');
		var imageTag;
		if(imageName != null){
			imageTag = '<IMG SRC="'+imageUrl+ '" ALT="'+imageAlt+'" TITLE="'+imageAlt+'" NAME= "'+imageName+'" HEIGHT="'+imageHeight+'" WIDTH="'+imageWidth+'" /> ';
		}
		
		
		if(imageTag != undefined){
		infoText = imageTag + infoText;
	 	}
	 	// Defect# 1-RT469R END
	
	  
		container.find('#contentBelt').append('<SPAN class="serviceInfotext">' + infoText + '</SPAN>');
		ConfirmationMessage.show($('#contentBelt'));
		

		// add breadcrumbs
		Crumb.generateCrumb(content, pageReferrerId, pageDepth);
		document.title = $('#' + pageReferrerId).find('.menu').text();
		
	}
	
	// match the height for all items
	for(e in PageRenderer.subMenuButtons) {
		PageRenderer.subMenuButtons[e].css('height', maxHeight);
	}
		
	$(".level2NavArrow").each(function(i, elem) {
		$(elem).css("height", $(elem).parent().height());
	});
	
	// calculate rows, add third level containers
	PageRenderer.calculateSecondLevelRows();
}

/**
 * @class Navigation Menu This class creates and controls the navigation menu.
 * @author Jai chandramouli
 */
var MenuNavigation = {

	/**
	 * contains list of all buttons
	 */	
	buttons: [],
	
	/**
	 * container for navigation controls
	 */
	UI: null,
	
	/**
	 * sets the type of navigation menu to display. set to 'small' for 4th level
	 * pages.
	 */
	type: '',
	/**
	 * Flag to check if the navigation is in process of updation
	 */				
	updatingNavigation: false,
	/**
	 * Contains the index of the first visible button in the navigation menu
	 */
	firstVisibleButtonIndex:0,
	/**
	 * The selected button instance.
	 */
	selectedItem:null,
	/**
	 * The selected button index.
	 */
	selectedIndex:null,
	/**
	 * Initialization
	 */
	initialize: function(container, type) {
		var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
		if(pageDepth >= 4) {
			type = "small";
		}
		
		if(type == 'small') {
			MenuNavigation.UI = $("<div id='navigationcontrolSmall'>"
						+ "<span class='navArrowLeftSmall'/>"
						+ "<span class='navArrowRightSmall'/>"
						+ "<span class='menucontainer'>"
							+ "<span id='menuTrackInst' class='menutrack'/>"
						+ "</span>"
						+ "</div>"
					);
			leftNavBtn = MenuNavigation.UI.find('.navArrowLeftSmall');
			rightNavBtn = MenuNavigation.UI.find('.navArrowRightSmall');
		} else {
			MenuNavigation.UI = $("<div id='navigationcontrol'>"
						+ "<span class='navArrowLeft'/>"
						+ "<span class='menucontainer'>"
							+ "<span id='menuTrackInst' class='menutrack'/>"
						+ "</span>"
						+ "<span class='navArrowRight'/>"
						+ "</div>"
					);
			leftNavBtn = MenuNavigation.UI.find('.navArrowLeft');
			rightNavBtn = MenuNavigation.UI.find('.navArrowRight');
		}
		
		container.prepend(MenuNavigation.UI);			
		
		var menuTrack = MenuNavigation.UI.find('.menutrack');	
		
		var menuTrackWidth = 0;
		
		var content = Parser.menuContent;
		
		content.each(function(i, element) {
		
			var label = jQuery.trim($(element).text());
			var url = $(element).find('a').attr('href');
			var selected = $(this).attr('class') == "tabon";
			
			var id;
			if(url.indexOf('name=') != -1) {
				id = UIDGenerator.getUIDFromURL(url.split('name=')[1]);
			} else {
				id = UIDGenerator.getUIDFromURL(url);
			}
			
// if (url.indexOf('bmenu.P_WebTailorMnu') == -1) {
				
				var btn;
				if(pageDepth < 4) {
					btn = new NavigationButton({
						id:id, 
						label:label, 
						url:url, 
						type:'menu',
						callback:MenuNavigation.callback, 
						selected:selected});
				} else {
					btn = new NavigationSmallButton({
						id:id, 
						label:label, 
						url:url, 
						type:'menuSmall',
						callback:MenuNavigation.callback, 
						selected:selected});
				}
				
				
				MenuNavigation.buttons.push(btn);
				// set selected button and its index
				if(selected) {
					MenuNavigation.selectedIndex = i;
					MenuNavigation.selectedItem = btn;
				}
				// add seperator
				var seperator = $("<span/>");
				seperator.addClass('menuItemSeperator');
				var menuitemElem = $("<span class='menuitem'/>").append(btn);
				
				if(i > 0) {
					menuTrack.append(seperator);					
				}
				menuTrack.append(menuitemElem);
				
				var itemWidth = menuitemElem.width() + seperator.width();
				var margin = menuitemElem.css('margin-left') == 'auto' ? 0 : parseInt(menuitemElem.css('margin-left'), 10);
				var padding = menuitemElem.css('padding-left') == 'auto' ? 0 : parseInt(menuitemElem.css('padding-left'), 10);
				menuTrackWidth += itemWidth + (2 * margin) + (2 * padding);
				
// } else {
// HeaderLinks.add(label, url);
// }
		});
		
		
		// fix for main menu buttons (the buttons break for some reason
		// if there are more items in the main menu and the last item is
		// 'Finance')
		// it doesn't work when moved to IE6Patch class
		// add a 5% buffer to fix layouts in zoomed in/out
		menuTrackWidth = menuTrackWidth*1.05;
		// if (jQuery.browser.msie && parseInt(jQuery.browser.version) <= 6) {
		// menuTrack.css({width: menuTrackWidth});
		// } else {
			// now set in the css file to 1000%
			menuTrack.css({width: menuTrackWidth});
		// }
		
		// if no navigation items exist, hide navigation
		if(menuTrack.css('width') == '0px' ) {
	  		MenuNavigation.UI.css('display','none');
		}
		
		// initialize navigation buttons --------------------
		leftNavBtn.data('enable', true);
		rightNavBtn.data('enable', true);
		
		MenuNavigation.enable(leftNavBtn, false);
		var left = menuTrack.css('left') == 'auto' ? 0 : parseInt(menuTrack.css('left'), 10);
		if(left+menuTrackWidth <= MenuNavigation.UI.width()) {
			MenuNavigation.enable(rightNavBtn, false);			
		}
		
		leftNavBtn.click(MenuNavigation.previous);
		rightNavBtn.click(MenuNavigation.next);
		
		$('body').find('.headerlinksdiv').remove();				
	},
	
	callback: function(data) {
	
		
		if(typeof(data) == 'undefined') {
			return;
		}
		
		if(Context.standalone) {
			if(data.type == "blank") {
				Application.navigateToURL(Context.level2Page);
			} else {
				
				$.get(Context.level2URL, "", function(data) {
					generateSecondLevel( decodeURIComponent(encodeURIComponent(data)), 'xml', contentHolder() );
				}, 'xml');
			}
			return;
		}
		// else
		// Code added by sphoorti to fix issue with opening page from level 1 -
		// 3 pages.
		if(data.url.indexOf('P_GenMenu') == -1 ) {
			Application.navigateToURL(data.url);
			return;
		}
		var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
		if(pageDepth == 0 || pageDepth >= 4) {
			Application.navigateToURL(data.url);
			return;
		}
		
		var pageName = data.id;
		var parameters = "false";
		var pageReferrerId = "";
		
		var params = {pageName: pageName, pageReferrerId: pageReferrerId, pageDepth:2, options:parameters};
		HistoryManager.set(params);
		
	},
	/**
	 * Scrolls the menu to the next menu item
	 */
	next: function() {
		
		if(!$(this).data('enable') || MenuNavigation.updatingNavigation) {
			return;			
		}
		
		MenuNavigation.updatingNavigation = true;
		
		var menuTrack = MenuNavigation.UI.find('.menutrack');
		
		var tgt = menuTrack.find('.menuitem:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var wid = tgt.width();
		var marginLeft = tgt.css('margin-left') == 'auto' ? 0 : parseInt(tgt.css('margin-left'), 10);
		var marginRight = tgt.css('margin-right') == 'auto' ? 0 : parseInt(tgt.css('margin-right'), 10);
		var paddingLeft = tgt.css('padding-left') == 'auto' ? 0 : parseInt(tgt.css('padding-left'), 10);
		var paddingRight = tgt.css('padding-right') == 'auto' ? 0 : parseInt(tgt.css('padding-right'), 10);
		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight;
		
		var seperator = menuTrack.find('.menuItemSeperator:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var sepWid = seperator.width();
		var sepMarginLeft = seperator.css('margin-left') == 'auto' ? 0 : parseInt(seperator.css('margin-left'), 10);
		var sepMarginRight = seperator.css('margin-right') == 'auto' ? 0 : parseInt(seperator.css('margin-right'), 10);
		var sepPaddingLeft = seperator.css('padding-left') == 'auto' ? 0 : parseInt(seperator.css('padding-left'), 10);
		var sepPaddingRight = seperator.css('padding-right') == 'auto' ? 0 : parseInt(seperator.css('padding-right'), 10);
		
		
		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight + 
						sepWid + sepMarginLeft + sepMarginRight + sepPaddingLeft + sepPaddingRight;
		
		// Changes for defect 1-CUFU31
		if (CommonContext.locale.substr(0,2) == "ar") {
			var right = menuTrack.css('right') == 'auto' ? 0 : parseInt(menuTrack.css('right'), 10);
			menuTrack.animate({right: right-totalWidth}, 300, MenuNavigation.setNavigationButtonStates);
			
			// particularly for RTL support in IE
			if (jQuery.browser.msie) {
				redrawInterval = setInterval("MenuNavigation.reDraw()", 2);
			}
		} else {
			var left = menuTrack.css('left') == 'auto' ? 0 : parseInt(menuTrack.css('left'), 10);
			menuTrack.animate({left: left-totalWidth}, 300, MenuNavigation.setNavigationButtonStates);
		}
		
		MenuNavigation.firstVisibleButtonIndex++;
	},
	/**
	 * Scrolls the menu to the previous menu item
	 */
	previous: function() {
		if(!$(this).data('enable') || MenuNavigation.updatingNavigation) {
			return;
		}
		
		MenuNavigation.updatingNavigation = true;
		
		var menuTrack = MenuNavigation.UI.find('.menutrack');
		
		MenuNavigation.firstVisibleButtonIndex--;
		
		var tgt = menuTrack.find('.menuitem:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var wid = tgt.width();
		var marginLeft = tgt.css('margin-left') == 'auto' ? 0 : parseInt(tgt.css('margin-left'), 10);
		var marginRight = tgt.css('margin-right') == 'auto' ? 0 : parseInt(tgt.css('margin-right'), 10);
		var paddingLeft = tgt.css('padding-left') == 'auto' ? 0 : parseInt(tgt.css('padding-left'), 10);
		var paddingRight = tgt.css('padding-right') == 'auto' ? 0 : parseInt(tgt.css('padding-right'), 10);
		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight;
		
		var seperator = menuTrack.find('.menuItemSeperator:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var sepWid = seperator.width();
		var sepMarginLeft = seperator.css('margin-left') == 'auto' ? 0 : parseInt(seperator.css('margin-left'), 10);
		var sepMarginRight = seperator.css('margin-right') == 'auto' ? 0 : parseInt(seperator.css('margin-right'), 10);
		var sepPaddingLeft = seperator.css('padding-left') == 'auto' ? 0 : parseInt(seperator.css('padding-left'), 10);
		var sepPaddingRight = seperator.css('padding-right') == 'auto' ? 0 : parseInt(seperator.css('padding-right'), 10);
		
		
		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight + 
						sepWid + sepMarginLeft + sepMarginRight + sepPaddingLeft + sepPaddingRight;
		
		// Changes for defect 1-CUFU31
		if (CommonContext.locale.substr(0,2) == "ar") {
			var right = menuTrack.css('right') == 'auto' ? 0 : parseInt(menuTrack.css('right'), 10);
					
			menuTrack.animate({right: right+totalWidth}, 300, MenuNavigation.setNavigationButtonStates);
			
			// particularly for RTL support in IE
			if (jQuery.browser.msie) {
				redrawInterval = setInterval("MenuNavigation.reDraw()", 2);
			}
		} else {
			var left = menuTrack.css('left') == 'auto' ? 0 : parseInt(menuTrack.css('left'), 10);
			menuTrack.animate({left: left+totalWidth}, 300, MenuNavigation.setNavigationButtonStates);
		}
	},
	
	setNavigationButtonStates: function() {
		
		var menuTrack = MenuNavigation.UI.find('.menutrack');

		// Changes for defect 1-CUFU31
		if (CommonContext.locale.substr(0,2) == "ar") {
			if(parseInt(menuTrack.css('right'), 10) < 0) {
				MenuNavigation.enable(leftNavBtn, true);
			} else {
				MenuNavigation.enable(leftNavBtn, false);
				menuTrack.css({left: 0});
			}
			
			if(parseInt(menuTrack.css('right'), 10)+parseInt(menuTrack.width(), 10) > parseInt(MenuNavigation.UI.width(), 10)) {
				MenuNavigation.enable(rightNavBtn, true);
			} else {
				MenuNavigation.enable(rightNavBtn, false);
			}
		} else {
			if(parseInt(menuTrack.css('left'), 10) < 0) {
				MenuNavigation.enable(leftNavBtn, true);
			} else {
				MenuNavigation.enable(leftNavBtn, false);
				menuTrack.css({left: 0});
			}
			
			if(parseInt(menuTrack.css('left'), 10)+parseInt(menuTrack.width(), 10) > parseInt(MenuNavigation.UI.width(), 10)) {
				MenuNavigation.enable(rightNavBtn, true);
			} else {
				MenuNavigation.enable(rightNavBtn, false);
			}
		}
		
		MenuNavigation.updatingNavigation = false;
		
		if(typeof(redrawInterval) != 'undefined')
		clearInterval(redrawInterval);
	},
	
	enable: function(btn, flag) {
		var style = btn.attr('class');
		var className = style.indexOf(' ') > -1 ? style.split(' ') : style;
		
		if(flag){
			if($.isArray(className)) {
				for (e in className) {
					if(className[e].indexOf('Disabled') > -1) {
						btn.removeClass(className[e]);
						btn.data('enable', true);
						btn.css('cursor', 'pointer');
					}
				}
			} else {
				if(className.indexOf('Disabled') > -1) {
					btn.removeClass(className);
					btn.data('enable', true);
					btn.css('cursor', 'pointer');
				}
			}
		}
		else {
			className = $.isArray(className) ? className[0] : className;
			if (className.indexOf('Disabled') == -1) {
				btn.addClass(className+'Disabled');
				btn.data('enable', false);
				btn.css('cursor', 'default');
			}
		}
	},
	
	selectedButton: function() {
		for( var i = 0; i < MenuNavigation.buttons.length; i++ ) {
			var btn = MenuNavigation.buttons[i];
			if(btn.children().hasClass('selected')) {
				return btn;
			}
		}
		return null;
	},
	
	selectButton: function(id) {
		for( var i = 0; i < MenuNavigation.buttons.length; i++ ) {
			var btn = MenuNavigation.buttons[i];
			if(btn.attr('id') == id) {
				btn.select();
				return true;
			}
		}
		return false;
	},
	
	deselectAllButtons:function() {
		EventDispatcher.dispatchEvent('highlight', {
			id: null,
			label: null
		});	
	},
	
	trackWidth: function() {
		var menuTrack = MenuNavigation.UI.find('.menutrack');
		return menuTrack.width();
	},
	
	reDraw: function() {
		$('body').css('display', 'none'); 
		$('body').css('display', 'block'); 
	},
	
	reInitialize: function() {
		MenuNavigation.initialize($('#content'), pageDepth);
	}
};


/**
 * Generates the description for each of the navigation item on the navigation
 * menu.
 * 
 * @param {Object}
 *            content The menu navigation content to refer from
 * @param {Object}
 *            container The contentHolder container to place the descriptions.
 * @author Jai chandramouli
 */
function generateDescriptions(content, type, container) {
	
	pageDepth = 1;
	
	if(typeof(content) == "undefined") {
		return;
	}
	if(typeof(type) == "undefined") {
		type = 'html';
	}
	if(typeof(container) == "undefined") {
		container = contentHolder();
	}
	
	// clear the description text
	$('.descriptionText').remove();
	// clear content, if any
	container.find('#contentBelt').empty();
	$('#contentBelt').removeClass('menucontent');
	// reset position
	$('#contentBelt').css('left', 0);
	
	// deselect all navigation menu buttons
// $Button.prototype.deselectAll();
	MenuNavigation.deselectAllButtons();
	
	var navigationList = MenuNavigation.UI.find(':button');
	
	var panelwidth = 0;
	
	if( type == 'html' ) {
		
		navigationList.each(function(i, navLink) {
		
			content.each(function(e, element) {
				var node = $(element).find('td:eq(1)');
				var label = node.find('a').text();
				var url = node.find('a').attr('href');
				var desc = node.find('.menulinkdesctext').html();
				if(desc == null || typeof (desc) == 'undefined') {
					desc = '';
				}
				
				// Defect 1-FFP4CR var desc = node.find('.menulinkdesctext').text();
				if ($(navLink).attr('url').indexOf(url) != -1) {
					var desc = $("<div class='descriptionText'>" + desc
							+ "</div>");
					desc.css( {
						width : $(navLink).width() - 30,
						cursor : 'default'
					});
					$(navLink).after(desc);
					return true;
				}
			});
		});
	} else if (type == 'xml') {
		navigationList
				.each(function(i, navLink) {
					$(content)
							.find('navigationEntryValueObject')
							.each(
									function(e, element) {
										var label = UnEscapeHTML($(element)
												.attr('menu'));
										var options = UnEscapeHTML($(element)
												.attr('options'));
										var url = UnEscapeHTML($(element).attr(
												'path'));
										//url = url.replace('&amp;', '&'); 1-G4RAXV
										url = url.replace(/&amp;/gi, '&');
										if (typeof (options) != 'undefined'
												&& options != '') {
											options = options.replace('&amp;',
													'&');
											if (url.indexOf("?") != -1) {
												url = url + "&" + options;
											} else {
												url = url + "?" + options;
											}
										}
										var desc = UnEscapeHTML($(element)
												.attr('description'));
										if ($(navLink).attr('url').indexOf(url) != -1) {
											var desc = $("<div class='descriptionText'>"
													+ desc + "</div>");
											desc
													.css( {
														width : $(navLink)
																.width() - 30,
														cursor : 'default'
													});
											$(navLink).after(desc);
										}
									});
					var helpURL = UnEscapeHTML($(content).find('extra').attr('url'));

					//1-MFYYHK, check if helpURL is not null, if so populate with empty string.
					if(helpURL === undefined){
						helpURL = '';
					}
					// 1-MFYYHK, end
                        if(helpURL.split(" ").length >0){
						if (typeof (helpURL) != 'undefined' && helpURL.indexOf('/') == 0) {
							helpURL = helpURL.substring(1);
						}
						Context.helpURL = Application.getProtocol() + "//" + Application.getHost() + "/" + helpURL;
						Context.extHelpURL = 'FALSE';
					} else {
						Context.helpURL = helpURL;
						Context.extHelpURL = 'TRUE';
					}

				});
		document.title = ResourceManager.getString("default_document_title");
		
	}
	
	// hide breadcrumbs
	Crumb.remove();	

}
/**
 * Generates the layout for unauthenticated homepage.
 * 
 * @author Jai chandramouli
 */
function generateUnauthenticatedHome(content, container) {
	if(typeof(container) == "undefined") {
		container = contentHolder();
	}
	
	function callback(data) {
		if(Context.standalone) {
			Application.navigateToURL(Context.level4Page);
			return;
		}
		// Defect 1-B4OHQA
		if(data.url.indexOf('mailto') != -1 || data.url.indexOf('http') != -1) {	// mailto, direct links
				Application.navigateToURL(data.url);
				return;
		} else if(data.url.indexOf('javascript') != -1) { // defect 1-B52MYC
			// execute the java script
			if(window.execScript) {	// if this is MSIE
				window.execScript(data.url);
			} else {
				eval(data.url);
			}
			return;
		} else {
			Application.navigateToURL(Application.getApplicationPath()+ "/" +data.url);
			return;
		}
	}
		
	// ===================================================
	container.append("<div id='row1'/>");
	container.append("<div id='row2'/>");
	
	var panelHeight = 0;
	
	// add top banner
	//var banner = $("<img id='mainBannerImage' src='" + homepageBanner + "'/>");
	//var banner = $("<div id='mainBannerImage' />");
	
	
	//CR-000114129    
	for(var i = 0;i < document.styleSheets.length; i++){
	   if (document.styleSheets[i].href.indexOf('cascade.css') != -1 ){
	       var rules = document.styleSheets[i].rules || document.styleSheets[i].cssRules;
	       for(var x in rules) {
	           if(rules[x].selectorText == '#mainBannerImage'){
		          var banner = $("<div id='mainBannerImage' />");
		          break;
		       }
	        }
	    }
	}
	if (typeof(banner) == "undefined") {
	     var		homepageBanner 		= typeof(homepage_banner) == "undefined" || homepage_banner == "" ? 'wtlgifs/main-banner-image.png' : homepage_banner;
	     var banner = $("<img id='mainBannerImage' src='" + homepageBanner + "'/>");
	}
	//CR-000114129  
	container.prepend(banner);
	
	var maxItemHeight = 0;
	content.each(function(e, element){
	
		var node = $(element).find('td:eq(1)');
		
		var label = node.find('a').text();
		var url = node.find('a').attr('href');
		// Defect 1-C0XF8R &  Defect 1-B4OHQA
		if(url.indexOf('http') == -1) {
			    url = url.substring(url.lastIndexOf('/') + 1, url.length);
		}

		var desc = node.find('.menulinkdesctext').text();
		
		var item = new subMenuRightButton({
			id: 'contentItem' + e,
			label: label,
			description: desc,
			url: url,
			styleName: '',
			callback: callback				
		});
		
		var li = $("<div class='anonymousHomeLinks'></div>");
		li.append(item);
		
		if(e < 4) {
			container.find('#row1').append(li);
		} else {
			container.find('#row2').append(li);
		}

	});
	
	$("#row1").children().css("height", '71px');
	$("#row2").children().css("height", '71px');
	$(".anonymousHomeLinks").mouseenter(function() {
		$(this).addClass(" hover");
	});
	$(".anonymousHomeLinks").mouseleave(function() {
		$(this).removeClass(" hover");
	});	
	// Begin of RPE# 1-1B953XI
	var copyright = '<br style="clear:both" /><div class="disclaimer">'+$("body").children("span.infotext").html()+'</div>';
	// current year was hard coded, which is now changed to dynamic
	/*'<br style="clear:both" />'
	+'<div class="disclaimer">'
	+'<p>&copy; 2000 &#151; ' + (new Date()).getFullYear() + ' Ellucian. All rights reserved.</p>'
	+'<p>This software contains confidential and proprietary information of Ellucian and its subsidiaries. Use of this software is limited to Ellucian licensees, and is subject to the terms and conditions of one or more written license agreements between Ellucian and the licensee in question.</p>		</div>';
	*/	
	// End of RPE# 1-1B953XI
}

/**
 * Converts the default HTML buttons to custom buttons
 * 
 * @param {Object}
 *            element The HTML Input element to replace with the custom button
 * @param {Object}
 *            formNode The parent Form enclosing the element
 * @author Jai chandramouli
 */
function convertHTMLButton(element, formNode) {
	
	function callback(data) {
		
		// execute any onclick handlers attached to the button
		if(typeof $(element).attr('onClick') != 'undefined') {
			if(window.execScript) {	// if this is MSIE
				window.execScript('('+$(element).attr('onClick')+')()');
			} else {
				// fix for defect 1-B37BXL
				eval($(element).attr('onClick'));
        var onClickStr = $(element.form).attr('onClick');
        var idx = onClickStr.indexOf('return');
        if(idx == -1) {
           eval(onClickStr);
        } else {
           var func = onClickStr.substring(idx+7, onClickStr.length);
           var returnVal = eval(func);
           if(!returnVal)
               return false;
        }
			}
		}
		if(type == 'submit') {
			doFormSubmit = true;
			if(typeof $(formNode).attr('onSubmit') != 'undefined') {
				if(window.execScript) {	// if this is MSIE
					// Fix for 8.4.1 IE 8 issues 
					//window.execScript('doFormSubmit = ('+formNode.attr('onSubmit')+')()');
					$(element).click();
				} else {
					// fix for defect 1-B37BXL
					var onSubmitStr = $(element.form).attr('onSubmit');
			          var idx = onSubmitStr.indexOf('return');
			          if(idx == -1) {
			                eval(onSubmitStr);
			          } else {
			                var func = onSubmitStr.substring(idx+7, onSubmitStr.length);
			                var returnVal = eval(func);
			                if(!returnVal)
			                     return false;
			          }
				}
			}
			
			if(doFormSubmit)
			formNode.submit();
		}
		
		if(type == 'reset') {
			// uses jquery.form.js plugin to reset the form
			// reset functionality is not available as part of the jquery
			// library.
			formNode.resetForm();
		}
		
		// enable disabled buttons after form submit
		enableButtonsInForm(btn);
							
		return false;
	}

	var type = $(element).attr('type');
	
	if(typeof(type) == 'undefined' || type == '') {
		type = 'text';
	}
	
	var name = $(element).attr('name');
	if(typeof(name) == 'undefined') {
		name = '';
	}
	
	var id = $(element).attr('id');
	if(typeof(id) == 'undefined') {
		id = UIDGenerator.uniqueID();
	}
	
	var value = $(element).attr('value');
	if(typeof(value) == 'undefined' || value == '') {
		value = $(element).text();
	}
	
	var buttonStyle = 'defaultButtonSmall';
	
	var loginList = Context.loginProc;
	/* 1-OZ4FEO, Memory consuming looping is replaced with better methods. 
	$.each(
			Context.loginProc,
			function( intIndex, objValue ){
			
				loginList.push(objValue.toLowerCase());
			}
	);
	*/	
	loginList = $.map(loginList, function(n){ 
        	return(n.toLowerCase());
    });
	// 1-OZ4FEO end
        
	if ($.inArray(Application.getProc().toLowerCase(), loginList) != -1) {
		buttonStyle = 'defaultButton';
	}
	var btn = HTMLButton( {
		id : id,
		name : name,
		value : value,
		url : '',
		type : buttonStyle,
		callback : callback,
		selected : false,
		inputType : type
	});
	$(element).replaceWith(btn);
	
	// 1-TQ8ARX,1-Y7GNHV Changes for IE8-9 login submit button so that simply enter key press will log in.
	if(findIEVersion() >= 8){
		$(function() {
			$("form input").keypress(function (e) {
		        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
					// Check for IE9 and the login button
		        	var	pageDepth = typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
					if(pageDepth == 0){        	
			  	      	formNode.submit();	        
       				}  
				}
			});
		});
	}
	// 1-TQ8ARX,1-Y7GNHV end
}

/**
 * @class Header Links This class creates and controls the display of the top
 *        right header links.
 * @author Jai chandramouli
 */
var HeaderLinks = {
	
	initialize: function() {
		
		pageHeaderLinks = $("<div id='pageheaderlinks' />");
		
		list = $("<ul/>").appendTo(pageHeaderLinks);
	
		elem = $('body').find('.pageheaderlinks').children();
		
		var isHelp = false;
		var isLogout = false;

		elem.each(function(i, node) {
			var label = $(node).text();
			var url = $(node).attr('href');
			
			// check if HELP url exists in the sitemap page
		
		//	if (typeof(url) != "undefined") {
			// 1-MFYYHK, check if helpURL is not null, if null populate helpURL with empty string to avoid undefiend error.
			if(url === undefined){
				url = '';
			}
			// 1-MFYYHK, end
			if(url.indexOf('twbksite.P_DispSiteMap') != -1 && url.indexOf('twbkfrmt.P_DispHelp') == -1) {
		//if(url.indexOf('twbksite.P_DispSiteMap') != -1){
				var siteMapURL = url.substring(url.lastIndexOf('/')+1, url.length);
// HeaderLinks.add($(node).text(), siteMapURL);
				
				FooterText.add($(node).text(), 'sitemaplink', siteMapURL);
			}
			if(url.indexOf('help') != -1) {
				if(url.indexOf('http') != -1) { // Defect 1-CU1KD4
					Context.helpURL = url;
					Context.extHelpURL = 'TRUE';
				} else {
					Context.helpURL = Application.getProtocol() + "//" + Application.getHost() + url;
					Context.extHelpURL = 'FALSE';
				}
				isHelp = true;
			}
			if(url.indexOf('twbkfrmt.P_DispHelp') != -1) {
				Context.helpURL = Application.getProtocol() + "//" + Application.getHost() + url;
				Context.extHelpURL = 'FALSE';
				isHelp = true;
			}
			if(url.indexOf('P_Logout') != -1) {
				var logoutURL = url.substring(url.lastIndexOf('/')+1, url.length);
				Context.logoutURL = Application.getApplicationPath()+ "/" + logoutURL;
				isLogout = true;
			}
			/* Change for Proxy access */
			var PROXY_HASH = getCookie('PROXY_HASH');
			
			if(PROXY_HASH != null && isLogout == false){			
				if(url.indexOf('javascript:window.close()') != -1) {				
				Context.logoutURL = 'javascript:window.close();'
				isLogout = true;
				Context.disableHome = true;
				/* disable Browse, Search and Home */
				$('#browseButton, #browseButtonBottom').unbind("click");
				}
			}
				/* End Change for Proxy access */
			
			// ssbbackurl
			if($(node).attr('id') == 'ssbbackurl' && url.indexOf('twbksite.P_DispAccessibility') == -1) {
				Crumb.backURL 		= url.substring(url.lastIndexOf('/')+1, url.length);
				Crumb.backURLTitle 	= $(node).html();
			}
			// 1-1C9JM7J: fetching ADMSESSID to enable SignOut link 
			var ADMSESSID = getCookie('ADMSESSID');
			if(url.indexOf('bwskalog.p_displogoutnon') != -1 && typeof(ADMSESSID) != "undefined") {
				var logoutURL = url.substring(url.lastIndexOf('/')+1, url.length);
				Context.logoutURL = Application.getApplicationPath()+ "/" + logoutURL;
				isLogout = true;
			}
			// 1-1C9JM7J, end 
		//}
		});
		
		if(!isLogout) {
			$('body').find('.signOutText').css("display", "none");
			$('body').find('.helpText').css("border-left", "none");
		}
		if(!isHelp) {
			// there is no help in the page
			// hide the help
			$('body').find('.helpText').css("display", "none");
		}
		
        if(!isLogout && !isHelp) {
            $('body').find('#globalNav div').css({
                 "display" : "none"
            });
        }

		$('#content').prepend(pageHeaderLinks);
		
		$('body').find('.pageheaderlinks').remove();
	},
	
	add: function(label, url) {
		
		if(Context.standalone) {
			if(url.indexOf("SiteMap") != -1) {
				url = Context.siteMapPage;
			} else if(url.indexOf("WebTailor") != -1) {
				url = Context.WTAdminPage;
			}
		}
		
		var li = $('<li/>');
		var link = $("<a href='"+url+"' />").appendTo(li);
		link.text(label);
		li.appendTo(pageHeaderLinks.find('ul'));
	}
};	


/**
 * @class Value object representing a cached history item. Used for storing the
 *        fragment identifiers and their respective handlers.
 * 
 * @param {Object}
 *            identifier Unique Fragment Identifier for the page
 * @param {Object}
 *            responder The function to callback for rendering the screen
 * @param {Object}
 *            params The parameters for the responder function
 * @author Jai chandramouli
 */
function NavigationHistoryValueObject(identifier, responder, params) {
	this.identifier = identifier;
	this.responder 	= responder;
	this.params 	= params;
}

/**
 * @class Maintains a history of the user activity and manages next/back browser
 *        clicks
 * @author jai.chandramouli
 */
var HistoryManager = {
	/**
	 * @private
	 * 
	 * The last processed fragment identifier.
	 * @type String
	 */
	secondLevelIdentifier: null,
	
	thirdLevelIdentifier: null,
	
	initialize: function() {
		// hiding the content untill all processing is done.
		$('#content').hide();
		$.history.init(HistoryManager.callback);
	},
	
	/**
	 * Listener registered with $.history class. Triggered when fragment
	 * identifier changes in the address bar
	 * 
	 * @param {Object}
	 *            frag Unique page identifier
	 */
	callback: function(frag) {
		HistoryManager.render(frag);
	},
	
	/**
	 * set the fragment identifier for the new location/state
	 * 
	 * @param {Object}
	 *            identifier
	 * @param {Object}
	 *            responder
	 * @param {Object}
	 *            params
	 */
	add: function(identifier, responder, params) {
		CacheManager.add( new NavigationHistoryValueObject( identifier, responder, params ) );
	},
	/**
	 * Sets the URL fragment identifier to the specified value.
	 * 
	 * @param {String}
	 *            fragment
	 */
    set: function(params){
		var fragment = $.param(params);
		$.history.load(fragment);
    },
	/**
	 * Utility method for retrieving the fragment identifier.
	 * 
	 * @return {String} The fragment on the URL or null if there is not one.
	 */
    get: function(){
        var frag = window.location.hash;
        
        if (frag) {
            return frag.substr(1);
        }
        
        return null;
    },
	
	render: function(identifier) {
		
		UIDGenerator.token = 0;
		
		if(identifier == null) {
			HistoryManager.execute(CacheManager.get(""));
			return;
		}
		
		var params = deparam(identifier, true);
		
		if(typeof(params) != 'object') {
			HistoryManager.execute(CacheManager.get(""));
			return;
		}
		
		// else
		if (params.pageDepth == 1) {
			var navigationHistoryValueObjects = CacheManager
					.get(params.pageName);
			if (typeof (navigationHistoryValueObjects) == "undefined") {
				/*8.4 changes for internationalization and installation step*/
				var serviceURL = Bannerservice.url + Bannerservice.endpoints[2]
						+ UIDGenerator.getURLFromUID(params.pageName) + "/"
						+ sessionToken + "/" + params.options + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
				HistoryManager.loadHome(params.pageName, serviceURL);
			} else {
				HistoryManager.execute(navigationHistoryValueObjects)
			}
			
			HistoryManager.secondLevelIdentifier = null;
			HistoryManager.thirdLevelIdentifier = null;
			
		} else if (params.pageDepth == 2) {
			var navigationHistoryValueObjects = CacheManager
					.get(params.pageName);
			if (typeof (navigationHistoryValueObjects) == "undefined") {
				/*8.4 changes for internationalization and installation step*/
				var serviceURL = Bannerservice.url + Bannerservice.endpoints[2]
						+ UIDGenerator.getURLFromUID(params.pageName) + "/"
						+ sessionToken + "/" + params.options + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
				HistoryManager.loadSecondLevel(params.pageName, serviceURL,
						null);
			} else {
				HistoryManager.execute(navigationHistoryValueObjects)
			}
			HistoryManager.secondLevelIdentifier = params.pageName;
			
		} else if(params.pageDepth == 3){
			
			function getNextLevel() {
				var navigationHistoryValueObjects = CacheManager
						.get(params.pageName);
				if (typeof (navigationHistoryValueObjects) == "undefined") {
					/*8.4 changes for internationalization and installation step*/
					var serviceURL = Bannerservice.url
							+ Bannerservice.endpoints[2]
							+ UIDGenerator.getURLFromUID(params.pageName) + "/"
							+ sessionToken + "/" + params.options  + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
					HistoryManager.loadThirdLevel(params.pageName, serviceURL);
				} else {
					HistoryManager.execute(navigationHistoryValueObjects)
				}
			}
			var navigationHistoryValueObjects = CacheManager
					.get(params.pageReferrerId);
			if (typeof (navigationHistoryValueObjects) == "undefined") {
				/*8.4 changes for internationalization and installation step*/
				var serviceURL = Bannerservice.url + Bannerservice.endpoints[2]
						+ UIDGenerator.getURLFromUID(params.pageReferrerId)
						+ "/" + sessionToken + "/" + params.options  + "?dadName=" + Application.getDadName()  + "&locale=" + Context.locale_settings;
				HistoryManager.loadSecondLevel(params.pageReferrerId,
						serviceURL, getNextLevel);
			} else {
				
				if(HistoryManager.secondLevelIdentifier != params.pageReferrerId) {
					HistoryManager.execute(navigationHistoryValueObjects)
				}
				var navigationHistoryValueObjects = CacheManager
						.get(params.pageName);
				if (typeof (navigationHistoryValueObjects) == "undefined") {
					/*8.4 changes for internationalization and installation step*/
					var serviceURL = Bannerservice.url
							+ Bannerservice.endpoints[2]
							+ UIDGenerator.getURLFromUID(params.pageName) + "/"
							+ sessionToken + "/" + params.options  + "?dadName=" + Application.getDadName()  + "&locale=" + Context.locale_settings;
					HistoryManager.loadThirdLevel(params.pageName, serviceURL);
				} else {
					HistoryManager.execute(navigationHistoryValueObjects)
				}
			}
			HistoryManager.secondLevelIdentifier = params.pageReferrerId;
			
		} else {
			HistoryManager.execute(CacheManager.get(""))
		}
	},
	
	loadHome: function(pageName, serviceURL) {
		function resultHandler(result, textStatus){
			
			HistoryManager.add(pageName, PageRenderer.renderHome, 
								{content: stringToDoc($.json2xml(result).replace(/\+/g, '%20')), 
								type:'xml', 
								pageReferrerId: pageName, 
								container:contentHolder()}
								);
								
			HistoryManager.execute(CacheManager.get(pageName));
		}
		
		Blocker.block();
		
		// Defect 1-B4RT2R
		var _options = {
		        url: serviceURL,
		        type: 'GET',
		        dataType: 'jsonp',
		        callbackParameter: "callback",
		        success: resultHandler,
		        error: function(XMLHttpRequest, textStatus) {
		                     Blocker.unblock();
		                     alert('Error occurred. Either services are down or your session is expired. Try re-logging in. If issue continues contact your administrator.');
		             }
		    };

		  
		  $.jsonp(_options);
		  
		  /*Defect 1-B4RT2R $.ajax({
			type: "GET",
			url: serviceURL,
			data: "callback=?",
			success: resultHandler,
			error: errorHandler,
			dataType: 'json'
		});*/
	},
	
	loadSecondLevel: function(pageName, serviceURL, callback) {
		
		function resultHandler(result, textStatus){

			/*HistoryManager.add(pageName, PageRenderer.renderSecondLevel, 
								{content: stringToDoc($.json2xml(result).replace(/\+/g, '%20')), 
								type:'xml', 
								pageReferrerId: pageName, 
								container:contentHolder()}
								);*/
			
			//var data1 = $.json2xml(result).replace(/\+/g, '%20').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			var data1 = $.json2xml(result).replace(/\+/g, '%20');
			
			
			
			
			var data2 = stringToDoc(data1);
		
			var iText = $(data2).find('extra').attr('infoText');
			// 1-MFYYHK, display/hide help link based on whether help is available or not
			if($(data2).find('extra').attr('url')){
				$('.helpText').css('display', 'block');
			}else{
				$('.helpText').css('display', 'none');
			}
			//1-MFYYHK, display end
			
	
			HistoryManager.add(pageName, PageRenderer.renderSecondLevel, 
								{content: stringToDoc($.json2xml(result).replace(/\+/g, '%20')), 
								type:'xml', 
								pageReferrerId: pageName, 
								container:contentHolder()}
								);
								
					
			HistoryManager.execute(CacheManager.get(pageName));
			
			if(typeof(callback) == 'function') {
				callback();
			}
		}
		
		Blocker.block();
		
		// Defect 1-B4RT2R
		var _options = {
		        url: serviceURL,
		        type: 'GET',
		        dataType: 'jsonp',
		        callbackParameter: "callback",
		        success: resultHandler,
		        error: function(XMLHttpRequest, textStatus) {
		                     Blocker.unblock();
		                     alert('Error occurred. Either services are down or your session is expired. Try re-logging in. If issue continues contact your administrator.');
		             }
		    };

		  
		  $.jsonp(_options);
		
		/*Defect 1-B4RT2R $.ajax({
		type: "GET",
		url: serviceURL,
		data: "callback=?",
		success: resultHandler,
		error: errorHandler,
		dataType: 'json'
	});*/
		  
	},
	
	loadThirdLevel: function(pageName, serviceURL) {
		
		function resultHandler(data, textStatus){

			HistoryManager.thirdLevelIdentifier = pageName;
			HistoryManager.add(pageName, PageRenderer.renderThirdLevel, {
				content : stringToDoc($.json2xml(data).replace(/\+/g, '%20')),
				type : 'xml',
				pageReferrerId : pageName,
				container : contentHolder()
			});
			HistoryManager.execute(CacheManager.get(pageName));
			
		}
		
		Blocker.block();
		
		// Defect 1-B4RT2R
		var _options = {
		        url: serviceURL,
		        type: 'GET',
		        dataType: 'jsonp',
		        callbackParameter: "callback",
		        success: resultHandler,
		        error: function(XMLHttpRequest, textStatus) {
		                     Blocker.unblock();
		                     alert('Error occurred. Either services are down or your session is expired. Try re-logging in. If issue continues contact your administrator.');
		             }
		    };

		  
		  $.jsonp(_options);
		  
		/*Defect 1-B4RT2R $.ajax({
			type: "GET",
			url: serviceURL,
			data: "callback=?",
			success: resultHandler,
			error: errorHandler,
			dataType: 'json'
		});*/
	},
	
	execute: function(navigationHistoryValueObjects) {
		$('#content').show();
		
		if(typeof(navigationHistoryValueObjects) != 'undefined') {
			var len = navigationHistoryValueObjects.length;
			for( var i = 0; i < len; i++ ) {
				var o = navigationHistoryValueObjects[i];
				if (o instanceof NavigationHistoryValueObject) {
					o.responder(o.params);
				}
			}
		}
		Blocker.unblock();
	}
};

/**
 * @class Maintains a local cache of content of type
 *        [NavigationHistoryValueObject] to facilitate history management and
 *        navigation.
 * @author Jai chandramouli
 */
var CacheManager = {
	
	/**
	 * @private
	 * 
	 * Constant to represent home page
	 * @type String
	 */
	HOME: "__home",
	
	/**
	 * The list of loaded NavigationHistoryValueObject objects.
	 * 
	 * @type Array
	 */
    cacheDictionary: {},
	
	initialize: function() {
		
	},
	
	/**
	 * Saves the NavigationHistoryValueObject into the dictionary for future
	 * retrieval
	 * 
	 * @param {Object}
	 *            navigationHistoryValueObject NavigationHistoryValueObject
	 *            instance
	 */
	add: function(navigationHistoryValueObject) {
		if(navigationHistoryValueObject instanceof NavigationHistoryValueObject) {
			
			var identifier = navigationHistoryValueObject.identifier;
			if(typeof(identifier) == "undefined" || identifier == null || identifier == "") {
				identifier = CacheManager.HOME;
				navigationHistoryValueObject.identifier = identifier;
			}
			
			if( CacheManager.cacheDictionary[identifier] == null || typeof(CacheManager.cacheDictionary[identifier]) == "undefined" ) {
				CacheManager.cacheDictionary[identifier] = [];
			}
			CacheManager.cacheDictionary[identifier].push( navigationHistoryValueObject );
		}
	},
	
	/**
	 * Returns {Array} An array of NavigationHistoryValueObjects for the
	 * provided identifier
	 * 
	 * @param {string}
	 *            identifier
	 */
	get: function(identifier) {
		if (identifier == null || typeof(identifier) == "undefined" || identifier == "") {
			identifier = CacheManager.HOME;
		}
		
		return CacheManager.cacheDictionary[identifier];
	},
	
	/**
	 * Clears the NavigationHistoryValueObject instance for the provided
	 * identifier
	 * 
	 * @param {Object}
	 *            identifier
	 */
	clear: function(identifier) {
		CacheManager.cacheDictionary[identifier] = null;
	}
};

/**
 * @class Controls the rendering of the page
 * @author Jai chandramouli
 */
var PageRenderer = {
	
	/**
	 * contains list of sub menu buttons
	 */
	subMenuButtons: [],
	
	scrollTop: 0,
	
	level2Rows:0,
	
	isResizing: false,
	
	duringTransition: false,
	
	initialize: function(){
	},
	
	renderHome: function( params ) {
		generateDescriptions( params.content, params.type, params.container );
	},
	
	renderSecondLevel: function( params ) {
		 
		generateSecondLevel( params.content, params.type, params.pageReferrerId, params.container );
	},
	
	renderThirdLevel: function( params ){
		if(PageRenderer.isLevel3ContainerOpen()) {
			// close all opened level3 containers
			PageRenderer.closeAllLevel3Containers();
		}
		generateThirdLevel( params.content, params.type, params.pageReferrerId, params.container )
	},
	
	renderFourthLevel: function( params ) {
// contentHolder().append(params.content)
//Changes for Downgrade DEFAULT Defect : 1-MKRX28,1-FDT7L1
	//	generateFourthLevel( params.content, params.type, params.pageReferrerId, params.container );	
	},
	
	calculateSecondLevelRows: function() {
		
		var rows = 1;
		var itemsPerRow = 0;
		var pos = 0;
		var len = PageRenderer.subMenuButtons.length;

		if (len) {
			pos = PageRenderer.subMenuButtons[0].position().top;

			for( var i = 0; i < len; i++ ) {
				var btn = PageRenderer.subMenuButtons[i];

				if(i > 0 && btn.position().top > pos ) {
					PageRenderer.subMenuButtons[i-1].after("<div id='level3Container' class='row"+rows+"'/>");
					contentHolder().find('.row'+rows).css({
						'display': 'none'
					});

					itemsPerRow = 0;
					rows++;
				}

				itemsPerRow++;

				btn.data('rowId', rows);

				pos = btn.position().top;
			}

			PageRenderer.subMenuButtons[len-1].after("<div id='level3Container' class='row"+rows+"'/>");
			contentHolder().find('.row'+rows).css({
				'display': 'none'
			});
		} else {
			alert('Error occurred. Submenu items are not available. If issue continues, contact your administrator.');
		}

		PageRenderer.isResizing = false;
		PageRenderer.level2Rows = rows;
	},
	
	getButton:function(id) {
		for( var i = 0; i < PageRenderer.subMenuButtons.length; i++ ) {
			var btn = PageRenderer.subMenuButtons[i];
			if(btn.attr('id') == id) {
				return btn;
			}
		}
		return null;
	},
	
	selectButton: function(id) {
		for( var i = 0; i < PageRenderer.subMenuButtons.length; i++ ) {
			var btn = PageRenderer.subMenuButtons[i];
			if(btn.attr('id') == id) {
				btn.select();
				return true;
			}
		}
		return false;
	},
	
	getSelectedButton: function() {
		for( var i = 0; i < PageRenderer.subMenuButtons.length; i++ ) {
			var btn = PageRenderer.subMenuButtons[i];
			if(btn.hasClass('selected')) {
				return btn;
			}
		}
		return null;
	},
	
	isLevel3ContainerOpen: function() {
		var exists = false;
		contentHolder().find('#level3Container').each(function(e) {
			if( $(this).css('display').indexOf('block') > -1 ) {
				exists = true;
			}			
		});
		return exists;
	},
	
	closeAllLevel3Containers: function() {
		PageRenderer.duringTransition = true;
		var btn = PageRenderer.getSelectedButton();
		var rowId = btn ? btn.data('rowId') : '';
		contentHolder().find('#level3Container').not('.row'+rowId).each(function(e) {	//
			$(this).slideUp('normal', PageRenderer.transitionCallback);
		});
	}, 
	
	closeLevel3Container: function(container) {
		PageRenderer.duringTransition = true;
		container.slideUp('normal', PageRenderer.transitionCallback);
	}, 
	
	transitionCallback: function() {
		$(this).css('height', '0px');
		PageRenderer.duringTransition = false;
	}
	
};


/**
 * @class Class to replace all default HTML buttons with custom buttons
 * @author Jai chandramouli
 */
var HTMLButtonFormatter = {

	//Changes for Downgrade DEFAULT Defect : 1-MKRX28,1-FDT7L1
	initialize: function() {
	var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
		if(pageDepth == 4){
			return;
		}
		
		// check if buttons need to be formatted or not.
		// if($.inArray(Application.getProc(), CascadeDowngrade.exceptions) != -1) {
		//	return;
		// }
		
		// fix P issue
		$(':submit').each(function(i, elem) {
			var form = $(elem).parents("form:first");
			// fix for form submit issue when there is an unclosed <P> tag
			// before <form> tag.
			HTMLButtonFormatter.fixP(form);
		});
		
		// replace buttons
		$(':submit').each(function(i, elem) {
			var form = $(elem).parents("form:first");
			convertHTMLButton(elem, form);
		});
		
		// replace reset button
		$(':reset').each(function(i, elem) {
			var form = $(elem.form);
			convertHTMLButton(elem, form);
		});
		
	}, 
	
	// fix internal p's
	fixP: function(form) {
		
		var frm = form.parent().html();
		if(frm == null)
		return;
		
		if(frm.toLowerCase().indexOf('form') > -1 && frm.toLowerCase().indexOf('/form') == -1) {
			
			var pre = frm.substring(0, frm.toLowerCase().indexOf('<form'));
			var frmTag = frm.substring(frm.toLowerCase().indexOf('<form'), frm.toLowerCase().indexOf('>', frm.toLowerCase().indexOf('<form'))+1);
			var rest = frm.substring(frm.toLowerCase().indexOf('>', frm.toLowerCase().indexOf('<form'))+1);
			
			try {
				form.parent().remove();
				form.before(frmTag);
				form.before(pre);
				form.prepend(rest);
			} catch(e) {
				
			}
		}
	}
};

var Debug = {
	
	win:null,
	
	trace: function(str) {
		if(Debug.win == null) {
			Debug.win = window.open('', 'debugWin');
		}
		Debug.win.document.write(str);
		Debug.win.document.write("<hr/>")
	},
	clear: function() {
		if(Debug.win == null) {
			Debug.win = window.open('', 'debugWin');
			Debug.win.document.open();
		}
		Debug.win.document.close();
		Debug.win.document.open();
	},
	close: function() {
		Debug.win.document.close();
	}
}
/**
 * @class Blocker class when activated block user interaction on the screen
 */
var Blocker = {
	
	div: $("<div id='blocker' />"),
	
	block: function() {
		if( $('#blocker').length == 0 ) {
			$('body').prepend(Blocker.div);
		}
		if(jQuery.browser.msie) {
			Blocker.div.addClass('on');
		} else {
			Blocker.div.animate({ opacity: 0.1, height: '100%', width: '100%' }, 100);
		}
		
		// change cursor to 'wait' till data is retrieved
		document.body.style.cursor = 'wait';
		// provide a 15 sec window for the blocker, if the application doesn't
		// call unblock, force it.
		setTimeout(Blocker.unblock, 15000)
	},
	
	unblock: function() {
		if( $('#blocker').length > 0 ) {
			Blocker.div.animate({ opacity: 0, height: '100%', width: '100%' }, 100);
			Blocker.div.remove();
			// change cursor to 'wait' till data is retrieved
			document.body.style.cursor = 'default';
		}
	}
};

/**
 * @class Generates the breadcrumbs for the application
 * @param {Object}
 *            pageDepth
 * @param {Object}
 *            container
 * @author Sphoorti acharya, Jai chandramouli
 */
var Crumb = {
	
	buttons: [],
	/**
	 * Reference to the current crumb label.
	 */
	currentCrumb: '',
	/**
	 * Reference to the immediate parent crumb label.
	 */
	parent:'',
	
	/**
	 * reference to the bread crumb content
	 */
	UI: $('<div id="crumb"><div class="breadCrumb"/></div>'),
	/**
	 * Initialize
	 * 
	 * @param {Number}
	 *            pageDepth
	 * @param {Object}
	 *            container
	 */
	backurlUI: $('<div class="backurl"><a href="" title=""/></div>'),
	
	backURL: null,
	
	backURLTitle: null,
	
	initialize : function(pageDepth, container) {
		
		var track = Crumb.UI.find(".breadCrumb");

		if(Crumb.backURL) {
			Crumb.backurlUI.find('a').attr('href', Crumb.backURL);
			if (Crumb.backURLTitle) {
				Crumb.backurlUI.find('a').attr('title', Crumb.backURLTitle);
			}
			Crumb.UI.prepend(Crumb.backurlUI);
			// formatting
			if(!track.hasClass('hasBackURL'))
			track.addClass('hasBackURL');
		}
		
		/*
		 * ------------------------------------------------------------ crumbs
		 * ------------------------------------------------------------
		 */
		
// Crumb.UI = $('<div id="crumb"><div class="breadCrumb"/></div>');
		if(pageDepth == 0) {
			Crumb.UI.addClass('anonymous');
		} else if(pageDepth == 4) {
			Crumb.UI.addClass('level4');
		}
		
		var crum = $('body').find('.crumbs span:has(a)');
		var lastLabel = $.trim($('body').find('.crumbs .lastValue').text());
		
		
		var len = crum.length;
		if(len == 0) {
			Crumb.addUnauthenticatedHome();
		}
		else 
		{
			/* else */
			crum.each(function(i, element) {
				var label = $.trim($(element).text());
				var url = $(element).find('a').attr('href');
				
				var callback;
				if(url.indexOf('bmenu.P_MainMnu') != -1) {
					callback = Crumb.home;
				} else {
					callback = MenuNavigation.callback;
				}
				
				var id;
				if(url.indexOf('name=') != -1) {
					id = UIDGenerator.getUIDFromURL(url.split('name=')[1]);
				} else {
					id = UIDGenerator.getUIDFromURL(url);
				}
				
				var seperator = "<div class='breadcrumbSeperator'>></div>";
				var link = new Link({
					id: id,
					label: label,
					url: url,
					styleName: '',
					callback: callback				
				});
				
				track.append(link);
				if(i == len-1) {
					Crumb.parent = label;
					if(lastLabel == '') {
						// continue to the last element
						return true;
					}
				} 
				track.append(seperator);
			});
			
			if(lastLabel != "") {
				var link = new Link({
						id: 'crumButtonLast',
						label: lastLabel,
						url: '',
						styleName: 'selected',
						callback: null,
						enabled: false
					});
				
				track.append(link);
			}
			Crumb.currentCrumb = lastLabel;
		}
		
		// -------------------------------------------------------------------
		container.append(Crumb.UI);
		
		EventDispatcher.addEventListener(Localization.events.localeChange,
			        function() {
			            Crumb.UI.find(".breadCrumb a:first").text(ResourceManager.getString("crumb_label_home"));
			        });
	},
	/**
	 * Generates the crumb trail
	 * 
	 * @param {Object}
	 *            content
	 * @param {Object}
	 *            label
	 * @param {Object}
	 *            level
	 */
	generateCrumb: function(content, pageReferrerId, level) {
		
		Crumb.remove();
		
		var track = Crumb.UI.find(".breadCrumb");
		Crumb.backURL = $(content).find('backUrl').attr('url');
		Crumb.backURLTitle = $(content).find('backUrl').attr('urlText');
		
		if(Crumb.backURL) {
			Crumb.backurlUI.find('a').attr('href', Crumb.backURL);
			if (Crumb.backURLTitle) {
				Crumb.backurlUI.find('a').attr('title', Crumb.backURLTitle);
			}
			if(Crumb.UI.find('backurl').length == 0)
			Crumb.UI.prepend(Crumb.backurlUI);
			// formatting
			if(!track.hasClass('hasBackURL'))
			track.addClass('hasBackURL');
		}
		
		
		if(level == 1) {
			return;
		}
		
		var crum = $(content).find('crumbEntries crumbValueObject');
		var len = crum.length;
		if(len == 0) {
			Crumb.addUnauthenticatedHome();
		}
		else{
			/* else */
		 	crum.each(function ( i, element ) {
				if(i != 0) {

				   	var label 	= Url.decode($(element).attr('caption'));
				   	if(label.indexOf("Home") != -1) { // 1-DEWUE3
				   		if(ResourceManager.getString("crumb_label_home") != null) {
							label = ResourceManager.getString("crumb_label_home");
						}
				   	}
					var url = Url.decode($(element).attr('path'));
					// replace all occurrence of &amp; with &
					//url = url.replace('&amp;', '&'); 1-G4RAXV
					url = url.replace(/&amp;/gi, '&');
					var options = Url.decode($(element).attr('options'));
					if(typeof(options) != 'undefined' && options != '') {
					    // replace all occurrence of &amp; with &
					    options = options.replace('&amp;', '&');
					    if (url.indexOf("?") != -1) {
					        url = url + "&" + options;
					    }
					    else {
					        url = url + "?" + options;
					    }
					}
	
					var callback;
					if(url.indexOf('bmenu.P_MainMnu') != -1) {
						callback = Crumb.home;
					} else {
						callback = MenuNavigation.callback;
					}
					
					var id;
					if(url.indexOf('name=') != -1) {
						id = UIDGenerator.getUIDFromURL(url.split('name=')[1]);
					} else {
						id = UIDGenerator.getUIDFromURL(url);
					}
		
					var seperator = "<div class='breadcrumbSeperator'>></div>";
					var link = new Link({
						id: id,
						label: label,
						url: url,
						styleName: '',
						callback: callback				
					});
					
					track.prepend(seperator);
					track.prepend(link);
					
					if(i == len-1) {
						Crumb.parent = label;
					}
				
				} else {
                    var label = $(element).attr('caption');
                    if(label != null) {
						// replace all + with space character
						// java urlEncoder uses + represent space
                        label = label.replace(/\+/g, '%20');
                        //1-1BTU34H, decode the label & extract the text content from HTML String
						label = Url.decode(label,false);
						label = extractText(label);
						//1-1BTU34H,end
                    }

                    var link = new Link( {
                          id : 'crumButtonLast',
                          label : label,
                          url : '',
                          styleName : 'selected',
                          callback : null,
                          enabled : false
                    });
                    track.prepend(link);
                    //
                    Crumb.currentCrumb = label;
            	}
			});
		}
	},
	
	/**
	 * callback for the home link on the crumb trail Generates the description
	 * text for the menu items
	 * 
	 * @param {Object}
	 *            data
	 */
	home: function(data) {
		// Defect 1-10QD3FN, Cascade UI does not disable the links when a proxy is 
     	// accessing another persons info
		// check if '.proxyAccess' class present in the link. This is present
		// only during proxy access mode, then do not execute the logics.
		// This disables the link in proxy access mode.
		if($($('.breadCrumb a')[0]).hasClass("proxyAccess")){
			return;
		}
		// Defect 1-10QD3FN End

		if(typeof(data) == 'undefined') {
			return;
		}
		
		if(Context.standalone) {
			if(data.type == "blank") {
				Application.navigateToURL(Context.level1Page);
			} else {
				$.get(Context.level1URL, "", function(data) {
					generateDescriptions( decodeURIComponent(encodeURIComponent(data)), 'xml', contentHolder() );
				}, 'xml');
			}
			return;
		}
		// else
var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);		
		if(pageDepth == 0 || pageDepth >= 4) {
			Application.navigateToURL(data.url);
			return;
		}
		
		var pageName = data.id;
		var parameters = "false";
		var pageReferrerId = "";
		
		var params = {pageName: pageName, pageReferrerId: pageReferrerId, pageDepth:1, options:parameters};
		HistoryManager.set(params);

		// Defect: 1-S5LDK0 Remove Confirmation message box if present, for home bread crumb link
		ConfirmationMessage.UI.animate({height:'0px', opacity: '0'}, 100);
		ConfirmationMessage.UI.find('.confirmationText').html(''); 
		ConfirmationMessage.container = null;
	},
	
	addUnauthenticatedHome: function() {
		
		if($.inArray(Application.getProc(), Context.unauthenticatedHomeProc) != -1) {
			return;
		}
		
		function callback(data) {
			Application.navigateToURL(data.url);
		}
		/* add home link */
		/* Remove Home link for PA login */
		var SESSID = getCookie('SESSID');
		var PROXY_HASH = getCookie('PROXY_HASH');
		
		
		if(PROXY_HASH != null && SESSID == null){		
		}else if(Context.disableHome == true){
		}
		else{
		var link = new Link({
			id: 'anonymous_home',
			label: ResourceManager.getString("crumb_label_home"),
			url: Context.homeURL,
			styleName: '',
			callback: callback				
		});
		Crumb.UI.find(".breadCrumb").append(link);
		}
		/* End Change for PA login */
	},
	remove: function() {
		Crumb.UI.find('.breadCrumb').html('&nbsp;');
		Crumb.UI.find(".breadCrumb").removeClass('hasBackURL')
		Crumb.UI.find('.backurl').remove();
	}
		
};

/**
 * @class Manages creation of Directory links or Footer links based on the
 *        content
 * @author Jai chandramouli
 */
var ExtraLinks = {
	
	initialize: function(content, target) {
		if(content.length == 0) 
		return;
		
		DirectoryLinks.initialize(content, target);
		FooterLinks.initialize(content, target);
		
		content.each(function(e, element) {
			var url = $(element).attr('href');
			if($.trim(url) == '') {
				return true;
			}
			// add title text to enable tooltips
			$(element).attr('title', $(element).text());
			
			if(url.indexOf('bwpkedir.P_NameDirectory') > -1) {
				DirectoryLinks.add($(element));
			} else {
				FooterLinks.add($(element));
			}
		});
		/* Do necessary formatting after content is added */
		DirectoryLinks.apply();
		FooterLinks.apply();
		
	}
};
/**
 * @class Generates the footer links in the content pages
 * @author Jai Chandramouli
 */
var FooterLinks = {
	/**
	 * Holder for the raw content.
	 */
	content: null,
	/**
	 * Parent container for the footerlinks
	 */
	target: null,
	/**
	 * Pointer to the
	 * <ul>
	 * tag in the UI. Store this for optimization
	 */
	linkPointer: null,
	/**
	 * Initialize method
	 * 
	 * @param {Object}
	 *            content The html content to read from
	 * @param {Object}
	 *            target The target object into which the content is to be added
	 */
	initialize: function(content, target) {
		if(content.length == 0) 
		return;
		
        FooterLinks.UI = $('<div id="footerLinks">' +
	                    '<ul>' +
    	                '</ul>' +
        		      	'</div>' +
              			'');

		FooterLinks.content = content;
		FooterLinks.target = target;
		FooterLinks.linkPointer = FooterLinks.UI.find('ul');
		
		// add to contentHolder
		FooterLinks.target.append(FooterLinks.UI);
	},
	add: function(label) {
		var str = $('<div>').append(label).html();
		// fix for defect : 1-Z08QAU, 1-Z08QAX, 1-Z08QB0. 4th level Page contains erroneous symbols footer link area
		// added extra check - append the label to footer text list('li' tag) only if a text is present for the anchor tag(label).
		var anchorText = $(label).text();
		if(anchorText != null && anchorText != undefined && anchorText != ""){
			var anchor = $('<li>' + str + '</li>');
			FooterLinks.linkPointer.append(anchor);
		}
		// End of defect : 1-Z08QAU, 1-Z08QAX, 1-Z08QB0. 
	},
	apply: function() {
		if(FooterLinks.linkPointer.children().length > 0) {
			FooterLinks.UI.find("li:last").css("background-image", "none");
		} else {
			FooterLinks.UI.hide();
		}
	}
};
/**
 * @class Generates the directory listing of alphabets in the content pages
 * @param {Object}
 *            content The html content to read from
 * @param {Object}
 *            target The target object into which the content is to be added
 * @author Jai Chandramouli
 */
var DirectoryLinks = {
	/**
	 * Holder for the raw content.
	 */
	content: null,
	/**
	 * Parent container for the footerlinks
	 */
	target: null,
	/**
	 * Pointer to the
	 * <ul>
	 * tag in the UI. Store this for optimization
	 */
	linkPointer: null,
	/**
	 * Initialize method
	 * 
	 * @param {Object}
	 *            content The html content to read from
	 * @param {Object}
	 *            target The target object into which the content is to be added
	 */		
	initialize: function(content, target) {
		if(content.length == 0) 
		return;
		
        DirectoryLinks.UI = $('<div id="footerLinks">' +
		                    '<ul>' +
		                    '</ul>' +
		              		'</div>' +
		              		'');

		DirectoryLinks.content = content;
		DirectoryLinks.target = target;
		DirectoryLinks.linkPointer = DirectoryLinks.UI.find('ul');
		
		// add to contentHolder
		DirectoryLinks.target.prepend(DirectoryLinks.UI);
	},
	add: function(label) {
		var str = $('<div>').append(label).html();
		var anchor = $('<li>'+str+'</li>');
		DirectoryLinks.linkPointer.append(anchor);
	},
	apply: function() {
		if(DirectoryLinks.linkPointer.children().length > 0) {
			DirectoryLinks.UI.find("li:last").css("background-image", "none");
		} else {
			DirectoryLinks.UI.hide();
		}
	}
}
/**
 * Creates the inner tabs for 4th level pages
 * 
 * @param {Object}
 *            content
 * @param {Object}
 *            container
 * @author Jai chandramouli
 */
var InnerTabs = {
	
	UI: $('<div id="innerTabsContainer">'
			+ '<ul id="innerTabs">'
			+ '</ul>'
		+ '</div>'),
	
	initialize: function(content, container) {
		if(content.length == 0) 
		return;
		
		var tabList = InnerTabs.UI.find('ul');
		content.each(function(e, element) {
			var state = $(element).attr('class');
			var tabLabel = $(element).text();
			var tabURL = $(element).find('a').attr('href');
			var anchor = $('<li><a href="'+tabURL+'">'+tabLabel+'</a></li>');
			switch(state) {
				case 'tabon':
					anchor.addClass('selected');
					break;
				case 'tabdisable':
					anchor.addClass('disabled');
					anchor.find('a').attr('href', '#');
					break;
				default:
					break;
			}

			tabList.append(anchor);
		});
		
		container.prepend(InnerTabs.UI);
	}
};
/**
 * @class Renders login screen page
 * @author Jai chandramouli
 */
var LoginScreen = {
	
	initialize: function(content, container) {
		
		container.addClass('login');
		container.empty();
		
		/*Defect :1-11SBDKG Information text does not display in sequenctial order on twbkwbis.P_WWWLogin.  */

		//var infoText2 = jQuery.trim(content.find('.infotext p:first').text());
		//content.find('.infotext p:first').remove();
		//var infoTextObj = content.find('.infotext');
		
		// commented out this defect for 1-VENKZX as part of 1-11SBDKG
		//Defect :1-VENKZX Fix for Login Multiple infoText  
		//infoText = 	infoTextObj.html();
		//infoText = '<p>'+infoText2+'</p><p>'+infoText+'</p>';
		/*Defect :1-VENKZX End Fix for Login Multiple infoText */
		
		var infoText = "";
		var trList = $(content).find('.infotexttable tr');
		$.each(trList, function(i, row){
			infoText += "<p>";
			$.each($(row).find('.indefault'), function(i, column){
				infoText += $(column).html();
			});
			infoText += "</p>";
		});
		/*Defect 1-13M5YI9 Alter the code to align the Login page information text. */
		infoText = "<div class='loginmessage'>"+infoText+"</div>"; // The login information text is included in a div, to fix the width 
		
		/*Defect :1-11SBDKG Information text does not display in sequenctial order on twbkwbis.P_WWWLogin.  */

		var form = content.find('form');
		var userLabel = form.find("label[for='UserID']");
		userLabel.children().removeAttr('class');
		
		var pinLabel = form.find("label[for='PIN']");
		pinLabel.children().removeAttr('class');
		
		var extra = form.find("input[NAME='RET_CODE']");  // defect 1-AUGHH3
		var userInput = form.find("input[NAME='sid']");
		var pinInput = form.find("input[NAME='PIN']");
		var loginButton = form.find(":submit[NAME!='ButtonSelected']");
		var forgotPinButton = form.find(":submit[NAME='ButtonSelected']");
		
		
		
		var loginWin = LoginWindow();
		// $('.pagetitlediv')
		loginWin.find('.loginHeading').html($('.pagetitlediv h2').text());
		loginWin.find('#loginmessage').html(infoText);
		loginWin.find("label[for='txtUID']").replaceWith(userLabel);
		loginWin.find("input[id='txtUID']").replaceWith(userInput)
		loginWin.find("label[for='txtPIN']").replaceWith(pinLabel);
		loginWin.find("input[id='txtPIN']").replaceWith(pinInput);
		loginWin.find(".buttonRow .defaultButton2:eq(0)").replaceWith(
				loginButton);
		loginWin.find(".buttonRow .defaultButton2:eq(0)").replaceWith(
				forgotPinButton);
		loginWin.find('#middle').prepend(extra);  // defect 1-AUGHH3
		
		/*Defect 1-13M5YI9 Alter the code to align the Login page information text. */
		loginWin.find('.loginmessage').contents().filter(function(){ // filter the contents of the information text
			if(this.nodeType==3){ // check for the node with Text type
				$(this).replaceWith("<p>"+this.nodeValue+"</p>"); 
			}
		});
		
		//Defect 1-CD00L7 If LDAP / forgot pin is disabled with help link
		if (form.find('a[href="/wtlhelp/twbhhelp.htm"]').html() != null) {
			var atag = form.find('a[href="/wtlhelp/twbhhelp.htm"]').html();
			loginWin.find('.buttonRow').append(
					'<a href="/wtlhelp/twbhhelp.htm">' + atag + '</a>');
		}
		
		form.empty();
		loginWin.find('#middle').wrap(form);
		form.remove();
		
		
		// if error code exists
		if(content.children().hasClass('.plaintable')) {
			var alertMsg = content.find('.plaintable td:eq(1)').html();
			alertMsg = (alertMsg == null) ? "" : alertMsg;
			if(alertMsg.length>0)
			loginWin.find('#loginmessage p:last').append(
					'<br><br>' + alertMsg + '</br></br>')
		}
		container.append(loginWin);
	}
};
/**
 * @class Help window Generate the popup help window at runtime by fetching the
 *        html contents from either the procedure or static html
 */
var HelpWindow = {
		
		STYLESHEETS:['/css/app-overrides.css', '/css/cascade.common.css'],
		
		initialize: function(url, targetWin){
						
			function loadContent(responseText, textStatus, XMLHttpRequest) {
				var data = $(this);
				
				var helpContent = $("" +
					"<div id='helpContent'>"+
				    "<div id='helpWindowHeader'>"+
					"<div id='title'>"+ResourceManager.getString("help_title")+"</div>"+
					"<div id='close'><a href='javascript:window.close()'>#</a></div>"+
					"</div>"+
					
					"<div id='helpBodyContent'>"+
					"<div id='helpCrumbs'></div>"+
					"<span id='helpWindowIcon'></span>" +
					"<span id='helpWindowTitle'></span>" +
					"<span id='helpWindowCloseButton'></span>" +
					"<div id='helpWindowText'></div>"+
					
					"<div id='helpWindowFooter'>"+
					"<span id='release'></span>" +
					"<span id='copyright'></span>"+
					"</div>" +
					"</div>" );
				
				var crumbs = data.find('.crumbs');
				crumbs.find('a').attr('href', 'javascript:void(0)');
				helpContent.find('#helpCrumbs').html(crumbs.html());
				helpContent.find('#release').html(data.find('.pagefooterdiv').text());
				
				data.find('.crumbs').remove()
				data.find('form').remove();
				data.find('.bg3').remove();
				data.find('.bgtabon').remove();
				data.find('.pagefooterdiv').remove();
				data.find('.globalfooterdiv').remove();
				data.find('a[href="javascript:window.close()"]').remove();
				
				/* Load stylesheets */
				HelpWindow.loadStylesheets(data);
				
				/* add main help content */
				// modify links to have absolute urls
				data.find('a[href]').each(function(i) {
					
					
					var href = $(this).attr('href');
					/* NEW FIX FOR 8.4.1.1 */
					var click = $(this).attr('onclick');
					
				
					/* Fix for External Links */
					var isHTTP = false;
					//CR-000108552
					if(href.indexOf('.htm') != -1){
					var hrefString = href.substring(href.lastIndexOf('/') + 1 ,href.length);
					href = helpBasePath + hrefString;	
					$(this).attr('href',href);
					}
					
					
					//CR-000108552
					
					if(href.toLowerCase().indexOf('#') != 0) {
					    if(href.indexOf('http') == -1 && href.indexOf('mailto') == -1){
							href = helpBasePath+href;			
							isHTTP = true;		/* Fix for the External Links */			
							
						}
					
					
						//$(this).attr('href', href);
						if(click == null){
					
						if(href.indexOf('http') != -1 || href.indexOf('mailto') != -1){	
							if(isHTTP == false){
							//CR-000108552
							if(findIEVersion() > 7) { 
							$(this).attr("onclick","location.replace('" + href + "');"); 
							}else{ 
							$(this).attr("onclick","window.open('" + href + "'); return false;");
							}
							//CR-000108552
							}else{
							 $(this).attr("onclick", "window.opener.HelpWindow.initialize('" + href + "', window); return false;");							
							}
						}else{
						 $(this).attr("onclick", "window.opener.HelpWindow.initialize('" + href + "', window); return false;");
						//$(this).attr("onclick","window.open('" + href + "'); return false;");
					    }
					    //isHTTP = false;
					  }
					  /* End Fix for External Links */
					  /* END NEW FIX FOR 8.4.1.1 */
						
					} else {
						
						href = href.substring(1);		
					
						$(this).attr('href', "javascript:void(0);");
						$(this).attr("onclick", "javascript:document.getElementById('helpBodyContent').scrollTop = document.anchors['"+href+"'].offsetTop; void(0);");
						
					} 
				
					
				});
				
				//modify img links to absolute urls
				//defect 1-FG3A7X
				data.find('img[src]').each(function(i) {
					var src = $(this).attr('src');
					// 1-K6VDMT  image url was not created correctly since 'src.indexOf' behaves different in diff browsers.
					if(src.indexOf('http') == -1 || (src.indexOf('http') == 0)) {
						// non http url. needs fixing
						
						// 1-K6VDMT Browser specific substring logic for creating image url is added.
						if(!jQuery.browser.msie){
							if(src.indexOf('/') == 0){
								// if SRC index of 0 is / then add the URL up till http://server:port
								// Need to add the URL up till the docRoot location. 
								var arry = helpBasePath.split("//");
								var temp = arry[0] + '//' + arry[1].substring(0, arry[1].indexOf('/'));
								src =  temp + src;
							} else {
								// if src index of 1 is not / then add the url http://server:port/wtlhelp/
								src = helpBasePath.substring(0, url.lastIndexOf('/')+1) + src;
							}
						}else{// if the browser is IE
					
							if(src.indexOf('images/') > 0){
						 		src = helpBasePath.substring(0, url.lastIndexOf('/')+1) +  src.substring(src.lastIndexOf('images/'),src.length );
							}
						// 1-K6VDMT end
						}
						    
						$(this).attr('src', src);
					} 
				});
				
				helpContent.find('#helpWindowText').html(data.html());

	            helpContent.find('#title').text(ResourceManager.getString("userdetails_help"));
				helpContent.find('#close a').text(ResourceManager.getString("userdetails_close"));
				
				targetWin.document.write(helpContent.html());
				targetWin.document.close();
				$(targetWin.document).ready(function() {
					// Changes for defect 1-CUFU31
					if (CommonContext.locale.substr(0,2) == "ar") {
						setTimeout(function(){
							
							// localize images
							/* //RPE 1-1ABJJ0V
							var cssString = "	\
							#helpWindowHeader #close a {	\
								background:transparent url(/css/images/icon-close-popup.png) no-repeat scroll left center;	\
							}	\
							#helpWindowHeader #title {	\
								background:transparent url(/css/images/icon-help-popup.png) no-repeat scroll right center;	\
							}	\
							";*/
							
							var body = targetWin.document.getElementsByTagName('body')[0];
							var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
							var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
							
// if(!isChrome && !isSafari)
// {
								var styletag = targetWin.document.createElement('style');
								styletag.setAttribute('type', 'text/css');
								body.appendChild(styletag);
								
							/*	if(!window.ActiveXObject) //RPE 1-1ABJJ0V
								{
									styletag.innerHTML = cssString; // if not
																	// Internet
																	// Explorer
								}
								else
								{
									styletag.styleSheet.cssText = cssString; // if
																				// Internet
																				// Explorer
								}*/
// }
							
							// set the target to the help window
							StylesheetFormatter.targetWin = targetWin;
							var dom = targetWin.document.styleSheets;
							var len = dom.length;
							for (var i = 0; i < len; i++) {
								StylesheetFormatter.toggle(i);
							}
							// IMPORTANT: reset the target to the main window
							StylesheetFormatter.targetWin = this;
							
							// show the content
							$(targetWin.document).find('body').css('display', 'block');
							
						}, 100);
					} else {
						// show the content
						$(targetWin.document).find('body').css('display', 'block');
					}
				
				});
			}
			var helpBasePath = url.substring(0, url.lastIndexOf('/')+1);
				
			var fileContent = $('<div/>');
			fileContent.load(url, null, loadContent);

			
		},
		/**
		 * Loads the stylesheets into the container
		 * 
		 * @param {Object}
		 *            container The container into which the stylesheets need to
		 *            be attached
		 */
		loadStylesheets: function(container) {
			// check if existing, remove from our array
			container.find('link[rel*="style"]').each(function(i) {
				var index = $.inArray(this.getAttribute('href'), HelpWindow.STYLESHEETS);
				if(index != -1) {
					HelpWindow.STYLESHEETS = $.grep(HelpWindow.STYLESHEETS, function(n, i) {
						return (i != index);
					})
				}
		    });
			// load all stylesheets
			var stylesheetsElem = $('<div/>');
  			if(HelpWindow.STYLESHEETS.length > 0) {
				for(i=0; i<HelpWindow.STYLESHEETS.length; i++) {
					var fileref=document.createElement("link");
					$(stylesheetsElem).append(fileref);
					$(fileref).attr('rel',"stylesheet");
					$(fileref).attr('type',"text/css");
					// Defect #1-1546DWP, appending complete path for SSL connections to avoid non-secure items message
					if(jQuery.browser.msie)
						$(fileref).attr('href', Application.getProtocol() + "//" + Application.getHost() + HelpWindow.STYLESHEETS[i]);
					else
						$(fileref).attr('href', HelpWindow.STYLESHEETS[i]);
				}
			}
			var loc = container.find('link:last');
			if( loc.length > 0 ) {
				container.find('link:last').after(stylesheetsElem.html());
			} else {
				container.prepend(stylesheetsElem.html());
			}
		}
};

/**
 * @class Renders Release Text
 * @author Prashanth
 */
var FooterText = {
	
	initialize: function() {
		
		
		$('#pagefooter').addClass('footertext');
		
		// add release text
		this.add($('body').find('.pagefooterdiv').text(), 'reltext');
		var	pageDepth 			= typeof(level_depth) == "undefined" || level_depth == "" ? 0 : parseInt(level_depth);
		if(pageDepth == 4) {
			// add static headers
// this.add($('body').find('.staticheaders').html(), 'staticheaders');
		}
	},
	
	add: function(val, style, url) {
		if(url) {
			val = $("<a href='"+url+"'>"+val+"</a>");
		}
		val = $("<div>").append(val);
		
// val.addClass('footertext');
		if(typeof style == 'string') {
			val.addClass(style);			
		} else if(typeof style == 'object') {
			val.css(style);
		}
		$('#pagefooter').append(val);
	},
	reset: function(val) {
		/* Defect 1-AWWLI0 */
		$('body').find('.reltext').remove();
		this.add('Release: '+val, 'reltext');
	}

};

/**
 * Renders Confirmation message
 * 
 * @author Jai Chandramouli
 */
var ConfirmationMessage = {
	UI:$('<div id="confirmationBase">'
		+ '<div class="confirmation">'
		+ '<div class="confirmationText"></div>'
		+ '<div class="confirmationCloseIcon" />'
		+ '</div>'
		+ '</div>'),
	
	container:null,
	/**
	 * Shows the confirmation box
	 * 
	 * @param {Object}
	 *            container
	 */
	infoType: 'confirm',
	
	show: function(container) {
		ConfirmationMessage.UI.find('.confirmationText').html('');
		ConfirmationMessage.UI.animate({height:'0', opacity: '0'}, 1);
		
		// Old behavior of animate function (see line above) in jQuery (circa 1.3.2) was
		// to change this element to "display: block".  As of upgrade to jQuery 1.6.1,
		// that's not happening anymore, so force it here.
		ConfirmationMessage.UI.css("display", "block");
		
		var txt = '';
		var moveBy = '40px';
		
		// .errortext, informationtext, warningtext, infotext
		if($('.serviceInfotext').length > 0) {
			// Fix. 1-D8H7BF 
			//txt = $('.serviceInfotext').text();
			// Fix for InfoText not displaying in HTML form
			txt = $('.serviceInfotext').html();
		} else if ($('.informationtext').length > 0) {
			txt = $('.informationtext').text();
		} else if($('.errortext').length > 0) {
			txt = $('.errortext').text();
			ConfirmationMessage.UI.addClass('errortext');
			ConfirmationMessage.infoType = 'error';
		} else if($('.warningtext').length > 0) {
			txt = $('.warningtext').text();
			ConfirmationMessage.UI.addClass('errortext');
			ConfirmationMessage.infoType = 'error';
		} else if($('.infoText').length > 0) { // changed .infotext  to .infoText, to avoid displaying of the infotext above menu items
			// Defect# 1-RT469R start
			var imageTag = null;
			if($('body').find('.infotextdiv table tr').length>0 && $('body').find('.infotextdiv table tr')[0].cells.length > 1){ // if image is present in infotext
			// there will be two 'td' for the row, then select the fist td's html content for image tag.
			// if no image is present, only one td will be present with the text, then do not select image Tag.
				imageTag = $('body').find('.infotextdiv table td[class="indefault"]').html();
			}
			//txt = $('.infotext').text();
			// Fix for InfoText not displaying in HTML form
			txt = $('.infotext').html();
			txt = imageTag != null ? imageTag + txt : txt;
			// Defect# 1-RT469R end
		} 
		
		if(txt != '') {
			txt = $('<div>' + txt + '</div>');
			
			// Defect# 1-RT469R , RPE 1-1ABJJ0V
			ConfirmationMessage.UI.find('.confirmation').css({'background' : StyleManager.getStyle('confirmation_background','background')});
			ConfirmationMessage.UI.find('.confirmationText').append(txt);
			ConfirmationMessage.UI.find('.confirmationCloseIcon').click(ConfirmationMessage.hide);
			if(!container.hasClass('confirmationText')) {
				container.before(ConfirmationMessage.UI);
			}
			ConfirmationMessage.container = container;
// ConfirmationMessage.UI.fadeIn(1000);
			// Fix. 1-D8H7BF 
			ConfirmationMessage.UI.css({
				height: '0',
				opacity: '0'
			});
			// Fix. 1-D8H7BF Set the move by size correctly based on text size
		
			moveBy = txt.height() + 20;

			// Fix. 1-D8H7BF 
			ConfirmationMessage.UI.animate({height:moveBy, opacity: '1'}, 1);
			//set the height of .confirmation to moveBy Fix. 1-D8H7BF 
			ConfirmationMessage.UI.find('.confirmation').css( { height:moveBy });
			
// container.animate({top: moveBy}, 1000);
// container.parent().animate({height:
// document.getElementById(container.parent().attr('id')).offsetHeight+30},
// 1000);
			
			//if(ConfirmationMessage.infoType != 'error')
			//setTimeout(ConfirmationMessage.hide, 5000)
		}
		// Fix. 1-D8H7BF 
		container.find('.serviceInfotext').remove();
	},
	hide: function() {
		if(ConfirmationMessage.container) {
			try{
// ConfirmationMessage.UI.fadeOut(1000);
				ConfirmationMessage.UI.animate({height:'0px', opacity: '0'}, 1000);
				ConfirmationMessage.UI.find('.confirmationText').html(''); // Defect 1-RNN90S 
// ConfirmationMessage.container.animate({top: '-10px'}, 1000);
// ConfirmationMessage.container.parent().animate({height:
// ConfirmationMessage.container.parent().height()-50}, 1000, 'swing',
// function() {
// if(ConfirmationMessage.container) {
// ConfirmationMessage.container.parent().css('height', 'auto');
// }
// });
				ConfirmationMessage.container = null;
			} catch(e){
			}
		}
	}
};

var LocalizeImages = {
	
	cssString:'',
	
	IE7CSS: '',
	
	initialize: function() {
		
	// Changes for defect 1-CUFU31
		if (CommonContext.locale.substr(0,2) == "ar") {
			
			LocalizeImages.addStylesheet("/css/rtl.css");
			
			/**
			 * IE7 Specific css for RTL
			 */
			if(window.ActiveXObject) {
				LocalizeImages.addStylesheet("/css/ie7-rtl.css");
			}
			
			LocalizeImages.updateStyles();
		}
	},
	
	updateStyles: function() {
			
		if(window.ActiveXObject)	// MSIE specific fixes
		{
			$('#browseButton, #browseButtonBottom').bind("click", function() {
				// IE: RTL issue fix
				$('.columns').hide();
				setTimeout(function(){
					$('#browseMenu').addClass('over');
					$('#browseMenu').removeClass('over');
					$('.columns').show();
					}, 400)
			});
			
			// fix for level 4 content alignment in RTL.
			setTimeout(function() {
				$('#contentHolder').addClass('over');
				$('#contentHolder').removeClass('over');
			}, 400);
		}
	},
	
	addStylesheet: function(css) {
		var head = document.getElementsByTagName('head')[0];
// var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
// var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
		
// if(!isChrome && !isSafari)
		{
			var linktag = document.createElement('link');
			
			linktag.setAttribute('rel', 'stylesheet');
			linktag.setAttribute('type', 'text/css');
			linktag.setAttribute('href', css);
			head.appendChild(linktag);
		}
	}
}

var IE6Patch = {
	
	windowHeight: 0,
	windowWidth: 0,
	
	headerHeight: 0,
	
	footerHeight: 0,
	
	apply: function() {
		$(window).bind('resize', function(e) {
			IE6Patch.windowHeight = document.body.offsetHeight;
			IE6Patch.windowWidth = document.body.offsetWidth;
			IE6Patch.fixContentScrollbars();
			IE6Patch.fixNavigationSmallWidth();
		});

		this.windowHeight = document.body.offsetHeight;
		this.windowWidth = document.body.offsetWidth;
		this.headerHeight = document.getElementById('header') ? document.getElementById('header').offsetHeight : 0;
		this.footerHeight = document.getElementById('outerFooter') ? document.getElementById('outerFooter').offsetHeight : 0;
		
		this.fixContentScrollbars();
		this.fixCrumbPosition();
		this.fixNavigationSmallWidth();
	},
	
	fixContentScrollbars: function() {
		// Defect 1-DOWM78
		$('#content').css('height', this.windowHeight - (this.headerHeight + this.footerHeight) + 2);
	},
	
	fixCrumbPosition: function() {
		if(pageDepth == 0) {
			$('#crumb').css({top: '20px'});
		}
	},
	
	fixNavigationSmallWidth: function() {
		var w = $('#pageheaderlinks').width() + $('#search').width() + 130;
		
		var navWid = Math.abs(this.windowWidth - w);
		$('#navigationcontrolSmall').css( {
			width : navWid
		});
		// Defect 1-CY0JZQ
		if(pageDepth >= 4) {
			MenuNavigation.type = "small";
		}
		// fix defect 1-B5UNUA
		  if(MenuNavigation.type == 'small') {
             
              leftNavBtn = MenuNavigation.UI.find('.navArrowLeftSmall');
              rightNavBtn = MenuNavigation.UI.find('.navArrowRightSmall');
              
        } else {
              
              leftNavBtn = MenuNavigation.UI.find('.navArrowLeft');
              rightNavBtn = MenuNavigation.UI.find('.navArrowRight');
              
        }
		  /* Fix to handle the menu scroll button enable / disable */
          
          var menuTrack = MenuNavigation.UI.find('.menutrack');
          for(var i=0; parseInt(menuTrack.css('left'), 10) < 0; i++) {
              this.movePreviousMenu();
              menuTrack = MenuNavigation.UI.find('.menutrack');
              if(parseInt(menuTrack.css('left'), 10) < 0) {
                     break;
             }
          }
                                                                                                
    MenuNavigation.setNavigationButtonStates();
                                                
    leftNavBtn.click(MenuNavigation.previous);
    rightNavBtn.click(MenuNavigation.next);
                                                
    if(jQuery.browser.msie && parseInt(jQuery.browser.version) <= 6) {
           $('#navigationcontrolSmall span.menucontainer').css({ width: navWid});
    }

	},
	movePreviousMenu: function() {

		MenuNavigation.updatingNavigation = true;

		var menuTrack = MenuNavigation.UI.find('.menutrack');

		MenuNavigation.firstVisibleButtonIndex--;

		var tgt = menuTrack.find('.menuitem:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var wid = tgt.width();
		var marginLeft = tgt.css('margin-left') == 'auto' ? 0 : parseInt(tgt.css('margin-left'), 10);
		var marginRight = tgt.css('margin-right') == 'auto' ? 0 : parseInt(tgt.css('margin-right'), 10);
		var paddingLeft = tgt.css('padding-left') == 'auto' ? 0 : parseInt(tgt.css('padding-left'), 10);
		var paddingRight = tgt.css('padding-right') == 'auto' ? 0 : parseInt(tgt.css('padding-right'), 10);
		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight;

		var seperator = menuTrack.find('.menuItemSeperator:eq('+MenuNavigation.firstVisibleButtonIndex+')');
		var sepWid = seperator.width();
		var sepMarginLeft = seperator.css('margin-left') == 'auto' ? 0 : parseInt(seperator.css('margin-left'), 10);
		var sepMarginRight = seperator.css('margin-right') == 'auto' ? 0 : parseInt(seperator.css('margin-right'), 10);
		var sepPaddingLeft = seperator.css('padding-left') == 'auto' ? 0 : parseInt(seperator.css('padding-left'), 10);
		var sepPaddingRight = seperator.css('padding-right') == 'auto' ? 0 : parseInt(seperator.css('padding-right'), 10);


		var totalWidth = wid + marginLeft + marginRight + paddingLeft + paddingRight + 
		sepWid + sepMarginLeft + sepMarginRight + sepPaddingLeft + sepPaddingRight;

		// Changes for defect 1-CUFU31
		if (CommonContext.locale == "ar") {
			var right = menuTrack.css('right') == 'auto' ? 0 : parseInt(menuTrack.css('right'), 10);

			menuTrack.animate({right: right+totalWidth}, 300, MenuNavigation.setNavigationButtonStates);

			// particularly for RTL support
			// in IE
			if (jQuery.browser.msie) {
				redrawInterval = setInterval("MenuNavigation.reDraw()", 2);
			}
		} else {
			var left = menuTrack.css('left') == 'auto' ? 0 : parseInt(menuTrack.css('left'), 10);
			menuTrack.animate({left: left+totalWidth}, 0, MenuNavigation.setNavigationButtonStates);
		}
	}

};


var DowngradeCascade = {
	
	apply: function() {
		
		// show body contents
		
		// Remove scripting from body -- Google Analytics Fix
		$('body').find('script').remove();
		
		
		$('body').children().show();
		
		// remove classic header
		$('.headerwrapperdiv').remove();

        // remove header image Defect 1-B3F002
        $('#headerImage').remove();
    
		// move content into the contentHolder
		$('#content > #bodyContainer > #pagebody > #contentHolder').append($('.pagebodydiv'));
		
		// remove crumbs content outside the body
		$('.crumbs').remove();
		
		// remove search
		$('form[action*="twbksrch.P_ShowResults"]').remove();
		
		// Defect 1-E0HUQP - added content here and 
		// commented below as $('.pagetitlediv').remove(); line is setting header value as null
		//add static headers
		var staticHeadersContent = $('body').find('.staticheaders').html();
		if( staticHeadersContent )
		$('#pageheader').append("<div class='staticheaders'>" + staticHeadersContent + "</div>");
		
		// remove classic title
		$('.pagetitlediv').remove();
		
		// position content container
		$('#header').after($('#content'))
		
		// remove classic footer
		$('.pagefooterdiv').remove();
		
		// cascade outerfooter
		$('#outerFooter').css({left: 0});
		
		// remove blue line
		$('.bgtabon').removeClass();
		
		// remove global footer
		$('.globalfooterdiv').remove();
		
		// RPE 1-1B953XI: remove Disclaimer copyright information
		$('.disclaimer').remove();
		
		// remove blue background from rows that are not headers
		$('#contentHolder').find('th[class="ddlabel"][scope="row"]').css({
			'background': 'none',
			'color': '#000'
		});
/* 		// commented out for defect 1-RT469O 		
		// format footerlinks
		var pagefooterlinks = $('.pagefooterlinks');
        pagefooterlinks.each(function(e, element) {
              var links = $(element).find('a[class!="skiplinks"]');
              if( links.length > 0 ) {
                    ExtraLinks.initialize(links, $('#contentHolder'));
              }
              $(element).remove();
        }); 
        
		
		// adds the bottom most footerlinks
		var links = $('.pagefooterlinks a[class!="skiplinks"]');
		if( links.length > 0 ) {
            ExtraLinks.initialize(links, $('#contentHolder'));
			links.parent().remove();
		}
*/
		// fix for defect : 1-RT469O. select incorrectly positioned 
		// links and place it inside the correct parent dom element.
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
			ExtraLinks.initialize(links, $('#contentHolder'));
			links.parent().remove();
		}// end of 1-RT469O
		
		// fix for defect : 1-Z08QAU, 1-Z08QAX, 1-Z08QB0. 4th level Page contains erroneous symbols in top left corner
		// remove the footer links span tag from source, so that the extra symbols left 
		// after processing will not be displayed in the page
		$('body').find('.pagefooterlinks').remove();
		// end of 1-Z08QAU, 1-Z08QAX, 1-Z08QB0

		// format tabs
		var tabContent = $('body').find('.pagebodydiv table table td[class^="tab"]');
		if( tabContent.length > 0 ) {
			InnerTabs.initialize(tabContent, $('#pagebody'));
			$('body').find('.pagebodydiv table table td[class^="tab"]').parent().remove();
		}
		
		// enable scroll
		$('#content').addClass('level4');
		$('#pagebody').addClass('level4');
		
		// Defect 1-E0HUQP 
		//add static headers
		/*var staticHeadersContent = $('body').find('.staticheaders').html();
		if( staticHeadersContent )
		$('#pageheader').append("<div class='staticheaders'>" + staticHeadersContent + "</div>");	*/	
		
		// more formatters
		$('body').find('.infotext').find('p').prepend('<br>');
		$('body').find('.bordertable').after('<br>');
		
		// replace submit buttons
		$(':submit').each(function(i, elem) {
			__convertHTMLButton(elem);
		});
		
		// replace reset button
		$(':reset').each(function(i, elem) {
			__convertHTMLButton(elem);
		});
		
		if ($('.pagebodydiv').find('form').attr('action') =='bwpktetm.P_EnterTimeSheet'){
			$('.pagebodydiv').parent().addClass('contentHolderTab');
		}
		
	}
};

function __convertHTMLButton(element) {
	
	function callback(data) {
		
		if (!jQuery.browser.mozilla ) {
			if(jQuery.browser.msie ){// Defect 1-MNQG6F - find IE version check
				if(findIEVersion() < 9) {
					element.click(); // defect fix 1-98FK84
				}else if(findIEVersion() >= 9 ){
/*					
					// 1-TQ8AQL, add class search button to hidden field list
					// 1-UUDHVP, add 'SUBMITBUTTON' name to to hidden field list
					// in IE 9, if the button name is not empty and any of the following, we need to click() buttton programatically to submit the form properly
					if(element.name == 'SUB_BTN' || element.name == 'ADD_BTN' || element.name == 'btnSelected' || element.name =='complete' || element.name == 'REG_BTN' || element.name == 'SUBMITBUTTON'){
						element.click(); // defect fix 1-98FK84
					}
*/
					// commented out the had coding fix for button issue and including generic fix.
					// 1-UUDHVP, provide hidden filed of those submit buttons with name.
					if(element.name != undefined && element.name != '')	{
						if(element.type == 'submit') {
							element.click(); // defect fix 1-98FK84
						}
					}
										
				}
			}else{
        /*
				element.click(); // defect fix 1-98FK84
        */
			}
		}
		
		if(type == 'reset') {
			element.form.reset();
		}
		
		// enable disabled buttons after form submit
		enableButtonsInForm(element);
		
		return false;
	}

	var type = $(element).attr('type');
	if(typeof(type) == 'undefined' || type == '') {
		type = 'text';
	}
	
	var name = $(element).attr('name');
	if(typeof(name) == 'undefined') {
		name = '';
	}
	
	var id = $(element).attr('id');
	if(typeof(id) == 'undefined' || id == '') {
		id = UIDGenerator.uniqueID();
	}
	
	var value = $(element).attr('value');
	if(typeof(value) == 'undefined' || value == '') {
		value = $(element).text();
	}
	/* Defect #1-1BFUHTD, fetching javascript onclick function*/
	var onclick = $(element).attr('onclick');
	if(typeof(onclick) == 'undefined') {
		onclick = '';
	}
	/* End of Defect #1-1BFUHTD*/
	var buttonStyle = 'defaultButtonSmall';
	
	var loginList = Context.loginProc;

	/* 1-OZ4FEO, Memory consuming looping is replaced with better methods. 
	$.each(
			Context.loginProc,
			function( intIndex, objValue ){
			
				loginList.push(objValue.toLowerCase());
			}
	);
	*/
	loginList = $.map(loginList, function(n){ 
        	return(n.toLowerCase());
    });
    // 1-OZ4FEO end            

	if ($.inArray(Application.getProc().toLowerCase(), loginList) != -1) {
		buttonStyle = 'defaultButton';
	}
	var btn = HTMLButton({id:id, name:name, value:value, url:'', type:buttonStyle, callback:callback, selected:false, inputType:type});
	
	$(element).before(btn);
	$(element).hide();
	/* Defect #1-1BFUHTD, assigning javascript onclick function to newly created button*/
	if(/firefox/.test(navigator.userAgent.toLowerCase()) || ($.browser.msie && $.browser.version>8))
		if(typeof(onclick) != 'undefined' && onclick!=null && onclick!= "")
			$(btn).click(onclick);
	/* End of Defect #1-1BFUHTD*/
}

/**
 * @class Renders Global Footer Text
 * @author Chandra
 */
var GlobalFooterText = {
	
	initialize: function() {
		$('#globalFooter').addClass('footertext');
		$('#globalFooter').html($('body').find('.globalfooterdiv > .infotext').html());
		$('body').find('.globalfooterdiv').html('');
		}
};

/**
 * @class Renders Disclaimer information
 * @author Chandra
 */
 // RPE 1-1B953XI : Adding disclaimer information
var Disclaimer = {
	initialize: function() {
		if($("div.banner_copyright").text().length<=0)
			return;
		var copyright = '<br style="clear:both" /><br><div class="disclaimer">'+$("div.banner_copyright").html()+'</div>';
		$('body').find('#pagebody').append(copyright);
		$("div.banner_copyright").html('');
		}
};
