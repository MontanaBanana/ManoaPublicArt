/** 
 * photo related functions
 * user opens camera from app, takes a photo which gets
 * merged on the device and saves to camera roll
 */

/** 
 * camera method below from
 * http://metabates.com/2012/04/15/capturing-and-uploading-photos-on-ios-with-phonegap/
 */

var postcardUrl = '';

var photos = {
	
	// use an existing photo from the library:
	useExistingPhoto: function(e) {
		this.capture(Camera.PictureSourceType.SAVEDPHOTOALBUM);
	},
	
	useExistingPhotoMaka: function(e) {
		this.captureMaka(Camera.PictureSourceType.SAVEDPHOTOALBUM);
	},
	
	// take a new photo:
	takePhoto: function(e) {
		this.capture(Camera.PictureSourceType.CAMERA);
	},
	
	// take a new photo:
	takePhotoMaka: function(e) {
		this.captureMaka(Camera.PictureSourceType.CAMERA);
	},
	
	// capture either new or existing photo:
	capture: function(source) {
		navigator.camera.getPicture(this.onCaptureSuccess, this.onCaptureFail, {
			destinationType: Camera.DestinationType.FILE_URI,
			//destinationType: Camera.DestinationType.NATIVE_URI,
			//destinationType: Camera.DestinationType.DATA_URL,
			sourceType: source,
			correctOrientation: true,
			encodingType: Camera.EncodingType.PNG,
			quality: 50,
			targetWidth: 960,//640,
			targetHeight: 960,//1233,//822,
			saveToPhotoAlbum: true,
			allowEdit: true
		});
	},
	
	// capture either new or existing photo:
	captureMaka: function(source) {
		navigator.camera.getPicture(this.onCaptureSuccessMaka, this.onCaptureFail, {
			destinationType: Camera.DestinationType.FILE_URI,
			//destinationType: Camera.DestinationType.NATIVE_URI,
			//destinationType: Camera.DestinationType.DATA_URL,
			sourceType: source,
			correctOrientation: true,
			encodingType: Camera.EncodingType.PNG,
			quality: 50,
			targetWidth: 960,//640,
			targetHeight: 960,//1233,//822,
			saveToPhotoAlbum: true,
			allowEdit: true
		});
	},
	
	// if photo is captured successfully, then upload to server:
	onCaptureSuccess: function(imageURI) {
		var fail, ft, options, params, win;
		showLoading();
		
		/**
		 * use canvas to merge photo with frame on the device
		 */
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var img1 = new Image();
		var img2 = new Image();
		
		img1.onload = function() {
		    //canvas.width = img1.width;
		    //canvas.height = img1.height;
		    img2.src = 'images/fpo-postcard.png'; // the frame
		};
		img2.onload = function() {
			// set width and height of the frame (img2)

			//alert('in img2');
			canvas.width = img2.width;
		    canvas.height = img2.height;
			
			var dx = 0;
			var dy = 0;
			
			//if(img1.width > img1.height){
				dy = (img2.height / 2) - (img1.height / 2);
			//}
			
			// ensure picture is centered within the frame
			dx = (img2.width / 2) - (img1.width / 2);
			
		    context.globalAlpha = 1.0;
		    context.drawImage(img1, dx, dy);
		    context.drawImage(img2, 0, 0);
		    
		    // image source as dataUrl, save to camera roll
			var dataUrl = canvas.toDataURL('image/png', 1.0);
			
			document.getElementById('postcard-picture').setAttribute( 'src', dataUrl );
			$('#postcard-picture').css('background-image', 'none');
			
			// uses plugin https://github.com/nicolasgrolleau/Canvas2ImagePlugin
			/*
			window.canvas2ImagePlugin.saveImageDataToLibrary(
				function(fileUri){
					// get path to photo saved to the camera roll, used for social sharing
					postcardUrl = fileUri;
					//hideLoading();
					//alert('Done, ' + postcardUrl);
					$('.sharePicture').show();
				},
				function(err){
					setTimeout(function() { 
						// allow the iOS image picker or popover to fully close before the alert is displayed
					    alert('Error:' + err);
					}, 0);
				},
				document.getElementById('canvas')
			);
			*/
        try {
            //imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
            imageData = dataUrl.replace(/data:image\/jpeg;base64,/, '');
            cordova.exec(
				function(fileUri){
					//alert(fileUri);
					// get path to photo saved to the camera roll, used for social sharing
					postcardUrl = fileUri;
					//hideLoading();
					//alert('Done, ' + postcardUrl);
					$('.sharePicture').show();
				},
				function(err){
					//alert('error');
					//alert(err);
					setTimeout(function() { 
						// allow the iOS image picker or popover to fully close before the alert is displayed
					    // alert('Error:' + err);
					}, 0);
				},
                'Canvas2ImagePlugin',
                'saveImageDataToLibrary',
                [imageData]
            );
        }
        catch(e) {
            error(e.message);
   			hideLoading();

        }
			
			/* Saves to camera roll, but doesn't return a local file URL for the sharing feature
			CameraRoll.saveToCameraRoll(dataUrl, function(e) {
				document.getElementById('postcard-picture').setAttribute( 'src', dataUrl );
				$('#postcard-picture').css('background-image', 'none');
				
				// get path to photo saved to the camera roll, used for social sharing
				postcardUrl = dataUrl;
				
				hideLoading();
				$('.sharePicture').show();
			
			}, function(err) {
				alert('Error:' + err);
			});
			*/
		};        
		
		img1.src = imageURI; // the photo user selected or from camera
		
		/** 
		 * upload to api.montanab.com for GD2 merging
		 */
		 //alert('about to try and upload...');
		options = new FileUploadOptions();
		
		// parameter name of file:
		options.fileKey = "photo";
		
		// name of the file:
		options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
		
		// mime type:
		options.mimeType = "text/plain";
		
		// other parameters for authentication:
		params = {
			appKey: "ManoaPublicArt", // make this something unique
			auth: "ee1233d5cf9e7b06f1776c787257f1b76fffb648", // sha1 of appKey + salt
			uid: device.uuid // unique device id
		};
		 
		options.params = params;
		//alert('about to filetarnsfer');
		ft = new FileTransfer();
		ft.upload(imageURI, apiBaseUrl + 'photo.php', function(response) {	
			//alert('done');
			//alert(response['response']);
			var j = JSON.parse(response['response']);
			$('#postcard-picture').attr('src', j['file']);
			hideLoading();
            $('#postcard-picture').show();
			$('.sharePicture').show();
			//alert("Your photo has been uploaded! Downloading it now...");
		}, function(error) {
			//
			alert("An error has occurred: Code = " + error.code);
			hideLoading();
		}, options);
		
	},
	
	// if photo is captured successfully, then upload to server:
	onCaptureSuccessMaka: function(imageURI) {
		var fail, ft, options, params, win;
		showLoading();
		
		/**
		 * use canvas to merge photo with frame on the device
		 */
		var canvas = document.getElementById('canvas-maka');
		var context = canvas.getContext('2d');
		var img1 = new Image();
		var img2 = new Image();
		
		img1.onload = function() {
		    //canvas.width = img1.width;
		    //canvas.height = img1.height;
		    img2.src = 'images/maka_io_or_hawks_eye/M6.png'; // the frame
		};
		img2.onload = function() {
			// set width and height of the frame (img2)

			//alert('in img2');
			canvas.width = img2.width;
		    canvas.height = img2.height;
			
			var dx = 0;
			var dy = 0;
			
			//if(img1.width > img1.height){
				dy = (img2.height / 2) - (img1.height / 2);
			//}
			
			// ensure picture is centered within the frame
			dx = (img2.width / 2) - (img1.width / 2);
			
		    context.globalAlpha = 1.0;
		    context.drawImage(img1, dx, dy);
		    context.drawImage(img2, 0, 0);
		    
		    // image source as dataUrl, save to camera roll
			var dataUrl = canvas.toDataURL('image/png', 1.0);
			
			document.getElementById('postcard-picture-maka').setAttribute( 'src', dataUrl );
			$('#postcard-picture-maka').css('background-image', 'none');
			
			// uses plugin https://github.com/nicolasgrolleau/Canvas2ImagePlugin
			/*
			window.canvas2ImagePlugin.saveImageDataToLibrary(
				function(fileUri){
					// get path to photo saved to the camera roll, used for social sharing
					postcardUrl = fileUri;
					//hideLoading();
					//alert('Done, ' + postcardUrl);
					$('.sharePicture').show();
				},
				function(err){
					setTimeout(function() { 
						// allow the iOS image picker or popover to fully close before the alert is displayed
					    alert('Error:' + err);
					}, 0);
				},
				document.getElementById('canvas')
			);
			*/
        try {
            //imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
            imageData = dataUrl.replace(/data:image\/jpeg;base64,/, '');
            cordova.exec(
				function(fileUri){
					//alert(fileUri);
					// get path to photo saved to the camera roll, used for social sharing
					postcardUrl = fileUri;
					//hideLoading();
					//alert('Done, ' + postcardUrl);
					$('.sharePictureMaka').show();
				},
				function(err){
					//alert('error');
					//alert(err);
					setTimeout(function() { 
						// allow the iOS image picker or popover to fully close before the alert is displayed
					    // alert('Error:' + err);
					}, 0);
				},
                'Canvas2ImagePlugin',
                'saveImageDataToLibrary',
                [imageData]
            );
        }
        catch(e) {
            error(e.message);
   			hideLoading();

        }
			
			/* Saves to camera roll, but doesn't return a local file URL for the sharing feature
			CameraRoll.saveToCameraRoll(dataUrl, function(e) {
				document.getElementById('postcard-picture').setAttribute( 'src', dataUrl );
				$('#postcard-picture').css('background-image', 'none');
				
				// get path to photo saved to the camera roll, used for social sharing
				postcardUrl = dataUrl;
				
				hideLoading();
				$('.sharePicture').show();
			
			}, function(err) {
				alert('Error:' + err);
			});
			*/
		};        
		
		img1.src = imageURI; // the photo user selected or from camera
		
		/** 
		 * upload to api.montanab.com for GD2 merging
		 */
		 //alert('about to try and upload...');
		options = new FileUploadOptions();
		
		// parameter name of file:
		options.fileKey = "photo";
		
		// name of the file:
		options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
		
		// mime type:
		options.mimeType = "text/plain";
		
		// other parameters for authentication:
		params = {
			appKey: "ManoaPublicArt", // make this something unique
			auth: "ee1233d5cf9e7b06f1776c787257f1b76fffb648", // sha1 of appKey + salt
			uid: device.uuid // unique device id
		};
		 
		options.params = params;
		//alert('about to filetarnsfer');
		ft = new FileTransfer();
		ft.upload(imageURI, apiBaseUrl + 'photo-maka.php', function(response) {	
			//alert('done');
			//alert(response['response']);
			var j = JSON.parse(response['response']);
			$('#postcard-picture-maka').attr('src', j['file']);
			hideLoading();
            $('#postcard-picture-maka').show();
			$('.sharePictureMaka').show();
			//alert("Your photo has been uploaded! Downloading it now...");
		}, function(error) {
			//
			alert("An error has occurred: Code = " + error.code);
			hideLoading();
		}, options);
		
	},
	
	// there was an error capturing the photo:
	onCaptureFail: function(message) {
		error("Failed because: " + message);
		hideLoading();
	}
};
