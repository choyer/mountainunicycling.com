$(document).ready(function() {
  
  /* Use this js doc for all application specific JS */

	$("#quotes").quotator({
    	speed : 7500,
    	json : "quotes.json"
	});

	$.supersized({

		// Functionality
		start_slide       	: 0,			// Start slide (0 is random)
		new_window					:	1,			// Image links open in new window/tab
		image_protect				:	1,			// Disables image dragging and right click with Javascript

		// Size & Position						   
		min_width		        : 0,			// Min width allowed (in pixels)
		min_height		      : 0,			// Min height allowed (in pixels)
		vertical_center     : 0,			// Vertically center background
		horizontal_center   : 1,			// Horizontally center background
		fit_always					:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait        : 1,			// Portrait images will not exceed browser height
		fit_landscape				: 0,			// Landscape images will not exceed browser width

		// Components
		slides 							: [			// Slideshow Images
														{image : 'img/bg/1.jpg', title : 'Unknown'},
														{image : 'img/bg/2.jpg', title : 'forestwander.com'},
														{image : 'img/bg/3.jpg', title : 'istockphoto.com'},
														{image : 'img/bg/4.jpg', title : 'Derrick @ portwallpaper.com'},
														{image : 'img/bg/5.jpg', title : 'wallchan.com'},
														{image : 'img/bg/6.jpg', title : 'freebigpictures.com'},
														{image : 'img/bg/8.jpg', title : 'Carl Hoyer'},
														{image : 'img/bg/9.jpg', title : 'Carl Hoyer'},
														{image : 'img/bg/10.jpg', title : 'Carl Hoyer'},
														{image : 'img/bg/11.jpg', title : 'Carl Hoyer'},
													]

	});
	
	$('#photographer').replaceWith('<span><img src="img/photo.png" alt="Photo credit icon" height="16px" width="16px"> ' + api.getField('title') + '</span>');

});