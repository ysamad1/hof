/*
 ****************************************************************************
 *                                                                          *
 * Copyright 2010 - 2013 Ellucian Company L.P. and its affiliates.          *
 *                                                                          *
 ****************************************************************************
  
  AUDIT TRAIL: 8.6.0.2
  1. Defect# 1-1DPIP31             					CM 05/15/2013
     Text Alignment of Table description & contents to right in all browsers.
  2. Defect# 1-1DPIP33             					CM 05/15/2013
     Text Alignment of Table Headers in MSIE.
  
  AUDIT TRAIL: 8.6.0.1
  1. Defects# 1-1BTU34H             					CM 04/09/2013
     Added new method to Remove HTML Tags around Strings.
	 
  AUDIT TRAIL: 8.6
  1. RPE 1-1ABJJ0V		  			    					CM 11/12/2012
     Skinning of Cascade, Removing of the Hard-coded styles from jQuery & pull the same from CSS files
	 
  AUDIT TRAIL: 8.4.1
  1. Defect 1-DOWM78                                        SVA 12/23/2010
     When resizing the browser window using Internet Explorer 6 and the 
     Cascade UI, the page is refreshed and all the entered data is lost.
  2. Defect 1-B37AGH                                        SVA 01/28/2011
     Add audit trails.  
  
  AUDIT TRAIL: 8.4
  1. Defect 1-CUFU31                                        SVA 07/05/2010  
     CASCADE interface not picking up NLS_LANG correctly for session
     
  AUDIT TRAIL: 8.2.0.4 
  1. Defect 1-B8E768                                        SVA 03/05/2010
     Whenever the browser window is resized, the page refreshes.  
     The refresh causes data entered by the user to be lost on pages.
  2. Defect 1-AVJ7RI                                        SVA 07/05/2010
     main menu items do not display correctly when the Link Text/Description 
     has HTML tags.
  
  AUDIT TRAIL END

  FILE NAME..: cascade-utils.js
  RELEASE....: 8.6.0.2
  PRODUCT....: WTLWEB
  COPYRIGHT..: Copyright 2010 - 2013 Ellucian Company L.P. and its affiliates.
*/
/**
 * @author Jai.Chandramouli
 */
/**
 * Function to convert xml string to an xml document object
 * @param {Object} s
 */
function stringToDoc(s){
    var doc;
    if (window.ActiveXObject) {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = 'false';
        doc.loadXML(s);
    }
    else 
        doc = (new DOMParser()).parseFromString(s, 'text/xml');
    return (doc && doc.documentElement &&
    doc.documentElement.tagName !=
    'parsererror') ? doc : null;
}

/**
 * Converts a string into object.
 * @param {String} s String to convert to object.
 * @param {Boolean} coerce If true, converts numbers, true/false and undefined values to
 * their true data types. Default is false
 *
 * Parts of code taken from remy sharp's blog and Jquery BBQ plugin.
 * http://remysharp.com/2008/06/24/query-string-to-object-via-regex/
 * http://benalman.com/projects/jquery-bbq-plugin/
 */
function deparam(s, coerce){
    var query = {};
    coerce_types = {
        'true': !0,
        'false': !1,
        'null': null
    };
    s.replace(/\b([^&=]*)=([^&=]*)\b/g, function(m, a, d){
        if (coerce) {
            d = d && !isNaN(d) ? +d // number
 : d === 'undefined' ? undefined // undefined
 : coerce_types[d] !== undefined ? coerce_types[d] // true, false, null
 : d; // string
        }
        
        if (typeof query[a] != 'undefined') {
            query[a] += ',' + d;
        }
        else {
            query[a] = d;
        }
    });
    
    return query;
}

/**
 * Function to truncate a string after a given number of characters
 * @param {String} str The string to truncate.
 * @param {Number} len The number of characters after which to attach the truncation indicator.
 * @param {Boolean} truncateWord Flag to check if the string needs to be truncated by words or not.
 */
function truncateText(str, len, truncateWord){
    var TRUNCATION_INDICATOR = "...";
    var originalText = str;
    
    if (originalText.length > len) {
    
        /* Truncate the content of the P, then go back to the end of the
         previous word to ensure that we don't truncate in the middle of
         a word */
        originalText = originalText.substring(0, len);
        if (typeof(truncateWord) != 'undefined' && truncateWord == true) {
            originalText = originalText.replace(/\w+$/, '');
        }
        
        /* Add an ellipses to the end */
        originalText += TRUNCATION_INDICATOR;
    }
    return originalText;
}

/**
 *
 *  URL encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
var Url = {

    // public method for url encoding
    encode: function(string){
        if (typeof string == 'undefined') {
            return '';
        }
        return escape(this._utf8_encode(string));
    },
    
    // public method for url decoding
	/**
	 * Decodes an UrlEncoded string. Optionally, you can convert '&' to '&amp' by setting the 
	 * <code>convertAmpersand</code> value to <code>true</code>
	 * @param {String} string
	 * @param {Boolean} convertAmpersand default <code>true</code>
	 * @param {Boolean} convertHTMLTags default <code>true</code>
	 */
    decode: function(string, doConvertHTML){
        if (typeof string == 'undefined') {
            return '';
        }
		if(typeof doConvertHTML == 'undefined') {
			doConvertHTML = true;
		}
		
//		var val = '';
		var val = this._utf8_decode(unescape(string));
		
		if(doConvertHTML) {
			val = escapeHTML(val);
		}
        return val;
    },
    
    // private method for UTF-8 encoding
    _utf8_encode: function(string){
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        
        for (var n = 0; n < string.length; n++) {
        
            var c = string.charCodeAt(n);
            
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else 
                if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            
        }
        
        return utftext;
    },
    
    // private method for UTF-8 decoding
    _utf8_decode: function(utftext){
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        
        while (i < utftext.length) {
        
            c = utftext.charCodeAt(i);
            
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else 
                if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            
        }
        
        return string;
    }
}

/**
 * Deletes all cookies for this domain
 */
function deleteAllCookies(){
    var cookies = document.cookie.split(";");
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
/**
 * Returns the cookie value
 * @param {Object} name
 */
function getCookie(name){
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        if (eqPos > -1) {
            var data = cookie.split("=");
            if (name == $.trim(data[0])) {
                return data[1];
            }
        }
    }
    return null;
}
/**
 * Sets a cookie 
 * @param {Object} name
 * @param {Object} value
 */
function setCookie(name, value){
    var ttl = 7200;

    var date = new Date();
    date.setTime(date.getTime() + (ttl * 60 * 1000));
    
    var expires = "expires=" + date.toGMTString();
    
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
/**
 * Removes the specified cookie
 * @param {Object} name
 */
function removeCookie(name){
    var expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = name + "=;" + expires + "; path=/";
}
/**
 * @class Allows tracking of the time difference
 * @author jai.chandramouli
 */
var TimeDiff = {
    setStartTime: function(){
        d = new Date();
        time = d.getTime();
    },
    
    getDiff: function(){
        d = new Date();
        return (d.getTime() - time);
    }
}
/**
 * Returns the X position of an element
 * @param {Object} obj
 */
function findPosX(obj){
    var curleft = 0;
    if (obj.offsetParent) 
        while (1) {
            curleft += obj.offsetLeft;
            if (!obj.offsetParent) 
                break;
            obj = obj.offsetParent;
        }
    else 
        if (obj.x) 
            curleft += obj.x;
    return curleft;
}
/**
 * Returns the Y position of an element
 * @param {Object} obj
 */
function findPosY(obj){
    var curtop = 0;
    if (obj.offsetParent) 
        while (1) {
            curtop += obj.offsetTop;
            if (!obj.offsetParent) 
                break;
            obj = obj.offsetParent;
        }
    else 
        if (obj.y) 
            curtop += obj.y;
    return curtop;
}
/**
 * Unwraps the jquery object by removing the specified tag
 */
$.fn.unwrap = function(){
    this.parent(':not(body)').each(function(){
        $(this).replaceWith(this.childNodes);
    });
    return this;
};

/**
 * @class StylesheetFormatter toggles the CSS properties to support RTL layouts
 * @author jai.chandramouli
 */
StylesheetFormatter = {
	targetWin:this,
    styleSheet: 0,
    sheets: (document.styleSheets) ? document.styleSheets : undefined,
	
	getSheets:function() {
		var win = StylesheetFormatter.targetWin;
		return (win.document.styleSheets) ? win.document.styleSheets : undefined
	},
    /**
     * Returns the cssRules object for the given filename or index
     * @param {Object} val
     */
    getCssRules: function(val){
        if (val == 'undefined') 
            return this;
        if (this.getSheets() == 'undefined') 
            return undefined;
        
        if (typeof val == 'number') {
            this.styleSheet = val;
            if (val > this.getSheets().length) 
                return;
            
            if (jQuery.browser.msie) {
                return this.getSheets()[val].rules;
            }
            else {
                return this.getSheets()[val].cssRules;
            }
        }
        var regex = new RegExp(val);
        for (i in this.getSheets()) {
            if (regex.test(this.getSheets()[i].href)) {
                this.styleSheet = i;
                if (jQuery.browser.msie) {
                    return this.getSheets()[i].rules;
                }
                else {
                    return this.getSheets()[i].cssRules;
                }
            }
        }
    },
    /**
     * Returns the contents of the given filename or index
     * @param {Object} val
     */
    getContents: function(val){
    
        if (val == 'undefined') 
            return this;
        if (this.getSheets() == 'undefined') 
            return undefined;
        
        if (typeof val == 'number') {
            this.styleSheet = val;
            if (val > this.getSheets().length) 
                return;
            
            if (typeof this.getSheets()[val].cssText != 'undefined') {
                return this.getSheets()[val].cssText;
            }
        }
        var regex = new RegExp(val);
        for (i in this.getSheets()) {
            if (regex.test(this.getSheets()[i].href)) {
                this.styleSheet = i;
                if (typeof this.getSheets()[i].cssText != 'undefined') {
                    return this.getSheets()[i].cssText;
                }
            }
        }
    },
	/**
	 * Returns the stylesheet object for the given name or index
	 * @param {Object} val File name or index of the stylesheet
	 */
	getStylesheet: function(val){
        if (val == 'undefined') 
            return this;
        if (this.getSheets() == 'undefined') 
            return undefined;
        
        if (typeof val == 'number') {
            this.styleSheet = val;
            if (val > this.getSheets().length) 
                return;
            
            if (typeof this.getSheets()[val] != 'undefined') {
                return this.getSheets()[val];
            }
        }
        var regex = new RegExp(val);
        for (i in this.getSheets()) {
            if (regex.test(this.getSheets()[i].href)) {
                this.styleSheet = i;
                if (typeof this.getSheets()[i] != 'undefined') {
                    return this.getSheets()[i];
                }
            }
        }
    },
    /**
     * Toggles the styles of a given stylesheet file or id 
     * @param {Object} file Filename or index of the stylesheet
     */
    toggle: function(file){
    	// Defects # 1-1DPIP31,1-1DPIP33 : Added CSS styles to be excepted while toggling, so that they're displayed correctly in RTL mode of Cascade.
        var exceptions = ['prefwindow', 'errorwindow', '.browsebutton div', '.browsebutton div div', '.htmlbutton', 
		'.menu', '.menu div', '.menusmall div', '.items li a', 
		'.defaultbuttonsmall', '.defaultbuttonsmall div', '.defaultbuttonsmall div div', 'table td.dedefault','table td.delabel','div.infotextdiv',
		'.defaultbutton', '.defaultbutton div', '.defaultbutton div div','table th.ddheader','div.pagebodydiv','.captiontext','table td.dddefault','table td.dbheader',
		'table td.dbdefault','table td.dbdead','table th.dedefault','table td.ddseparator','table td.indefault','table th.ddlabel','table td.dbtitle','table td.ddheader',
		'table th.ddtitle','table td.deheader','table th.deheader','table th.delabel','table td.deseparator','table td.dehighlight','table td dedefault',
		'table td.detitle','table th.detitle','table td.dedead','table td.dewhite','table td.deborder','table td.ddtitle','table td.ddlabel','table td.ddhighlight','table td.dddead',
		'table td.ddnontabular','table td.ddwhite','table td.mptitle','table td.mpheader','table th.mplabel','table td.mpwhite','table td.mpdefault','table td.ntwhite',
		'table td.dblabel','table th.dblabel','table td.ntheader','table th.ntheader','table td.nttitle','table th.nttitle','table td.ntlabel','table th.ntlabel','table td.ntseparator',
		'table td.ntdead','table td.ntdefault','table td.nthighlight'];
		
		// for IE
		if (jQuery.browser.msie) {
			var stylesheet = this.getStylesheet(file);
			if (!stylesheet) 
				return this;
				
			var set1 = stylesheet.cssText.split('}');
			
			for( var k=0; k<set1.length; k++ ) {
				
				var t = trim(set1[k]);
				if(t == '') 
				continue;
				
				var set2 = t.split('{');
				var selector = trim(set2[0]);
				if ($.inArray(selector.toLowerCase(), exceptions) > -1) 
                continue;
				
				var props = trim(set2[1]);
				
				if(props.length == 0)
				continue;
				
				var newCssStr = this.toggleStyle(props);
				set2[1] = newCssStr;
				
				set1[k] = set2.join('{\n');
			}
			
			stylesheet.cssText = set1.join('}\n');
			
			return;
		}
        
		// for Mozilla browsers
		
        var css = this.getCssRules(file);
		if(!css)
		return this;
		
        var clen = css.length;
        for (var i = 0; i < clen; i++) {
        	
			if(!css[i].style)
			continue;
			
            var style = css[i].style;
            var selector = css[i].selectorText;
            if ($.inArray(selector.toLowerCase(), exceptions) > -1) 
                continue;
            
			
			var cssStr = css[i].style.cssText;
			
			var newCssStr = this.toggleStyle(cssStr);
			
			if(jQuery.browser.safari) {
				newCssStr = newCssStr.replace(/:\s/g, ':')
			}
			
            css[i].style.cssText = newCssStr;
        }
    },
	
	/**
	 * Toggles the style properties for a given style
	 * @param {Object} str
	 */
	toggleStyle: function(str) {
		var csss = str.split(';');
        var propStr = '';
        var len = csss.length;
        for (var j = 0; j < len; j++) {
        
            if (trim(csss[j]).length == 0) 
                continue;
            
            var s = trim(csss[j]).split(/\s*:\s*/);
            
			switch(trim(s[0]).toLowerCase()) {
				
				case 'float':
					if (trim(s[1]).toLowerCase() == 'left') {
	                    s[1] = 'right';
	                }
	                else if (trim(s[1]).toLowerCase() == 'right') {
	                    s[1] = 'left';
	                }
					break;
				case 'margin':
					var t = trim(s[1]).split(/\s+/);
	                if (t.length == 4) {
	                    var r = t[1];
	                    var l = t[3];
	                    t[1] = l;
	                    t[3] = r;
	                }
	                s[1] = t.join(' ');
					break;
				case 'margin-left':
					s[0] = 'margin-right';
					break;
				case 'margin-right':
					s[0] = 'margin-left';
					break;
				case 'padding':
					var t = trim(s[1]).split(/\s+/);
	                if (t.length == 4) {
	                    var r = t[1];
	                    var l = t[3];
	                    t[1] = l;
	                    t[3] = r;
	                }
	                s[1] = t.join(' ');
					break;
				case 'padding-left':
					s[0] = 'padding-right';
					break;
				case 'padding-right':
					s[0] = 'padding-left';
					break;
				case 'text-align':
					if (trim(s[1]).toLowerCase() == 'left') {
	                    s[1] = 'right';
	                }
	                else if (trim(s[1]).toLowerCase() == 'right') {
	                    s[1] = 'left';
	                }
					break;
				case 'left':
					s[0] = 'right';
					break;
				case 'right':
					s[0] = 'left';
					break;
				
				/**
				 * border-left
				 */
				case 'border-left':
					s[0] = 'border-right';
					break;
				/**
				 * border-right
				 */
				case 'border-right':
					s[0] = 'border-left';
					break;
				case 'background': //RPE 1-1ABJJ0V
					var t = trim(s[0]).split(/\s+/);
					if (trim(s[1]).indexOf('icon-close-popup.png')!=-1) {
						s[1] = StyleManager.getStyle('helpWindowHeader_close_ar','background');
					}
					if (trim(s[1]).indexOf('icon-help-popup.png')!=-1) {
						s[1] = StyleManager.getStyle('helpWindowHeader_help_ar','background');
					}
					break;	
				/****************************************
				 * SAFARI SPECIFIC STYLES
				 ****************************************/
				/**
				 * border-left-width
				 */
				case 'border-left-width':
					s[0] = 'border-right-width';
					break;
				/**
				 * border-right-width
				 */
				case 'border-right-width':
					s[0] = 'border-left-width';
					break;
					
				/**
				 * border-left-style
				 */
				case 'border-left-style':
					s[0] = 'border-right-style';
					break;
				/**
				 * border-right-style
				 */
				case 'border-right-style':
					s[0] = 'border-left-style';
					break;
					
				/**
				 * border-left-color
				 */
				case 'border-left-color':
					s[0] = 'border-right-color';
					break;
				/**
				 * border-right-color
				 */
				case 'border-right-color':
					s[0] = 'border-left-color';
					break;
				//RPE 1-1ABJJ0V
				/**
				 * background-position
				 */
				case 'background-position':
					if(jQuery.inArray(' background-image: url('+window.document.location.protocol+'//'+window.document.location.host+'/css/images/icon-close-popup.png)',csss)!=-1)
						s[1] = 'left center';
					else if(jQuery.inArray(' background-image: url('+window.document.location.protocol+'//'+window.document.location.host+'/css/images/icon-help-popup.png)',csss)!=-1)
						s[1] = 'right center';
					break;
				
				default:
					break;
			}
			
            propStr += s.join(': ') + ';\n';
        }
		
		return propStr;
	}
};
/**
 * Camelize string
 * @param {String} val
 */
function camelize(val){
    return val.replace(/-(.)/g, function(m, l){
        return l.toUpperCase()
    });
};
/**
 * Trims whitespace
 * @param {String} val
 */
function trim(val){
    var val = val.replace(/^\s+/, '');
    return val.replace(/\s+$/, '');
};

/**
 * Converts ampersand and all HTML tags to character codes
 * @param {String} val
 */
function escapeHTML(val) {
	if(val == null || typeof val == 'undefined') {
		return null;
	}
	var val = val.replace(/&(?!amp;)/g, '&amp;');
	val = val.replace(/</, '&lt;');
	return val.replace(/>/, '&gt;');
}

/**
 * Un-escapes the string and if string is undefined returns empty string 
 * @param {String} val
 */
function UnEscapeHTML(val) {

	var label = unescape(decodeURIComponent(val));
	if(label == null || typeof(label) == "undefined" || label == "undefined") {
		label = "";
	}
	return label;
}


/**
 * Redraws the given object
 */
function redrawObject(obj) {
	if(obj) {
		$(obj).css('display', 'none'); 
		$(obj).css('display', 'block');
	}
}

var FontResizeDetector = {
	
	checkDiv: '<div id="checkdiv" style="left:1%;line-height:1;font-family:monospace;width:0px;position:absolute;">&nbsp;</div>',
	
	stop:false,
	
	initialize: function() {
	// Changes for 8.4 defect 1-CUFU31    
		if (CommonContext.locale.substr(0,2) == "ar") {
			FontResizeDetector.checkDiv = '<div id="checkdiv" style="right:1%;line-height:1;font-family:monospace;position:absolute;">&nbsp;</div>';
		}
		
		$("body").prepend(FontResizeDetector.checkDiv);
		FontResizeDetector.fontCheck(FontResizeDetector.receivechange);
	},
	
	fontCheck: function(resultHandler) {
        var checkdiv = document.getElementById("checkdiv");
        var height = checkdiv.offsetHeight;
		var width = checkdiv.offsetWidth;
		var left = checkdiv.offsetLeft;
		var right = checkdiv.offsetRight;
        
        repeat();
        function repeat(){
			// for some reason, offsetHeight doesn't change in FF (except my browser).
			// added a check for 'offsetLeft', which is working on other FF browsers I tested in (but not in mine)
			// a strange case, therefore decided to keep both checks  
			//
			if (checkdiv.offsetHeight != height || checkdiv.offsetLeft != left 
			|| checkdiv.offsetWidth != width) {
//				alert(checkdiv.offsetLeft +":"+left)
                height = checkdiv.offsetHeight;
				width = checkdiv.offsetWidth;
				left = checkdiv.offsetLeft;
				right = checkdiv.offsetRight;
                resultHandler();
            }
            if (!FontResizeDetector.stop) 
                setTimeout(repeat, 500);
        }
	},
	
	receivechange: function() {
		  /* Fix for 4th level pages to not reload */
		/* Defect 1-DOWM78 */
      if(pageDepth > 3 || pageDepth == 0) {
              IE6Patch.apply();
      } else {
              window.location.reload();
			}
	}
}

// Begin 1-1BTU34H 
/**
 * Unwraps the String by removing the HTML tags around 
 */
 function extractText(label){
	if(label == null || typeof(label) == "undefined" || label == "undefined") 
		return "";
	$temp = $("<div>");
	$temp.append(label);
	return  $temp.text();
};
// End 1-1BTU34H 
