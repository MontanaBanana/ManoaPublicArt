/* Setup base variables */
var apiBaseUrl = 'http://api.montanab.com/ManoaPublicArt/';

var screen = 'initial-screen';
var selectedPath = '';

// when set to true, user can use the app w/o being switched back to the off-site screen
var offsite = false;
var is_ios = false;

function initializeLayout(){
	
	// hide everything other than the initial screen first
	$('footer').hide();
	$('.parent').hide();
	$('header .back').hide();
	
	$('footer').removeClass('hidden');
	$('.parent').removeClass('hidden');
	
	$('.parent#' + screen).show();
	
	is_ios = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
	if(is_ios){
		// add padding to top of some elements for ios menu bar
		$('header').addClass('ios');
		$('.parent .centerpiece').addClass('ios');
		$('.parent .panel.video').addClass('ios');
		$('.parent .panel.gallery').addClass('ios');
	};
	
	// hide splashscreen (Android)
	navigator.splashscreen.hide();
	
	//analytics.startTrackerWithId( analyticsTrackingId );
	
	// get the users current GPS location
	getCurrentLocation();
	
	// prevent app from sleeping (not currently working)
	//window.plugins.insomnia.keepAwake();
	
	// populates the grid screen with content from content.js
	setupOrientationScreen();
	
	// track user initially opend the app (happens once, not every time the user returns to this page)
	//analytics.trackView( 'Initial Visit' );
	
	$('#initial-screen .fa-times-circle').on('click', function(){
		$('.parent').hide();
		$('.parent#offsite-screen').show();
	});
	
	setTimeout(function(){ 
		// In X seconds, see if we are still trying to get the GPS coords
		// If so, just move onto the orientation screen.
		if (screen == 'initial-screen') {
			offsite = true;
			switchView('orientation-screen', false);
		}
	}, 15000);
	
	$('#offsite-screen .continue').on('click', function(){
		// tell app to no longer switch to the offsite-screen
		offsite = true; 
		
		switchView('orientation-screen', false);
	});
	
	// offsite link to Google or Apple Maps, depending on device
	$('#offsite-screen .warning').on('click', function(){
		// update this with actual address using http://mygeoposition.com if needed
		var address = '2535 McCarthy Mall, Honolulu, HI 96822, USA';
		if(is_ios){
			// open Apple Maps (default on iOS devices)
			var mapsUrl = 'http://maps.apple.com/?q=' + address;
			window.open(encodeURI(mapsUrl), '_system');
		} else {
			// open Google Maps (default on Android Devices)
			//var mapsUrl = 'geo:48.5521840,-113.0090160';
			var mapsUrl = 'http://maps.google.com/?q=' + address;
			window.open(encodeURI(mapsUrl), '_blank');
		}
	});
	
	// header back button shows only on detail pages
	$('header .back').on('click', function(){
		switchView('orientation-screen', false);
	});
	
	// detail page footer subpage toggle buttons
	$('footer .fa').on('click', function(){

		var panel = $(this).data('id');
		
		$('.parent .panel').hide();
		$('footer .fa').removeClass('selected');

		if (selectedPath == 'founders_gate' && panel == 'sharing') {
			panel = 'postcard';
		}
		
		if (selectedPath == 'maka_io_or_hawks_eye' && panel == 'sharing') {
			panel = 'hawk-postcard';
		}
		
		if(panel == 'video' || panel == 'gallery'){
			// reset the video playback button to custom play button
			//$('.parent.detail .panel.video .play-button').html('<img src="images/play-button.png" alt="Click to play video" />');
			var address = pathContent[selectedPath].geo_location; // alternate driving directions geo coordinates (which may differ from the other lat/lon)
			if(is_ios){
				// open Apple Maps (default on iOS devices)
				var mapsUrl = 'http://maps.apple.com/?q=' + address;
			} else {
				// open Google Maps (default on Android Devices)
				address +=  '(' + pathContent[selectedPath].name + ')';
				var mapsUrl = 'http://maps.google.com/?q=' + address;
			}
			
			$('.map-link').on('click', function(){
				window.open(encodeURI(mapsUrl), '_system');
			});
			$('.parent .centerpiece').hide();
		} else {
			$('.parent .centerpiece').show();
		}
		
		if(panel == 'sharing'){
			$('.parent .centerpiece h2').show();
		} else {
			$('.parent .centerpiece h2').hide();
		}
		
		if(panel == 'location'){
			//var address = pathContent[selectedPath].lat + ',' + pathContent[selectedPath].lon; // coordinates the app uses to determine user is at location
			var address = pathContent[selectedPath].geo_location; // alternate driving directions geo coordinates (which may differ from the other lat/lon)
			if(is_ios){
				// open Apple Maps (default on iOS devices)
				var mapsUrl = 'http://maps.apple.com/?q=' + address;
			} else {
				// open Google Maps (default on Android Devices)
				address +=  '(' + pathContent[selectedPath].name + ')';
				var mapsUrl = 'http://maps.google.com/?q=' + address;
			}
			
			$('.map-link').on('click', function(){
				window.open(encodeURI(mapsUrl), '_system');
			});
		}
		
		if(panel == 'home'){
			switchView('orientation-screen', false);
		} else {
			$('.parent.detail .panel.' + panel).show();
			$(this).addClass('selected');
		}
		
		var switchIndex = null;
		var keys = [];
		if (panel == 'left') {
			var index = 0;
			for (var property in pathContent) {
			    if (pathContent.hasOwnProperty(property)) {
					keys[index] = property;
					if (property == selectedPath) {
						//alert(index);
						if (index == 0) {
							// go home
							//alert('left switchView ' + 'home');
							//switchView('orientation-screen', false);
							switchIndex = 'orientation-screen';
						}
						else {
							//alert( index );
							//alert('left switchView ' + keys[index-1]);
							//switchView(keys[index-1]);
							switchIndex = index-1;
						}
					}
					index++;
			    }
			}
		}
		
		if (panel == 'right') {
			var index = 0;
			for (var property in pathContent) {
			    if (pathContent.hasOwnProperty(property)) {
					keys[index] = property;
					if (property == selectedPath) {
						//alert(index);
						//alert(Object.keys(pathContent).length);
						if (index == Object.keys(pathContent).length-1) {
							// go home
							//alert('right switchView ' + 'home');
							//switchView('orientation-screen', false);
							switchIndex = 'orientation-screen';
						}
						else {
							//alert('right switchView ' + keys[index+1]);
							//switchView(keys[index+1]);
							switchIndex = index+1;
						}
					}
					index++;
			    }
			}
		}
		
		//alert(keys[switchIndex]);
		//alert(switchIndex); 
		if (switchIndex == 'orientation-screen' || isNumeric(switchIndex)) {
			if (switchIndex == 'orientation-screen') {
				//alert('switching to orientation-screen');
				switchView('orientation-screen', false);
				//openPath('home');
			}
			else {
				//alert('switching to ' + keys[switchIndex]);
				switchView(false, keys[switchIndex]);
				//alert('opening path to: ' + switchIndex + ' ' + keys[switchIndex]);
				//openPath(keys[switchIndex], false);
			}
		}
			
		window.scrollTo(0, 0);

	});
	
	// orientation screen links populate and open path detail page
	$('.stories .story').on('click', function(){
		$('.parent.detail').attr('id', $(this).data('id'));
		openPath( $(this).data('id') );
	});

	$('.choosePicture').click(function(){
			//alert('choosePicture');
			photos.useExistingPhoto(); // pulls from photo library
		});
		$('.takePicture').click(function(){
			//alert('takePicture');
			photos.takePhoto(); // uses camera
		});
		$('.sharePicture').click(function(){
			//alert('sharePicture');
			window.plugins.socialsharing.share('Sharing a photo from the Manoa Public Art app! #manoapublicart', 'Manoa Public Art', $('#postcard-picture').attr('src'), $('#postcard-picture').attr('src'));
			//window.plugins.socialsharing.share('Sharing a photo from Yellowstone! #yellowstone', 'Yellowstone', postcardUrl, postcardUrl);
	});
	
	$('.choosePictureMaka').click(function(){
			//alert('choosePicture');
			photos.useExistingPhotoMaka(); // pulls from photo library
		});
		$('.takePictureMaka').click(function(){
			//alert('takePicture');
			photos.takePhotoMaka(); // uses camera
		});
		$('.sharePictureMaka').click(function(){
			//alert('sharePicture');
			window.plugins.socialsharing.share('Sharing a photo from the Manoa Public Art app! #manoapublicart', 'Manoa Public Art', $('#postcard-picture-maka').attr('src'), $('#postcard-picture-maka').attr('src'));
			//window.plugins.socialsharing.share('Sharing a photo from Yellowstone! #yellowstone', 'Yellowstone', postcardUrl, postcardUrl);
	});
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * changes page to a parent div by id
 * screenName is the parent#id value to switch to
 * path = either the specific path or false
 */
function switchView(screenName, path){
	//alert(screenName);
	//alert(path);
	if(path){
		// open and populate path from content.js content
		//screen = 'detail';
		//screen = 'video';
		screen = 'gallery';
		openPath(path);
		
	} else {
		// open page like orientation screen
		//alert(screenName);
		//alert(path);
			screen = screenName;
            selectedPath = '';
			
			$('.parent').hide();
			$('footer').hide();
			$('.parent .centerpiece').show();
			$('.parent#' + screen).show();
			$('header .back').hide();
			$('header h1').html('Manoa Public Art');

			if(screen == 'orientation-screen'){
				$('.parent .centerpiece h2').show();

			}
			
			getCurrentLocation();
		// track user viewed a specific screen
		//analytics.trackView( screen );
	}

	window.scrollTo(0, 0);
	
}

/**
 * list oriention screen path buttons based on pathContent items
 *
 * <div class="story" data-name="running_fisher_brothers">
 *	<h3>Running Fisher Brothers</h3>
 * </div>
 */
function setupOrientationScreen(){
	$.each(pathContent, function(path, content){
		var attributes = {
			'class': 'sort story ' + path,
			'data-id': path,
			'data-sort': 0,
			'style': 'background-image:url(' + content.thumbnail + ');'
		}
	
		if (content.hide === false) {
			var elem = $('<div/>').attr( attributes );
			$('.parent .stories').append( elem );
			//alert(elem);
			$('.parent .stories .story.' + path).append('<h3>' + content.name + ' - <span id="' + path + '-distance"></span></h3>');
		}
	});
}

/**
 * click from landing page into a path, changes the title and shows/hides divs 
 * path ie: birch_creek, pathTitle ie: Birch Creek
 */
function openPath(path){
	//console.log(pathContent[path]);
	//console.log(path);
	if (typeof pathContent[path] == 'undefined') {
		//alert('hit it inside openPath ' + path);
		//return false;
		//pathContent[path] = { name: '', video_url: '', gallery_images: [] };
	}
	
	if (typeof pathContent[path] !== 'undefined') {
		$('header h1').html( pathContent[path].name );
		$('header .back').show();

	}
	
	$('.parent').hide();
	$('.parent .panel').hide();
	
	if (typeof pathContent[path] !== 'undefined') {
		$('footer').show();
		$('footer .fa').removeClass('selected');
	}
	
	// populate .parent.detail with content
	if (typeof pathContent[path] !== 'undefined') {
		setupDetailDiv(path);
	}
	
	$('#' + path).show();
	selectedPath = path;
	
	// select the first details div for the selected path
	if (typeof pathContent[path] !== 'undefined') {
		if (!pathContent[path].video_url.length) {
			// This is a gallery
			$('#' + path + ' .panel.gallery').show();
			console.log('This path has a gallery');
		}
		else {
			//$('#' + path + ' .panel.video').show();
			$('#' + path + '.panel.gallery').show();
		}
	}
	
	if (typeof pathContent[path] !== 'undefined') {
		$('.parent .centerpiece').hide();
	}
	else if (path == 'orientation-screen') {
		$('.parent .centerpiece').show();
	}
	
	// first tab selected
	$('footer .fa.fa-file-image-o').addClass('selected');
	

	window.scrollTo(0, 0);
	// track user viewed a specific path
	//analytics.trackView( pathContent[path].name );
}

/**
 * populate the parent detail div with path specific content 
 * path ie: birch_creek
 */
function setupDetailDiv(path){
	$('.parent.detail').attr('id', path);
	
	// set footer buttons data-name to path
	$('.controls .buttons *').data('name', path);
	
	if (typeof pathContent[path] == 'undefined') {
		alert('hit it inside setupDetailDiv');
		return false;
	}
	
	//content from pathContent object
	var content = pathContent[path];
	
	$('.parent .centerpiece h2').hide();
	$('#' + path + ' .centerpiece').css('background-image', 'url(' + content.centerpiece + ')');
	//$('#' + path + ' .panel.details').html(content.details);
	if (!pathContent[path].video_url.length) {
		// This is a gallery
		var gallery_html = '';
		for (var i = 0; i < content.gallery_images.length; i++) {
			gallery_html += '<div class="gallery_image">';
			if (content.gallery_images[i].image.length > 0) { 
				gallery_html += '<img src="images/' + path + '/' + content.gallery_images[i].image + '" /><br />';
			}
			gallery_html += '<p>' + content.gallery_images[i].description + '</p></div>';
			//gallery_html += '<a data-rel="gallery-' + path + '" href="' + 'images/' + path + '/' + content.gallery_images[i].image + '" class="swipebox"><img src="' + 'images/' + path + '/' + content.gallery_images[i].image + '" alt="image"></a>';
		}
		//gallery_html += '<div class="map-link" onclick="$(\'#sharing\').click();"><i class="fa fa-share-square-o"></i> Directions</div>';
		gallery_html += '<div class="intro" onclick="$(\'#sharing\').click();"><h2>SHARE YOUR STORY</h2></div>';
		$('#' + path + ' .panel.gallery .images').html( gallery_html );
		/*
		$('.swipebox').swipebox({
			useCSS: true,
			useSVG: true,
			hideBarsOnMobile: false,
			beforeOpen: function() {
				analytics.trackEvent('User Event', 'Open Gallery');
			}
		});
		*/
	}
	else {
		$('#' + path + ' .panel.video .details').html( content.details );
		//$('#' + path + ' .panel.video .caption').html( content.caption );
		$('#' + path + ' .panel.video .play-button').css('background-image', 'url(' + content.video_image + ')');
		$('#' + path + ' .panel.video .play-button').html('<img src="images/play-button.png" alt="Click to play video" />');
		$('#' + path + ' .panel.video .play-button').attr('onclick', 'prepVimeoPlayback(this,\'' + content.video_url + '\',\'' + path + '\');');
	}
	$('#' + path + ' .panel.location .location-text').html( content.location );
	$('#' + path + ' .panel.gallery .location-text').html( '<i class="fa fa-map-marker"></i> ' + content.location );
	$('#' + path + ' .panel.sharing .sharing-text').html( content.sharing );
}

function prepVimeoPlayback(id, videoUrl, path){
	// get height and width of the play button image
	var img = $('.parent.detail .play-button img');

	var childBrowser = window.open('https://player.vimeo.com/video/' + videoUrl + '?autoplay=1', '_blank', 'location=no');
	
	// track that user opened the video (whether or not it was able to play)
	//analytics.trackEvent('Video', pathContent[path].name, 'https://player.vimeo.com/video/' + videoUrl);
	
	var closeCB = function(event){
		childBrowser.removeEventListener('exit',closeCB);
		childBrowser.close();
		childBrowser = null;
	};
	
	childBrowser.addEventListener('exit', closeCB);
	
}

/**
 * for video support, show youtube image w/ play button. Then, on click, change 
 * that block to a youtube within an iframe, user clicks that to initialize playback
 * note: this is done to speed up loading since youtube embed code is a hog
 */
function prepYouTubePlayback(id, videoUrl, path){
	// get height and width of the play button image
	var img = $('.parent.detail .play-button img');
	//alert(img.clientWidth + '/' + img.clientWidth); // returning 'undefined' values here
	
	// swap out the contents of this link with the youtube iframe code
	//var youtubeIframe = '<iframe src="' + videoUrl + '&autoplay=1&showinfo=0&autohide=1&modestbranding=1" frameborder="0" allowfullscreen></iframe>';
	//$(id).html(youtubeIframe);
	
	//window.open(videoUrl + '&autoplay=1&showinfo=0&autohide=1&modestbranding=1', '_self', 'location=yes');
	
	var childBrowser = window.open(videoUrl + '&autoplay=1&showinfo=0&autohide=1&modestbranding=1', '_blank', 'location=no');
	
	// track that user opened the video (whether or not it was able to play)
	//analytics.trackEvent('Video', pathContent[path].name, videoUrl);
	
	var closeCB = function(event){
		childBrowser.removeEventListener('exit',closeCB);
		childBrowser.close();
		childBrowser = null;
	};
	
	childBrowser.addEventListener('exit', closeCB);
	
	// set the iframe to the exact size of the play button window
	//$('.parent.detail .play-button iframe').width( 100% );
	//$('.parent.detail .play-button iframe').width( img.clientWidth );
	//$('.parent.detail .play-button iframe').height( img.clientHeight );
}

/**
 * media capture functions
 * image from camera, gallery take video
 */

var sharingTo = ''; // either email or null. Email will go to blackfeet w/o option for social channels
var sharingMediaType = '';

function captureSuccess(mediaFiles){
    var i, len;
    //alert(mediaFiles.length);
    for(i = 0, len = mediaFiles.length; i < len; i += 1){
        // message and image to social networks enabled by device
        var mediaFile = mediaFiles[i].fullPath;
        
        // change file:/storage to file:///storage for android
        if(!is_ios){
	    	mediaFile = mediaFile.replace("file:/storage", "file:///storage");   
	    }
        
        window.plugins.socialsharing.share('Share your story here...', null, mediaFile, siteUrl, function(){
	       // track that user successfully shared image, text or video
		   //analytics.trackEvent('Sharing', pathContent[selectedPath].name, sharingMediaType); 
        });
    }
    
    // reset sharing media type
    sharingMediaType = '';
}

function captureError(error){
    //var msg = 'An error occurred during capture: ' + error.code;
    //navigator.notification.alert(msg, null, 'Uh oh!');
	//alert(msg);
    
    // reset sharing media type
    sharingMediaType = '';
}

function captureImage(){
	// Launch device camera application, allowing user to capture up to 1 image
    sharingMediaType = 'photo';
	window.navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
	/*
	navigator.camera.getPicture( captureSuccess, captureError, { 
		quality : 75,
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA,
		allowEdit : true,
		encodingType: Camera.EncodingType.JPEG,
		saveToPhotoAlbum: true 
	});
	*/
}

function captureVideo(){
    // Launch video application
    sharingMediaType = 'video';
    window.navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1, sourceType: 0, mediaType: 1});
}

function captureAudio(){
	// Launch audio recording application
	sharingMediaType = 'audio';
	window.navigator.device.capture.captureAudio(captureSuccess, captureError,  {limit: 1});
}

function captureText(){
	// Open the social sharing panel. On successful share, track it
    sharingMediaType = 'text';
	window.plugins.socialsharing.share('Share your story here...', null, null, siteUrl, function(){
       // track that user successfully shared image, text or video
	   //analytics.trackEvent('Sharing', sharingMediaType, mediaFile); 
    });
}

function getVideoFromGallery(){
    // Launch video application
    sharingMediaType = 'photo';
    navigator.camera.getPicture(captureSuccess, captureError, { 
		quality: 50,
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		mediaType: Camera.MediaType.VIDEO  
	});
}

/**
 * geolocation functions
 * restart gps, find locations based on coords in content.js
 *
 * getLocation when app runs and perodically while app is open
 * checkLocation to switch view based on location
 */

function checkLocation(path, targetLocation, currentPostion){
    var p1 = new LatLon(Geo.parseDMS(currentPostion.coords.latitude), Geo.parseDMS(currentPostion.coords.longitude));
    var p2 = new LatLon(Geo.parseDMS(targetLocation.lat), Geo.parseDMS(targetLocation.lon));

    if(typeof checkLocation.beenthere == 'undefined'){
        // perform the initialization
        checkLocation.beenthere = [];
		checkLocation.triggeredpath = [];
    }
    //alert('Checking ' + path + ' (' + targetLocation.lat + ', ' + targetLocation.lon + ') vs. (' + currentPostion.coords.latitude + ', ' + currentPostion.coords.longitude + ')');
    //lat: 42.67759, lon: 23.28596
	// (targetLocation.lat == 21.29979 && targetLocation.lon == -157.81673)
		
	// $('.parent .stories .story.' + path).append('<h3>' + content.name + ' - <span class="distance-away ' + path + '">200 feet away</span></h3>');	
	var feet_away = Math.floor(p1.distanceTo(p2) * 1000 * 3.28084);
	var direction = bearingToDirection( p1.bearingTo(p2) );
	
	$('#'+path+'-distance').html( feet_away + ' feet ' + direction );
	$('div[data-id="'+path+'"]').data('sort', feet_away);
    $('div.sort').sort(function (a, b) {
      var contentA =parseInt( $(a).data('sort'));
      var contentB =parseInt( $(b).data('sort'));
      return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
   });
	

	//alert( ((p1.distanceTo(p2) * 1000) + ' ' + (p1.bearingTo(p2))) );
	//if ((p1.distanceTo(p2) * 1000) < 35 || (targetLocation.lat == 42.67759 && targetLocation.lon == 23.28596 && (p1.distanceTo(p2) * 1000) < 5000))
	if ((p1.distanceTo(p2) * 1000) < 35 || (targetLocation.lat == 21.29979 && targetLocation.lon == -157.81673 && (p1.distanceTo(p2) * 1000) < 5000)) {
	    // tell app we're on-site
	    //alert('inside cond');
	    offsite = false;
	    
        //if (path == 'varney_circle') {
            //alert('We are close enough to ' + path + ' and we are on screen ' + screen + ' and selectedPath: ' + selectedPath);
        //}
        // screen-gallery/
		
		// Do this on any screen now.
		//if (screen == 'initial-screen' || screen == 'orientation-screen' || screen == 'offsite-screen' || selectedPath == 'orientation-screen' || selectedPath == '') {
            if (typeof checkLocation.beenthere[path] == "undefined") {
                //alert('We are switching to ' + path);
				var go_ahead = true;
				if (screen != 'initial-screen' && screen != 'orientation-screen' && screen != 'offsite-screen' && selectedPath != '' && screen != 'offsite-screen') {
					// They are already on an art page.
					if (typeof checkLocation.triggeredpath[path] == "undefined") {
						checkLocation.triggeredpath[path] = true;
						//alert(screen);
						go_ahead = confirm('You are near ' + pathContent[path].name + '. Would you like to switch to that screen?');
					}
				}
	
				if (go_ahead) {
					//alert('going to ' + path);
					//alert(screen);
					navigator.vibrate(1000);
					switchView(false, path);
					checkLocation.beenthere[path] = true;
				}
            }
            else {
                //alert('But, we\'re not going there since we already have been.');
            }
        //}
    
    } else if(screen == 'initial-screen') {
	    // tell app to no longer switch to the offsite-screen
		offsite = true;
        //alert('We are too far away from (' + targetLocation.lat + ', ' + targetLocation.lon + ') vs. (' + currentPostion.coords.latitude + ', ' + currentPostion.coords.longitude + ')');
		
        switchView('offsite-screen', false);
    }
}

function getCurrentLocation(){
    var options = {
    	frequency: 5000, 
    	enableHighAccuracy: true, 
    	maximumAge: 3000, 
    	timeout: 5000
    	};
    
    //alert('watching...');
    navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, options);
}

function onGeolocationError(error){

    console.log('In onGeolocationError');
    console.log(error);
    if(error.message == 'GPS provider disabled.'){
        var msg = 'Your GPS is currently disabled. Please turn your GPS on.';
		navigator.notification.alert(msg, null, 'Uh oh!');
		alert(msg); 
		 
        switchView('offsite-screen', false);
    }

    
    if(offsite == false){
		switchView('offsite-screen', false);
	}
}

function onGeolocationSuccess(position){
	console.log('In onGeolocationSuccess');
    console.log(position);
    console.log(screen)
        //alert('position: ' + position.coords.latitude + ', ' + position.coords.longitude + ' acc: ' + position.coords.accuracy );

    if(typeof onGeolocationSuccess.counter == 'undefined'){
        // perform the initialization
        onGeolocationSuccess.counter = 0;
    }
    
    if(position.coords.accuracy < 100 || true){
        onGeolocationSuccess.counter = 0;
        var targetLocation = {};
        if(screen == 'initial-screen'){
            targetLocation = { 
	            lat: startingLocation.lat, 
	            lon: startingLocation.lon 
	        };
            checkLocation('orientation-screen', targetLocation, position);
        }
        
        //checkLocation(screen, targetLocation, position);
        if(screen == 'orientation-screen'){
            targetLocation = { 
	            lat: startingLocation.lat, 
	            lon: startingLocation.lon 
	        };
            checkLocation('orientation-screen', targetLocation, position);
            
            // loop through all pathContent to see if we're at a path position
            $.each(pathContent, function(path, content){
                    targetLocation = { 
                        lat: content.lat, 
                        lon: content.lon 
                    };
                    checkLocation(path, targetLocation, position);
		    });
        
        } else {
	        // loop through all pathContent to see if we're at a path position
	        $.each(pathContent, function(path, content){
		        targetLocation = { 
			        lat: content.lat, 
			        lon: content.lon 
			    };
				checkLocation(path, targetLocation, position);
		    });
        }
    
    } else {
        // Try again, up to 5 times.
        if(onGeolocationSuccess.counter < 5){
            restartGps();
        }
        onGeolocationSuccess.counter++;
    } 
}

function restartGps(){
	if(typeof WatchID !== 'undefined'){
		navigator.geolocation.clearWatch(WatchID);
	}
	var options = { 
		frequency: 5000, 
		enableHighAccuracy: true, 
		maximumAge: 3000,
		timeout : 5000
	};
		
	WatchID = navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, options); 	
}

function showLoading() {
	$('#loading').show();
}

function hideLoading() {
	$('#loading').hide();
}
