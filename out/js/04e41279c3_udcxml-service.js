/*
 ****************************************************************************
 *                                                                          *
 * Copyright 2010 - 2013 Ellucian Company L.P. and its affiliates.  		*
 *																			*
 ****************************************************************************
 
  AUDIT TRAIL: 8.6
  1. Defect 1-168CTIT		            					EM 11/02/2012
     Browse button does not display menu if the Menu items' contain special characters in Link Text.
	 
  AUDIT TRAIL: 8.4.1
  1. Defect 1-B4RT2R                                       SVA 01/28/2011
     "Break in attempt has been detected" functionality not working.
  2. Defect 1-B37AGH                                       SVA 01/28/2011
     Add audit trails.
  
  AUDIT TRAIL: 8.4 
  1. cascade installation fix. included the ssl variables and url variables 
     in the parameter list for service call.
     Example: dadName=s10b80
     url=http://<server>:<port>/banner-ssb-ws/SSB/standaloneapp 
	 trustStore=D:/InstallBase/Java/jre/lib/security/cacerts
	 trustStorePassword=changeit
	 trustStoreType=JKS
  2. cascade internationalization fix to include dadname and locale as 
     parameter list.
  3. Cascade performance changes
  
  AUDIT TRAIL: 8.3.0.4 
  1. Defect 1-AVJ7PM                                        SVA 03/05/2010
     Browse button does not display if menu items contain HTML tags in Link Text.
     
  AUDIT TRAIL END

  FILE NAME..: udcxml-service.js
  RELEASE....: 8.6
  PRODUCT....: WTLWEB
  COPYRIGHT..: Copyright 2010 - 2013 Ellucian Company L.P. and its affiliates. 
*/
/**
 * Handler for UDC XML service call
 * @param {Object} data
 */
function callback() {
	/*8.4 performance changes. comment below code and remove parameter data in callback method */
	/*CommonContext.udcIdentity = data;
	CommonContext.udcid = $(data).find("udcIdentity").attr('udcIdentifier');*/
	
	var endpoint = AuroraService.url + AuroraService.endpoints[0] + "/"
			+ sessionToken + "?depth=10" + "&dadName=" + Application.getDadName() + "&url=" + Bannerservice.url + Bannerservice.endpoints[3] + "&locale=" + Context.locale_settings;
	
	if(Context.sslTrustStoreType != null && (typeof(Context.sslTrustStoreType) != "undefined")) {
		endpoint = endpoint + "&trustStorePassword=" + Context.sslTrustStorePassword 
			+ "&trustStore=" + Context.sslTrustStore + "&trustStoreType=" + Context.sslTrustStoreType;
	}
	
	/* Defect 1-B4RT2R
	 * $.ajax( {
		type : "GET",
		url : endpoint,
		data : "callback=?",
		dataType : "json",
		success : function(data) {
			var options = {
				formatOutput : true
			};
			var xmlData = $.json2xml(data, options);
			xmlData = xmlData.replace(/\+/g, '%20'); 
			xmlData = unescape(decodeURIComponent(xmlData)); 
			xmlData = xmlData.replace(/&(?!amp;)/g, '&amp;');
			Navigation.handleServiceResults1(stringToDoc(xmlData));
		},
		error : errorHandler
	});*/
	
	// Defect 1-B4RT2R
	var _options = {
	        url: endpoint,
	        type: 'GET',
	        dataType: 'jsonp',
	        data : "callback=?",
	        success: function(data) {
				var options = {
						formatOutput : true
					};
					var xmlData = $.json2xml(data, options);
					xmlData = xmlData.replace(/\+/g, '%20'); 
					// Defect 1-168CTIT , replaced the '(%27) & "(%22) with HTMLEquivalents  
					xmlData = xmlData.replace(/%27+/g,'&lsquo;'); 
					xmlData = xmlData.replace(/%22+/g,'&quot;');
					xmlData = unescape(decodeURIComponent(xmlData)); 
					xmlData = xmlData.replace(/&(?!amp;)/g, '&amp;');
					var tempString = xmlData;
					if (jQuery.browser.msie)
					{
						var xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); 
						xmlDoc.loadXML(tempString);
						tempString = xmlDoc;
					}
					$(tempString).find('navigationEntryValueObject').each(function() {
					    var tempStr = $(this).attr("name").replace(/&/gi,"&amp;");
				            var new_src = $(this).attr("name").replace("&lsquo;","").replace(/-/gi," ccccc ").replace("&quot;","").replace(/[^(a-z_)/ \u00D1\u00F10-9]/ig,'').replace(/ ccccc /gi,"-");
					    xmlData = xmlData.replace('name="'+tempStr+'"','name="'+new_src+'"');
					});
					// End of Defect 1-168CTIT
					Navigation.handleServiceResults1(stringToDoc(xmlData));
				},
	        error: function(XMLHttpRequest, textStatus, errorThrown) {
					     var error = 'Error in retrieving Browse';
	                     //alert(error);
	             }
	    };

	  
	  $.jsonp(_options);
}
function callUdcXmlService(token) {
	/* 8.4 performance changes. comment below code to remove call to udcxml service */
	/*var endpoint = Bannerservice.url + Bannerservice.endpoints[0] + "/" + token + "?dadName=" + Application.getDadName() + "&locale=" + Context.locale_settings;
	$.ajax( {
		type : "GET",
		url : endpoint,
		data : "callback=?",
		dataType : "json",
		success : function(data) {
			var options = {
				formatOutput : false
			};
			var xmlData = $.json2xml(data, options);
			xmlData = xmlData.replace(/\+/g, '%20');
			xmlData = unescape(xmlData);
			xmlData = xmlData.replace(/&(?!amp;)/g, '&amp;');
			callback(stringToDoc(xmlData));
		},
		error : errorHandler
	});*/
	callback();
}