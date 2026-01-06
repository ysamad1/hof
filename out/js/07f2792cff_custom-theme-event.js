//***************************
// Start Permanent JS (Don't delete this)
//***************************


// Please keep these. These are fixes that are put in place here because this js file is cache busted on a timestamp. It
// is the only easy way to get js into production without making large changes.
// Header logo fix
$(function() { 

    $("#logoHover").attr("href", "/");
    var refreshJWTFrame = document.createElement("iframe");
    var baseAWSURL = "";
    if(location.hostname.indexOf("mytest3.hofstra.edu") > -1){
        baseAWSURL = "https://mycloudtest.route53.hofstra.edu";
    }
    else if(location.hostname.indexOf("portaltest.hofstra.edu") > -1) {
        baseAWSURL = "https://mycloudupgr.route53.hofstra.edu";
    }
    else{
        baseAWSURL = "https://mycloud.route53.hofstra.edu";
    }

    refreshJWTFrame.src = baseAWSURL + "/auth/jwt-renew";
    refreshJWTFrame.height = "1px";
    refreshJWTFrame.width = "1px";
    refreshJWTFrame.style.border = "none";
    $("footer").append(refreshJWTFrame);
});

// Footer icon fixes
$("footer").find(".fa-google-plus").parent().parent().remove();
$("footer").find(".fa-foursquare").parent().parent().remove();
var footerRssContent = $.parseHTML("<div class='col-xs-4'>" + $("footer").find(".fa-rss").parent().parent().html() + "</div>");
var footerRssSection = $("footer").find(".fa-rss").parent().parent().parent().parent().find(".row")[1];
$(footerRssSection).append(footerRssContent);
$($("footer").find(".fa-rss")[1]).parent().parent().remove();


//***************************
// End Permanent JS (Don't delete this)
//***************************
// Add custom JS below for themes