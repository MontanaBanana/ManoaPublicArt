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

/*
var startingLocation = {
	lat: 42.67759, lon: 23.28596
};
*/

var pathContent = {};

pathContent['varney_circle'] = {
	name:			'Varney Circle',
    details: 		'A fountain run dry',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'', // vimeo video id
    gallery_images: [
	{ image: 'V1.png', description: '<small><i>Varney Circle Fountain under construction. The neoclassical building in the background was the old University Theatre, which since has been demolished. Photo courtesy of the University of Hawaii Archives.</i></small><br><br>The Varney Circle Fountain is nearly as old as the University of Hawaii itself. Built in the early 1930s, in the middle of the Great Depression, it was one of the first structures on campus. For decades, it was a beloved community landmark. Erected in front of the first official UH building and its administrative hub, Hawaii Hall, this fountain also served an important symbolic function for the university – as a fount of vitality. Yet today, it has fallen into disrepair with no immediate plans to fix it.' },
	{ image: 'V2.png', description: 'This is what it used to look like, not that long ago, with flowers blooming around it and water flowing. Every so often, in a drought, the fountain would be turned off. But in 2006, it broke. Its water pumps had to be replaced. The fountain functioned well, again, for a couple of years, said University of Hawaii spokesman Dan Meisenzahl, but then other problems started to emerge. It hasn’t had water flowing in it now since 2009. <br><br>At that time, a small room below the fountain “filled with water and shorted that brand new pump," Meisenzahl said. In addition, he said, one side of the fountain’s concrete slab is sinking, which makes repair more difficult. <br><br>The fountain also is attached to the university’s storm-gauge system, and the fountain as-is cannot legally pump unfiltered water into that system. It needs a filtration system, and Meisenzahl said there is no room beneath the fountain to install it. <br><br>"Since it was built to the drain system, which was probably legal back when it was built, that\'s one of the huge issues with it now,” he said.' },
	{ image: 'V3.png', description: '<small><i>The fountain today; photo courtesy of Mari Galiher.</i></small><br><br>So on most days, it looks like this, tattered and weed filled. But in 1934, excitement about a fountain in the center of UH inspired students to raise the money to build it. They loved one of their faculty members at what was then the Territorial Normal Training School, a history teacher named Ada Susan Varney. They named the fountain after her, and this achievement was a source of campus pride.' },
	{ image: 'V4.png', description: 'You can still find this plaque on the fountain’s base. Construction was handled by art instructor Henry H. Rempel and a recent graduate, Cornelia McIntrye Foley. They designed it and raised the funds for it. For one of the first times in Hawaii, a tiki motif was used to decorate it. ' },
	{ image: 'V5.png', description: '<small><i>Photo courtesy of Jim Bea Sampaga</i></small><br><br>That tiki imagery is repeated eight times around the walls of the fountain. Rochelle Muamoholeva of the local company Hand-Carved Tiki translated the image to mean: Protection and peace.' },
	{ image: 'V6.png', description: '<small><i>Circa 1940s; courtesy of the University Archives.</i></small><br><br>For most of its existence, the fountain has been a cornerstone of campus culture. According to the book “Building a Rainbow: A History of the Buildings and Grounds of the University of Hawaii’s Manoa Campus,” the fountain was a favorite location for college pranks and for people to meet on dates. Students often would ink the water or dump boxes of soap powder, and couples would toss coins into the fountain to wish for a happy relationship together. At that time, Varney fountain was the Manoa version of the Trevi fountain in Rome.' },
	{ image: 'V7.png', description: '<small><i>Students, staff and faculty helped to plant ʻĀweoweo around Varney Circle in 2017; photo courtesy of University of Hawai’i News.</i></small><br><br>Some efforts have been made to clean up the landscape around the fountain and enliven its appearance. Orville Baldos, assistant professor in the College of Tropical Agriculture and Human Resources, chose the Varney Circle for his native Hawaiian plants landscape-design research project. He uses the Varney Circle as a lab to see if the plants can last under low maintenance. He wanted to showcase these plants to people, especially landscapers, to demonstrate the utility of native Hawaiian plants. "The reason why we planted native plants over there was (because) it was the most visible area in campus," Baldos said. "It has high traffic, so people can see what\'s there." Baldos was also a graduate student representative on UH Manoa\'s landscaping committee when he was pursuing graduate studies from 2005 to 2013. He thinks the Varney Fountain is worth saving because it\'s a historic structure in UH Manoa, especially with only a few other water features on campus. "If maybe we\'re getting enough funding to sustain the maintenance, then maybe it can be run as a fountain again," he said. "It\'ll be nice to have a fountain actually, if we had the money."' },
	{ image: 'V8.png', description: '<small><i>Photo courtesy of Jim Bea Sampaga.</i></small><br><br>But for now, it looks like this. Ragged and in disrepair. Forgotten. If the fountain is to ever work again, under its current conditions, UH spokesman Meisenzahl said the university would have to fill, pump and drain the water every month. "That\'s labor intensive for our employees," he said, adding: "These types of fountains that are especially out in the open, they don\'t meet our goals as a sustainable entity because the water evaporates, so you\'re constantly having to fill it with water."<br><br>How much would it cost to fix? Blake Araki, UH director of Campus Operations and Facilities, said he cannot provide a solid estimate without checking the fountain first. The pump system, piping, electrical system and the condition of the fountain are some of the things to consider. He has no work order to even look into it.<br><br>“If all of these components need repairs or replacement, the work can be close to six figures,” he said. But if the piping, electrical and fountain foundation are still good, he said that it could be cheaper. “Until this can be determined,” he added. “It is hard to pin down a good estimate.”<br><br>Although there are no current plans to repair the fountain, the university is planning to convert Farrington Road, Campus Road and Varney Circle into a large pedestrian walkway, like McCarthy Mall. The plan is to get the vehicles out of the interior of the campus. When asked what will happen to Varney Circle, Meisenzahl said that\'s the question they are still trying to figure out. <br><br>"There\'s a lot of pieces to it, so it fits a much larger plan, so a lot of the things that we\'re looking at doing are still kind of a vision," he said. "They\'re not entirely sure how\'s that all gonna fit, but since that question is out there, there are no plans to do anything (on Varney Circle) as of right now."'},

    ],
    location: 		'Go to the center of campus',
    sharing: 		'Share your story',
    thumbnail: 		'images/varney_circle/thumbnail.jpg',
    centerpiece: 	'images/varney_circle/centerpiece.jpg',
    geo_location: 	'21.30002,-157.81816',
    lat: 			21.30002, 
    lon: 			-157.81816
};

/* varney_circle v1
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
*/

pathContent['air'] = {
	name:		'Air',
    details: 		'Hawai\'i\'s first man',
	hide:			false,
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
    geo_location: 	'21.299562,-157.816385',
    lat: 			21.299562,
    lon: 			-157.816385
};

pathContent['earth'] = {
	name:		'Earth',
    details: 		'About ‘ulu, or breadfruit',
	hide:			false,
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
    geo_location:   '21.299289,-157.81647',
    lat:            21.299289,
    lon:            -157.81647
};

pathContent['fire'] = {
    name:		'Fire',
    details: 		'Pele and Lohiau, love and betrayal',
	hide:			false,
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
    lat:            21.299564,
    lon:            -157.816828
};


pathContent['water'] = {
    name:		'Water',
    details: 		'Fresh water found in Manoa',
	hide:			false,
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
    geo_location:   '21.299529,-157.816598',
    lat:            21.299529,
    lon:            -157.816598
};

pathContent['founders_gate'] = {
    name:		'Founders’ Gate',
    details: 		'An entryway to nowhere',
	hide:			false,
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
    name:		'Spirit of Manoa',
    details: 		'',
	hide:			false,
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
	hide:			false,
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
    name:		'Pulelehua',
    details: 		'',
	hide:			false,
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
    //lat: 			21.3006993,
    //lon: 			-157.8189403
	lat: 42.677567, 
	lon: 23.287577
};

pathContent['korean_center'] = {
    name:		'Korean Center',
    details: 		'',
	hide:			false,
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
    //lat: 			21.3013692,
    //lon: 			-157.8143484
	lat: 42.677567, 
	lon: 23.287577
};

pathContent['gate_of_hope'] = {
    name:		'Gate of Hope',
    details: 		'',
	hide:			false,
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
    name:		'Krypton',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'M1.jpg', description: '<audio controls><source src="images/monolith/monolith.mp3" type="audio/mpeg"></audio> <br />This structure may not seem like much at a glance, but if you’ve seen Stanley Kubrick’s “2001: A Space Odyssey,” it may be familiar to you.<br><br>Just like any of Kubrick’s works, there’s a lot of debate on the symbolism of the monolith in “A Space Odyssey.” But it’s the general consensus that these monoliths appear in each new step of human evolution, such as when early primates are learning to use tools.<br><br>This monolith was designed by graphic designer Bruce Hopper in 1973 and stands at 18 feet tall and 6 feet wide, dwarfing any person that walks past. And while it was originally colored a matte black, decades of rusting caused it to fade to a pale tan-gray that caused it to blend with its surroundings.<br><br>Hopper was commissioned by the state to create a piece relating to the sciences, as the Physics Department is housed in nearby Watanabe Hall. It is fitting then, that he designed the monument inspired by “A Space Odyssey,” and named it “Krypton,” after Superman’s home planet.' },
		{ image: 'M2.jpg', description: 'This photo by Rick Holt for “Sculpture in the Sun,” 1978, shows the original black-matte coloring.<br><br>2018 marked the 50th anniversary of Kubrick’s classic sci-fi space epic. But it was that very same year that Manoa’s monolith was actually about to be removed. <br><br>Derek Erwin, the Conservation Coordinator for the Hawai‘i State Foundation On Culture And The Arts, oversees the over 600 commissioned works around Hawaii. And because of corrosion at the base of the monument, Derek says his first impression was that Hopper’s Krypton could be in danger of falling.<br><br>“The plan was actually just to hire somebody to remove the monument, but people from the building came out and were concerned, and they wanted to if possible keep the thing,” said Erwin.<br><br>Erwin hired a structural engineer to inspect the piece, and once it was found to be structurally sound, he made the decision to restore it.<br><br>When restoring a piece of art, it’s important to not only understand how it was made but also the artist’s intent behind the methods. Because, when you change the look and feel of the art piece, you run the risk of also changing its message. <br><br>But the problem is, we don’t know for sure what Bruce Hopper’s original message even was. We know he based it off “2001,” but he also named it Krypton, a reference to a completely different work of science fiction. <br><br>There was a lot of dispute over what the monolith officially was made out of. Newspaper articles from the time reported it was made of bronze and painted, while books such as “Sculpture in the Sun,” state it was chemically treated to give it a dark hue. ' },
		{ image: 'M3.png', description: 'Here’s what the monolith looked like before restoration in 2017.<br><br>Laura Ruby, a local artist and founder of the UHM Art Consulting Committee, makes the case the monolith was chemically treated.<br><br>“When you see it sanded down, it’s a patina, which is a rust, and like with Bronze for example, which is a red color, when it ages it turns a green, gray-ish color.”<br><br>In a departure from the original method of coloring, Erwin decided to have Krypton painted black, with a glossy finish to protect the monolith from the environment. Now, instead of fading into the background, the monolith stands out, with its surface shining like a mirror.<br><br>But the restoration process didn’t stop there. ' },
		{ image: 'M4.jpg', description: 'There was one thing the Krypton monolith was known for … a deep and perpetual vibrating sound that was turned off less than a year after it was constructed. This sound was meant to mimic the music heard whenever the monolith would appear in the “2001” film.<br><br>There is no recorded audio of what it sounded like before, but the vibrations were playing at 60 hertz. <br><br>This was achieved with an electric device originally installed within the structure and connected to a larger speaker. However, in response to noise complaints and an energy shortage, the humming device was disconnected in 1974, merely a year after installation.  <br><br>Those present at the time say the sound was so persisting, you could hear them in the offices, and even the classrooms. <br><br>“You can’t have this thing just going wild, because it’s going to be very disruptive for students,” said Kevin Croker, a post-doctoral fellow in the Department of Physics. “And if you do a lot of low frequencies, which is what a structure like that is going to be good at, because it’s very big, it’s going to resonate at low frequencies.”<br><br>Crocker is one of the few people to have access to Krypton’s new sound system, which, for now has to be powered through a large extension cord from one of the Watanabe classrooms to a weather box hidden behind the shrubs. From there, he can connect to his phone and basically play any sound wave, song or frequency. ' },
		{ image: 'M5.png', description: '“The coolest thing about the thing is that every time I walk by it there’s always someone staring at it or touching it, it just has such a cool presence,” Crocker said. “People see it now and people are curious about it, and I think it’s a great opportunity to get people involved and understanding what we bring to the community.”<br><br>There are no plans to have the Krypton monolith constantly play a permanent sound, but that doesn’t mean it will be forgotten. They’ve already used it to play music at the Physics open house and are planning to use it for sound studies. Crocker also says he’s looking forward to collaborating with other departments on future projects.<br><br>With its restoration, Bruce Hopper’s Krypton definitely went through some changes. But, along with updates in technology, these changes are better suited to the needs of the people closest to it. Not only that, because the keys to the sounds system were given directly to people in the department, there is now so much more room for experimentation, collaboration, and interactivity.' },
    ],
    location: 		'Head West on Correa Rd from Keller Rd.',
    sharing: 		'Share your thoughts on the Monolith.',
    thumbnail: 		'images/monolith/thumbnail.jpg',
    centerpiece: 	'images/monolith/thumbnail.jpg',
    geo_location: 	'21.2987556,-157.8160544',
    //lat: 			21.2987556,
    //lon: 			-157.8160544
	lat: 42.676082,
	lon: 23.288649
};

pathContent['relation_of_man_and_nature'] = {
    name:		'Man and Nature',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'R1.jpg', description: 'After coming to Hawai’i in 1949, French artist and writer Jean Charlot (1898 -1979) wanted to express his vision of Hawaiian culture.' },
		{ image: 'R2.jpg', description: 'Charlot had noticed the lack of monumental and heroic expressions within the ideology of Americanism already taking root within the territory, which would become a state in 1959. While Charlot could not yet read the Hawaiian language, when he created his mural, the theme of this image was clear to him across cultures.' },
		{ image: 'R3.jpg', description: '“All works of art are based on both facts and mood,” Charlot said in an article written by his son, John Charlot. “Even though the lower mural contains many details relating to life in old Hawai’i, it should not be considered an archaeological or historical reconstruction. It is rather an attempt to recapture the mood that led ancient Hawaiians to reach a true balance in their culture between man and his strong, natural habitat in the islands.”' },
		{ image: 'R4.jpg', description: 'In this mural, Charlot purposefully placed both nature and community together, wanting to symbolize wholeness, while presenting Hawaiian culture as “heroic, religious achievement.” On the left side, a representation of materialistic life (food, gathering, and preparation) can be seen; with the right suggesting art and religion. Family also is emphasized.' },
		{ image: 'R5.jpg', description: 'Charlot’s “Relation of Man and Nature in Old Hawaii” can be seen in Bachman Hall at the University of Hawai’i at Manoa. Can you find any other murals by Charlot on the UH campus?' },
    ],
    location: 		'Bachman Pl, Honolulu, HI 96822, USA',
    sharing: 		'Share your thoughts.',
    thumbnail: 		'images/relation_of_man_and_nature/thumbnail.jpg',
    centerpiece: 	'images/relation_of_man_and_nature/thumbnail.jpg',
    geo_location: 	'21.2975,-157.81978',
    lat: 			21.2975,
    lon: 			-157.81978
};

pathContent['harvest_celebration'] = {
    name:		"Makahiki Ho'okupu",
    details: 		'Harvest Celebration',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'H1.png', description: "<strong>Harvest Celebration</strong><br /><br />This mural was created by Juliette May Fraser for the 1939 San Francisco World's Fair. It consists of 13 masonite panels depicting the harvest and gift-giving ceremony of Native Hawaiians during the Makahiki season. Fraser was born in Honolulu during the reign of King Kalakaua, and built a reputation for portraying Hawaiian legends and other themes through linoleum cut, oil painting, ceramic, and fresco." },
		{ image: 'H2.png', description: 'The Makahiki season is dedicated to honor the god Lono, who is associated with fertility, rainfall, agriculture, food, music and peace. Makahiki is roughly four months long and usually celebrated October through February.' },
		{ image: 'H3.png', description: 'Ancient Hawaiians stopped their work and made offerings to the chief or aliʻi. Warfare was forbidden during Makahiki season. Time then was also spent on practicing sports, eating, dancing and renewing communal bonds.' },
		{ image: 'H4.png', description: 'Ancient Hawaiians collected agricultural and aquacultural products like pigs, taro, sweet potatoes, dry fish, kapa and mats. Some even offered feathers from forest birds, and all of these hoʻokupu (offering) were presented or collected sort of like taxes (Auhau) during Makahiki.' },
		{ image: 'H5.png', description: 'Each ahupuaʻa gathered its taxes to be given to the Ali’i Nui or the High Chief of the island. He acted as the deputy for Lono during the Makahiki Festival. The Ali’i Nui would hold an Akua Loa (representation of Lono), which was a long pole with a carved pig’s head on top and a strip of tapa (ancient Hawaiian cloth).' },
		{ image: 'H6.png', description: 'Ancient Hawaiians were passionate to test their minds with games, which consisted of riddles, recitation of genealogies, proverbs and knowledge of hidden meanings, even board games, which was a stone slab or flat surface with shallow holes.' },
		{ image: 'H7.png', description: 'Just like during the Makahiki season, with Native Hawaiians, set time aside today for peace and relaxation. Try to enjoy some games, test your brain or even dance. Maybe even make an offering, or in this case a donation. If you want to give back to The University of Hawaii, or support a specific part of the UH system, any contribution would be gladly appreciated. <a href="https://giving.uhfoundation.org/give-now" target="_system" style="color: white;">Tap to donate</a>' },
    ],
    location: 		'At main entrance of Hamilton Library, behind the front entrance door Hamilton Library Main Entrance',
    sharing: 		'Share your thoughts.',
    thumbnail: 		'images/harvest_celebration/thumbnail.jpg',
    centerpiece: 	'images/harvest_celebration/thumbnail.jpg',
    geo_location: 	'21.30047795319491,-157.8158144720395',
    lat: 			21.30047795319491,
    lon: 			-157.8158144720395
};

pathContent['maka_io_or_hawks_eye'] = {
    name:		"Maka ‘Io or Hawk’s Eye",
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'M1.jpg', description: "<strong>Maka ‘Io or Hawk’s (1984)  Eye by Edward M. Brownlee</strong><br /><br />Students, teachers and visitors once were greeted by a curious contraption as they entered the University of Hawaii at Manoa’s lower campus. For nearly a decade, the Maka ‘Io served as a proud symbol of strength and teamwork, representing the university’s flourishing athletic programs." },
		{ image: 'M2.jpg', description: 'When Maka Io first was installed at the university in 1984, it was said to encompass the spirit of the Hawaiian hawk’s keen eye and express the motion of sport.' },
		{ image: 'M3.jpg', description: 'Yet in 1994, during the construction of the Stan Sheriff Center, Edward Brownlee’s sculpture was moved from its original location to a seemingly random field in front of Klum Gym.' },
		{ image: 'M4.jpg', description: 'What the heck is it doing here? The sculpture now is cloaked in the shade of various trees and unnoticeable to those who drive down Lower Campus Road. The Public Art Archive explained that the parallel bronze forms represent fascia or a bundle of reeds, which further emphasizes strength in numbers.' },
		{ image: '', description: 'Maka Io is not Edward Brownlee’s only piece of art on campus, but his second has been left untitled. Follow the hints to find Brownlee’s second piece and enter the naming contest!<br /><br />HINT 1: Cross the road above the Hawk’s eye<br />HINT 2: Walk between the sound of music<br />HINT 3: On the right hand of Orvis' }
    ],
    location: 		'',
    sharing: 		'This Brownlee work is “Untitled.” What would you call it?',
    thumbnail: 		'images/maka_io_or_hawks_eye/thumbnail.jpg',
    centerpiece: 	'images/maka_io_or_hawks_eye/thumbnail.jpg',
    geo_location: 	'21.294603814465095,-157.81961653718497',
    //lat: 			21.294603814465095,
    //lon: 			-157.81961653718497
	lat: 42.677291, 
	lon: 23.286973
};

pathContent['stan_sheriff_center'] = {
    name:		"Rainbows",
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'S1.jpg', description: "People are engaged in a constant quest for excellence, argues artist Shige Yamada. Through his twin sculptures, “Rainbows,” such striving for superiority becomes intertwined into an athletic context outside of UH Manoa’s Stan Sheriff Center." },
		{ image: 'S2.JPG', description: 'Unveiled in 1997, the work depicts two massive hands reaching toward the sky, one grasping a ball and one empty. The hands serve as a metaphor, speaking to the trials and tribulations of athletics, reflected in the fortunes of the UH men’s basketball team.' },
		{ image: 'S3.JPG', description: 'Prior to the sculptures’ placement, in the shadow of the Stan Sheriff Center, the UH men’s basketball team only had made two NCAA tournament appearances in the program’s entire history.' },
		{ image: 'S4.JPG', description: 'Since then, however, the Rainbows have strove for excellence much better. The ‘Bows made NCAA tournament appearances in 2001, 2002 and 2016, advancing to the round of 32 in the latter.' },
		{ image: 'S5.JPG', description: 'Within their Big West Conference, the Rainbows were tournament champions in those same years as well as regular-season champions in one other year, 2002. They also have been perennial contenders in the Big West, persisting in their quest for excellence.' },
    ],
    location: 		'',
    sharing: 		'What is your favorite memory of a UH men’s basketball game here? What do you remember most about that moment?',
    thumbnail: 		'images/stan_sheriff_center/thumbnail.jpg',
    centerpiece: 	'images/stan_sheriff_center/thumbnail.jpg',
    geo_location: 	'21.294819,-157.819056',
    lat: 			21.294819,
    lon: 			-157.819056
};

pathContent['campus_center'] = {
    name:		"Hawai‘i Ka‘u Kumu",
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'C1.jpg', description: "Hawai&#39;i Ka&#39;u Kumu, or “Hawai&#39;i is My Teacher,” was painted on the Campus Center walls at the University of Hawai&#39;i at Mānoa in 1982. Artist Calley O&#39;Neill says the mural, celebrating UH’s 70 anniversary, centers on how Hawai&#39;i’s people, food and energy flowed from mauka to makai." },
		{ image: 'C2.jpg', description: '<audio controls><source src="images/campus_center/Clip1.mp3" type="audio/mpeg"></audio><br />“I reflect and I meditate the time on the land and the people, nothing comes from ‘I want to do this.’ What is the community asking to communicate? … It’s a then and now. The left is the then and the right is the now,” O’Neill said.' },
		{ image: 'C3.png', description: 'O’Neill spent two years researching and drawing sections of the mural.' },
		{ image: 'C4.jpg', description: '<audio controls><source src="images/campus_center/Clip2.mp3" type="audio/mpeg"></audio><br />The mural features faces of real people around the islands with a story behind each person. O’Neill’s favorite element is the girls eating poi. “This is what life is about, savoring the moment, eating food of the land,” she said.' },
    ],
    location: 		'',
    sharing: 		'What did Hawai&#39;i teach you?',
    thumbnail: 		'images/campus_center/thumbnail.jpg',
    centerpiece: 	'images/campus_center/thumbnail.jpg',
    geo_location: 	'21.298675,-157.818566',
    lat: 			21.298675,
    lon: 			-157.818566
	//lat: 42.672026,
	//lon: 23.282936
};

pathContent['loi'] = {
    name:		"Kanewai Loʻi",
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: '', description: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZauxUHvWL7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }, 
		{ image: 'L1.JPG', description: "Ka Papa Loʻi ʻO Kanewai, located next to the Hawaiʻinuiākea School of Hawaiian Knowledge, is an ancient Hawaiian parcel of land used to cultivate Kalo (Taro) using an integrated system of fresh water streams." },
		{ image: 'L2.JPG', description: 'A group of Mānoa students rediscovered the abandoned ʻAwai (water ditch system) in 1980 and began planting Kalo and other indigenous and endemic plants. Through volunteers and UH Manoa students and staff regularly working the land, the art and tradition of Hawaiian agricultural practices continues.' },
		{ image: 'L3.JPG', description: 'Today, Ka Papa Loʻi ʻO Kanewai consists of 10 terraces used to cultivate freshwater Kalo, classrooms and a Hale (covered thatched structure). The ancient loʻi is used as an outdoor classroom for many Manoa students and offers a place for those beyond the manoa campus to learn about the hawaiian perspective and way of thinking.' },
		{ image: 'L4.JPG', description: 'Kanewai hosts a workday every first saturday of the month, open to the public. It is recommended to bring: Slippers, T-shirt and shorts (that can get dirty), hat, sunglasses, sunscreen, water and water bottles, and snacks' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/loi/thumbnail.jpg',
    centerpiece: 	'images/loi/thumbnail.jpg',
    geo_location: 	'21.295605,-157.812918',
    lat: 			21.295605,
    lon: 			-157.812918
	//lat: 42.678026,
	//lon: 23.284936
};

pathContent['our_story'] = {
    name:		"Our Story",
    details: 		'',
	hide:			true,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'O1.png', description: '<small><i>Associate Professor Brett Oppegaard, right, working with graduate students near the Founders’ Gate at UH Manoa in the fall of 2015. The mobile story about the gate, created that semester in the Com 691 class, became one of the first interactive experiences in the Manoa Public Art project. Students have been contributing new work to this project every year since.</i></small><br /><h2>&nbsp;&nbsp;About this project</h2> <p>The Manoa Public Art project began as a class experiment, supported by the local organization Malama Manoa, and since has grown into an expansive effort to chronicle the stories of public artwork in this Honolulu neighborhood, which includes the flagship University of Hawai‘i campus. <br><br>Hawai‘i was the first state in the country to adopt a "Percent for Art" program, requiring at least 1 percent of all money going toward public construction projects to be spent on public art. The Manoa neighborhood, and the University of Hawai‘i at Manoa, in particular, has been a major beneficiary of this law. This mobile app, in turn, is dedicated to promoting public discourse about the public art in this place.</p> <br><h2>&nbsp;&nbsp;Credits</h2><p><strong>Principal Investigator:</strong> Dr. Brett Oppegaard (School of Communications, University of Hawai‘i, brett.oppegaard@hawaii.edu)<br /><br /><strong>Contributors</strong><strong>Air:</strong> Kapiolani Ching and Godwin Polendey<br /><br /><strong>Earth:</strong> Kapiolani Ching and Godwin Polendey<br /><br /><strong>Fire:</strong> Kapiolani Ching and Godwin Polendey<br /><br /><strong>Founders’ Gate:</strong> Marc Arakaki<br /><br /><strong>Gate of Hope:</strong> Brett Oppegaard<br /><br /><strong>Hawai‘i Ka‘u Kumu:</strong> Nicole Tam<br /><br /><strong>Kanewai Lo‘i:</strong> Kaainoa Fernandez<br /><br /><strong>Korean Center:</strong> Brett Oppegaard<br /><br /><strong>Krypton:</strong> Shannon Manamtam<br /><br /><strong>Man and Nature:</strong> Chanel Dias<br /><br /><strong>Maka‘lo or Hawk’s Eye:</strong> Brandon Rivera<br /><br /><strong>Makahiki Ho‘okupu:</strong> Bronson Doria<br /><br /><strong>Night Hula:</strong> Brett Oppegaard<br /><br />	<strong>Pulelehua:</strong> Brett Oppegaard<br /><br /><strong>Rainbows:</strong> Harrison Patino<br /><br /><strong>Spirit of Manoa:</strong> Tracy Kim and Brett Oppegaard<br /><br /><strong>Varney Circle Fountain:</strong> Mari Galiher, Cynthia Arata, and Jim Bea Ildefonso Sampaga<br /><br /><strong>Water:</strong> Kapiolani Ching and Godwin Polendey<br /><br /><strong>Additional imagery:</strong> Courtesy of University of Hawai‘i Archives, through its Digital and Digitized Collections<br /><br /><strong>Additional photography:</strong> Godwin Polendey and Jessica Homrich<br /><br /><strong>Additional reporting:</strong> Jessica Homrich<br /><br /><strong>Additional sources:</strong> The University of Hawai‘i\'s Campus Art brochure, its Campus Heritage Report, and "Building a Rainbow," edited by Victor Kobayashi<br /><br /><strong>Mobile design and development:</strong> Montana Banana Web and Mobile Development, https://montanab.com/<br /><br /><strong>Project sponsor:</strong> Malama Manoa (2015-2016, $2,000; 2016-2017, $2,000; 2018-2019, $2,000)' }, 
    ],
    location: 		'Go to UH Manoa’s campus',
    sharing: 		'',
    thumbnail: 		'images/our_story/thumbnail.jpg',
    centerpiece: 	'images/our_story/thumbnail.jpg',
    geo_location: 	'21.29979,-157.81673',
    lat: 			21.29979, 
    lon: 		    -157.81673,
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

