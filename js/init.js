//Hook up the tweet display

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "8 february 2017 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});


});	
