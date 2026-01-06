/*
 ****************************************************************************
 *                                                                          *
 * Copyright 2010 - 2019 Ellucian Company L.P. and its affiliates.          *
 *                                                                          *
 ****************************************************************************
  AUDIT TRAIL: 8.9.1
  1. Defects BXEGS-1679, CR-000164696, BXEGS-2334, CR-000168754	JC 10/28/2019
     Fix Cascade "Browse" widget scrolling issue.
     
  AUDIT TRAIL: 8.8.1
  1. Defect CR-000139602		            					EM 07/08/2016
     In Arabic,Browse button does not display menu correctly.
     
 AUDIT TRAIL: 8.6
  1. Defect 1-168CTIT		            					EM 11/02/2012
     Browse button does not display menu if the menu items contain's special characters in Link Text.
  2. Defect 1-17DEO21	            						CM 07/11/2012
     Altered the code to add the URL path in the Navigation to differentiate the Menu items on click.
 
 AUDIT TRAIL: 8.5
  1. Defect 1-10QD3FN                                      JM 14/11/2011
     Cascade UI does not disable the links when a proxy is 
     accessing another persons info
 
  AUDIT TRAIL: 8.4.1
  1. Defect 1-B37AGH                                       SVA 01/28/2011
     Add audit trails.
     
  AUDIT TRAIL: 8.3.0.4 
  1. Defect 1-B2VQFN                                        SVA 03/05/2010
     Browse menu shows the top level repeatedly when system.name has one underscore
     defined in application.properties in banner-ssb-ws.ear. 
  
     
  AUDIT TRAIL END

  FILE NAME..: common-controls.js
  RELEASE....: 8.9.1
  PRODUCT....: WTLWEB
  COPYRIGHT..: Copyright 2010 - 2019 Ellucian Company L.P. and its affiliates.
*/
/**
 * @class UI display component representing a Button.
 *
 * @constructor
 *
 * @param id {Integer} The id for the component.
 * @param label {String} The label displayed to the user by the component.
 * @param callback {Function} The method that is invoked when the button's click event is triggered.
 *
 * @author jmiller
 */
function Button(id, label, callback, type) {
    if (typeof(type) == "undefined") {
        type = "";
    }

    var b = $("<span class='primaryButton2 " + type + "' id='" + id + "'>"
            + "<span class='primaryButtonComponent primaryButtonLeft" + type + "'></span>"
            + "<span class='primaryButtonComponent primaryButtonMiddle" + type + "' id='" + id + "Text'>" + ResourceManager.getString(label) + "</span>"
            + "<span class='primaryButtonComponent primaryButtonRight" + type + "'></span>"
            + "</span>");

    if (typeof(callback) == "function") {
         b.click(callback);
    }

	/*
	 * IE6 Bug fix: Class chaining issue with hover
	 * Added by jai: 28th aug 2009
	 */
    b.hover(function() {
       //$(this).find('.primaryButtonComponent').addClass("hover");
	   
	   $(this).find('.primaryButtonLeft').addClass("primaryButtonLeftHover");
	   $(this).find('.primaryButtonMiddle').addClass("primaryButtonMiddleHover");
	   $(this).find('.primaryButtonRight').addClass("primaryButtonRightHover");
	   
    }).mouseleave(function() {
		
       //$(this).find('.primaryButtonComponent').removeClass("hover");
	   
	   $(this).find('.primaryButtonLeft').removeClass("primaryButtonLeftHover");
	   $(this).find('.primaryButtonMiddle').removeClass("primaryButtonMiddleHover");
	   $(this).find('.primaryButtonRight').removeClass("primaryButtonRightHover");
    });
	
	/*
	 * end -----------------------------
	 */
	
    EventDispatcher.addEventListener(Localization.events.localeChange,
        function() {
            b.find('.primaryButtonMiddle').text(ResourceManager.getString(label));
        });

    return b;
};
/**
 * @class UI display component representing a Modal Window.
 *
 * @constructor
 *
 * @param id {Integer} The id for the component.
 * @param label {String} The label displayed to the user by the component.
 * @param callback {Function} The method that is invoked when the close button's click event is triggered.
 *
 * @author jmiller
 */
function ModalWindow(id, label, type, closeCallback) {
	
	/*
	 * IE6 Bug fix: Class chaining issue
	 * removed space aftere class declaration in some span elements so that when 'type' is added, the subsequent class name become a unique style
	 * ex: <div class='modalWindowTop" + type + "'> becomes <div class='modalWindowTopblue" + "'> when 'type' is 'blue'
	 * this is done as css styles like "modalWindowTop.blue" are not supported in IE6 and when implemented in html like <div class='modalWindowTop blue" + "'>
	 * only the last declaration i.e., blue is loaded and rest ignored.
	 * The stylesheet file has been modified to represent these new styles (Ex: modalWindowTopblue).
	 * 
	 * @see common-controls.css
	 * 
	 * Added by jai: 31th aug 2009
	 */
	
    var modal = $("<div class='modalContainer'>"
                + "<div class='modalWindowModal'></div>"
                + "<div class='modalWindow' id='" + id + "'>"
                + "<div class='modalWindowTop" + type + "'>"
                + "<span class='modalWindowIcon " + type + "'></span>"
                + "<span class='modalWindowTitle " + type + "'>" + ResourceManager.getString(label) + "</span>"
                + "<span class='modalCloseIcon" + type + "'></span>"
                + "</div>"
                + "<div class='modalWindowMiddle" + type + "'>"
                + "<div class='modalWindowContent " + type + "'></div>"
                + "</div>"
                + "<div class='modalWindowBottom" + type + "'>"
                + "<div class='buttonBar modalButtonBar" + type + "'></div>"
                + "</div>"
                + "</div></div>");
	/*
	 * end -----------------------------
	 */
	
    if (typeof(closeCallback) == "function") {
        modal.find('.modalCloseIcon').bind("click", closeCallback);
    }

    EventDispatcher.addEventListener(Localization.events.localeChange,
        function() {
            modal.find('.modalWindowTitle').text(ResourceManager.getString(label));
        });

    return modal;
};

/**
 * Manages the creation and display of modal windows within the Common Platform.
 * @jmiller
 */
var ModalWindowFactory = {
    /**
     * @private
     * The currently established modal window.
     * @type {JQuery DOM Object}
     */
    currentModal: null,
    /**
     * Creates and shows a modal dialog window.
     *
     * @param {String} id The DOM element id to assign to the modal window instance.
     * @param {String} label The title for the window.
     * @param {String} The class type for the modal window display.
     * @param {Object} content The content to display in the window. Accepts HTML as a string or a JQuery element Object.
     * @param {String} contentClass Any additional CSS classes to assign tot he content pane.
     * @param {Array} buttons The <object>Buttons</object> to display.
     * @param {Function} closeCallback A auxillary callback function that is executed when the close button is clicked.
     */
    show: function(id, label, type, content, contentClass, buttons, closeCallback) {
        var modal = ModalWindow(id, label, type, closeCallback);

        modal.find('.modalWindowContent').append(content);

        for (var x = 0; x < buttons.length; x++) {
            modal.find('.buttonBar').append(buttons[x]);
        }

        $('body').append(modal);

        modal.find('.modalWindowModal').animate({ opacity: 0.25, height: '100%', width: '100%' }, 1000);
        modal.find('.modalWindow').fadeIn();

        // vertically center the modal window
        var winHeight = window.innerHeight/2;
        var winWidth = window.innerWidth/2;

        var modHeight = modal.find('.modalWindow').height()/2;
        var modWidth = modal.find('.modalWindow').width()/2;

        if (modHeight != 0
         && winHeight - modHeight >= 0) {
            modal.find('.modalWindow').css("top", winHeight - modHeight);
        }

        if (modWidth != 0
         && winWidth - modWidth >= 0) {
            modal.find('.modalWindow').css("left", winWidth - modWidth);
        }

        ModalWindowFactory.currentModal = modal;
    },
    /**
     * Closes the currently open modal window.
     */
    close: function() {
        if (!ModalWindowFactory.currentModal) {
            return;
        }

        ModalWindowFactory.currentModal.find('.modalWindow').fadeOut();

        ModalWindowFactory.currentModal.find('.modalWindowModal').animate({ opacity: 0, height: '100%', width: '100%' }, 1000, function() {
            if (ModalWindowFactory.currentModal) {
                ModalWindowFactory.currentModal.remove();
                ModalWindowFactory.currentModal = null;
            }
        });
    }
}

/**
 * @author jmiller
 */
function Header() {
    return $("<div id='header'>"
           + "<div id='areas'></div>"
           + "<div id='browseMenuContainer'>"
           + "<span class='bottomDropShadow'></span>"
           + "</div>"
           + "</div>");
}

function InstitutionalBranding() {
    return $("<span class='institutionalBranding'></span>");
}

function SearchBox() {
    var out = $("<div id='searchBox'>"
              + "<span class='searchInputContainer'><input id='searchInput' type='text'/></span>"
              + "<span id='searchButton'></span>"
              + "</div>");

    out.find('#searchInput').focus(function() {
        if ($(this).val() == ResourceManager.getString("search_title")) {
             $(this).val("");
        }
    }).blur(function() {
        if ($(this).val() == "") {
             $(this).val(ResourceManager.getString("search_title"));
        }
    });

    EventDispatcher.addEventListener(Localization.events.localeChange,
        function() {
            out.find('#searchInput').val(ResourceManager.getString("search_title"));
        });

    return out;
}

//    var out = $("<div id='areas'>"
//              + "<span id='browseButton' class='browseButton closed'><div><div></div></div></span>"
//              + "</div>"
//              + "<div id='browseMenuContainer'>"
//              + "<div id='browseMenu'>"
//              + "<div id='scrollableListContainer'></div>"
//              + "</div>"
//              + "<span id='browseButtonBottom' class='browseButton'></span>"
//              + "<span class='bottomDropShadow'></span>"
//              + "</div>");


function addNavigationControls() {
	
    $('#areas').append("<div id='browseButton' class='browseButton'>"
						+ "<div>"
						+ "<div>"
						+ "<a id='browseArrow' class='browseButtonDownArrow' href='javascript:void(0)'></a>"
						+ "</div>"
						+ "</div>"
						+ "</div>");

    $('#browseMenuContainer').prepend("<div id='browseMenu'>"
                                    + "<div id='scrollableListContainer'></div>"
                                    + "</div>"
                                    + "<span id='browseButtonBottom' class='browseButton'></span>");

    $('#browseButton, #browseButtonBottom').bind("click", toggleBrowseMenu);

    $('.browseButton').hover(function() {
		if($("#browseButton").hasClass('browseTab')) {
			return;
		}
       	$("#browseButton").css("background-position", "0px -205px");
		$("#browseButton div").css("background-position", "0 -123px");
		$("#browseButton div div").css("background-position", "right -164px");
    }).mouseleave(function() {
		if($("#browseButton").hasClass('browseTab')) {
			return;
		}
       	$("#browseButton").css("background-position", "0px -82px");
		$("#browseButton div").css("background-position", "0 0px");
		$("#browseButton div div").css("background-position", "right -41px");
    });

    EventDispatcher.addEventListener(Localization.events.localeChange,
        function() {
            $('#browseButton div div a').text(ResourceManager.getString("areas_label_browse"));
        });
}


function toggleBrowseMenu() {
    if ($('#browseMenu').is(':hidden')) {
        $('#browseButton').removeClass("browseButton");
        $('#browseButton').addClass("browseTab");
		
		$("#browseButton").css("background-position", "top left");
		$("#browseButton div").css("background-position", "top right");
		$("#browseButton div div").css("background-position", "top left");
		
//        $('#browseButtonBottom').addClass("open");
		$('#browseArrow').removeClass('browseButtonDownArrow');
		$('#browseArrow').addClass('upArrow');
		
        $('#browseMenu').slideDown('normal', function() {
			// add a handler to close the Browsemenu when the mouse is clicked outside
			$('body').click(function() {
				if(!$('#browseMenu').hasClass('over')) {
					$('body').unbind('click');
					toggleBrowseMenu()
				}
			});
		});
		
		ScrollableList.slideDownScrollButtons();
		
		$('#browseMenu').bind('mouseenter', function() {$(this).addClass("over");});
		$('#browseMenu').bind('mouseleave', function() {$(this).removeClass("over");});
		
    } else {
        $('#browseButton').removeClass("browseTab");
        $('#browseButton').addClass("browseButton");
		
		$("#browseButton").css("background-position", "0px -82px");
		$("#browseButton div").css("background-position", "0 0px");
		$("#browseButton div div").css("background-position", "right -41px");
		
//        $('#browseButtonBottom').removeClass("open");
		$('#browseArrow').removeClass('upArrow');
		$('#browseArrow').addClass('browseButtonDownArrow');
		
        $('#browseMenu').slideUp();
		
		ScrollableList.slideUpScrollButtons();
		// force clearing any existing handler 
		$('body').unbind('click');
    }
	return false;
}


function BrowseMenu() {
    var out = $("<div id='browseMenuContainer'>"
              + "<div id='browseMenu'>"
              + "<div id='scrollableListContainer'></div>"
              + "</div>"
              + "<span id='browseButtonBottom' class='browseButton'></span>"
              + "<span class='bottomDropShadow'></span>"
              + "</div>");

    return out;
}

function UserControls() {

    var out = $("<div id='globalNav'>"
			  + "<div>"
			  + "<ul>"
//              + "<li class='userIdentityText bold'></li>"
              + "<li><a class='signOutText pointer'>" + ResourceManager.getString("userdetails_signout") + "</a></li>"
//              + "<li><a class='preferenceText pointer'>" + ResourceManager.getString("preferences_label") + "</a></li>"
              + "<li><a class='helpText pointer'>" + ResourceManager.getString("userdetails_help") + "</a></li>"
			  + "</ul>"
			  + "</div>"
              + "</div>");
			  
//    var out = $("<div class='information'>"
//              + "<span class='userIdentityText bold'></span>"
//              + "<span class='signOutText pointer'>" + " [" + ResourceManager.getString("userdetails_signout") + "] | " + "</span>"
//              + "<span class='preferenceText pointer'>" + ResourceManager.getString("preferences_label") + " | " + "</span>"
//              + "<span class='helpText pointer'>" + ResourceManager.getString("userdetails_help") + "</span>"
//              + "</div>");

    out.find('.signOutText').click(function() {
		// Defect 1-10QD3FN, Cascade UI does not disable the links when a proxy is 
     	// accessing another persons info
    	// check if '.proxyAccess' class present in the link. This is present
		// only during proxy access mode, then do not execute the logics.
		// This disables the link in proxy access mode.
		if($($('.signOutText')[0]).hasClass("proxyAccess")){
    		return;
    	}
		// Defect 1-10QD3FN, End
		
		// set CommonContext.user to null before removing the cookie		
		CommonContext.user = null;
        CookieManager.remove("username");
		
		if (CommonContext.standalone) {
			if (typeof (Messenger.messageHandler) == 'function') {
				if($(this).hasClass('signIn')) {
					Messenger.messageHandler(createRequestMessage("signin"));
				} else {
					Messenger.messageHandler(createRequestMessage("signout"));
				}
			}
		} else {
    	    window.location = "login.html";
		}	
    });

    out.find('.preferenceText').bind("click", Preferences.show);

    EventDispatcher.addEventListener(Localization.events.localeChange,
        function() {
			if(CommonContext.user) {
	            out.find('.signOutText').text(ResourceManager.getString("userdetails_signout"));
				out.find('.signOutText').addClass('signOut');
			} else {
				out.find('.signOutText').text(ResourceManager.getString("userdetails_signin"));
				out.find('.signOutText').addClass('signIn');
			}
            out.find('.preferenceText').text(ResourceManager.getString("preferences_label"));
            out.find('.helpText').text(ResourceManager.getString("userdetails_help"));
//            out.find('.signOutText').text(" [" + ResourceManager.getString("userdetails_signout") + "] | ");
//            out.find('.preferenceText').text(ResourceManager.getString("preferences_label") + " | ");
//            out.find('.helpText').text(ResourceManager.getString("userdetails_help"));
        });

    return out;
}

/**
 * @class value object that represents a footer application.
 * @constructor
 *
 * @param {String} appid The id for the footer application.
 * @param {String} className The class name for the footer application.
 * @param {String} displayUI The HTML representation for the display component.
 *
 * @author jmiller
 */
function FooterApplicationValueObject(appid, className, displayUI) {
    this.appid = appid;
    this.className = className;
    this.displayUI = displayUI;
}

/**
 * @class value object that represents a footerAppContainer
 * @constructor
 *
 * @param {int} index The index at which the footer div to be injected
 * @param {String} appId The appId of the managed application.
 * @param {String} html The html content to be injected by the managed application
 *
 * @author prashanth
 */
function footerAppDiv(index, appId, html){
    this.index = index;
    this.appId = appId;
    this.html = html;
}
		
/**
 * @class Singleton class that provides the interface for handling applications
 * that display within the footer bar.
 *
 * @author jmiller
 */
var Footer = {
    /**
     * The list of loaded FooterApplicationValueObject objects.
     * @type Array
     */
    apps: [],
    /**
     * @private
     *
     * ID marker for the display component of a FooterApplicationValueObject
     * @type String
     */
    uiMarker: "-ui",
	/**
     * @private
     * The list of loaded FooterApplicationValueObject objects.
     * @type Array
     */
    appContainers: [],
    /**
     * @private
     *
     * The HTML UI elements.
     */
    displayUI: "<div id='outerFooter'>"
//             + "<div id='footerContainer'></div>"
//             + "<div id='footerLeftCap'></div>"
             + "<div id='footer'>"
             + "<div id='footerApplicationBar'>"
             + "<ul id='footerIconContainer'></ul>"
             + "<span class='footerBrandingLogo'></span>"
			 + "<div id='footerAppContainer'"
//             + "<div id='app1'>App1</div>"
//             + "<div id='app2'>App2</div>"
             + "</div>"
             + "</div>"
             + "</div>"
//             + "<div id='footerRightCap'></div>"
             + "</div>",
    /**
     * @private
     *
     * Initialization method.
     */
    initialize: function() {
        $('body').append(Footer.displayUI);

        $('.footerBrandingLogo').click(function() {
            var nav = Navigation.findNavigationEntry("institutionHomePage");

            if (nav
             && nav instanceof NavigationEntryValueObject) {
                 Navigation.navigate(nav,null);  //	Defect 1-17DEO21 : added second paramter to Navigation.navigate() method
             }
        });
    },
    /**
     * Method for adding an application to the Footer.
     * @param {FooterApplicationValueObject} footerApplication The FooterApplicationValueObject to add.
     */
    add: function(footerApplication) {
        if (footerApplication instanceof FooterApplicationValueObject) {
            var icon = "<li><span id='" + footerApplication.appid + "' class='" + footerApplication.className + "'></span></li>";
            var ui = $("<div id='" + footerApplication.appid + this.uiMarker + "'></div>");

            ui.append(footerApplication.displayUI);

            $('#footerIconContainer').append(icon);
            $('#footerContainer').append(ui);

            this.apps.push(footerApplication);
        }
    },
    
       
    /**
     * Method for removing an application from the Footer.
     * @param {String} appid The id of the FooterApplicationValueObject to remove.
     */
    remove: function(appid) {
        for (var x = 0; x < this.apps.length; x++) {
            if (this.apps[x].appid == appid) {
                $('#' + this.apps[x].appid).parent().remove();
                $('#' + this.apps[x].appid + this.uiMarker).remove();
            }
        }
    },
	
	/** Function to create a div in the footerAppContainer
     * @constructor
     *
     * @param {footerDiv} object of type footerAppDiv
     * @return {footerAppDiv} object of type footerAppDiv
     *
     * @author prashanth
     */
    createContainer: function(footerDiv){
        if (footerDiv instanceof footerAppDiv) {
            for (i = 0; i < Footer.appContainers.length; i++) {
            
                if (Footer.appContainers[i].appId == footerDiv.appId) {
                
                    $('#footerAppContainer').find('#' + footerDiv.appId).remove();
                  }
            }

            var ui = $("<div id='" + footerDiv.appId + "'></div>");
            var arrIndex = $("#footerAppContainer").children().length;
          	
            if (footerDiv.index != -1 && footerDiv.index != null && footerDiv.index <= $("#footerAppContainer").children().length) {
                if ($("#footerAppContainer").children().length > 0) {
                      if (footerDiv.index != 0) {
                        $("#footerAppContainer").find('div:eq(' + (footerDiv.index - 1) + ')').after(ui);
                      }
                    else 
                        if (footerDiv.index == 0) {
                             $("#footerAppContainer").find('div:eq(' + footerDiv.index + ')').before(ui);
                         }
                }
                else {
                     if (footerDiv.index == 0) {
                         $("#footerAppContainer").append(ui);
                    }
                }
            }
            else {
                $("#footerAppContainer").append(ui);
            }
            $('#footer').find('#' + footerDiv.appId).html(footerDiv.html);
            this.appContainers.push(footerDiv);
        }
        return footerDiv;
    },
	
	/** Function to get a div from the footerAppContainer
	 * @constructor
	 *
	 * @param {String} appId the appId of the managed application
	 * @return {footerAppDiv} object of type footerAppDiv
	 *
	 * @author prashanth
	 */ 
    getAppContainer: function(appId){
        var children = $("#footerAppContainer").children().size();
        var appNewDiv;
        var exists = 'false';
        for (i = 0; i < Footer.appContainers.length; i++) {
             if (Footer.appContainers[i].appId == appId) {
                exists = 'true';
                appNewDiv = Footer.appContainers[i];
                break;
            }
         }
        if (exists == "true") {
            return appNewDiv;
        }
        else {
             return Footer.createContainer(new footerAppDiv(children, appId, ""));
         }
     }
};

/**
 * @class A ScrollableList component. This singleton class creates and controls
 * the display of the data in a mulidimentional array as a series of scrolling
 * list components.
 *
 * @author jmiller
 */
var ScrollableList = {
    /**
	 * Flag to check if the ScrollableList is initialized
	 * @type Boolean
	 * @default false
	 */
	initialized: false,
	/**
     * The scrolling speed.
     * @type Number
     * @default 5
     */
    speed: 5,
    /**
     * The height of the scrollable components.
     * @type Number
     * @default 110
     */
    height: 110,
    /**
     * @private
     *
     * The JavaScript interval id used to control scroll behavior.
     * @type Number
     */
    interval: null,
    /**
     * @private
     *
     * The JQuery object representing the currently selected list during scrolling.
     * @type Element
     */
    selectedList: null,
    /**
     * @private
     *
     * The internal marker suffixed to all generated ids.
     * @type String
     * @default "___" Defect 1-B2VQFN 
     */
    marker: "___", 
	/**
     * Total number of columns to display on initialization
     */
	totalColumns:2,
	/**
     * Total number of columns that are added at runtime
     */
	numColumns:0,
    /**
     * ScrollableList UI component initialization method.
     */
    initialize: function() {
        this.add(ScrollableList.totalColumns);

        $('.navList > .scrollableListFolder').live('click', function() { ScrollableList.load($(this)); });

        var menu = Navigation.menuList;

        for (var x in menu) {
            if (x != "none") {
                if (menu[x] instanceof Array) {
                    $('.navList:first').append("<li id='" + ScrollableList.marker + x + "'  class='parent scrollableListFolder'><span>" + x + "</span></li>");
                } else {
                    $('.navList:first').append("<li class='scrollableListItem'><span>" + menu[x] + "</span></li>");
                }
            }
        }
        ScrollableList.refresh();

        $('.downButton').live("mouseover", function() { ScrollableList.selectedList = $(this).parent(); ScrollableList.interval = setInterval(ScrollableList.scrolldown, 50); });
        $('.downButton').live("mouseout",  function() { clearInterval(ScrollableList.interval); });

        $('.upButton').live("mouseover", function() { ScrollableList.selectedList = $(this).parent(); ScrollableList.interval = setInterval(ScrollableList.scrollup, 50); });
        $('.upButton').live("mouseout",  function() { clearInterval(ScrollableList.interval); });
		
		$(window).resize(function(){
//			ScrollableList.setColumnContainerWidth();
		});
		
		ScrollableList.attachScrollButtonHandlers();
		
//		ScrollableList.setColumnContainerWidth();
    },
    reinitialize: function(len) {

       $('.navList > .scrollableListFolder').live('click', function() { ScrollableList.load($(this)); });

        var menu = Navigation.menuList;

        for (var x in menu) {
            if (x != "none") {
	            if(len == 1) {
	            	$('.navList:first').append("<li id='" + ScrollableList.marker + x + "'  class='parent scrollableListFolder'><span>" + x + "</span></li>");
	            } else {
					var temp = "list_"+x;
	            	$('#'+temp).remove();
	            	$('.selectedListItem').removeClass("selectedListItem");
	            	$('.navList:first').append("<li id='" + ScrollableList.marker + x + "'  class='parent scrollableListFolder'><span>" + x + "</span></li>");
	            }
            }
        }
  
        ScrollableList.refresh();

        $('.downButton').live("mouseover", function() { ScrollableList.selectedList = $(this).parent(); ScrollableList.interval = setInterval(ScrollableList.scrolldown, 50); });
        $('.downButton').live("mouseout",  function() { clearInterval(ScrollableList.interval); });

        $('.upButton').live("mouseover", function() { ScrollableList.selectedList = $(this).parent(); ScrollableList.interval = setInterval(ScrollableList.scrollup, 50); });
        $('.upButton').live("mouseout",  function() { clearInterval(ScrollableList.interval); });
		
		$(window).resize(function(){
//			ScrollableList.setColumnContainerWidth();
		});
		ScrollableList.attachScrollButtonHandlers();
		
//		ScrollableList.setColumnContainerWidth();
    },
    /**
     * Adds an additional ScrollableList to the parent component.
     * @param {Number} count The number of list components to add (optional).
     */
    add: function(count) {
        if (!count
          || count <= 0) {
            count = 1;
        }
		
		var trackWidth = 0;
        for (var x = 0; x < count; x++) {
            if (x == 0) {
                $('#scrollableListContainer').append(""
                        + "<div class='columns header'>"
                        + "<div class='scrollContainer'>"
                        + "<ul class='navList navListStart'></ul>"
                        + "</div>"
                        + "</div>");
						
				$('#scrollableListContainer').append(""
						+ "<div id='btn-l' class='btn-l'/>"
				);
				$('#scrollableListContainer').append(""
						+ "<div id='columnsContainer'><div id='columnsContainerTrack'/></div>"
				);
				$('#scrollableListContainer').append(""
						+ "<div id='btn-r' class='btn-r'/>"
				);
				// set blank to activate scrolling
//				$('#columnsContainerTrack').append(""
//                        + "<div class='columns'>"
//                        + "<span class='scrollUpButton'></span>"
//                        + "<div class='scrollContainer'>"
//                        + "<ul class='navList'></ul>"
//                        + "</div>"
//                        + "<span class='scrollDownButton'></span>"
//                        + "</div>");

//				ScrollableList.numColumns++;
//				var trackWidth = parseInt($('#columnsContainerTrack').find('.columns:first').css('width'));
//				$('#columnsContainerTrack').css('width', ((ScrollableList.numColumns*trackWidth)+ScrollableList.numColumns)+'px');
				
            } else {
				ScrollableList.addColumn();
            }
        }
    },
	/**
     * Adds a column to the ScrollableList
     */
	addColumn: function() {
		$('#columnsContainerTrack').append(""
                        + "<div class='columns'>"
                        + "<span class='scrollUpButton'></span>"
                        + "<div class='scrollContainer'>"
                        + "<ul class='navList'></ul>"
                        + "</div>"
                        + "<span class='scrollDownButton'></span>"
                        + "</div>");
		
		ScrollableList.numColumns++;
		var columnWidth = $('#columnsContainerTrack').find('.columns:first').width();
		$('#columnsContainerTrack').css('width', ((ScrollableList.numColumns*columnWidth)+ScrollableList.numColumns)+'px');
		
		ScrollableList.setScrollButtonStates();
	},
	/**
     * Removes the last column from the ScrollableList and sets the columnsContainerTrack width
     */
	removeColumn: function(col) {
		$('#columnsContainerTrack').find('.columns:last').remove();
		
		ScrollableList.numColumns--;
		var trackWidth = $('#columnsContainerTrack').find('.columns:first').width();
		$('#columnsContainerTrack').css('width', ((ScrollableList.numColumns*trackWidth)+ScrollableList.numColumns)+'px');
	},
    /**
     * Loads list content and populates the next list for a selected list item.
     * @param {Element} item The JQuery element for the selected list item.
     */
    load: function(item) {
        var loc = item.attr('id').replace(ScrollableList.marker, "").split("___"); /*Defect 1-B2VQFN*/

//        item.parent().parent().parent().nextAll().find('.navList').empty();
		item.parent().parent().parent().nextAll().find('.navList').each(function(i) {
//			$(this).empty();
			ScrollableList.removeColumn();
		})
		
		ScrollableList.addColumn();
		
		var next = null;
		if(item.parent().hasClass('navListStart')) {
			next = item.parent().parent().parent().next().next().find('.navList:first');
		} else {
			next = item.parent().parent().parent().next().find('.navList');
		}
		
        next.css("top", "0");

        item.parent().find("li").removeClass("selectedListItem");
        item.addClass("selectedListItem");

        var list = Navigation.menuList;

        for (var x = 0; x < loc.length; x++) {
            if (list[loc[x]]) {
                if (list[loc[x]] instanceof Array) {
                    list = list[loc[x]];
                }
            }
        }

        for (var x in list) {
        	//var id = Url.decode(item.attr('id') + "___" + x); /*Defect 1-B2VQFN*/ // Defect 1-168CTIT : Url.decode() & replacing the special chars
        	var id = decodeURI(item.attr('id') + "___" + x); /*Defect CR-000139602*/ 
		if (list[x] instanceof Array) {
                next.append("<li id='" + id + "' class='parent scrollableListFolder'><span>" + x + "</span></li>");
            } else if (list[x] instanceof NavigationEntryValueObject) {
            	var linkName = list[x].name.replace("&lsquo;","").replace(/-/gi," ccccc ").replace("&quot;","").replace(/[^(a-z_)/ \u00D1\u00F10-9]/ig,'').replace(/ ccccc /gi,"-");
            	next.append("<li class='scrollableListItem' onclick=\"toggleBrowseMenu();Navigation.navigate('" + linkName + "','" + list[x].path + "');\"><span>" + list[x].caption + "</span></li>"); //Defect 1-17DEO21 : added second paramter to Navigation.navigate() method
            } else {
                ErrorManager.show("Unknown entry encountered.");
            }
        }

        ScrollableList.refresh();
    },
    /**
     * Refreshes the scrolling state of all displayed list components.
     */
    refresh: function() {
        $('.navList').each(function(i) {
            if ($(this).height() > ScrollableList.height) {
                var up = $(this).parent().parent().find('.scrollUpButton');
                if (!up.hasClass("upButton")) {
                    up.removeClass("upButtonDisabled");
                    up.addClass("upButton");
                    up.append("<span class='navUpArrow'></span>");
                }

                var down = $(this).parent().parent().find('.scrollDownButton');
                if (!down.hasClass("downButton")) {
                    down.removeClass("downButtonDisabled");
                    down.addClass("downButton");
                    down.append("<span class='navDownArrow'></span>");
                }
            } else {
                var up = $(this).parent().parent().find('.scrollUpButton');
                up.removeClass("upButton");
                up.addClass("upButtonDisabled");
                up.empty();

                var down = $(this).parent().parent().find('.scrollDownButton');
                down.removeClass("downButton");
                down.addClass("downButtonDisabled");
                down.empty();
            }
        });
    },
    /**
     * @private
     *
     * Callback method for scrolling a list up.
     */
    scrollup: function() {
        if (ScrollableList.selectedList) {
            var top = ScrollableList.selectedList.find('.navList').prop('offsetTop');
            var newTop = (top < 0) ? top + ScrollableList.speed : top;

            ScrollableList.selectedList.find('.navList').css("top", newTop + "px");
        }
    },
    /**
     * @private
     *
     * Callback method for scrolling a list down.
     */
    scrolldown: function() {
        if (ScrollableList.selectedList) {
            var height = ScrollableList.selectedList.find('.navList').prop('offsetHeight');
            var top = ScrollableList.selectedList.find('.navList').prop('offsetTop');
            var newTop = ((height + top) > ScrollableList.height) ? top - ScrollableList.speed : top;

            ScrollableList.selectedList.find('.navList').css("top", newTop + "px");
        }
    },
	/**
     * @private
     *
     * Attaches necessary handlers for left/right scroll buttons.
     */
	attachScrollButtonHandlers: function() {
		// scroll buttons --------------------------------
		var colWidth = $('#columnsContainerTrack').find('.columns:first').css('width');
		var isScrolling = false;
		
		function resetIsScrolling() {
			isScrolling = false;
		}
		
		$("#btn-l").css("display", "none");
		$("#btn-r").css("display", "none");
		
        // right button
        // -----------------------------------------------
        $("#btn-r").live("mouseover", function(){ 
            $(this).css({
                "border-color" : "#369",
                "background-position" : "-52px center"
            });
        });
        $("#btn-r").live("mouseout", function(){ 
            $(this).css({
                "border-color" : "#666",
                "background-position" : "-18px center"
            });
        });
        $("#btn-r").live("click", function(){
			if(!isScrolling) {
				isScrolling = true;
	            $("#columnsContainerTrack").animate({ 
	                marginLeft: "-="+colWidth
	            }, 500, function() {
					ScrollableList.setScrollButtonStates();
					setTimeout(resetIsScrolling, 250);
				} );
			}
        });
		// left button
        // -----------------------------------------------
        $("#btn-l").live("mouseover", function(){ 
            $(this).css({
                "border-color" : "#369",
                "background-position" : "-36px center"
            });
        });
        $("#btn-l").live("mouseout", function(){ 
            $(this).css({
                "border-color" : "#666",
                "background-position" : "-1px center"
            });
        });
        $("#btn-l").live("click", function(){
			if (!isScrolling) {
				isScrolling = true;
	            $("#columnsContainerTrack").animate({ 
	                marginLeft: "+="+colWidth
	            }, 500, function() {
					ScrollableList.setScrollButtonStates();
					setTimeout(resetIsScrolling, 250);
	            } );
			}
        });
        // common
        $("#btn-r, #btn-l").live("mousedown", function(){ 
            $(this).css({
                "border-color" : "#036"
            });
        });
        $("#btn-r, #btn-l").live("mouseup", function(){ 
            $(this).css({
                "border-color" : "#369"
            });
        });
	},
	setColumnContainerWidth: function() {
//		console.log('resize')
		/*var windowWidth = $(window).width();
		var colHeaderWidth = $('#scrollableListContainer').find('.header').width();
		var leftScrollWidth = $('#btn-l').width();
		$('#columnsContainer').css({width: windowWidth - colHeaderWidth - (2*leftScrollWidth) - 5});*/
	},
	
	slideDownScrollButtons:function() {
		if($("#btn-l").hasClass('visible')) {
			$("#btn-l").slideDown();
		}
		if ($("#btn-r").hasClass('visible')) {
			$("#btn-r").slideDown();
		}
	},
	
	slideUpScrollButtons:function() {
		if($("#btn-l").hasClass('visible')) {
			$("#btn-l").slideUp();
		}
		if ($("#btn-r").hasClass('visible')) {
			$("#btn-r").slideUp();
		}
	},
	
	setScrollButtonStates: function() {
		var columnWidth = $('#columnsContainerTrack').find('.columns:first').width();
		var trackMarginLeft = $('#columnsContainerTrack').css('margin-left');
		trackMarginLeft = trackMarginLeft == 'auto' ? 0 : parseInt(trackMarginLeft);
		// left scroll
		if (trackMarginLeft == 0) {
			$("#btn-l").fadeOut(250);
			$("#btn-l").removeClass('visible');
		} else {
			$("#btn-l").fadeIn(250);
			$("#btn-l").addClass('visible');
		}		
		// right scroll
		if (((ScrollableList.numColumns * columnWidth) + trackMarginLeft) <= $('#columnsContainer').width()) {
			$("#btn-r").fadeOut(250);
			$("#btn-r").removeClass('visible');
		} else {
			$("#btn-r").fadeIn(250);
			$("#btn-r").addClass('visible');
		}
	}
};

/**
 * @author jmiller
 */
var StopWatch = {
    // properties
    startTime: null,
    // methods
    start: function() {
        startTime = (new Date).getTime();
    },
    stop: function() {
        ErrorManager.show("elapsed: " + ((new Date).getTime() - startTime) + " ms");
    }
};


function ColorPickerComponent(id, type, label, color, updateFunction, resetFunction) {
    var out = $("<div class='colorPickerComponent'>"
              + "<span class='colorpickerlabel " +  type + "'>" + label + "</span>"
              + "<div id='" + id + "' class='colorPickerControl'>"
              + "<div style='background-color: " + color + "'>"
              + "</div>"
              + "</div>"
              + "<span class='colorPickerReset'>" + ResourceManager.getString("common_reset") + "</span>"
              + "</div>");

    out.find('.colorPickerReset').click(resetFunction);

    out.find('#' + id).ColorPicker({
        color: color,
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            updateFunction(hex);

            Theme.currentThemeName = "custom";
            $('#changeTheme').val("custom");

            MessageProcessor.broadcast(wrapMessage(createStyleMessage()));
        }
    });

    return out;
}

var Preferences = {
    show: function() {
        var content = $("<div id='prefWindowContent'>"
                      + "<span class='prefLang'>" + ResourceManager.getString("preferences_language") + ":" + "</span> "
                      + "<select id='changeLocale'>"
                      + "<option value='en'>English</option>"
                      + "<option value='es'>Espa&ntilde;ol</option>"
                      + "<option value='fr'>Fran&ccedil;ais</option>"
                      + "<option value='ar'>Arabic</option>"
                      + "<option value='xx'>Default</option>"
                      + "</select>"
                      + "<br><br><span class='prefTheme'>" + ResourceManager.getString("preferences_theme") + ":" + "</span> <select id='changeTheme'></select>"
                      + "<br><br>"
                      + "<div class='colorPickerContainer'></div>"
                      + "</div>");

        var container = content.find('.colorPickerContainer');


        container.append(ColorPickerComponent("primaryColorSelector", "primary", ResourceManager.getString("preferences_color_primary"), Theme.custom.colors.primary, Theme.setPrimaryColor, Theme.resetPrimaryColor));
        container.append(ColorPickerComponent("secondaryColorSelector", "secondary", ResourceManager.getString("preferences_color_secondary"), Theme.custom.colors.secondary, Theme.setSecondaryColor, Theme.resetSecondaryColor));
        container.append(ColorPickerComponent("interactionColorSelector", "interaction", ResourceManager.getString("preferences_color_interaction"), Theme.custom.colors.interaction, Theme.setInteractionColor, Theme.resetInteractionColor));
        container.append(ColorPickerComponent("selectionColorSelector", "selection", ResourceManager.getString("preferences_color_selection"), Theme.custom.colors.selection, Theme.setSelectionColor, Theme.resetSelectionColor));
        container.append(ColorPickerComponent("primaryTextColorSelector", "text", ResourceManager.getString("preferences_text"), Theme.custom.text.primary.color, Theme.setTextPrimaryColor, Theme.resetTextPrimaryColor));
        container.append(ColorPickerComponent("secondaryTextColorSelector", "text", ResourceManager.getString("preferences_text"), Theme.custom.text.secondary.color, Theme.setTextSecondaryColor, Theme.resetTextSecondaryColor));



        EventDispatcher.addEventListener(Localization.events.localeChange,
            function() {
                content.find('.prefLang').text(ResourceManager.getString("preferences_language") + ":");
                content.find('.prefTheme').text(ResourceManager.getString("preferences_theme") + ":");
                content.find('.colorpickerlabel.primary').text(ResourceManager.getString("preferences_color_primary"));
                content.find('.colorpickerlabel.secondary').text(ResourceManager.getString("preferences_color_secondary"));
                content.find('.colorpickerlabel.interaction').text(ResourceManager.getString("preferences_color_interaction"));
                content.find('.colorpickerlabel.selection').text(ResourceManager.getString("preferences_color_selection"));
                content.find('.colorPickerReset').text(ResourceManager.getString("common_reset"));
            });

        var val = CookieManager.get("theme");

        if (!val) {
            val = Theme.defaultTheme;
        }

        content.find('#changeTheme').append("<option value='custom'>custom</option>");

        for (var x in Theme.themes) {
            content.find('#changeTheme').append("<option value='" + x + "' " + (val == x ? "selected" : "") + ">" + x + "</option>");
        }

        if (CommonContext.locale) {
            content.find('#changeLocale').val(CommonContext.locale);
        }

        content.find('#changeTheme').change(function() {
            if ($(this).val() == "none") {
                return;
            }

            Theme.setTheme($(this).val());
        });

        content.find('#changeLocale').change(function() {
            ResourceManager.setLocale($(this).val());
        });

        $('#prefWindowCloseButton').click(function() {
            Theme.save();

            ModalWindowFactory.close();
        });

        var buttons = [Button("saveTabCreationButton", "common_save", Preferences.save)];

        ModalWindowFactory.show("prefWindowModal", "preferences_label_title", "", content, "", buttons, ModalWindowFactory.close);
    },
    save: function() {
        Theme.save();

        CookieManager.set("locale", $('#changeLocale').val());

        ModalWindowFactory.close();
    }
}

