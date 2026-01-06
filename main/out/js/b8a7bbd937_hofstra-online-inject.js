/*---------------------------------------------------------------------------
 * Author:            Dominick Piganell
 * Details: hofsra-online-inject.js is responsible for injecting bootstrap,
 *                                            jquery 1.11, and package specific js and css in order to add a
 *                                            responsive nature to the hofstra online template and target
 *                                            specific packages with js and css.
 *---------------------------------------------------------------------------*/
// List of packages that contain custom JS
var customPackageJS = ['bwlkffgd.P_FacFinGrd', 'bwlkffgd.P_FacCommitFinGrd', 'BWRKYNYIS.pdf'];

// List of packages that contain custom CSS
var customPackageCSS = [];

// Definition for jquery 11
var hu = {};
var $jq11;

function removeNavContent() {
    $('head').append("<style>#navigationcontrolSmall { display: none }</style>");
    $('head').append("<style>#crumb { display: none }</style>");
    // $('head').append("<style>#footerLinks { display: none  }</style>");
    // $('head').append("<style>#pagefooter { display: none }</style>");
    // $('head').append("<style>#footerLinks { display: none !important }</style>");
    $('head').append("<style>.footertext { display: none }</style>");
    $('head').append("<style>#pagebody { border: none }</style>");
    $('head').append("<style>#pagebody { background: none }</style>");
    $('head').append("<style>#pageheader { visibility: none }");
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

var cookie = getCookie("LUM4COOKIE");
if (cookie !== null) {
    removeNavContent();
}

hu.hofstraOnlineInject = (function() {
    function loadCSS(url) {
        var q = $jq11.Deferred();

        $jq11.ajax({
            contentType: "text/plain",
            url: url,
            type: 'GET',
            dataType: 'text',
            success: function(data) {
                result = data;
                var css = result,
                    head = document.head || document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                head.appendChild(style);
                q.resolve();
            },
            error: function(a, b, c) {
                // document.createStyleSheet(url);
            }
        }).done(function(data) {
            q.resolve();
        });

        return $jq11.when(q).done().promise();
    }

    // Helper method to add js or css files
    function loadJS(filename) {
        var fileref;
        fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);

        if (typeof fileref !== "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }

    // Helper method to remove js or css files
    function removejscssfile(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"; //determine element type to create nodelist from
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"; //determine corresponding attribute to test for
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
                allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
        }
    }

    // Check if a browser is a mobile browser
    function errorLandscapePortrait() {
        $jq11("body").prepend($jq11("<div id='headsup' class='alert alert-info' role='alert'><strong>Heads up!</strong> Using your device in landscape mode makes for a better experience</div>"));
    }

    function removeLandscapePortrait() {
        $jq11("#headsup").remove();
    }
    // Method that will remove div breadcrumbs and add bootstrap breadcrumbs
    function breadcrumbs() {
        // Overwrite breadcrumb style
        $jq11(".breadCrumb").find("a").wrap('<li></li>');
        $jq11(".breadcrumbSeperator").remove();
        $jq11(".breadCrumb").wrapInner('<ol class=breadcrumb></ol>')
        $jq11(".breadcrumb").unwrap();
    }

    function removeHelp() {
        $jq11("#helpWindow").remove();
    }

    function tablesResponsive() {
        // Wrap in a table-responsive div that makes a table scrollable horizontally.
        $jq11(".dataentrytable").wrap('<div class=table-responsive></div>');
        $jq11(".datadisplaytable").wrap('<div class=table-responsive></div>');

        // Remove nowrap from tds to help with responsive design
        $jq11(".datadisplaytable").find("td").removeAttr("nowrap");
    }

    function removeGlobalNav() {
        // Overwrite breadcrumb style
        $jq11("#globalNav").remove();
    }

    function removeSkipToTop() {
        // Overwrite breadcrumb style
        $jq11(".skiplinks").remove();
    }

    function removeInvisible() {
        $jq11(".fieldlabeltextinvisible").remove();
    }

    function removeElements() {
        removeHelp();
    }

    function centerCheckBoxes() {
        $(".dataentrytable > .dedefault > input:checkbox").each(function() {
            $(this).parent().css('text-align', 'center');
        });
    }

    function removeInlineStyles() {
        $jq11("div[style='width: 500px; overflow:visible']").removeAttr("style");
    }

    function specificPageFixes() {
        var path = window.location.pathname;
        var pkg = path.split("/").pop();
        if (pkg === "hzskraap.P_StuGetAppl") {
            // $jq11("input:not([type=radio]):not([type=checkbox]), textarea").attr('style', 'width: 100%!important');
            $jq11("textarea").attr('style', 'width: 100%!important');
            $jq11("TABLE TH.delabel, TABLE TD.delabel").attr('style', 'white-space: nowrap');
        } else if (pkg === "hzskwfaf.P_DisplayAdvisees") {
            $jq11("select").attr('style', 'width: 100%!important');
        }
    }

    function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
            return true;
        else // If another browser, return 0
            return false;
    }

    function msieversionnumber() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
            return document.documentMode;
        else // If another browser, return 0
            return 0;
    }

    function relativeLinks() {
    	$("a[href^='#']").each(function() {
		    var hash = $(this).attr('hash');
		    $(this).attr('style', 'font-size: 12px; cursor: pointer; padding: 0px 10px 0px 0px');
		    $(this).removeAttr('href');

		    $(this).click(function() {
		        top.window.scrollTo(0, document.getElementsByName(hash.substring(1, hash.length))[0].getBoundingClientRect().top + 40);
		    });
		});
    }

    // Function that edits the layout of the template to be responsive
    function goMobile() {
        $.getScript("/js/inject/bootstrap.min.js", function(data, textStatus, jqxhr) {
            $jq11 = jQuery.noConflict(true);

            // Check if we're on a mobile device and are in portrait and not in an iframe
            if (window.top !== window.self) {
                var errorDiv = false;
                $jq11(window).on("load resize", function() {
                    if ((window.innerHeight > window.innerWidth) && (!errorDiv)) {
                        errorDiv = true;
                        // errorLandscapePortrait();
                    } else if ((window.innerHeight < window.innerWidth) && (errorDiv)) {
                        errorDiv = false;
                        // removeLandscapePortrait();
                    }
                });
            }

            if (msieversion()) {
                loadCSS("/css/bootstrap-overrides-ie-specific.css?t=" + Date.now())
            }

            // Fix relative links
            relativeLinks();

            // Modify breadcrumbs
            breadcrumbs();

            // Remove helper
            removeElements();

            // Make dataentrytables responsive due to their size
            tablesResponsive();

            // We can call the package specific css and js here after jquery 11 has been put in no conflict mode.
            getPackages();

            // // Insert ie specific css fixes for ie < 9
            // responsiveIE();

            // Fix bug for centering check boxes in tables
            centerCheckBoxes();

            // Remove specific inline styles that break responsive layout
            removeInlineStyles();

            // Fix specific pages 
            specificPageFixes();

            if (inIframe()) {
                $jq11('body').width('70%');
                $('a[href^="twbkwbis.P_Logout"]').remove();

                if (location.host === "hofstraonline.hofstra.edu") {
                    parent.postMessage($("html").height(), "https://my.hofstra.edu");
                } else if (location.host === "testhofstraonline.hofstra.edu:8001") {
                    parent.postMessage($("html").height(), "https://portaltest.hofstra.edu");
                } else if (location.host === "testhofstraonline.hofstra.edu:8010") {
                    parent.postMessage($("html").height(), "https://mytest3.hofstra.edu");
                }
            }
        });
    }



    function getPackages() {
        var path = window.location.pathname;
        var pkg = path.split("/").pop();

        if(customPackageJS.indexOf(pkg) > -1) {
        	loadJS('/custom/js/' + pkg + '.js?t=' + Date.now());
        }

        if(customPackageCSS.indexOf(pkg) > -1) {
        	loadCSS('/custom/css/' + pkg + '.css?t=' + Date.now());
        }
    }

    // Also in this function, check that we are not in luminis 4
    function inIframe() {
        try {
            var cookie = getCookie("LUM4COOKIE");
            if (cookie !== null) {
                return false;
            } else {
                return window.self !== window.top;
            }
        } catch (e) {
            return true;
        }
    }

    $(function() {
        // Bug fix to stop reload on window resize
        FontResizeDetector.stop = true;

        $.getScript("/js/inject/jquery-1.11.2.min.js", function(data, textStatus, jqxhr) {
            goMobile();
        });
    });

    // Remove Nav and Header
    function removeHeadersAll() {
        $('head').append("<style>#pageheader { display: none !important }</style>");
        $('head').append("<style>#navigationcontrolSmall { display: none }</style>");
        $('head').append("<style>#crumb { display: none }</style>");
        $('head').append("<style>.footertext { display: none }</style>");
        $('head').append("<style>#pagebody { border: none }</style>");
        $('head').append("<style>#pagebody { background: none }</style>");
        $('head').append("<style>#pageheader { visibility: none }");
        $('head').append("<style>#footerLinks { display: none }");
        $('div:empty').each(function(index) {
            if ($.trim($(this).text()) === "")
                $(this).css("display", "inline");
            $(this).css("padding", "0");
        });
        $("#pagebody").css("padding", "0");
        $("#outerFooter").remove();
        $(".plaintable").css("margin-bottom", "0");
        $(".headerImg").remove();
    }

    // Remove Nav 
    function removeHeaders() {

    }

    // Display all because it is not in an iframe
    function displayAll() {
        var x = document.head.getElementsByTagName("style");
        for (var i = x.length - 1; i >= 0; i--) {
            x[i].parentElement.removeChild(x[i]);
        }
    }

    function postResize() {
        var parentAddress = "https://my.hofstra.edu";
        if (location.host === "hofstraonline.hofstra.edu") {
            parentAddress = "https://my.hofstra.edu";
        } else if (location.host === "testhofstraonline.hofstra.edu:8001") {
            parentAddress = "https://portaltest.hofstra.edu";
        } else if (location.host === "testhofstraonline.hofstra.edu:8010") {
            parentAddress = "https://mytest3.hofstra.edu";
        }
        if (msieversion()) {
            // bug fix to solve issue of document node not being loaded immediately at this point
            setInterval(function() {
                parent.postMessage($("body").height(), parentAddress);
            }, 1000);
        } else {
            parent.postMessage($("html").height(), parentAddress);
        }
        return parentAddress;
    }

    if (inIframe()) {
        var parentAddress = postResize();
        setInterval(postResize, 100);
        window.addEventListener('message', function(event) {
            if (event.origin !== parentAddress) return;
            if (event.data === "resize") {
                var height = $("html").height();
                if (msieversion()) {
                    height = $("body").height();
                }
                parent.postMessage(height, parentAddress);
            } else if (event.data == "noheader") {
                removeHeadersAll();

                var height = $("html").height();
                if (msieversion()) {
                    height = $("body").height();
                }
                parent.postMessage(height, parentAddress);
            } else if (event.data == "noheader-nonav") {
                removeHeaders();

                var height = $("html").height();
                if (msieversion()) {
                    height = $("body").height();
                }

                parent.postMessage(height, parentAddress);
            } else if (event.data == "set-domain") {
                if (event.origin !== parentAddress) {
                    return;
                } else {
                    document.domain = "hofstra.edu";
                    parent.postMessage("domain-set", parentAddress); //send the message and target URI
                }
            }

        }, false);
    } else {
        displayAll();
    }

})();
