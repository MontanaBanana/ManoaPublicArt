/**
 * path content populates the detail div when opened. Make content edits here
 * this also defines the order of and details within each orientation screen link
 *
 * - youtube URLs must end with ?rel=0 as there are other values appended to the URL in the code
 * - put path specific image assets in images/path-name/*
 * - geo_location may differ from lat and lon for the map/directions link
 */

var analyticsTrackingId = 'UA-57147920-2';

var siteUrl = 'http://manoa.hawaii.edu/landscaping/landscapingpage/campusart.php';


var startingLocation = {
	lat: 21.29979, lon: -157.81673
};

var pathContent = {};

pathContent['varney_circle'] = {
	name:			'Varney Circle',
    details: 		'A fountain run dry',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'', // vimeo video id
    gallery_images: [
	{ image: 'V1.jpg', description: 'The location of Varney Fountain outside of Hawai\'i Hall is one of great importance and symbolism to the university, as a central meeting place and the front lawn of the administration building.' },
	{ image: 'V2.jpg', description: 'For decades, the fountain was a dynamic place, attracting students with its sounds of running water, representing the flowing prosperity of the university. ' },
	{ image: 'V3.jpg', description: 'Yet in recent years – as financial troubles have befallen the state’s flagship college – the fountain has ran dry and remains silent.' },
	{ image: 'V4.png', description: 'University spokesman Dan Meisenzahl said the fountain has been turned off for years as a way to conserve water. So most students, faculty and visitors to campus today have never been able to enjoy it.' },
	{ image: 'V5.png', description: 'When this fountain was created, it was a source of celebration. Ada Susan Varney, a teacher at the Territorial Normal Training School of Honolulu, was so beloved that the Class of 1929 raised the money to build the fountain in her name. It was a source of pride.' },
	{ image: 'V6.png', description: ' It was one of the first architectural objects in Honolulu to use a tiki motif. Rochelle Muamoholeva, of the company Hand-Carved Tiki, translated the image as: Protection and peace.' },
	{ image: 'V7.jpg', description: ' How could turning back on this fountain improve the mood of this central gathering place? If you would like to find out, let’s try to get that done through signing the online petition at: <a href="https://goo.gl/9M08ac" style="color: white;">Sign the Varney Circle petition</a>.' },
    ],
    location: 		'Go to the center of campus',
    sharing: 		'Decide if you want water running out of Varney Circle again; if so, <a style="color: white;" href="https://goo.gl/9M08ac">sign the online petition here</a> and share this link with friends, with an  accompanying appeal that you craft, calling them out to sign it, too.',
    thumbnail: 		'images/varney_circle/thumbnail.jpg',
    centerpiece: 	'images/varney_circle/centerpiece.jpg',
    geo_location: 	'21.30002,-157.81816',
    lat: 			21.30002, 
    lon: 			-157.81816
};

pathContent['air'] = {
	name:		'Air',
    details: 		'Hawai\'i\'s first man',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
			{ image: 'A1.png', description: 'Air by Juliette May Fraser is arguably the most complex of the Bilger Hall murals. The central image depicts the creation  of the first man by the Hawaiian god Kane, aided by the gods Lono and Kū.' },
			{ image: 'A2.png', description: ' According to the story, there was a time when all beings lived in darkness. Kane realized that he was a separate being, apart of this darkness, and so he pulled himself from it. Seeing this, the gods Lono and Kū followed his example.' },
			{ image: 'A3.jpg', description: 'Lono is known as the god of agriculture and peace.' },
			{ image: 'A4.jpg', description: 'Kū is known as the god of war.' },
			{ image: 'A5.jpg', description: 'In separating themselves from the darkness, each god brought a unique element to the world. Kane brought light, Lono brought sound, and Kū brought substance.' },
			{ image: 'A6.jpg', description: 'With these elements, they began to shape the world around them, till it came time to shape and give life to the first man.' },
			{ image: 'A7.jpg', description: 'To do so, they took clay from various corners of the world and carefully molded a figure resembling a man.' },
			{ image: 'A8.png', description: 'Then the gods, guided by Kane, breathed into the figure and gave life to the first man.' },
                    ],
    location: 		'Go to UH\'s Bilger Hall',
    sharing: 		'How is the element air important to you? Share a story about air.',
    thumbnail: 		'images/air/thumbnail.jpg',
    centerpiece: 	'images/air/centerpiece.jpg',
    geo_location: 	'21.29978,-157.81672',
    lat: 			21.29978,
    lon: 			-157.81672
};

pathContent['earth'] = {
	name:		'Earth',
    details: 		'About ‘ulu, or breadfruit',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'E1.png', description: 'Early Hawaiians enjoyed a variety of nutritional food sources, one of them being ʻulu, or breadfruit. Practitioners know of several stories that tell of how ʻulu was first introduced into the Hawaiian diet.' },
	{ image: 'E2.png', description: 'The version depicted in Earth by Sueko Kimura tells of the Hawaiian god Kū, who planted himself into the ground to feed his family.' },
	{ image: 'E3.png', description: 'This story tells of Kū, who marries a beautiful Hawaiian woman with whom he starts a family. ' },
	{ image: 'E4.png', description: 'He decides to keep his identity as a god a secret from his family, and works to provide for them just as any human father would. However, a time comes when a great famine falls over the land and Kū’s wife and children begin to starve.' },
	{ image: 'E5.png', description: 'Feeling great remorse for his family’s suffering, Kū approaches his wife and tells her that in order to feed their family he must go to a place to which he can never return. She protests, but after hearing the cries of her starving family, she finally agrees to let him go.' },
	{ image: 'E6.png', description: 'Kū then takes her out into the yard where he plants himself headfirst into the ground.  Watered by his wife’s tears, his limbs begin to transform into the limbs of the first breadfruit tree.' },
    ],
    location: 		'Go to UH\'s Bilger Hall',
    sharing: 		'How is the element earth important to you? Share a story about earth.',
    thumbnail: 		'images/earth/thumbnail.jpg',
    centerpiece: 	'images/earth/centerpiece.jpg',
    geo_location:   '21.29978,-157.81672',
    lat:            21.29978,
    lon:            -157.81672
};

pathContent['fire'] = {
    name:		'Fire',
    details: 		'Pele and Lohiau, love and betrayal',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'F1.png', description: 'Perhaps one of the most notorious of the Hawaiian deities is Pele, the volcano goddess. ' },
	{ image: 'F2.png', description: 'Fire, by Richard Lucier, tells of the death of Lohiau, a young chief from Kauaʻi whom Pele had planned to take as her husband. ' },
	{ image: 'F3.jpg', description: 'This version of the story begins when Pele falls madly in love with Lohiau while touring the islands in search of a new home. ' },
	{ image: 'F4.jpg', description: 'Upon finally establishing her home at Halemaʻumaʻu on Hawaiʻi Island, Pele sends her dearest sister Hiʻiaka to Kauaʻi to fetch Lohiau. ' },
	{ image: 'F5.jpg', description: 'Hiʻiaka’s journey to Kaua’i and back takes longer than expected, and Pele becomes impatient.' },
	{ image: 'F6.png', description: 'As the days pass, Pele begins to believe that Hiʻiaka has betrayed her and kills Hiʻiaka’s beloved friend Hopoe out of anger. Hiʻiaka, who has by now fetched Lohiau and is approaching the crater, sees what Pele has done and decides to take revenge by passionately embracing Lohiau in front of her sister' },
	{ image: 'F7.jpg', description: 'An infuriated Pele calls on her other sisters to help her encircle Lohiau in a whirpool of magma, sending him to his fiery grave. ' },
    ],
    location: 		'Go to UH\'s Bilger Hall',
    sharing: 		'How is the element fire important to you? Share a story about fire.',
    thumbnail: 		'images/fire/thumbnail.jpg',
    centerpiece: 	'images/fire/centerpiece.jpg',
    geo_location:   '21.29978,-157.81672',
    lat:            21.29978,
    lon:            -157.81672
};


pathContent['water'] = {
    name:		'Water',
    details: 		'Fresh water found in Manoa',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'W1.png', description: 'David Asherman’s Water, tells of the gods Kane and Kanaloa and their search for fresh water.' },
	{ image: 'W2.png', description: 'After a day of swimming, Kane and Kanaloa emerge from the sea and begin to search for a place to rinse themselves and feed their thirst.' },
	{ image: 'W3.png', description: 'The two head westward and look far and wide for a fresh water source, but none can be found. They begin to grow impatient and weary for a lack of drinking water. ' },
	{ image: 'W4.png', description: 'Finally, they come to Mānoa, where Kane is certain that he can hear water moving in the ground underneath them.' },
	{ image: 'W5.png', description: 'He strikes the ground with his spear and out bursts a stream of fresh water.' },
	{ image: 'W6.png', description: 'Kane and Kanaloa are then able to wash themselves and drink from the stream, which would later become known as Mānoa Stream.' },
    ],
    location: 		'Go to UH\'s Bilger Hall',
    sharing: 		'How is the element water important to you? Share a story about water.',
    thumbnail: 		'images/water/thumbnail.jpg',
    centerpiece: 	'images/water/centerpiece.jpg',
    geo_location:   '21.29978,-157.81672',
    lat:            21.29978,
    lon:            -157.81672	
};

pathContent['founders_gate'] = {
    name:		'Founders Gate',
    details: 		'An entryway to nowhere',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'FG1.png', description: ' As configured today, Founders Gate seems to lead into the Manoa neighborhood, not the university campus, as originally intended, when it was built in the 1930s.' },
	{ image: 'FG2.png', description: ' This gate was at first described as a “memorial to the men who fathered the development of the University of Hawai‘i and the Territorial Normal School.” ' },
	{ image: 'FG3.png', description: 'These two cast-stone arches, across the street from each other, underneath monkeypod trees, were paid for by student fees ($1 per student), with the promise that they would serve as the gateway to campus.' },
	{ image: 'FG4.jpg', description: 'According to the UH Campus Heritage Report, university president David Crawford dedicated the gates by saying, “let only those who enter here come with hunger to learn and with determination to use aright their learning for the good of mankind.” One gate bench reads, in both Hawaiian and English: “Above all Nations is Humanity.”' },
	{ image: 'FG5.jpg', description: ' Yet as real estate blossomed around the campus, and University Avenue was widened, the gates had to be moved as well. When they were moved the first time, they simply were pushed out to the new sidewalks. As the monkeypod trees have dwarfed them, and they have lost their original purpose, though, could a more dramatic move benefit both the gates and the campus?' },
	
    ],
    location: 		'Go to University and Dole',
    sharing: 		'Look at these gates and imagine where they better would serve the campus, as an entryway to the university and its ideals. Walk to that place, and take a photograph with the gates in their new position. If you like what you see, share your idea via social media.',
    thumbnail: 		'images/founders_gate/thumbnail.jpg',
    centerpiece: 	'images/founders_gate/centerpiece.jpg',
    geo_location: 	'21.296807,-157.821117',
    lat: 			21.296807,
    lon: 			-157.821117
};

pathContent['manoa_public_library'] = {
    name:		'Manoa Public Library',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'MPL1.jpg', description: ' Rick Mills, a professor of art at University of Hawaii, created the five monolithic cast-glass sculptures perched above the entrance of Manoa Public Library to represent the interior mountains of the Manoa Valley. He calls the piece “The Spirit of Manoa: In the Light of Day,” referring in his writings about the work to ‘Aka‘aka (laughter) and Waiakeakua (the water of the god).' },
	{ image: 'MPL2.jpg', description: ' Mills has completed four other major public sculptures for the Hawaii State Foundation on Culture and the Arts, Art in Public Places Program. Those are at the Queen Liliuokalani Student Services Center at the University of Hawaii at Manoa, the Hawaii Convention Center in Honolulu, the Leilehua High school in Wahiawa and the Maui Memorial Medical Center in Kahului, Maui. <br/>Photo courtesy of: Rick Mills ' },
	{ image: 'MPL3.jpg', description: ' Here is what the sculptures looked like before they were transformed into glass. Can you see the source material in the mountains of Manoa?<br />Courtesy of: Rick Mills' },
    ],
    location: 		'Go to Manoa Public Library',
    sharing: 		'Take a photo that shows your interpretation of the “Spirit of Manoa” and share it on social media.',
    thumbnail: 		'images/manoa_public_library/thumbnail.jpg',
    centerpiece: 	'images/manoa_public_library/thumbnail.jpg',
    geo_location: 	'21.3062346,-157.8102779',
    lat: 			21.3062346,
    lon: 			-157.8102779	
};

pathContent['night_hula'] = {
    name:		'Night Hula',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'NH1.jpg', description: ' This “Night Hula” mural by Jean Charlot began its life as a private commission for a local law firm and almost was lost for good a couple of decades ago. It depicts an ancient Hawaiian hula, traditionally performed in the dark. When that law firm was being renovated in the early 1990s, the mural was moved to Kamehameha Schools, where it suffered severe storm damage, which some thought was beyond repair. The school raised money for the restoration, and the mural was donated to UH. Faculty member Laura Ruby and her assistant, Martha Ridgley, spent three years replacing damaged tiles and restoring the mural.' },
	{ image: 'NH2.jpg', description: ' Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?' },
    ],
    location: 		'Go to Sanders Hall',
    sharing: 		'Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?',
    thumbnail: 		'images/night_hula/thumbnail.jpg',
    centerpiece: 	'images/night_hula/thumbnail.jpg',
    geo_location: 	'21.3006993,-157.8189403',
    lat: 			21.3006993,
    lon: 			-157.8189403
};

pathContent['butterfly_door'] = {
    name:		'Butterfly door',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'BD1.jpg', description: ' When you approach Gilmore Hall at the University of Hawaii, you might guess the faculty and students there study insects by the elaborate ceramic mural of the Pulelehua (Kamehameha Butterfly), near the door. What you might not know is that the Pulelehua is the official state insect of Hawaii, and it is one of only two butterfly species native to the state (the other is the Koa).' },
	{ image: 'BD2.jpg', description: '  The artist, Robert Flint, reportedly moved to Hawaii in 1960 to surf. But after a few years of working in construction, he enrolled in the Art program at UH Manoa, where he earned both bachelor’s and master’s degrees of fine art (specializing in ceramics).' },
    ],
    location: 		'Head South on Oahu Ave from Manoa Rd',
    sharing: 		'Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?',
    thumbnail: 		'images/butterfly_door/thumbnail.jpg',
    centerpiece: 	'images/butterfly_door/thumbnail.jpg',
    geo_location: 	'21.3006993,-157.8189403',
    lat: 			21.3006993,
    lon: 			-157.8189403
};

pathContent['korean_center'] = {
    name:		'Korean Center',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'KC1.jpg', description: ' Kyŏngbok Palace in Seoul provided the design inspiration for the Center for Korean Studies at UH Manoa. The center’s main building is modeled after the palace’s throne hall, called Kunjŏngjŏn, which is where various court rituals are held, including the king\'s coronation. The separate octagon-shaped pavilion was meant to mimic the Hyangwŏnjŏng Pavilion, which sits in the middle of a lotus pond in Korea.' },
	{ image: 'KC2.jpg', description: ' The carpentry of the building is distinctively Korean, performed by craftsmen recruited to Hawaii, specifically to work on this project. It features dark-green ceramic tiles on the roof and the colors of traditional palace architecture, such as brown and green, as the background for the striking tanch\'ong aesthetic, distinguished through its intricate and bright design patterns that adorn the structure.' },
	{ image: 'KC3.jpg', description: ' The original Kyŏngbok Palace was built in the 1300s, but it was destroyed by Japanese invaders in the 1500s. This reconstructed version, now considered a national treasure, is one of the most popular tourist destinations in South Korea.<br/>Image courtesy of: Wikimedia Commons' },
    ],
    location: 		'Go to the corner of Maile Way and East-West Rd.',
    sharing: 		'Share your thoughts on the Korean Center.',
    thumbnail: 		'images/korean_center/thumbnail.jpg',
    centerpiece: 	'images/korean_center/thumbnail.jpg',
    geo_location: 	'21.3013692,-157.8143484',
    lat: 			21.3013692,
    lon: 			-157.8143484
};

pathContent['gate_of_hope'] = {
    name:		'Gate of Hope',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'GOH1.jpg', description: ' This 30-foot-high Alexander Liberman work – made of rolled steel – represents the “Gate of Hope,” explained as engineering principles allowing complex structures. Its dynamic appearance changes significantly, though, depending on the viewpoint. In this image, it appears like a large red robot. From another perspective, some see in it a large hand with a middle finger extended.' },
    ],
    location: 		'Go to the corner of Dole St and East-West Rd.',
    sharing: 		'Walk around this sculpture, stopping and looking from different perspectives. What do you make of it?',
    thumbnail: 		'images/gate_of_hope/thumbnail.jpg',
    centerpiece: 	'images/gate_of_hope/thumbnail.jpg',
    geo_location: 	'21.2966335,-157.815432',
    lat: 			21.2966335,
    lon: 			-157.815432
};

pathContent['monolith'] = {
    name:		'Monolith',
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'M1.jpg', description: ' You might easily walk by this strange hunk of standing metal that looks like a wall someone forgot to attach to a building. Surprise; it’s art! Or it was art. Bruce Hopper created Krypton 1 X 6 X 18 as a monolith that resembled the similarly mysterious slab in the film “2001: A Space Odyssey” in 1973. As part of the otherworldly concept, the slab inexplicably hummed. But enough people were annoyed by that hum that the electronic device was disconnected a year later in response to “an energy shortage.”' },
    ],
    location: 		'Head West on Correa Rd from Keller Rd.',
    sharing: 		'Share your thoughts on the Monolith.',
    thumbnail: 		'images/monolith/thumbnail.jpg',
    centerpiece: 	'images/monolith/thumbnail.jpg',
    geo_location: 	'21.2987556,-157.8160544',
    lat: 			21.2987556,
    lon: 			-157.8160544
};

/**
 * override the lat/long coordinates for each location for local testing
 * set up a block for yourself if testing though keep the others commented out
 */

/* pullman office */
/*
startingLocation = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['varney_circle'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['air'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['earth'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['water'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['fire'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
pathContent['founders_gate'] = {
	lat: 			45.4901982, 
    lon: 			-122.7598718
};
//*/

