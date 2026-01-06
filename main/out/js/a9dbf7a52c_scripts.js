$(function()
{
	getAnnouncements();
});

function getAnnouncements()
{
	$.ajax({
		type: "GET", 
		url: "/hofapps/applications/announcements/getAnnouncements.jsp",
		dataType: "json",    
		success: function (data) 
		{        	
			if(data.status == 200)
			{
				$("#announcements").html("");
				$("#announcements").append("<table class='table table-striped' id='announcementsList'><tbody>");

				if (data.data.length == 0)
				{
					$("#announcementsList > tbody").append("<tr><td><em>There are currently no announcements</em></td></tr>");
				}
				else
				{
					for (i = 0; i < data.data.length; i++)
					{
						$("#announcementsList > tbody").append("<tr><td><a style='cursor:pointer' onclick='getAnnouncementDetails("+data.data[i].announcement_id+")'><span class='fa fa-info-circle'></span> "+data.data[i].announcement_title+"</a></td></tr>");
					}
				}

				$("#announcements").append("</tbody></table>");
			}
			else
			{
				var error = "An error has occurred retrieving the list of announcements."; 
				$("#announcements").html(error);
			}
		},
		error: function () 
		{
			var error = "A server error has occurred retrieving the list of announcements."; 
			$("#announcements").html(error);
		}
	});
}

function getAnnouncementDetails(id)
{
	$.ajax({
		type: "GET", 
		url: "/hofapps/applications/announcements/getAnnouncementDetails.jsp",
		dataType: "json",
		data: {
			id: id
		},
		success: function (data) 
		{
			if(data.status == 200)
			{
				$("#announcements").html("");
				$("#announcements").html("<a class='btn btn-default' onclick='getAnnouncements()'>Back To Announcements</a><br /><br /><div style='max-height:500px; overflow-y:auto'>"+data.data[0].description+"</div>");
			}
			else
			{
				var error = "An error has occurred retrieving the announcement description."; 
				$("#announcements").html(error);
			}
		},
		error: function () 
		{
			var error = "A server error has occurred retrieving the announcement description."; 
			$("#announcements").html(error);
		}
	});
}