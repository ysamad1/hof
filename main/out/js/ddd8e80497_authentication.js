var FORCE_DUO = false;

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name, value) {
	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
}

function delete_cookie(name) {
	document.cookie = name +'=; Domain=.hofstra.edu; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function EncodeQueryData(data) {
	var ret = [];
	for (var d in data)
		ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
	return ret.join("&");
}

function getPortalURL() {
	var cas = window.location.hostname;
	if(cas === "login.hofstra.edu")
		return "my.hofstra.edu";
	else if (cas === "tlbcas3.hofstra.edu")
		return "mytest3.hofstra.edu";
	else if (cas === "logintest.hofstra.edu")
		return "myupgr.hofstra.edu"
	else if (cas === "portalcastest.hofstra.edu")
		return "portaltest.hofstra.edu"
	else
		return "mytest3.hofstra.edu";
}

function getPwrHost(){
	var cas = window.location.hostname;
	if(cas === "login.hofstra.edu"){
		return "mypassword.hofstra.edu";
	}
	else{
		return "mypasswordtest.hofstra.edu";
	}
}

function resetPassword() {
	location.href = "https://" + getPwrHost();
}

function resetPasswordForgot() {
	location.href = "https://" + getPwrHost() + "/password?reason=forgot";
}

function getLogoutUrls(){
	var cas = window.location.hostname;
	if(cas === "login.hofstra.edu"){
		return [
		"https://xe.hofstra.edu/StudentSSB/ssb/logout",
		"https://hofstraonline.hofstra.edu/pls/HPRO/twbkwbis.P_Logout",
		"https://webfiler.hofstra.edu/employees/Logout.aspx",
        "https://webfiler.hofstra.edu/students/Logout.aspx"
		];
	}
	else if(cas === "tlbcas3.hofstra.edu"){
		return [
		"https://xetest1.hofstra.edu/StudentSSB/ssb/logout",
		"https://testhofstraonline.hofstra.edu:8010/sandssb/twbkwbis.P_Logout",
		"https://webfilertest.hofstra.edu/employees/Logout.aspx",
		"https://webfilertest.hofstra.edu/students/Logout.aspx"
		];
	}
	else if(cas === "logintest.hofstra.edu"){
		return ["https://xetest2.hofstra.edu/StudentSSB/ssb/logout",
		"https://testhofstraonline.hofstra.edu:8001/upgrssb/twbkwbis.P_Logout"];
	}
	else{
		console.log("getLogoutUrls:  unknown instance");
		return [];
	}
}

function validForm(theForm) {
	$("#username-error").addClass("d-none");
	$("#password-error").addClass("d-none");
	$("#other-errors").addClass("d-none");

	if (theForm.find('input[name="username"]').val() == "" || theForm.find('input[name="username"]').val() == null) {
		$("#username-error").removeClass("d-none");
		$("#username").focus();

		$(":submit").attr("disabled", false);
		$(":submit").attr("value", "Login");

		return false;
	} else if (theForm.find('input[name="password"]').val() == "" || theForm.find('input[name="password"]').val() == null) {
		$("#password-error").removeClass("d-none");
		$("#password").focus();

		$(":submit").attr("disabled", false);
		$(":submit").attr("value", "Login");

		return false;
	}
	else {
		return true;
	}
}

//Namespace Package
var hof = {services:{cas:{v2:{}}, duo:{v2:{}}},helpers:{}};

//=========================================================//
//
//	Services - This is where we are asynchronously posting
//  to different resources to authenticate the user.
//
//=========================================================//

/******************************************************
 * Because of sandboxing we need to make a jsonp request
 * in order for ajax to perform the request properly
 * and allow authentication to hofapps
 ******************************************************/

 hof.services.authenticateHofapps = function(ticket) {
    var iframe = document.createElement('iframe');
    var url = 'https://' + getPortalURL() + '/hofapps/authenticateUser.jsp';
    iframe.src = url;
    iframe.id = "hofapps-iframe";
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.marginWidth = '0';
    iframe.marginHeight = '0';
    iframe.hspace = '0';
    iframe.vspace = '0';
    iframe.allowTransparency = "true";
    iframe.width = '0';
    iframe.height = '0';
    document.body.appendChild(iframe);

    $('#hofapps-iframe').load(function(){
        portalRedirect(ticket);
    });
 };


 hof.services.authenticateCloudPortal = function(ticket) {
    let iframe = document.createElement('iframe');
    let url = 'https://' + getPortalURL() + '/authenticateUser.jsp';
    iframe.src = url;
    iframe.id = "hofapps-iframe2";
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.marginWidth = '0';
    iframe.marginHeight = '0';
    iframe.hspace = '0';
    iframe.vspace = '0';
    iframe.allowTransparency = "true";
    iframe.width = '0';
    iframe.height = '0';
    document.body.appendChild(iframe);

    let iframe2 = document.createElement('iframe');
    let url2 = 'https://' + getPortalURL() + '/hofapps/authenticateUser.jsp';
    iframe2.src = url2;
    iframe2.id = "hofapps-iframe3";
    iframe2.frameBorder = '0';
    iframe2.scrolling = 'no';
    iframe2.marginWidth = '0';
    iframe2.marginHeight = '0';
    iframe2.hspace = '0';
    iframe2.vspace = '0';
    iframe2.allowTransparency = "true";
    iframe2.width = '0';
    iframe2.height = '0';

    $('#hofapps-iframe2').load(function(){
        document.body.appendChild(iframe2);

        $('#hofapps-iframe3').load(function(){
            portalRedirect(ticket);
        })
    });
};


/******************************************************
 * Logic behind posting the user's credentials to the
 * CAS server to retrieve a TGT
 ******************************************************/
 hof.services.postCredentials = function() {
 	var q = $.Deferred();

 	$.ajax ({
 		type: "POST",
 		url: "/cas-web/v1/tickets",
 		data: $("#fm1").serialize(),
 		timeout: 30000
 	}).success(function(a,b,c) {
 		q.resolve(a,b,c);
 	}).fail(function(xhr, error) {
 		q.reject(xhr,error);

 		$("#username").focus();
 		if(xhr.responseText && xhr.responseText.indexOf("AccountLockedException") > -1){
			//account locked
			var lockedHtml = ''
			+ '<div class="alert alert-danger" style="border:3px solid darkred;">'
			+ '	<h1 style="text-align:center"><i class="fa fa-lock"></i></h1>'
			+ '	<p><strong>Your account has been temporarily locked because of too many failed login attempts.</strong></p>'
			+ ' <p><strong>If you do not remember your password, you may <a href="https://' + getPwrHost() + '/password?reason=forgot">change your password</a></strong></p>'
			+ '</div>'
			+ '';
			$("#login-form").html(lockedHtml);
		} else {
			$("#other-errors").text("Invalid Username or Password");
			$("#other-errors").removeClass("d-none");
			$("#password").val("");
			$("#password").focus();
			$("#other-errors").delay(5000).fadeOut();
			$(":submit").attr("disabled", false);
			$(":submit").attr("value", "Login");
		}
	});

 	return q.promise();
 };


/******************************************************
 * Logic behind posting the user's TGT to the
 * CAS server to retrieve a service ticket
 ******************************************************/
 hof.services.postTGTTicket = function(parameterName, parameterValue, action) {
 	var q = $.Deferred();

 	var parameterName = hof.helpers.getServiceTarget();
 	var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);

 	var data = {};

 	if(parameterName === "target") {
 		location.reload();
		// data = {
			// TARGET: parameterValue
		// };

		return q.promise();
	} else {
		data = {
			service: parameterValue
		};

		$.ajax({
			type: "POST",
			url: "/cas-web/v1/tickets/" + action.substr(action.lastIndexOf('/') + 1),
			data: data,
			timeout: 30000
		}).success(function(a,b,c) {
			q.resolve(a,b,c);
		}).fail(function(a,b) {
			q.reject(a,b);
			$("#other-errors").text("An error has occurred on login");
			$("#other-errors").removeClass("d-none");
			$("#username").focus();
			$("#other-errors").delay(5000).fadeOut();
			$(":submit").attr("disabled", false);
			$(":submit").attr("value", "Login");
		});

		return q.promise();
	}
};

hof.services.casAuthenticate = function(c) {
	var action = $(c.responseText).filter('form')[0].action;
	createCookie("CASTGC", action.substr(action.lastIndexOf('/') + 1));

	var parameterName = hof.helpers.getServiceTarget();

    // If we're authenticating against the portal
    if(hof.helpers.getServiceTargetParameter(parameterName).indexOf(getPortalURL()) > 0) {
		// Submit TGT with service/target parameter
		hof.services.postTGTTicket("service", "https://" + getPortalURL() + "/", action).then(function(a,b,c) {
			hof.services.authenticateCloudPortal(a)
		})
	} else if(hof.helpers.getServiceTargetParameter(parameterName).indexOf(getPortalURL()) > 0) {

        // Submit TGT with service/target parameter
        hof.services.postTGTTicket("service", "https://" + getPortalURL() + "/c/portal/login", action).then(function(a,b,c) {

            // Authenticate user to hofapps. Hofapps is authenticated through an iframe, a callback is performed on load to the portal redirect function.
            hof.services.authenticateHofapps(a);
		});
	} else {
        // Redirect user to their service with necessary parameters
        var parameterName = hof.helpers.getServiceTarget();
        var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);
        // Submit TGT with service/target parameter
        hof.services.postTGTTicket(parameterName, parameterValue, action).then(function(a,b,c) {
            if (parameterName.indexOf("TARGET") > -1) {
                    window.location.replace("https://" + window.location.hostname + "/cas-web/login?TARGET=" + hof.helpers.getServiceTargetParameter(parameterName));
            }
            else {
                    window.location = hof.helpers.getServiceTargetParameter(parameterName) + (hof.helpers.getServiceTargetParameter(parameterName).indexOf('?') > -1 ? '&' : '?') + EncodeQueryData({'ticket' : a}) + window.location.hash;
            }
        });
    }
}


/******************************************************
 * Logout of service to which the user might be logged in
 ******************************************************/
 hof.services.logoutOfService = function(url) {
 	var img = document.createElement("img");
 	img.height = "1";
 	img.width = "1";
 	img.style.border = "none";
 	img.src = url;
 	img.alt = "";
 	document.body.appendChild(img);
 };

/******************************************************
 * Logout of all services to which the user might be logged in
 ******************************************************/
 hof.services.logoutOfServices = function(){
 	getLogoutUrls().forEach(function(url, i, urls){
 		hof.services.logoutOfService(url);
 	});
 };

//=========================================================//
//
//	Helpers - Helper methods
//
//=========================================================//

/******************************************************
 *	Find URL Parameter
 ******************************************************/
 hof.helpers.getUrlParameter = function(sParam) {
 	var sPageURL = window.location.search.substring(1);
 	var sURLVariables = sPageURL.split('&');
 	for (var i = 0; i < sURLVariables.length; i++)
 	{
 		var sParameterName = sURLVariables[i].split('=');
 		if (sParameterName[0].toLowerCase() == sParam.toLowerCase())
 		{
 			return sParameterName[1];
 		}
 	}
 };

/******************************************************
 *	Find Service/Target Parameter Value
 ******************************************************/
 hof.helpers.getServiceTargetParameter = function(parameterName) {
 	return decodeURIComponent(hof.helpers.getUrlParameter(parameterName));
 };

/******************************************************
 *	CAS has support for parameters of service or target.
 *	Return which one this client is using
 ******************************************************/
 hof.helpers.getServiceTarget = function() {
 	if(hof.helpers.getUrlParameter("target"))
 		return "TARGET";
 	else if (hof.helpers.getUrlParameter("service"))
 		return "service";
 	else
 		return "undefined"
 };

//=========================================================//
//
//	Page related functions
//
//=========================================================//

// If the page doesn't have a service/target parameter then default to the portal
if((hof.helpers.getServiceTarget() === "undefined") && (location.pathname === "/cas-web/login"))
{
	var url = location.href + (location.href.indexOf('?') > -1 ? '&' : '?') + EncodeQueryData({'service':'https://' + getPortalURL() + '/c/portal/login'});
	location.replace(url);
}

function portalRedirect(ticket) {
	// Sync Passwords
	//var password = $("#password").val();
	//hof.services.syncPasswords(password).then(function(){
		// Redirect user to their service with necessary parameters
		var parameterName = hof.helpers.getServiceTarget();

		window.location = hof.helpers.getServiceTargetParameter(parameterName) + (hof.helpers.getServiceTargetParameter(parameterName).indexOf('?') > -1 ? '&' : '?') + EncodeQueryData({'ticket' : ticket}) + window.location.hash;
	//});
}


hof.services.authenticate = function() {
	hof.services.postCredentials().then(function(a,b,c) {
		hof.services.casAuthenticate(c);
	});
}


$(document).ready(function() {
	document.cookie = "LUM4COOKIE=EXISTS; path=/;domain=.hofstra.edu; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	delete_cookie("CPSESSID");
	$("#fm1").submit(function(ev){
		ev.preventDefault();
		if(validForm($("#fm1"))) {
			submitForm();
		}
	});

	$("#fm1").submit(function() {
		$(":submit").attr("disabled", true);
		$(":submit").attr("value", "One moment please...");
		return true;
	});

	hof.services.logoutOfServices();
	$("#username").focus();
});



//=========================================================//
//
//	V2 APIs
//
//=========================================================//
/******************************************************
 *	Form JS
 ******************************************************/
 var submitForm = function() {
 	$("#username").val($("#username").val().trim());

    hof.services.cas.v2.checkRegistration();
//	hof.services.cas.v2.submit();
 }

hof.services.cas.v2.submit = function() {
	hof.services.duo.v2.preAuth().then(function(a,b,c) {
 		var status = JSON.parse(a).response.result;
 		const authUrl = JSON.parse(a).response.authUrl
 		if (status === "ignore") {
            // User should authenticate old way
            hof.services.authenticate();
        } else if(authUrl) {
 		    window.location.replace(authUrl);
 		} else {
            // User should be challenged by MFA. If they have in the last 6 months already, no need to challenge again.
             hof.services.duo.v2.challenge(a, c.getResponseHeader("signature"));
 		}
 	});
}

/******************************************************
 *	CAS APIs
 ******************************************************/

hof.services.cas.v2.casAuthenticate = function() {
 	hof.services.cas.v2.postCredentials().then(function(a,b,c) {
 		hof.services.cas.v2.authenticate(c);
 	});
 };


 /******************************************************
  * Because of sandboxing we need to make a jsonp request
  * in order for ajax to perform the request properly
  * and allow authentication to hofapps
  ******************************************************/
 hof.services.cas.v2.authenticateHofapps = function(ticket) {
 	var iframe = document.createElement('iframe');
 	var url = 'https://' + getPortalURL() + '/hofapps/authenticateUser.jsp';
 	iframe.src = url;
 	iframe.id = "hofapps-iframe";
 	iframe.frameBorder = '0';
 	iframe.scrolling = 'no';
 	iframe.marginWidth = '0';
 	iframe.marginHeight = '0';
 	iframe.hspace = '0';
 	iframe.vspace = '0';
 	iframe.allowTransparency = "true";
 	iframe.width = '0';
 	iframe.height = '0';
 	document.body.appendChild(iframe);

 	$('#hofapps-iframe').load(function(){
 		portalRedirect(ticket);
 	});
 };

/******************************************************
 * Logic behind posting the user's credentials to the
 * CAS server to retrieve an MFA token
 ******************************************************/
 hof.services.cas.v2.postCredentials = function() {

 	var q = $.Deferred();

    var parameterName = hof.helpers.getServiceTarget();
 	var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);

 	var req = {
        duo_code: params.duo_code,
        state: params.state
 	};
    req[parameterName] = parameterValue

    var url = "/cas-web/v2/tickets";
    if(FORCE_DUO)
    	url += "?duo-test=true";

 	$.ajax ({
 		type: "POST",
 		url: url,
 		data: req,
 		timeout: 30000
 	}).success(function(a,b,c) {
 		q.resolve(a,b,c);
 	}).fail(function(xhr, error) {
 		q.reject(xhr,error);

 		$("#username").focus();
 		if(xhr.responseText && xhr.responseText.indexOf("AccountLockedException") > -1){
			//account locked
			var lockedHtml = ''
			+ '<div class="alert alert-danger" style="border:3px solid darkred;">'
			+ '	<h1 style="text-align:center"><i class="fa fa-lock"></i></h1>'
			+ '	<p><strong>Your account has been temporarily locked because of too many failed login attempts.</strong></p>'
			+ ' <p><strong>If you do not remember your password, you may <a href="https://' + getPwrHost() + '/password?reason=forgot">change your password</a></strong></p>'
			+ '</div>'
			+ '';
			$("#login-form").html(lockedHtml);
		} else {
			$("#other-errors").text("Invalid Username or Password");
			$("#other-errors").removeClass("d-none");
			$("#password").val("");
			$("#password").focus();
			$("#other-errors").delay(5000).fadeOut();
			$(":submit").attr("disabled", false);
			$(":submit").attr("value", "Login");
		}
	});

 	return q.promise();
 };


 hof.services.cas.v2.authenticate = function(c) {
 	var action = $(c.responseText).filter('form')[0].action;
 	createCookie("CASTGC", action.substr(action.lastIndexOf('/') + 1));

 	var parameterName = hof.helpers.getServiceTarget();

    // If we're authenticating against the portal
    if(hof.helpers.getServiceTargetParameter(parameterName).indexOf(getPortalURL()) > 0) {
		// Submit TGT with service/target parameter
		hof.services.cas.v2.postTGTTicket("service", "https://" + getPortalURL() + "/", action).then(function(a,b,c) {
			//hof.services.cas.v2.authenticateCloudPortal(a)
			hof.services.authenticateCloudPortal(a);
		})
	} else if(hof.helpers.getServiceTargetParameter(parameterName).indexOf(getPortalURL()) > 0) {

		// Submit TGT with service/target parameter
		hof.services.cas.v2.postTGTTicket("service", "https://" + getPortalURL() + "/c/portal/login", action).then(function(a,b,c) {

			// Authenticate user to hofapps. Hofapps is authenticated through an iframe, a callback is performed on load to the portal redirect function.
			hof.services.cas.v2.authenticateHofapps(a);
		});
	} else {
        // Redirect user to their service with necessary parameters
        var parameterName = hof.helpers.getServiceTarget();
        var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);
        // Submit TGT with service/target parameter
        hof.services.cas.v2.postTGTTicket(parameterName, parameterValue, action).then(function(a,b,c) {
            if (parameterName.indexOf("TARGET") > -1) {
                    window.location.replace("https://" + window.location.hostname + "/cas-web/login?TARGET=" + hof.helpers.getServiceTargetParameter(parameterName));
            }
            else {
                    window.location = hof.helpers.getServiceTargetParameter(parameterName) + (hof.helpers.getServiceTargetParameter(parameterName).indexOf('?') > -1 ? '&' : '?') + EncodeQueryData({'ticket' : a}) + window.location.hash;
            }
        });
    }
}

/******************************************************
 * Logic behind posting the user's TGT to the
 * CAS server to retrieve a service ticket
 ******************************************************/
 hof.services.cas.v2.postTGTTicket = function(parameterName, parameterValue, action) {
 	var q = $.Deferred();

 	var parameterName = hof.helpers.getServiceTarget();
 	var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);

 	var data = {};
    data = {
        duo_code: params.duo_code,
        state: params.state,
    };
    data[parameterName] = parameterValue

    var url = "/cas-web/v2/tickets/" + action.substr(action.lastIndexOf('/') + 1);
    if(FORCE_DUO)
        url += "?duo-test=true";

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        timeout: 30000
    }).success(function(a,b,c) {
        q.resolve(a,b,c);
    }).fail(function(a,b) {
        q.reject(a,b);
        $("#other-errors").text("An error has occurred on login");
		$("#other-errors").removeClass("d-none");
        $("#username").focus();
        $("#other-errors").delay(5000).fadeOut();
        $(":submit").attr("disabled", false);
        $(":submit").attr("value", "Login");
    });

    return q.promise();
 };

hof.services.cas.v2.checkRegistration = function() {
    var req = {
        username: document.getElementById("username").value,
    };

 	$.ajax ({
 		type: "POST",
 		url: "/cas-web/v2/check-registration",
 		data: req,
 		timeout: 30000
 	}).success(function(a,b,c) {
 	    if(JSON.parse(a).response.result == "true") {
            let regModal = new bootstrap.Modal(document.getElementById("registration-modal"));
            regModal.show();
 	    } else {
            hof.services.cas.v2.submit();
 	    }
 	}).fail(function(xhr, error) {

 		$('#registration-modal').modal('hide');
 		$("#username").focus();

        $("#other-errors").text("Invalid Username or Password");
		$("#other-errors").removeClass("d-none");
        $("#password").val("");
        $("#password").focus();
        $("#other-errors").delay(5000).fadeOut();
        $(":submit").attr("disabled", false);
        $(":submit").attr("value", "Login");

	});
}

hof.services.cas.v2.registration = function() {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?service=https://' + getPortalURL() + '/hofapps/home/registration.jsp';
    window.history.pushState({path:newurl},'',newurl);
    // Show redirect message
    $("#take-me-registration").parent().html("Please wait while you are redirected...");
    //$('#registration-modal').modal('hide');
    hof.services.cas.v2.submit();
}

hof.services.cas.v2.continueLogin = function() {
    // Show redirect message
    $("#take-me-registration").parent().html("Please wait while you are redirected...");
 	//$('#registration-modal').modal('hide');
    hof.services.cas.v2.submit();
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}
/******************************************************
 *	Duo APIs
 ******************************************************/

/******************************************************
 * Logic behind posting the user's credentials to the
 * CAS server to retrieve an MFA token
 ******************************************************/
 hof.services.duo.v2.preAuth = function() {
 	var q = $.Deferred();

    var parameterName = hof.helpers.getServiceTarget();
 	var parameterValue = hof.helpers.getServiceTargetParameter(parameterName);
	var url = `/cas-web/v2/preauth?${parameterName}=${encodeURIComponent(parameterValue)}`
    if(FORCE_DUO)
    	url += "&duo-test=true";

 	$.ajax ({
 		type: "POST",
 		url: url,
 		data: $("#fm1").serialize(),
 		timeout: 30000
 	}).success(function(a,b,c) {
 		q.resolve(a,b,c);
 	}).fail(function(xhr, error) {
 		q.reject(xhr,error);

 		$("#username").focus();
 		if(xhr.responseText && xhr.responseText.indexOf("AccountLockedException") > -1){
			//account locked
			var lockedHtml = ''
			+ '<div class="alert alert-danger" style="border:3px solid darkred;">'
			+ '	<h1 style="text-align:center"><i class="fa fa-lock"></i></h1>'
			+ '	<p><strong>Your account has been temporarily locked because of too many failed login attempts.</strong></p>'
			+ ' <p><strong>If you do not remember your password, you may <a href="https://' + getPwrHost() + '/password?reason=forgot">change your password</a></strong></p>'
			+ '</div>'
			+ '';
			$("#login-form").html(lockedHtml);
		} else {
			$("#other-errors").text("Invalid Username or Password");
			$("#other-errors").removeClass("d-none");
			$("#password").val("");
			$("#password").focus();
			$("#other-errors").delay(5000).fadeOut();
			$(":submit").attr("disabled", false);
			$(":submit").attr("value", "Login");
		}
	});

 	return q.promise();
 };

/******************************************************
 * Handler for invalid Duo response. Resets the form to login
 * with any necessary messages.
 ******************************************************/
hof.services.duo.v2.reset = function(type, message) {
    // Reset CAS Form
    document.getElementById("password").value = "";

	// Reset Duo Form
	document.getElementById("duo-methods").style.display = "";
	document.getElementById("duo-waiting").style.display = "none";
    document.getElementById("passcode").value = "";
    document.getElementById("single-factor-code-text-field").value = "";

	// Navigate back to login form with specific logic
	if(type === "duo-error") {
		var alert = ''
		+ '<div class="alert alert-danger">'
		+ '	<p><strong>An error has occurred when attempting to log in.</strong></p>'
		+ ' <p>Please try again. If the error persists, please contact Service Desk at <a href="tel:15164637777">(516) 463-7777</a></p>'
		+ '</div>'
		+ '';
		$("#alert-message").html(alert);
		$(":submit").attr("disabled", false);
		$(":submit").attr("value", "Login");
		document.getElementById("duo-form").style.display = "none";
		document.getElementById("login-form").style.display = "";
	} else if(type === "duo-deny") {
		var alert = '';
		if(message) {
			alert = '<div class="alert alert-danger">'
				+ '	<p><strong>Login request denied.</strong></p>'
				+ '<p>' + message + '</p>';
				+ ' <p>If you believe this is an error, please contact Service Desk at <a href="tel:15164637777">(516) 463-7777</a></p>'
				+ '</div>';
		} else {
		 	alert = ''
				+ '<div class="alert alert-danger">'
				+ '	<p><strong>Login request denied.</strong></p>'
				+ ' <p>If you believe this is an error, please contact Service Desk at <a href="tel:15164637777">(516) 463-7777</a></p>'
				+ '</div>';
		}
		$("#alert-message").html(alert);
		$(":submit").attr("disabled", false);
		$(":submit").attr("value", "Login");
		document.getElementById("duo-form").style.display = "none";
		document.getElementById("login-form").style.display = "";
	}
}

// background rotation scripts
var shuffleArray = function(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex)
    {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

popImages = function(pics)
{
    // Pick random image to dispay as bg:
    const randomInteger = Math.floor(Math.random() * pics.length);
    let imgGroup = pics[randomInteger];
    $("body").css("background-image", "url('" + imgGroup.img + "')");
};

var sizeAppend = "xs";
var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vpWidth >= 1200)
{
    sizeAppend = "lg";
}
else if (vpWidth >= 992)
{
    sizeAppend = "md"
}
else if (vpWidth >= 768)
{
    sizeAppend = "sm"
}
else
{
    sizeAppend = "xs"
}

var dayImgs = [
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-029-" + sizeAppend + ".jpg", "caption": "", "logo":"light" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-031-" + sizeAppend + ".jpg", "caption": "", "logo":"dark" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-032-" + sizeAppend + ".jpg", "caption": "", "logo":"dark" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-033-" + sizeAppend + ".jpg", "caption": "", "logo":"dark" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-034-" + sizeAppend + ".jpg", "caption": "", "logo":"light" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-035-" + sizeAppend + ".jpg", "caption": "", "logo":"dark" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-036-" + sizeAppend + ".jpg", "caption": "", "logo":"light" }
]

var nightImgs = [
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-028-" + sizeAppend + ".jpg", "caption": "", "logo":"light" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-030-" + sizeAppend + ".jpg", "caption": "", "logo":"dark" },
    {"img": "https://portalstatic.hofstra.edu/login-static/images/portal-login-037-" + sizeAppend + ".jpg", "caption": "", "logo":"light" }
]

dayImgs = shuffleArray(dayImgs);
nightImgs = shuffleArray(nightImgs);

var today = new Date().getHours();

$(function() {
    if (today >= 6 && today <= 18)
    {
        popImages(dayImgs);
    }
    else
    {
        popImages(nightImgs);
    }
});