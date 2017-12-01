var WatchID = null;
var CurrentStep = 'initial-screen';

/**
 * Set up lat/long coordinates here for each stop
 * Code elsewhere uses the PathLocationCoords array for all coords
 */
var setup_location_4a = [latitude: 48.55572212, longitude: -113.02107];
var setup_location_4b = [latitude: 48.42674, longitude: -112.990265];
var setup_location_4c = [latitude: 48.290058, longitude: -112.834432];
var setup_location_4d = [latitude: 48.330143, longitude: -112.548065];
//var setup_location-4d = [latitude: 46.7292298, longitude: -117.1760458];

var PathVideoUrls = [
	location_4a: 'http://www.youtube.com/embed/TxQ7qvt2DVM?rel=0',
	location_4b: 'http://www.youtube.com/embed/UTyMaU2PhQE?rel=0',
	location_4c: 'http://www.youtube.com/embed/KvY3McYLao8?rel=0',
	location_4d: 'http://www.youtube.com/embed/EGRlbEN9-uw?rel=0'
	];

var PathLocationCoords = [
	location_4a: setup_location_4a,
	location_4b: setup_location_4b,
	location_4c: setup_location_4c,
	location_4d: setup_location_4d
	];

function switch_view(new_view_id)
{
    $('div.parent').css('display', 'none');
    $('img#bg_img').attr('usemap','');
    if (new_view_id.search(/4a/) > 0) {
        $('img#bg_img').attr('src', 'images/blackfeet_4a.png');
		arrived_at_location('location-4a', 'http://www.youtube.com/embed/TxQ7qvt2DVM?rel=0');
    }
    else if (new_view_id.search(/4b/) > 0) {
        $('img#bg_img').attr('src', 'images/blackfeet_4b.png');
		arrived_at_location('location-4b', 'http://www.youtube.com/embed/UTyMaU2PhQE?rel=0');
    }
    else if (new_view_id.search(/4c/) > 0) {
        $('img#bg_img').attr('src', 'images/blackfeet_4c.png');
		arrived_at_location('location-4c', 'http://www.youtube.com/embed/KvY3McYLao8?rel=0');
    }
    else if (new_view_id.search(/4d/) > 0) {
        $('img#bg_img').attr('src', 'images/blackfeet_4d.png');
		arrived_at_location('location-4d', 'http://www.youtube.com/embed/EGRlbEN9-uw?rel=0');
    }
    else if (new_view_id == 'orientation-screen') {
        $('img#bg_img').attr('src', 'images/blackfeet_3.png');
        $('img#bg_img').attr('usemap','#orientation-map');
        $('img#bg_img[usemap]').rwdImageMaps();
    }
    else if (new_view_id == 'offsite-screen') {
        $('img#bg_img').attr('src', 'images/blackfeet_2b.png');
    }
    else {
        $('img#bg_img').attr('src', 'images/blackfeet_2a.png');
    }
        
    $('div#'+new_view_id).css('display', 'block');
    
    // Now, start the GPS if they are on a screen where we want them to
    if (new_view_id == 'location-4a') {
        CurrentStep = 'location-4a';
        //restartGps();
    }
    else if (new_view_id == 'location-4b') {
        CurrentStep = 'location-4b';
        //restartGps();
    }
    else if (new_view_id == 'location-4c') {
        CurrentStep = 'location-4c';
        //restartGps();
    }
    else if (new_view_id == 'location-4d') {
        CurrentStep = 'location-4d';
        //restartGps();
    }
    
    if (new_view_id == 'location-4amap-response') {
        CurrentStep = 'location-4amap-response';
        restartGps();
    }
    else if (new_view_id == 'location-4bmap-response') {
        CurrentStep = 'location-4bmap-response';
        restartGps();
    }
    else if (new_view_id == 'location-4cmap-response') {
        CurrentStep = 'location-4cmap-response';
        restartGps();
    }
    else if (new_view_id == 'location-4dmap-response') {
        CurrentStep = 'location-4dmap-response';
        restartGps();
    }
	
    if (new_view_id == 'orientation-screen') {
        CurrentStep = 'orientation-screen';
        restartGps();
    }
    
	$('.homeButton').show();
}

function check_location(view_id, target_location, current_position)
{
    var p1 = new LatLon(Geo.parseDMS(current_position.coords.latitude), Geo.parseDMS(current_position.coords.longitude));
    var p2 = new LatLon(Geo.parseDMS(target_location.lat), Geo.parseDMS(target_location.lon));

    //alert('checking location...');
    //alert('distance from p1 to p2:');
    //alert(p1.distanceTo(p2) * 1000);
    // And we're within X meters ... 
    if ((p1.distanceTo(p2) * 1000) < 762) {
        navigator.notification.vibrate(1000);
        
        switch_view(view_id);
        //alert(CurrentStep);
        /*
        if (CurrentStep == 'initial-screen') {
            //navigator.geolocation.clearWatch(WatchID);
            switch_view('orientation-screen');
        }
        else if (CurrentStep == 'location-4a') {
            arrived_at_location('location-4a', 'http://www.youtube.com/embed/TxQ7qvt2DVM');
        }
        else if (CurrentStep == 'location-4b') {
            arrived_at_location('location-4b', 'http://www.youtube.com/embed/UTyMaU2PhQE');
        }
        else if (CurrentStep == 'location-4c') {
            arrived_at_location('location-4c', 'http://www.youtube.com/embed/KvY3McYLao8');
        }
        else if (CurrentStep == 'location-4d') {
            arrived_at_location('location-4d', 'http://www.youtube.com/embed/EGRlbEN9-uw');
        }
        */
    }
    else {
        if (CurrentStep == 'initial-screen') {
            //navigator.geolocation.clearWatch(WatchID);
            switch_view('offsite-screen');
        }
    }
}

// onSuccess Geolocation
function onGeolocationSuccess(position) 
{
    //alert('onGeolocationSuccess: ' + posotion.coords.accuracy);
    if ( typeof onGeolocationSuccess.counter == 'undefined' ) {
        // It has not... perform the initialization
        onGeolocationSuccess.counter = 0;
    }
    
    if (position.coords.accuracy < 200) {
        onGeolocationSuccess.counter = 0;
        var target_location = {};
        if (CurrentStep == 'initial-screen') {
            target_location = { lat: 48.55572212, lon: -113.021072 };
            //target_location = { lat: 45.49016762, lon: -122.76020124 }; // jason's house FOR DEBUG
            check_location('orientation-screen', target_location, position);
        }
        /*
        
        else if (CurrentStep == 'location-4a') {
            target_location = { lat: 48.55572212, lon: -113.021072 };
        }
        else if (CurrentStep == 'location-4b') {
            target_location = { lat: 48.42674, lon: -112.990265 };
        }
        else if (CurrentStep == 'location-4c') {
            target_location = { lat: 48.290058, lon: -112.834432 };
        }
        else if (CurrentStep == 'location-4d') {
            target_location = { lat: 48.330143, lon: -112.548065 };
        }
        */
        //check_location(target_location, position);
        if (CurrentStep == 'orientation-screen') {
            check_location('location-4a', { lat: 48.55572212, lon: -113.021072 }, position);
            check_location('location-4a', { lat: 48.55572212, lon: -113.021072 }, position);
            check_location('location-4b', { lat: 48.42674, lon: -112.990265 }, position);
            check_location('location-4c', { lat: 48.290058, lon: -112.834432 }, position);
            check_location('location-4d', { lat: 48.330143, lon: -112.548065 }, position);
            check_location('location-4d', { lat: 46.7292298, lon: -117.1760458}, position);
        }
        else if (CurrentStep == 'location-4amap-response') {
            target_location = { lat: 48.55572212, lon: -113.021072 };
            check_location('location-4a-response', target_location, position);
        }
        else if (CurrentStep == 'location-4bmap-response') {
            target_location = { lat: 48.42674, lon: -112.990265 };
            check_location('location-4b-response', target_location, position);
        }
        else if (CurrentStep == 'location-4cmap-response') {
            target_location = { lat: 48.290058, lon: -112.834432 };
            check_location('location-4c-response', target_location, position);
        }
        else if (CurrentStep == 'location-4dmap-response') {
            target_location = { lat: 48.330143, lon: -112.548065 };
            check_location('location-4d-response', target_location, position);
        }
    }
    else {
        // Try again, up to 5 times.
        if (onGeolocationSuccess.counter < 5) {
            restartGps();
        }
        onGeolocationSuccess.counter++;
    } 
}

function onGeolocationError(error) 
{
    //alert('onGeolocationError: ' + error.message);
    //alert('onGeolocationError: ' + error.message + ' ' + error.code);
    if (error.message != 'The last location provider is no longer available') {
        //Ext.Msg.alert('Could not get Geolocation, make sure your GPS is turned on. ' + '\n' + 'Message: ' + error.message + '\n');
    }
    
    if (error.message == 'GPS provider disabled.') {
        alert('Your GPS is currently disabled. Please turn your GPS on.');
        switch_view('offsite-screen');
    }
	
	switch_view('offsite-screen');
}

function getCurrentLocation()
{
    //alert('we are about to start the getCurrentPosition');
    var options = {
    	frequency: 1000, 
    	enableHighAccuracy: true, 
    	maximumAge: 3000, 
    	timeout: 5000
    	};
    
    navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError, options);
}

function restartGps()
{
	if (WatchID) {
		navigator.geolocation.clearWatch(WatchID);
	}
	var options = { 
		frequency: 1000, 
		enableHighAccuracy: false, 
		maximumAge: 3000,
		timeout : 5000
		};
		
	WatchID = navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, options); 	
}

function arrived_at_location(location_id, youtube_url)
{
    navigator.geolocation.clearWatch(WatchID);
    // Load up the iframe src
    $('#'+location_id+'-youtube').attr('src', youtube_url); 
    // Show the div
    $('#'+location_id+'-media').show(); 
    // And in a few seconds, show the button to move on.
    //setTimeout(function(){$('#'+location_id+'-response-ready').show();},5000);
	$('#'+location_id+'-response-ready').show();
}

function onto_response(location_id)
{
    // Clear the iframe src, this will make sure the video stops playing
    // even if it is in the middle of playing
    $('iframe#'+location_id+'-youtube').attr('src', ''); 
    
    // Hide the response button, so it is back to normal operation next time
    $('#'+location_id+'-response-ready').hide(); 
    
    // Hide the div with the youtube iframe as well
    $('#'+location_id+'-media').hide(); 
    
    // Now, actually go onto the response
    switch_view(location_id+'-response');
}

function onAudioSuccess() {
    //alert("recordAudio():Audio Success");
}

function onAudioError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}

var mediaRec;
function recordAudioStart() 
{
    var src = "response.3gp";
    mediaRec = new Media(src, onAudioSuccess, onAudioError);

    // Record audio
    mediaRec.startRecord();

}

function recordAudioStop()
{
    mediaRec.stopRecord();
	uploadAudioFile('response.3gp');

} 

// Upload files to server
function uploadAudioFile(mediaFile) 
{

	var mediaFile = 'response.3gp';
	var ft = new FileTransfer(),
	path = '/mnt/sdcard/'+mediaFile,
	name = mediaFile;

	ft.upload(path,
		"http://joeo.montanab.com/blackfeet_photo_upload.php",
		function(result) {
			console.log('Upload success: ' + result.responseCode);
			console.log(result.bytesSent + ' bytes sent');
        
		},
		function(error) {
			console.log('Error uploading file ' + path + ': ' + error.code);
		},
		{ fileName: name });

	alert('Thanks for sharing your response with us!');

}

function afterFSUpload()
{

}

// Upload files to server
function uploadFile(mediaFile) 
{
	var ft = new FileTransfer(),
		path = mediaFile.fullPath,
		name = mediaFile.name;
            

	ft.upload(path,
		"http://joeo.montanab.com/blackfeet_photo_upload.php",
		function(result) {
				console.log('Upload success: ' + result.responseCode);
				console.log(result.bytesSent + ' bytes sent');
	            alert('Successfully uploaded the image!');
	
		},
		function(error) {
				console.log('Error uploading file ' + path + ': ' + error.code);
				alert('Error uploading file ' + path + ': ' + error.code);
	
		},
		{ fileName: name });
	
	alert('Thanks for sharing your response with us!');

}

// Called when capture operation is finished
//
function captureSuccess(mediaFiles) 
{
        var i, len;
        alert(mediaFiles.length);
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                //alert('about to uploadFile ' + mediaFiles[i]);
                uploadFile(mediaFiles[i]);
        }
		//kanaka_next();
		//alert('Thanks for sharing your response with us!');

        //alert('it worked');
}

// Called if something bad happens.
// 
function captureError(error) 
{
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
		alert(msg);
        //alert('it didnt work');
}

// A button will call this function
//
function captureImage() 
{
	// Launch device camera application, 
	// allowing user to capture up to 1 image
	//navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1, sourceType: 0, mediaType: 1});
	navigator.camera.getPicture( captureSuccess, captureError, { 
		quality : 75,
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA,
		allowEdit : true,
		encodingType: Camera.EncodingType.JPEG,
		saveToPhotoAlbum: true 
		});
}

function captureVideo() 
{
    // Launch video application
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1, sourceType: 0, mediaType: 1});
    //navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1, sourceType: 0, mediaType: 1});
}

function getVideoFromGallery() 
{
    // Launch video application
    navigator.camera.getPicture(captureSuccess, captureError, { 
		quality: 50,
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		mediaType: Camera.MediaType.VIDEO  
		});
}

var connectionError = false;
function sendAction(action, response)
{   
    var device = { };
    device.name = 'test';
    device.uuid = 'testuuid';
    device.version = 'testversion';
    
    if (typeof device != 'undefined') {
        if (typeof device.name != 'undefined') {
            var phone_name = device.name;
            var device_name = device.name;
            var device_uuid = device.uuid;
            var device_version = device.version;
            var UserId = ''; // Placeholder

            var ajax_url = "http://joeo.montanab.com/blackfeet/log_transaction.php?user_id="+UserId+"&action="+action+"&response="+response.replace("#", "")+"&phone_name="+phone_name+"&device_name="+device_name+"&device_uuid="+device_uuid+"&device_version="+device.version;

            if (connectionError == false) {
                $.ajax({
                    url:ajax_url,
                    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
                    success:function(json){
                    // do stuff with json (in this case an array)
                    },
                    error:function(){
                        connectionError = true;
                    },
                });
            }
        }
    }
	
	if (action.match(/response-text$/g)) {
		alert('Thanks for sharing your response with us!');
	}
	
	$('textarea').val('');
	
	$('select').change(function(){
		$('select').prop('selectedIndex',0);
	});
	$('.responseArea').html('<p>&nbsp;</p>');
	
	$('.homeButton').show();

}

function showResponseButton(object, loc)
{
	var opt = $(object).val();
	
	var responses = { };
	responses['text'] = '<div id="location-'+loc+'-response-text"><textarea id="location-'+loc+'-response-textarea"></textarea><br /><button onclick="sendAction(\'location-'+loc+'-response-text\', $(\'#location-'+loc+'-response-textarea\').val()); switch_view(\'orientation-screen\');">Submit text</button></div>';
    responses['photo'] = '<p><button onclick="captureImage(); switch_view(\'orientation-screen\'); ">Capture Photo</button></p>';
    responses['video'] = '<p><button onclick="captureVideo(); switch_view(\'orientation-screen\'); " >Record Video</button></p>';
    responses['video_gallery'] = '<p><button onclick="getVideoFromGallery(); switch_view(\'orientation-screen\'); ">Upload Video From Gallery</button></p>';
    responses['audio'] = '<p><button onclick="recordAudioStart();" class="audio-response">Tap here to start recording</button></p><p><button onclick="recordAudioStop(); switch_view(\'orientation-screen\');" class="audio-response">Tap here to stop recording</button></p>';
	
	if (opt == 'no_response') {
		switch_view('orientation-screen');
	}
	else {
		var replacement_text = responses[opt];
		if (replacement_text.length) {
			$('.responseArea', $(object).parent().parent()).html('<p>'+responses[opt]+'</p>');
		}
		else {
            $('.responseArea', $(object).parent().parent()).html('<p>&nbsp;</p>');
		}
	}
	
	if (opt == 'text') {
		$('.homeButton').hide();
	}
	else {
		$('.homeButton').show();
	}
}