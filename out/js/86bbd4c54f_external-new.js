$('head').append('<script src="/cas-web/js/font-awesome/5.0.13/fontawesome-all.min.js"/>');

$(function(){
	var maintEnd = new Date('2025-07-11T11:00:00Z'); // UTC time
	var curDate = new Date();
	if (curDate < maintEnd)
	{
		$("div.login-wrapper div.container").prepend('\
				<div class="row justify-content-center" style="margin-bottom: 20px;"> \
					<div class="col-lg-7"> \
						<div class="card"> \
							<h5 class="card-header text-bg-danger"> \
								<button id="btnHofWarning" data-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#cbody" aria-expanded="false" aria-controls="cbody"><span class="fa fa-info-circle"></span> Test Message example: Password Reset unavailable Tuesday, March 11, 2am to 6am. \
									<span class="fa fa-chevron-down fa-lg" id="hofWarnUp"></span> \
									<span class="fa fa-chevron-up fa-lg" style="display:none" id="hofWarnDown"></span><br /> \
								</button> \
							</h5> \
							<div class="card-body" id="hofWarnBody"> \
								<p class="card-text">there is some message we need to display here.</p> \
							</div> \
						</div> \
					</div> \
				</div>');
				
		// used for notify messages
		$("#hofWarnBody").hide();
		$("#btnHofWarning").click(function() { 
			$("#hofWarnBody").toggle("fast");
			$("#hofWarnUp").toggle();
			$("#hofWarnDown").toggle();
		});

	}
});