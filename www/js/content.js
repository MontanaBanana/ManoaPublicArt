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
	subtitle:		'Traffic circle center',
    details: 		'A fountain run dry',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'', // vimeo video id
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V1.png', caption: 'Varney Circle Fountain under construction. The neoclassical building in the background was the old University Theatre, which since has been demolished. Photo courtesy of the University of Hawaii Archives.', headline: 'What happened to this fountain?', description: 'The Varney Circle Fountain is nearly as old as the University of Hawaii itself. Built in the early 1930s, in the middle of the Great Depression, it was one of the first structures on campus. For decades, it was a beloved community landmark. Erected in front of the first official UH building and its administrative hub, Hawaii Hall, this fountain also served an important symbolic function for the university – as a fount of vitality. Yet today, it has fallen into disrepair with no immediate plans to fix it.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V2.png', headline: 'Out of commission for years', description: 'This is what it used to look like, not that long ago, with flowers blooming around it and water flowing. Every so often, in a drought, the fountain would be turned off. But in 2006, it broke. Its water pumps had to be replaced. The fountain functioned well, again, for a couple of years, said University of Hawaii spokesman Dan Meisenzahl, but then other problems started to emerge. It hasn’t had water flowing in it now since 2009. <br><br>At that time, a small room below the fountain “filled with water and shorted that brand new pump," Meisenzahl said. In addition, he said, one side of the fountain’s concrete slab is sinking, which makes repair more difficult. <br><br>The fountain also is attached to the university’s storm-gauge system, and the fountain as-is cannot legally pump unfiltered water into that system. It needs a filtration system, and Meisenzahl said there is no room beneath the fountain to install it. <br><br>"Since it was built to the drain system, which was probably legal back when it was built, that\'s one of the huge issues with it now,” he said.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V3.png', caption: 'The fountain today; photo courtesy of Mari Galiher.', headline: 'To celebrate a teacher, students built a fountain', description: 'So on most days, it looks like this, tattered and weed filled. But in 1934, excitement about a fountain in the center of UH inspired students to raise the money to build it. They loved one of their faculty members at what was then the Territorial Normal Training School, a history teacher named Ada Susan Varney. They named the fountain after her, and this achievement was a source of campus pride.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V3-1.png', caption: 'Courtesy of Cadet', headline: 'From Columbia to Manoa', description: 'Varney was trained at Columbia University in New York and came to Oahu in 1911 to work at the Normal School. She later became a history teacher and was chair of the student publication, Cadet, from which we have just this single image of her. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V4.png', caption: 'Photo courtesy of Jim Bea Sampaga', headline: 'Just the plaque and the name are left', description: 'You can still find this plaque on the fountain’s base. Construction was handled by art instructor Henry H. Rempel and a recent graduate, Cornelia McIntrye Foley. They designed it and raised the funds for it. For one of the first times in Hawaii, a tiki motif was used to decorate it. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V5.png', caption: 'Photo courtesy of Jim Bea Sampaga', headline: 'Tiki translated: Protection and Peace', description: 'That tiki imagery is repeated eight times around the walls of the fountain. Rochelle Muamoholeva of the local company Hand-Carved Tiki translated the image to mean: Protection and peace.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V6.png', caption: 'Circa 1940s; courtesy of the University Archives.', headline: 'Once a gathering place', description: 'For most of its existence, the fountain has been a cornerstone of campus culture. According to the book “Building a Rainbow: A History of the Buildings and Grounds of the University of Hawaii’s Manoa Campus,” the fountain was a favorite location for college pranks and for people to meet on dates. Students often would ink the water or dump boxes of soap powder, and couples would toss coins into the fountain to wish for a happy relationship together. At that time, Varney fountain was the Manoa version of the Trevi fountain in Rome.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V7.png', caption: 'Students, staff and faculty helped to plant ʻĀweoweo around Varney Circle in 2017; photo courtesy of University of Hawai’i News.', headline: 'A place for plant research', description: 'Some efforts have been made to clean up the landscape around the fountain and enliven its appearance. Orville Baldos, assistant professor in the College of Tropical Agriculture and Human Resources, chose the Varney Circle for his native Hawaiian plants landscape-design research project. He uses the Varney Circle as a lab to see if the plants can last under low maintenance. He wanted to showcase these plants to people, especially landscapers, to demonstrate the utility of native Hawaiian plants. "The reason why we planted native plants over there was (because) it was the most visible area in campus," Baldos said. "It has high traffic, so people can see what\'s there." Baldos was also a graduate student representative on UH Manoa\'s landscaping committee when he was pursuing graduate studies from 2005 to 2013. He thinks the Varney Fountain is worth saving because it\'s a historic structure in UH Manoa, especially with only a few other water features on campus. "If maybe we\'re getting enough funding to sustain the maintenance, then maybe it can be run as a fountain again," he said. "It\'ll be nice to have a fountain actually, if we had the money."' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/varney_circle/V8.png', caption: 'Photo courtesy of Jim Bea Sampaga.', headline: 'How much would it cost to fix?', description: 'But for now, it looks like this. Ragged and in disrepair. Forgotten. If the fountain is to ever work again, under its current conditions, UH spokesman Meisenzahl said the university would have to fill, pump and drain the water every month. "That\'s labor intensive for our employees," he said, adding: "These types of fountains that are especially out in the open, they don\'t meet our goals as a sustainable entity because the water evaporates, so you\'re constantly having to fill it with water."<br><br>How much would it cost to fix? Blake Araki, UH director of Campus Operations and Facilities, said he cannot provide a solid estimate without checking the fountain first. The pump system, piping, electrical system and the condition of the fountain are some of the things to consider. He has no work order to even look into it.<br><br>“If all of these components need repairs or replacement, the work can be close to six figures,” he said. But if the piping, electrical and fountain foundation are still good, he said that it could be cheaper. “Until this can be determined,” he added. “It is hard to pin down a good estimate.”<br><br>Although there are no current plans to repair the fountain, the university is planning to convert Farrington Road, Campus Road and Varney Circle into a large pedestrian walkway, like McCarthy Mall. The plan is to get the vehicles out of the interior of the campus. When asked what will happen to Varney Circle, Meisenzahl said that\'s the question they are still trying to figure out. <br><br>"There\'s a lot of pieces to it, so it fits a much larger plan, so a lot of the things that we\'re looking at doing are still kind of a vision," he said. "They\'re not entirely sure how\'s that all gonna fit, but since that question is out there, there are no plans to do anything (on Varney Circle) as of right now."'},

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
	subtitle:   'Inside Bilger Hall',
    details: 		'Hawai\'i\'s first man',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A1.png', headline: 'Creation of the first man', description: 'Air by Juliette May Fraser is arguably the most complex of the Bilger Hall murals. The central image depicts the creation  of the first man by the Hawaiian god Kane, aided by the gods Lono and Kū.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A2.png', headline: 'Discovering his identity', description: ' According to the story, there was a time when all beings lived in darkness. Kane realized that he was a separate being, apart of this darkness, and so he pulled himself from it. Seeing this, the gods Lono and Kū followed his example.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A3.jpg', headline: 'A symbol of agriculture and peace', description: 'Lono is known as the god of agriculture and peace.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A4.jpg', headline: 'A symbol of war', description: 'Kū is known as the god of war.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A5.jpg', headline: 'The creation of light, sound, and substance', description: 'In separating themselves from the darkness, each god brought a unique element to the world. Kane brought light, Lono brought sound, and Kū brought substance.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A6.jpg', headline: 'Giving shape to the world', description: 'With these elements, they began to shape the world around them, till it came time to shape and give life to the first man.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A7.jpg', headline: 'Molding a clay man', description: 'To do so, they took clay from various corners of the world and carefully molded a figure resembling a man.' },
			{ image: 'https://api.montanab.com/ManoaPublicArt/images/air/A8.png', headline: 'Breathing life into the figure', description: 'Then the gods, guided by Kane, breathed into the figure and gave life to the first man.' },
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
	subtitle:   'Inside Bilger Hall',
    details: 		'About ‘ulu, or breadfruit',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E1.png', headline: 'Breadfruit, the bountiful', description: 'Early Hawaiians enjoyed a variety of nutritional food sources, one of them being ʻulu, or breadfruit. Practitioners know of several stories that tell of how ʻulu was first introduced into the Hawaiian diet.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E2.png', headline: 'Making a sacrifice for family', description: 'The version depicted in Earth by Sueko Kimura tells of the Hawaiian god Kū, who planted himself into the ground to feed his family.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E3.png', headline: 'In the beginning, a marriage', description: 'This story tells of Kū, who marries a beautiful Hawaiian woman with whom he starts a family. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E4.png', headline: 'Keeping a secret identity', description: 'He decides to keep his identity as a god a secret from his family, and works to provide for them just as any human father would. However, a time comes when a great famine falls over the land and Kū’s wife and children begin to starve.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E5.png', headline: 'The ultimate gift one can give', description: 'Feeling great remorse for his family’s suffering, Kū approaches his wife and tells her that in order to feed their family he must go to a place to which he can never return. She protests, but after hearing the cries of her starving family, she finally agrees to let him go.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/earth/E6.png', headline: 'Watered by tears', description: 'Kū then takes her out into the yard where he plants himself headfirst into the ground.  Watered by his wife’s tears, his limbs begin to transform into the limbs of the first breadfruit tree.' },
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
	subtitle:   'Inside Bilger Hall',
    details: 		'Pele and Lohiau, love and betrayal',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F1.png', headline: 'The volcano goddess', description: 'Perhaps one of the most notorious of the Hawaiian deities is Pele, the volcano goddess. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F2.png', headline: 'Telling the story of Lohiau', description: 'Fire, by Richard Lucier, tells of the death of Lohiau, a young chief from Kauaʻi whom Pele had planned to take as her husband. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F3.jpg', headline: 'Pele falls in love', description: 'This version of the story begins when Pele falls madly in love with Lohiau while touring the islands in search of a new home. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F4.jpg', headline: 'Seeking the help of her sister', description: 'Upon finally establishing her home at Halemaʻumaʻu on Hawaiʻi Island, Pele sends her dearest sister Hiʻiaka to Kauaʻi to fetch Lohiau. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F5.jpg', headline: 'What’s taking her so long?', description: 'Hiʻiaka’s journey to Kaua’i and back takes longer than expected, and Pele becomes impatient.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F6.png', headline: 'Revenge time', description: 'As the days pass, Pele begins to believe that Hiʻiaka has betrayed her and kills Hiʻiaka’s beloved friend Hopoe out of anger. Hiʻiaka, who has by now fetched Lohiau and is approaching the crater, sees what Pele has done and decides to take revenge by passionately embracing Lohiau in front of her sister' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fire/F7.jpg', headline: 'A fiery grave', description: 'An infuriated Pele calls on her other sisters to help her encircle Lohiau in a whirpool of magma, sending him to his fiery grave. ' },
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
	subtitle: 	'Inside Bilger Hall',
    details: 		'Fresh water found in Manoa',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W1.png', headline: 'The story of Kane and Kanaloa', description: 'David Asherman’s Water, tells of the gods Kane and Kanaloa and their search for fresh water.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W2.png', headline: 'Dirty and hungry, looking for water', description: 'After a day of swimming, Kane and Kanaloa emerge from the sea and begin to search for a place to rinse themselves and feed their thirst.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W3.png', headline: 'Searching for water', description: 'The two head westward and look far and wide for a fresh water source, but none can be found. They begin to grow impatient and weary for a lack of drinking water. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W4.png', headline: 'What’s beneath this land', description: 'Finally, they come to Mānoa, where Kane is certain that he can hear water moving in the ground underneath them.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W5.png', headline: 'A reservoir is discovered', description: 'He strikes the ground with his spear and out bursts a stream of fresh water.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water/W6.png', headline: 'The origin story of a stream', description: 'Kane and Kanaloa are then able to wash themselves and drink from the stream, which would later become known as Mānoa Stream.' },
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
	subtitle:   'University and Dole intersection',
    details: 		'An entryway to nowhere',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/founders_gate/FG1.png', headline: 'A gateway to nowhere', description: ' As configured today, Founders Gate seems to lead into the Manoa neighborhood, not the university campus, as originally intended, when it was built in the 1930s.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/founders_gate/FG2.png', headline: 'A memorial to UH’s ambitions', description: ' This gate was at first described as a “memorial to the men who fathered the development of the University of Hawai‘i and the Territorial Normal School.” ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/founders_gate/FG3.png', headline: 'Students paid for these', description: 'These two cast-stone arches, across the street from each other, underneath monkeypod trees, were paid for by student fees ($1 per student), with the promise that they would serve as the gateway to campus.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/founders_gate/FG4.jpg', headline: 'Above all Nations is Humanity', description: 'According to the UH Campus Heritage Report, university president David Crawford dedicated the gates by saying, “let only those who enter here come with hunger to learn and with determination to use aright their learning for the good of mankind.” One gate bench reads, in both Hawaiian and English: “Above all Nations is Humanity.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/founders_gate/FG5.jpg', headline: 'Moved once, but should they be moved again?', description: ' Yet as real estate blossomed around the campus, and University Avenue was widened, the gates had to be moved as well. When they were moved the first time, they simply were pushed out to the new sidewalks. As the monkeypod trees have dwarfed them, and they have lost their original purpose, though, could a more dramatic move benefit both the gates and the campus?' },
	
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
	subtitle:   'Inside the Manoa Public Library',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL1.jpg', headline: 'Mountains of glass', description: ' Rick Mills, a professor of art at University of Hawaii, created the five monolithic cast-glass sculptures perched above the entrance of Manoa Public Library to represent the interior mountains of the Manoa Valley. He calls the piece “The Spirit of Manoa: In the Light of Day,” referring in his writings about the work to ‘Aka‘aka (laughter) and Waiakeakua (the water of the god).' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL2.jpg', headline: 'Interacting with sunlight', description: ' When sunlight shines through the library’s windows, the glass sculptures transform to mirror a waterfall cascading down a mountain. The green, white, and blue ombre glass, with jagged edges, are bolted to a balcony, best seen from the second floor. They were created in celebration of the 2015 reopening of the library but not installed until 2017.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL3.jpg', headline: 'Reflecting nature and this place', description: 'Branch Manager Christel Collins said the community and the library staff worked together to decide on a piece of art that best represents Manoa.<br><br>“This is a vocal, intelligent, educated, passionate community, and they need to be consulted,” Collins said. “And if they’re not consulted, there’s going to be a problem.”<br><br>Collins mentioned that part of the thought process was whether or not they wanted the artwork to be interactive with children and visitors, as well as how the art could best fit with the library and the community. <br><br>She added that glass best represents the community because it is similar to the natural resources in the area. <br><br>“We didn’t want little statues of people,” Collins said. “We wanted something that reflected the beauty of the valley. We wanted something that reflected the natural form of the valley.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL4.jpg', headline: 'The princess of Manoa story', description: 'This community-oriented approach led to the selection of Rick Mills, a professor who teaches glass art at UH Manoa. His inspiration for the sculptures came from the beauty of the story of Kahalaopuna, the princess of Manoa. “I wanted them to capture the spirit and really the beauty of Manoa, so everybody could relate to them, even if they don’t know the story,” Mills said. <br><br>Mills used the story as a reference and inspiration in building his glass work. The sculptures’ ridges mirror Manoa’s mountains, which legend say are the gods of the valley. One of the sculptures has a black shadow which signifies the tragedies that the princess from the legend had to endure.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL5.jpg', caption: 'Photo courtesy of Rick Mills', headline: 'Part of the Percent for Public Art program', description: 'The sculptures were funded by taxpayer dollars through the Art in State Buildings Law, which designates one percent of state building construction costs for artwork to be placed in that building. In 1967, Hawaii became the first state to pass a law to set aside funds specifically for the acquisition of an artwork. After 1989, the law was revised to include one percent of renovation costs. These laws were introduced to help enrich the public by displaying works of art that emphasize the multicultural community throughout the Hawaiian islands. <br><br>Public places are not required to display artwork, but the Manoa Public Library chose to permanently showcase this art piece in their building. Mills has completed four other major public sculptures for the Hawaii State Foundation on Culture and the Arts, Art in Public Places Program. Those are at the Queen Liliuokalani Student Services Center at the University of Hawaii at Manoa, the Hawaii Convention Center in Honolulu, the Leilehua High school in Wahiawa and the Maui Memorial Medical Center in Kahului, Maui. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/manoa_public_library/MPL6.jpg', caption: 'Photo courtesy of Rick Mills', headline: 'An exercise in appreciation', description: 'Through this artwork, Mills hopes that people will appreciate the beauty and history of Manoa. A poem accompanying the sculpture serves as a reminder for people to connect with their history and their surroundings.<br><br>“Appreciate the surroundings for what they are and how fortunate we are,” Mills said. “But also learn the reflective quality, that life is a journey and sometimes we miss some of the most important things (because) we’re too busy.”<br><br>Here is what the sculptures looked like before they were transformed into glass. Can you see the source material in the mountains of Manoa? Take a photo that shows your interpretation of the “Spirit of Manoa” and share it on social media.' },
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
	subtitle:   'Saunders Hall courtyard',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/night_hula/NH1.jpg', headline: 'Ancient Hawaiian hula, performed after dark', description: ' This “Night Hula” mural by Jean Charlot began its life as a private commission for a local law firm and almost was lost for good a couple of decades ago. It depicts an ancient Hawaiian hula, traditionally performed in the dark. When that law firm was being renovated in the early 1990s, the mural was moved to Kamehameha Schools, where it suffered severe storm damage, which some thought was beyond repair. The school raised money for the restoration, and the mural was donated to UH. Faculty member Laura Ruby and her assistant, Martha Ridgley, spent three years replacing damaged tiles and restoring the mural.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/night_hula/NH2.jpg', headline: 'Another mural by Jean Charlot', description: ' Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?' },
    ],
    location: 		'Go to Saunders Hall',
    sharing: 		'Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?',
    thumbnail: 		'images/night_hula/thumbnail.jpg',
    centerpiece: 	'images/night_hula/thumbnail.jpg',
    geo_location: 	'21.3006993,-157.8189403',
    lat: 			21.3006993,
    lon: 			-157.8189403
};

pathContent['butterfly_door'] = {
    name:		'Pulelehua',
	subtitle: 	'Gilmore Hall entrance',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/butterfly_door/BD1.jpg', headline: 'The official state insect', description: ' When you approach Gilmore Hall at the University of Hawaii, you might guess the faculty and students there study insects by the elaborate ceramic mural of the Pulelehua (Kamehameha Butterfly), near the door. What you might not know is that the Pulelehua is the official state insect of Hawaii, and it is one of only two butterfly species native to the state (the other is the Koa).' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/butterfly_door/BD2.jpg', headline: 'Drawn by the surf; stayed for the art', description: '  The artist, Robert Flint, reportedly moved to Hawaii in 1960 to surf. But after a few years of working in construction, he enrolled in the Art program at UH Manoa, where he earned both bachelor’s and master’s degrees of fine art (specializing in ceramics).' },
    ],
    location: 		'Head South on Oahu Ave from Manoa Rd',
    sharing: 		'Charlot first came to UH in 1949 to work on a mural in Bachman Hall. He reportedly liked it here so much that he decided to join the UH Art department, creating a second mural at Bachman Hall, and another one also near campus. Can you find it, too (in the East-West Center complex)? How does it compare?',
    thumbnail: 		'images/butterfly_door/thumbnail.jpg',
    centerpiece: 	'images/butterfly_door/thumbnail.jpg',
    geo_location: 	'21.3006993,-157.8189403',
    lat: 			21.3006993,
    lon: 			-157.8189403
	//lat: 42.677567, 
	//lon: 23.287577
};

pathContent['korean_center'] = {
    name:		'Korean Center',
	subtitle:   'E-W Road and Maile Way intersection',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/korean_center/KC1.jpg', headline: 'A reproduction of a Southeast Asia landmark', description: ' Kyŏngbok Palace in Seoul provided the design inspiration for the Center for Korean Studies at UH Manoa. The center’s main building is modeled after the palace’s throne hall, called Kunjŏngjŏn, which is where various court rituals are held, including the king\'s coronation. The separate octagon-shaped pavilion was meant to mimic the Hyangwŏnjŏng Pavilion, which sits in the middle of a lotus pond in Korea.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/korean_center/KC2.jpg', headline: 'Ceramic tiles, bright design', description: ' The carpentry of the building is distinctively Korean, performed by craftsmen recruited to Hawaii, specifically to work on this project. It features dark-green ceramic tiles on the roof and the colors of traditional palace architecture, such as brown and green, as the background for the striking tanch\'ong aesthetic, distinguished through its intricate and bright design patterns that adorn the structure.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/korean_center/KC3.jpg', headline: 'Rebuilt in Korea and now in Manoa', description: ' The original Kyŏngbok Palace was built in the 1300s, but it was destroyed by Japanese invaders in the 1500s. This reconstructed version, now considered a national treasure, is one of the most popular tourist destinations in South Korea.<br/>Image courtesy of: Wikimedia Commons' },
    ],
    location: 		'Go to the corner of Maile Way and East-West Rd.',
    sharing: 		'Share your thoughts on the Korean Center.',
    thumbnail: 		'images/korean_center/thumbnail.jpg',
    centerpiece: 	'images/korean_center/thumbnail.jpg',
    geo_location: 	'21.3013692,-157.8143484',
    lat: 			21.3013692,
    lon: 			-157.8143484
	//lat: 42.677567, 
	//lon: 23.287577
};

pathContent['gate_of_hope'] = {
    name:		'Gate of Hope',
	subtitle:   'In front of Holmes Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gate_of_hope/GOH1.jpg', headline: 'What does it look like to you?', description: ' This 30-foot-high Alexander Liberman work – made of rolled steel – represents the “Gate of Hope,” explained as engineering principles allowing complex structures. Its dynamic appearance changes significantly, though, depending on the viewpoint. In this image, it appears like a large red robot. From another perspective, some see in it a large hand with a middle finger extended.' },
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
	subtitle:   'In front of Watanabe Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/monolith/M1.jpg', headline: 'From Stanley Kubrick to Superman', description: '<audio controls><source src="images/monolith/monolith.mp3" type="audio/mpeg"></audio> <br /><br />This structure may not seem like much at a glance, but if you’ve seen Stanley Kubrick’s “2001: A Space Odyssey,” it may be familiar to you.<br><br>Just like any of Kubrick’s works, there’s a lot of debate on the symbolism of the monolith in “A Space Odyssey.” But it’s the general consensus that these monoliths appear in each new step of human evolution, such as when early primates are learning to use tools.<br><br>This monolith was designed by graphic designer Bruce Hopper in 1973 and stands at 18 feet tall and 6 feet wide, dwarfing any person that walks past. And while it was originally colored a matte black, decades of rusting caused it to fade to a pale tan-gray that caused it to blend with its surroundings.<br><br>Hopper was commissioned by the state to create a piece relating to the sciences, as the Physics Department is housed in nearby Watanabe Hall. It is fitting then, that he designed the monument inspired by “A Space Odyssey,” and named it “Krypton,” after Superman’s home planet.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/monolith/M2.jpg', headline: 'Wearing out in the direct sun', description: 'This photo by Rick Holt for “Sculpture in the Sun,” 1978, shows the original black-matte coloring.<br><br>2018 marked the 50th anniversary of Kubrick’s classic sci-fi space epic. But it was that very same year that Manoa’s monolith was actually about to be removed. <br><br>Derek Erwin, the Conservation Coordinator for the Hawai‘i State Foundation On Culture And The Arts, oversees the over 600 commissioned works around Hawaii. And because of corrosion at the base of the monument, Derek says his first impression was that Hopper’s Krypton could be in danger of falling.<br><br>“The plan was actually just to hire somebody to remove the monument, but people from the building came out and were concerned, and they wanted to if possible keep the thing,” said Erwin.<br><br>Erwin hired a structural engineer to inspect the piece, and once it was found to be structurally sound, he made the decision to restore it.<br><br>When restoring a piece of art, it’s important to not only understand how it was made but also the artist’s intent behind the methods. Because, when you change the look and feel of the art piece, you run the risk of also changing its message. <br><br>But the problem is, we don’t know for sure what Bruce Hopper’s original message even was. We know he based it off “2001,” but he also named it Krypton, a reference to a completely different work of science fiction. <br><br>There was a lot of dispute over what the monolith officially was made out of. Newspaper articles from the time reported it was made of bronze and painted, while books such as “Sculpture in the Sun,” state it was chemically treated to give it a dark hue. ' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/monolith/M3.png', headline: 'From a matte to a glossy finish', description: 'Here’s what the monolith looked like before restoration in 2017.<br><br>Laura Ruby, a local artist and founder of the UHM Art Consulting Committee, makes the case the monolith was chemically treated.<br><br>“When you see it sanded down, it’s a patina, which is a rust, and like with Bronze for example, which is a red color, when it ages it turns a green, gray-ish color.”<br><br>In a departure from the original method of coloring, Erwin decided to have Krypton painted black, with a glossy finish to protect the monolith from the environment. Now, instead of fading into the background, the monolith stands out, with its surface shining like a mirror.<br><br>But the restoration process didn’t stop there. ' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/monolith/M4.jpg', headline: 'What’s that sound?', description: 'There was one thing the Krypton monolith was known for … a deep and perpetual vibrating sound that was turned off less than a year after it was constructed. This sound was meant to mimic the music heard whenever the monolith would appear in the “2001” film.<br><br>There is no recorded audio of what it sounded like before, but the vibrations were playing at 60 hertz. <br><br>This was achieved with an electric device originally installed within the structure and connected to a larger speaker. However, in response to noise complaints and an energy shortage, the humming device was disconnected in 1974, merely a year after installation.  <br><br>Those present at the time say the sound was so persisting, you could hear them in the offices, and even the classrooms. <br><br>“You can’t have this thing just going wild, because it’s going to be very disruptive for students,” said Kevin Croker, a post-doctoral fellow in the Department of Physics. “And if you do a lot of low frequencies, which is what a structure like that is going to be good at, because it’s very big, it’s going to resonate at low frequencies.”<br><br>Crocker is one of the few people to have access to Krypton’s new sound system, which, for now has to be powered through a large extension cord from one of the Watanabe classrooms to a weather box hidden behind the shrubs. From there, he can connect to his phone and basically play any sound wave, song or frequency. ' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/monolith/M5.png', headline: 'Provoking curiosity', description: '“The coolest thing about the thing is that every time I walk by it there’s always someone staring at it or touching it, it just has such a cool presence,” Crocker said. “People see it now and people are curious about it, and I think it’s a great opportunity to get people involved and understanding what we bring to the community.”<br><br>There are no plans to have the Krypton monolith constantly play a permanent sound, but that doesn’t mean it will be forgotten. They’ve already used it to play music at the Physics open house and are planning to use it for sound studies. Crocker also says he’s looking forward to collaborating with other departments on future projects.<br><br>With its restoration, Bruce Hopper’s Krypton definitely went through some changes. But, along with updates in technology, these changes are better suited to the needs of the people closest to it. Not only that, because the keys to the sounds system were given directly to people in the department, there is now so much more room for experimentation, collaboration, and interactivity.' },
    ],
    location: 		'Head West on Correa Rd from Keller Rd.',
    sharing: 		'Share your thoughts on the Monolith.',
    thumbnail: 		'images/monolith/thumbnail.jpg',
    centerpiece: 	'images/monolith/thumbnail.jpg',
    geo_location: 	'21.2987556,-157.8160544',
    lat: 			21.2987556,
    lon: 			-157.8160544
	//lat: 42.676082,
	//lon: 23.288649
};

pathContent['relation_of_man_and_nature'] = {
    name:		'Man and Nature',
	subtitle:   'Inside Bachman Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/relation_of_man_and_nature/R1.jpg', headline: 'A name to know, Jean Charlot', description: 'After coming to Hawai’i in 1949, French artist and writer Jean Charlot (1898 -1979) wanted to express his vision of Hawaiian culture.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/relation_of_man_and_nature/R2.jpg', headline: 'Intercultural expressions', description: 'Charlot had noticed the lack of monumental and heroic expressions within the ideology of Americanism already taking root within the territory, which would become a state in 1959. While Charlot could not yet read the Hawaiian language, when he created his mural, the theme of this image was clear to him across cultures.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/relation_of_man_and_nature/R3.jpg', headline: 'Trying to set a mood', description: '“All works of art are based on both facts and mood,” Charlot said in an article written by his son, John Charlot. “Even though the lower mural contains many details relating to life in old Hawai’i, it should not be considered an archaeological or historical reconstruction. It is rather an attempt to recapture the mood that led ancient Hawaiians to reach a true balance in their culture between man and his strong, natural habitat in the islands.”' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/relation_of_man_and_nature/R4.jpg', headline: 'Presenting a sense of balance', description: 'In this mural, Charlot purposefully placed both nature and community together, wanting to symbolize wholeness, while presenting Hawaiian culture as “heroic, religious achievement.” On the left side, a representation of materialistic life (food, gathering, and preparation) can be seen; with the right suggesting art and religion. Family also is emphasized.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/relation_of_man_and_nature/R5.jpg', headline: 'Where else is Charlot’s work?', description: 'Charlot’s “Relation of Man and Nature in Old Hawaii” can be seen in Bachman Hall at the University of Hawai’i at Manoa. Can you find any other murals by Charlot on the UH campus?' },
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
	subtitle:   'Inside Hamilton Library',
    details: 		'Harvest Celebration',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H1.png', headline: 'Originally made for the World’s Fair', description: "This mural was created by Juliette May Fraser for the 1939 San Francisco World's Fair. It consists of 13 masonite panels depicting the harvest and gift-giving ceremony of Native Hawaiians during the Makahiki season. Fraser was born in Honolulu during the reign of King Kalakaua, and built a reputation for portraying Hawaiian legends and other themes through linoleum cut, oil painting, ceramic, and fresco." },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H2.png', headline: 'Celebrated from October through February', description: 'The Makahiki season is dedicated to honor the god Lono, who is associated with fertility, rainfall, agriculture, food, music and peace. Makahiki is roughly four months long and usually celebrated October through February.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H3.png', headline: 'Warfare was forbidden during this season', description: 'Ancient Hawaiians stopped their work and made offerings to the chief or aliʻi. Warfare was forbidden during Makahiki season. Time then was also spent on practicing sports, eating, dancing and renewing communal bonds.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H4.png', headline: 'Making offerings, like taxes', description: 'Ancient Hawaiians collected agricultural and aquacultural products like pigs, taro, sweet potatoes, dry fish, kapa and mats. Some even offered feathers from forest birds, and all of these hoʻokupu (offering) were presented or collected sort of like taxes (Auhau) during Makahiki.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H5.png', headline: 'Paying tribute to the High Chief', description: 'Each ahupuaʻa gathered its taxes to be given to the Ali’i Nui or the High Chief of the island. He acted as the deputy for Lono during the Makahiki Festival. The Ali’i Nui would hold an Akua Loa (representation of Lono), which was a long pole with a carved pig’s head on top and a strip of tapa (ancient Hawaiian cloth).' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H6.png', headline: 'A time for fun', description: 'Ancient Hawaiians were passionate to test their minds with games, which consisted of riddles, recitation of genealogies, proverbs and knowledge of hidden meanings, even board games, which was a stone slab or flat surface with shallow holes.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/harvest_celebration/H7.png', headline: 'Make an offering to UH?', description: 'Just like during the Makahiki season, with Native Hawaiians, set time aside today for peace and relaxation. Try to enjoy some games, test your brain or even dance. Maybe even make an offering, or in this case a donation. If you want to give back to The University of Hawaii, or support a specific part of the UH system, any contribution would be gladly appreciated. <a href="https://giving.uhfoundation.org/give-now" target="_system" style="color: white;">Tap to donate</a>' },
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
	subtitle: 	'Adjacent to Klum Gym',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka_io_or_hawks_eye/M1.jpg', headline: 'Once prominent but no longer', description: "Students, teachers and visitors once were greeted by a curious contraption as they entered the University of Hawaii at Manoa’s lower campus. For nearly a decade, the Maka ‘Io served as a proud symbol of strength and teamwork, representing the university’s flourishing athletic programs." },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka_io_or_hawks_eye/M2.jpg', headline: 'Vision and motion in sculpture', description: 'When Maka Io first was installed at the university in 1984, it was said to encompass the spirit of the Hawaiian hawk’s keen eye and express the motion of sport.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka_io_or_hawks_eye/M3.jpg', headline: 'Displaced by arena construction', description: 'Yet in 1994, during the construction of the Stan Sheriff Center, Edward Brownlee’s sculpture was moved from its original location to a seemingly random field in front of Klum Gym.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka_io_or_hawks_eye/M4.jpg', headline: 'Where else can Brownlee’s work be found?', description: 'What the heck is it doing here? The sculpture now is cloaked in the shade of various trees and unnoticeable to those who drive down Lower Campus Road. The Public Art Archive explained that the parallel bronze forms represent fascia or a bundle of reeds, which further emphasizes strength in numbers.' },
		{ image: '', description: 'Maka Io is not Edward Brownlee’s only piece of art on campus, but his second has been left untitled. Follow the hints to find Brownlee’s second piece and enter the naming contest!<br /><br />HINT 1: Cross the road above the Hawk’s eye<br />HINT 2: Walk between the sound of music<br />HINT 3: On the right hand of Orvis' }
    ],
    location: 		'',
    sharing: 		'This Brownlee work is “Untitled.” What would you call it?',
    thumbnail: 		'images/maka_io_or_hawks_eye/thumbnail.jpg',
    centerpiece: 	'images/maka_io_or_hawks_eye/thumbnail.jpg',
    geo_location: 	'21.294603814465095,-157.81961653718497',
    lat: 			21.294603814465095,
    lon: 			-157.81961653718497
	//lat: 42.677291, 
	//lon: 23.286973
};

pathContent['stan_sheriff_center'] = {
    name:		"Rainbows",
	subtitle: 	'Stan Sheriff Center courtyard',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/stan_sheriff_center/S1.jpg', headline: 'Striving for superiority', description: "People are engaged in a constant quest for excellence, argues artist Shige Yamada. Through his twin sculptures, “Rainbows,” such striving for superiority becomes intertwined into an athletic context outside of UH Manoa’s Stan Sheriff Center." },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/stan_sheriff_center/S2.JPG', headline: 'Reaching for the sky', description: 'Unveiled in 1997, the work depicts two massive hands reaching toward the sky, one grasping a ball and one empty. The hands serve as a metaphor, speaking to the trials and tribulations of athletics, reflected in the fortunes of the UH men’s basketball team.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/stan_sheriff_center/S3.JPG', headline: 'Trying to inspire', description: 'Prior to the sculptures’ placement, in the shadow of the Stan Sheriff Center, the UH men’s basketball team only had made two NCAA tournament appearances in the program’s entire history.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/stan_sheriff_center/S4.JPG', headline: 'Maybe a good-luck charm?', description: 'Since then, however, the Rainbows have strove for excellence much better. The ‘Bows made NCAA tournament appearances in 2001, 2002 and 2016, advancing to the round of 32 in the latter.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/stan_sheriff_center/S5.JPG', headline: 'We are the champions', description: 'Within their Big West Conference, the Rainbows were tournament champions in those same years as well as regular-season champions in one other year, 2002. They also have been perennial contenders in the Big West, persisting in their quest for excellence.' },
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
	subtitle: 	'At the Campus Center',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/campus_center/C1.jpg', headline: 'Made in the ‘80s', description: "Hawai&#39;i Ka&#39;u Kumu, or “Hawai&#39;i is My Teacher,” was painted on the Campus Center walls at the University of Hawai&#39;i at Mānoa in 1982. Artist Calley O&#39;Neill says the mural, celebrating UH’s 70th anniversary, centers on how Hawai&#39;i’s people, food and energy flowed from mauka to makai." },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/campus_center/C2.jpg', headline: 'A place for reflection', description: '<audio controls><source src="images/campus_center/Clip1.mp3" type="audio/mpeg"></audio><br />“I reflect and I meditate the time on the land and the people, nothing comes from ‘I want to do this.’ What is the community asking to communicate? … It’s a then and now. The left is the then and the right is the now,” O’Neill said.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/campus_center/C3.png', headline: 'From plans to a painting', description: 'O’Neill spent two years researching and drawing sections of the mural.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/campus_center/C4.jpg', headline: 'Savoring the moment', description: '<audio controls><source src="images/campus_center/Clip2.mp3" type="audio/mpeg"></audio><br />The mural features faces of real people around the islands with a story behind each person. O’Neill’s favorite element is the girls eating poi. “This is what life is about, savoring the moment, eating food of the land,” she said.' },
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
	subtitle: 	'Adjacent to the Hawai‘inuiākea School',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: '', headline: 'To try use this video, attach Google Cardboard to your device', description: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZauxUHvWL7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }, 
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/L1.JPG', headline: 'Illustrating ancient cultivation systems', description: "Ka Papa Loʻi ʻO Kanewai, located next to the Hawaiʻinuiākea School of Hawaiian Knowledge, is an ancient Hawaiian parcel of land used to cultivate Kalo (Taro) using an integrated system of fresh water streams." },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/loi/L2.JPG', headline: 'Rediscovered and reclaimed land', description: 'A group of Mānoa students rediscovered the abandoned ʻAwai (water ditch system) in 1980 and began planting Kalo and other indigenous and endemic plants. Through volunteers and UH Manoa students and staff regularly working the land, the art and tradition of Hawaiian agricultural practices continues.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/loi/L3.JPG', headline: 'An outdoor classroom and teaching space', description: 'Today, Ka Papa Loʻi ʻO Kanewai consists of 10 terraces used to cultivate freshwater Kalo, classrooms and a Hale (covered thatched structure). The ancient loʻi is used as an outdoor classroom for many Manoa students and offers a place for those beyond the manoa campus to learn about the hawaiian perspective and way of thinking.' },
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/loi/L4.JPG', headline: 'Come and join the fun', description: 'Kanewai hosts a workday every first Saturday of the month, open to the public. It is recommended to bring: Slippers, T-shirt and shorts (that can get dirty), hat, sunglasses, sunscreen, water and water bottles, and snacks' },
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

pathContent['fallen_warrior'] = {
    name:		'Fallen Warrior',
	subtitle: 	'In front of ROTC building',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fallen_warrior/FW1.jpg', headline: 'Remembering students who defended us', description: 'Created by master carver Tuione Pulotu, The Fallen Warrior Memorial statue was erected in 2016, outside of the University of Hawaii at Manoa Army ROTC building. It was dedicated to the soldiers who graduated from that ROTC program and who died in wartime activities – in World War II, Vietnam, Iraq, or Afghanistan – giving the ultimate sacrifice for their country.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fallen_warrior/FW2.jpg', headline: 'A combination of wood and rock', description: 'The statue is carved out of Monkey Pod wood. The base of the statue is built out of lava rock. Inside the base of the statue contains mementos from the fallen soldiers. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fallen_warrior/FW3.jpg', headline: 'An ongoing tribute', description: 'ROTC students and staff gather every morning to pay their respects to these soldiers. During their morning formation, the UH soldiers today place ceremonial weapons in the hands of the statue. The weapons symbolize the soldiers on a mission during the day. At the end of the day, the weapons are stored away to symbolize the end of the duty day.', }
    ],
    location: 		'In front of the ROTC building',
    sharing: 		'Share your story',
    thumbnail: 		'images/fallen_warrior/thumbnail.jpg',
    centerpiece: 	'images/fallen_warrior/thumbnail.jpg',
    geo_location: 	'21.292287,-157.816565',
    lat: 			21.292287,
    lon: 			-157.816565
	//lat: 42.677567, 
	//lon: 23.287577
};

pathContent['alae_a_hina'] = {
    name:		'‘Alae a Hina',
	subtitle: 	'Inside Sakamaki Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/alae_a_hina/A1.jpg', headline: 'Working at a different scale', description: 'Born in 1933, in Wailuku, Hawai’i artist Shige Yamada is best known for his monumental sculptures that tower over their audiences. Such as “Rainbows,” which can be viewed at UH Manoa’s Stan Sheriff Center, and “The Gift of Water,” which stands in front of the Hawaii Convention Center, these structures are larger-than-life and bring forth Yamada’s artistry. <br><br>However, as exhibited in this piece inside Sakamaki Hall, Yamada is an artist that is not constricted to one medium. “Most people are medium-oriented,” Yamada said in a 2005 interview with The Honolulu-Star Advertiser. “I am idea-oriented. That is my basic nature.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/alae_a_hina/A2.jpg', headline: 'The mud hen of Hina', description: 'The mural, “‘Alae a Hina (Mud Hen of Hina),” is composed of multiple tiles pieced together to form an image of the demigod Maui, learning the secret of life from the mud hen of Hina. In this popular Polynesian myth, Maui seeks to regain the eternal fire, which the gods have taken away, and finds it through an ‘alae, or mud hen, who shows him how to make it. In the middle of the mural, the mud hen’s face is clearly visible, but its surrounding tiles are not as easy to define, left up to the viewer’s interpretation.' },
    ],
    location: 		'Inside Sakamaki Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/alae_a_hina/thumbnail.jpg',
    centerpiece: 	'images/alae_a_hina/thumbnail.jpg',
    geo_location: 	'21.2951295,-157.8818748',
    lat: 			21.2951295,
    lon: 			-157.8818748
};

pathContent['arctic_portals'] = {
    name:		'Arctic Portals',
	subtitle: 	'Campus Center, Second Level',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/arctic_portals/AP1.jpg', headline: 'Reflective properties of steel', description: 'Jan Peter-Stern was born on Nov. 14, 1926, in Berlin, Germany. In 1938, likely to escape the escalating tensions in Germany and throughout Europe, the artist, then just 12 years old, and his family, moved to the United States and became naturalized citizens. He would go on to serve in World War II, fighting for the United States. Peter-Stern is best known for his steel sculptures with their winding, organic forms that seem to defy the medium’s physics. An example of this can be found at the UH Manoa Campus Center, on the Second Level, where one of the artist’s pieces resides. As the only Peter-Stern piece at the University of Hawai’i at Manoa campus, Arctic Portals is a helpful example of how the artist utilizes the reflective and magnifying capabilities of steel to invite introspection in the viewer.	' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/arctic_portals/AP2.jpg', headline: 'From light to dark', description: 'Location was of utmost importance to Peter-Stern, who often visualizes his pieces within the space that they will inhabit. Arctic Portals is made to be placed in entryways, particularly ones where passersby will go from dark to light or vice versa, such as in its current location. This is to create the illusion of a hovering glow of light emanating from the piece’s center, as if beckoning the viewer to inspect it further. ' },
    ],
    location: 		'Campus Center, Second Level',
    sharing: 		'Share your story',
    thumbnail: 		'images/arctic_portals/thumbnail.jpg',
    centerpiece: 	'images/arctic_portals/thumbnail.jpg',
    geo_location: 	'21.2988187,-157.8212431',
    lat: 			21.2988187,
    lon: 			-157.8212431
};

pathContent['calligraphy'] = {
    name:		'Calligraphy',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/calligraphy/C1.jpg', headline: 'Hidden in a hallway', description: 'Among the East-West Center’s permanent collection is this piece of calligraphy, anonymously donated to the center in the 1970s. Displayed behind thick glass, the work appears fragile, its thin parchment, almost translucent in the light. From afar, the piece may seem unassuming in its simplicity. However, step closer and one can observe the level of artistry that went into this work.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/calligraphy/C2.jpg', headline: 'What do these symbols mean?', description: 'Upon closer inspection, the red symbol that acts as the its focal point morphs into an array of characters that ebb and flow as if being swept by a river, an aesthetic characteristically different from the other characters on the piece which are painted in inky, official-looking blocks.' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/calligraphy/thumbnail.jpg',
    centerpiece: 	'images/calligraphy/thumbnail.jpg',
    geo_location: 	'21.2969164,-157.8169485', 
    lat: 			21.2969164,
    lon: 			-157.8169485
};

pathContent['divers'] = {
    name:		'Divers',
	subtitle: 	'In front of Marines Sciences',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/divers/D1.jpg', headline: 'Influenced by Abstract Expressionism', description: 'Born in 1942 in Bronxville, New York, Robert Stackhouse was trained as a painter in the style of the abstract expressionist movement borne from his home state during the 1940s and 1950s. Although he only worked as a painter for a few years, he continued to apply aspects of the movement to his work, particularly the power that an image, or even a suggestion of an image, can have.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/divers/D2.jpg', headline: 'Looking below the surface', description: 'He is best known for his sculptures, which often exist within nature. An example of this can be viewed at the University of Hawai’i at Manoa campus in the Marine Sciences Building lawn. Flush to the ground, the piece, titled “Divers,” can be hard to find, and hundreds of students pass by without knowing that the work is there. In Stackhouse’s typical style of converging lines, the piece is meant to invoke the experience of diving beneath the Earth’s surface. It is placed at an incline and so at once appears as if it is ascending or descending, depending on where the viewer stands.' },
    ],
    location: 		'In front of Marines Sciences',
    sharing: 		'Share your story',
    thumbnail: 		'images/divers/thumbnail.jpg',
    centerpiece: 	'images/divers/thumbnail.jpg',
    geo_location: 	'21.2977,-157.8150', 
    lat: 			21.2977,
    lon: 			-157.8150
};

pathContent['diverse_unity'] = {
    name:		'Diverse Unity',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/diverse_unity/D1.jpg', headline: 'An expression of Vanuatu', description: 'Eric Natuovi was born in 1964 on Futuna Island, Vanuatu. He first started working in pottery in 1987, during his stay in Sydney, Australia. The 1980s were also the period in which Vanuatu, formerly a condominium colony under the United Kingdom and France, was rebuilding its communities and government after gaining independence in 1980. Natuovi’s home country of Vanuatu is a collection of 80 islands with more than 110 languages and a population of just under 300,000 people. Natuovi explores Vanuatu’s variegated community in his works and is finely exhibited in “Diverse Unity,” a piece that is a part of the East-West Center’s permanent collection. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/diverse_unity/D2.jpg', headline: 'A representation of Port Vila', description: '“The work is based on different island groups and ethnic communities living in Port Vila,” Natuovi wrote in his artist description of the work. Port Vila, whose diversity is symbolized in the piece, is Vanuatu’s capital. As the largest city in Vanuatu, it acts as the hub for the country’s main industry, tourism. The piece is typical of Natuovi’s pottery style, which invokes the early works of pottery that would have been made on Vanuatu during the islands’ earliest civilizations. The piece is molded from red raku clay and from its base are six figures constructed from wood, representing the different islands and races that inhabit Port Vila. They surround the pointed cone that grows from the gourd’s center, joining hands as a metaphor for cultural diversity. <br><br>“My work is based on the myths, culture, and social life of the [Vanuatu] people,” Natuoivi said during a 1996 talk at The Asia Pacific Triennial of Contemporary Art. “But it is also a look at the current situation and issues.”' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/diverse_unity/thumbnail.jpg',
    centerpiece: 	'images/diverse_unity/thumbnail.jpg',
    geo_location: 	'21.3454146,-158.0179418', 
    lat: 			21.3454146,
    lon: 			-158.0179418
};

pathContent['imperial_vase'] = {
    name:		'Imperial Vase',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/imperial_vase/V1.jpg', headline: 'Given by royalty', description: 'Encased behind thick glass sits an unimposing ceramic vase. Lacquered in a deep indigo, it shines in the dimmed lights of the John A. Burns Hall. Many may pass by this vase, minimal and simple in its design, to head straight for the other more ornate pieces in the East-West Center’s permanent collection. However, a single gold emblem stamped onto the vase indicates its royal origins. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/imperial_vase/V2.jpg', headline: 'Emperor Akihito’s gift', description: 'The emblem is the Japanese royal crest, and the vase came from Emperor Akihito himself, a gift from the Emperor and Empress Michiko’s first state visit to the United States. In 1989, Akihito acceded to the throne upon the death of his father, Emperor Hirohito, who ruled through the attack on Pearl Harbor and World War II. Five years after being made emperor, Akihito travelled to the United States, his first visit to the country as emperor of Japan. It was initially planned that part of his tour would include a visit to the Arizona War Memorial, which honors the fallen soldiers of the 1941 Pearl Harbor attack. Instead, he was swayed not to do so to avoid protests from Japan’s right-wing political party, who justify the attack on the basis that it was a response to the United States’ increasing presence in the Pacific. Akihito still chose to honor the memories of soldiers fallen during World War II, choosing to instead visit the National Memorial Cemetery of the Pacific. This imperial vase commemorates the emperor’s visit to Hawai’i and the continued alliance between Japan and the United States.' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/imperial_vase/thumbnail.jpg',
    centerpiece: 	'images/imperial_vase/thumbnail.jpg',
    geo_location: 	'21.3454146,-158.0179418', 
    lat: 			21.3454146,
    lon: 			-158.0179418
};

pathContent['maori'] = {
    name:		'Maori Female Ancestor',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/maori/M1.jpg', headline: 'A gift from a queen', description: 'In 1979, Dame Te Atairangikaahu visited the East-West Center en route to Washington, D.C. It was just nine years after she had ascended to the role of Maori queen, acceding to the throne after the death of her father. Despite her reign still being in its infancy, the queen already had garnered the love of her people, heralding the political and cultural causes of the Maori people. Upon her death in 2006, Te Atairangikaahu was the longest reigning of any Maori monarch, presiding over the Maori tribes of New Zealand for 40 years. Although the position of Maori queen was only ceremonial in nature, Te Atairangikaahu utilized her role to shed light upon indigenous issues and promoted Maori arts and culture.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/maori/M2.jpg', headline: 'The story of Taranga, mother of Maui', description: 'An example of her reverence for traditional Maori arts can be found at the East-West Center’s John A. Burns Hall, where a carving in the poupou style is prominently displayed. For Maori, woodcarving is spiritual and each poupou represents the connection between the carver’s tribe and their ancestors. Thus, each poupou is treated with the same reverence one would give to the ancestors. The poupou exhibited at the East-West Center was gifted by Te Atairangikaahu during her 1979 visit to Hawai’i. Carved from tokara wood and inlaid with mother of pearls, the carving depicts the Maori mythological figure of Taranga, mother of Maui. In the piece Taranga is seen giving birth to Maui, a figure revered in Maori and much of Polynesian culture.' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/maori/thumbnail.jpg',
    centerpiece: 	'images/maori/thumbnail.jpg',
    geo_location: 	'21.3454146, -158.0179418', 
    lat: 			21.3454146,
    lon: 			-158.0179418
};

pathContent['kahuna'] = {
    name:		'Kahuna with Sacred Stone',
	subtitle: 	'Hamilton Library, 5th Floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kahuna/K1.jpg', headline: 'Another Charlot fragment', description: 'Jean Charlot was born in Paris, France, in 1898. In 1921, Charlot and his mother immigrated to Mexico. There, he continued his study of the arts, becoming close friends with many prominent Mexican artists. He was considered as one of the founders of Mexican muralism for his early role in creating public works of art as commissioned by the Mexico’s post-revolutionary governments. Charlot’s skill and knowledge in the fresco style had informed the techniques of leading post-revolutionary artists. Charlot’s fresco, “The Massacre in the [Aztec] Main Temple,” is considered as Mexican muralism’s first fresco. In 1949, Charlot was invited to join the University of Hawai’i at Manoa as a professor and an artist in residence. Throughout his stay in Hawai’i, he applied his experience in Mexico and love for indigenous folk art to Polynesian subjects and themes.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kahuna/K2.jpg', headline: 'Creating artwork for a class', description: 'An example of this work by Charlot can be found at the University of Hawai’i at Manoa’s Hamilton Library. Flanking the door to the Jean Charlot Collection on the fifth floor is a small stone tablet. Etched onto it in Charlot’s signature fresco style is a kahuna, or a wise man, holding a stone. The theme follows Charlot’s lifelong interest in indigenous folktales as the stone that the kahuna is holding is meant to contain power. Charlot created the fresco as part of an in-class demonstration for another professor, Helen Gilbert. The piece was moved from the University Art Department to the Library Collection in 2014.' },
    ],
    location: 		'Hamilton Library, 5th Floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/kahuna/thumbnail.jpg',
    centerpiece: 	'images/kahuna/thumbnail.jpg',
    geo_location: 	'21.3008,-157.8161', 
    lat: 			21.3008,
    lon: 			-157.8161
};

pathContent['natoma'] = {
    name:		'Natoma, Navajo Woman',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/natoma/N1.jpg', headline: 'Navajo-influenced work', description: 'Rudolf Carl “R.C.” Gorman was born in Chinle, Ariz., in 1931. Gorman came from a long line of Navajo artisans, holy men, and tribal leaders. Gorman’s father, Carl Nelson Gorman, was part of the Navajo Code Talkers of World War II, who developed the code used by American troops fighting in the Pacific. In 1968, Gorman received the first scholarship ever awarded by the Navajo Tribal Council to study at Mexico City College, where he was inspired by the aesthetics and techniques of Mexican social realists like Diego Rivera.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/natoma/N2.jpg', headline: 'The Picasso of American Indian artists', description: 'He admired the free form of the artists’ subjects and their bright, bold use of color. Much of their style informed his oeuvre, changing from his early abstraction to the abstract realism that would define his later works. He has been named by the New York Times as the Picasso of American Indian artists. Among Gorman’s favorite subjects are the women in his daily life. During his stint in the military, he practiced drawing by illustrating the girlfriends of his fellow troops. In 1988, he sculpted a series of Natoma statues. Made from bronze, the piece depicts a Native American woman, with her head held high and proud. One of the five statues in the series can be viewed at the East-West center to whom it was gifted by Gorman in 1998 as part of his one-person exhibition with the center.' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/natoma/thumbnail.jpg',
    centerpiece: 	'images/natoma/thumbnail.jpg',
    geo_location: 	'21.2969164,-157.8169485', 
    lat: 			21.2969164,
    lon: 			-157.8169485
};

pathContent['pakipika'] = {
    name:		'Pakipika',
	subtitle: 	'Inside John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pakipika/P1.jpg', headline: 'An activist frame of mind', description: 'Meleanna Aluli Meyer comes from a long line of Native Hawaiian activists. Her father, Emmett Aluli, co-founded the Protect Kaho’olawe ‘Ohana, which in the 1970s protested the military bombing of the island of Kaho’olawe, considered a sacred place by Native Hawaiians. The group also was one of the early influences that sparked the second Hawaiian renaissance of the 1970s and 1980s. Much of Meyer’s upbringing and background was surrounded by this type of activist mindset. “Peace and justice are foundations that have been laid by other before we arrived upon the scene,” Meyer wrote in her artist statement. “Strive for justice, seek the truth and speak to the heart of power, make a difference as you can be counted.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pakipika/P2.jpg', headline: 'Deep and vast depths of the ocean', description: 'She received a bachelor’s degree in design and photography from Stanford University and later on – with educators Keola Lake and Royal Fruehling as her mentors – she received her master’s degree in Educational Foundations from the University of Hawai’i at Manoa. Her piece at East-West Center was part of her work as an East-West grantee. Named Pakipika, or Pacific, the piece’s dark blue forms call to mind the deep and vast depths that surround Hawai’i’s island communities. It is done in Meyer’s typical style of abstract art. The colors and shapes blending together to form an image open to the viewer to interpret. “My further intent is to create stories,” she wrote. “Narratives that speak to the viewer on various levels.”' },
    ],
    location: 		'Inside John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/pakipika/thumbnail.jpg',
    centerpiece: 	'images/pakipika/thumbnail.jpg',
    geo_location: 	'21.2969164,-157.8169485', 
    lat: 			21.2969164,
    lon: 			-157.8169485
};

pathContent['seien'] = {
    name:		'Seien (Serene Garden)',
	subtitle: 	'Behind Jefferson Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/seien/S1.jpg', headline: 'An Ogata design', description: 'Ensconced behind Jefferson Hall is a stretch of lush grass, trickling waterfalls, and shady spaces. The East-West Center’s Seien or Peace Garden was a Japanese garden designed by leading landscape architect, Kenzo Ogata. It was a cooperative venture, financed by 22 Japanese business firms and involving specialists from Asia, the Pacific, and the United States.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/seien/S2.jpg', headline: 'Receiving Akihito’s blessings', description: 'During a 1964 trip to Hawai’i, Emperor Akihito – then just Prince Akihito – blessed the garden with a traditional hold and release ceremony of a koi fish into the garden and planted a coral shower tree along the garden’s steps.' },
    ],
    location: 		'Behind Jefferson Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/seien/thumbnail.jpg',
    centerpiece: 	'images/seien/thumbnail.jpg',
    geo_location: 	'21.2997,-157.8139', 
    lat: 			21.2997,
    lon: 		    -157.8139
};

pathContent['peace'] = {
    name:		'Hawai’i Peace Memorial',
	subtitle: 	'In front of the Kennedy Theatre',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/peace/P1.jpg', headline: 'Commemoration of Japanese immigrants', description: 'Emerging from the lawn of the Kennedy Theatre is an imposing structure. Hewn from granite, the free-standing piece at first seems to defy physics, with the top half balancing, improbably, on a granite globe. In the shadow of the trees overhead, the Hawai’i Peace Memorial stands in commemoration of the first Japanese immigrants who came to work in Hawai’i’s plantation fields.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/peace/P2.jpg', headline: 'Elements from a Buddhist perspective', description: '“It was by courage, sacrifice, and perseverance that they succeeded in establishing their roots deeply in the soil of their new land,” reads the tablet that dedicates the structure.<br/> The memorial mimics the Gorinto style, stone towers mainly seen at Buddhist temples and cemeteries. Each level of the piece is signified by an element of nature as indicated by the Japanese symbol carved onto the granite. They correspond to the five elements in the philosophy of Japanese Buddhism. Referred to as Godai, or the five great, these are commonly found in Buddhist architecture. Structures, like the Hawai’i Peace Memorial, are seen with five divisions to represent the five elements: creation, wind, fire, water, and earth.' },
    ],
    location: 		'In front of the Kennedy Theatre',
    sharing: 		'Share your story',
    thumbnail: 		'images/peace/thumbnail.jpg',
    centerpiece: 	'images/peace/thumbnail.jpg',
    geo_location: 	'21.2989,-157.8148', 
    lat: 			21.2989,
    lon: 		    -157.8148
};

pathContent['peace_pole'] = {
    name:		'Peace Pole',
	subtitle: 	'On the Campus Center grounds',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/peace_pole/P1.jpg', headline: 'A marker at every UH campus', description: 'In 1995, the University of Hawai’i at Manoa unveiled its first Peace Pole. The white, hand-carved structure was minimal, a phrase painted on each of its four sides. In fact, it was the same phrase only translated in English, Hawaiian, Japanese and Tagalog. In bold, inky letters it reads: “May Peace Prevail on Earth.” During its dedication ceremony, the piece seemed well-received, its unveiling accompanied by the melody of John Lennon’s song, “Imagine,” playing over the speakers.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/peace_pole/P2.jpg', headline: 'A fight for peace', description: 'However, Lou Ann Ha’aheo Guanson, the former director of the Spark M. Matsunaga Institute for Peace, admitted that the piece’s construction was not as peaceful as it seemed. <br>“We had difficulty fighting for the pole because there was an issue about the separation between religion and state,” Guanson, who was involved with the planning of the Peace Pole’s construction, said in a 2006 interview with UH Today. The Peace Pole is part of the May Peace Prevail on Earth movement, which began in the 1970s in Ishikawa, Japan. The movement grew out of the lectures that Masahisa Goi, founder of the world peace prayer movement, would have with a small number of peace workers. Today, it  has grown into a worldwide movement and is listed as a Non-Governmental Organization in affiliation with the United Nations. Part of the movement was to erect Peace Poles, first in Japan, then around the world, in the early 1980s. Today, Peace Poles can be found throughout the world. In Hawai’i, there is a Peace Pole at each UH system campus.' },
    ],
    location: 		'On the Campus Center grounds',
    sharing: 		'Share your story',
    thumbnail: 		'images/peace_pole/thumbnail.jpg',
    centerpiece: 	'images/peace_pole/thumbnail.jpg',
    geo_location: 	'21.2991402,-157.8197656', 
    lat: 			21.2991402,
    lon: 		    -157.8197656
};

pathContent['jakuan'] = {
    name:		'Jaku’an (Hut of Tranquility)',
	subtitle: 	'Near Jefferson Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/jakuan/J1.jpg', headline: 'A welcomed addition to the garden', description: 'Greeting you on the way to the Japanese Garden is a mysterious wooden structure, called Jaku’an (Hut of Tranquility). The tea house and its surrounding garden seem to blend into the garden’s tranquil atmosphere, and many confuse the tea house of being a part of the garden’s original plan. But the tea house was actually added nine years later as a gift from Genshitsu Sen, a 15th generation grand tea master. The structure was pre-cut and erected in Japan, then dismantled and shipped to Hawai’i to be reconstructed by Japanese craftsmen.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/jakuan/J2.jpg', headline: 'A tea house classroom', description: '“This is one of the only campuses in the nation were students can study Japan cultural studies in a comprehensive way,” said Mary McDonald, the director of the University of Hawai’i at Manoa’s Center for Japanese Studies, in a UH newsletter.<br/>After years of renovation, the tea house was reopened in 2015 and now serves as an educational resource for students wanting to study Japanese tea ceremonies.' },
    ],
    location: 		'Near Jefferson Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/jakuan/thumbnail.jpg',
    centerpiece: 	'images/jakuan/thumbnail.jpg',
    geo_location: 	'21.2997,-157.8139', 
    lat: 			21.2997,
    lon: 		    -157.8139
};

pathContent['thai'] = {
    name:		'Thai Pavilion',
	subtitle: 	'Near Jefferson Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/thai/T1.jpg', headline: 'A golden and royal venue', description: 'Along East-West Road is a curious golden structure, flanked by leaves and palm fronds. Sunbeams typically filter through the leaves overhead, encasing the structure in a light that lets it twinkle and gleam. This is the East-West Center’s Thai Pavilion.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/thai/T2.jpg', headline: 'Dedicated by a king', description: 'In 1967, Thailand’s King Bhumibol Adulyadej and Queen Sirikit dedicated this traditional sala, or pavilion, to the East-West Center as a extension of goodwill and the cultural harmony between their country and Hawai’i. It is one of only four pavilions outside of Thailand that bears the Royal Seal and is the only one personally dedicated by a king. It is a replica of a pavilion built for King Rama VI of Thailand, named Throne of the Miracle Vision. In 2006, the original pavilion had to be reconstructed due to aging. The new structure, which stands today, was built in Thailand and assembled at the university by a crew of traditional craftsmen, under the direction of Pinyo Suwankiri, a National Artist of Thailand. In 2008, Princess Maha Chakri Sirindhorn visited the East-West Center and dedicated the new pavilion.' },
    ],
    location: 		'Near Jefferson Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/thai/thumbnail.jpg',
    centerpiece: 	'images/thai/thumbnail.jpg',
    geo_location: 	'21.3001,-157.8141', 
    lat: 			21.3001,
    lon: 		    -157.8141
};

pathContent['kamakakuokalani'] = {
    name:		'Kumulipo',
	subtitle: 	'Kamakakuokalani Center',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kamakakuokalani/K1.jpg', headline: 'A mural in multiple dimensions', description: 'Greeting you as you walk up the steps of the Kamakakuokalani Center for Hawaiian Studies is a mural carved right into the building’s walls. Hewn from basalt and carved using resin, the massive piece illustrates the “Kumulipo” or the sacred creation chant of Native Hawaiians.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kamakakuokalani/K2.jpg', headline: 'Can you identify the myths?', description: 'Throughout the piece, created by Ipo Nihipali in 2002, are several mythological figures that play key roles in Native Hawaiian myths and ancestry.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kamakakuokalani/K3.jpg', headline: '', description: 'Born in Honolulu and raised in Wahiawa, “Kumulipo” artist Ipo Nihipali uses a style that could be described as whimsical and extremely detailed. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kamakakuokalani/K4.jpg', headline: '', description: 'This piece honors our island landscape from the sea to the mountains, through portrayals of both the real and the esoteric. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/kamakakuokalani/K5.jpg', headline: '', description: 'This style combines contemporary magic realism with aesthetics of the so-called “primitive painters.”' },
    ],
    location: 		'Kamakakuokalani Center',
    sharing: 		'Share your story',
    thumbnail: 		'images/kamakakuokalani/thumbnail.jpg',
    centerpiece: 	'images/kamakakuokalani/thumbnail.jpg',
    geo_location: 	'21.30493,-157.85788', 
    lat: 			21.30493,
    lon: 		    -157.85788
};

pathContent['whorl'] = {
    name:		'Whorl',
	subtitle: 	'Art Building courtyard',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/whorl/W1.jpg', headline: 'Artist inspiring artist', description: 'Jacqueline Rush Lee is a Hawaii-based sculptor known for her works using books, reconstructing and reimagining the significance and physical capabilities that these often quotidian objects hold. In 2012, she was inspired to be the University of Hawai’i Art and Art History Department’s artist in residence. She went on to construct a site-specific body of work. Titled “WHORL,” it explored the capacities of Rush Lee’s oeuvre of book-influenced sculptures but this time in Manoa’s tropical environment. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/whorl/W2.jpg', headline: 'From tree to book and back again', description: '“This recent work is inspired by a tropical environment in which erosion is prevalent,” she writes in an artist statement. “Processes that once initiated by hand create chance occurrences that reveal the unexpected or the poetic.” In WHORL, she sculpts book forms, which are then inserted into the cavity of a tree to simulate the natural features that a tree hollow would have. Over time, the books will disintegrate, essentially returning to their original forms in nature.' },
    ],
    location: 		'Art Building courtyard',
    sharing: 		'Share your story',
    thumbnail: 		'images/whorl/thumbnail.jpg',
    centerpiece: 	'images/whorl/thumbnail.jpg',
    geo_location: 	'21.2993197,-157.8175312', 
    lat: 			21.2993197,
    lon: 		    -157.8175312
};

pathContent['untitled1'] = {
    name:		'Untitled',
	subtitle: 	'Campus Center stairway',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled1/U1.jpg', headline: 'From art student to campus inscriber', description: 'Donald Yatomi was born in Okinawa, Japan, and moved to Hawai’i to study painting at the University of Hawai’i. He graduated from the university with a bachelor’s of fine arts in painting and then went on to receive a second B.F.A., this time in illustration, from the Art Center College of Design in California. Yatomi is best known for his style of contemporary realism, capturing the authenticity of his subjects in each stroke of his brush.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled1/U2.jpg', headline: 'Capturing a moment', description: 'One of his murals can be viewed between the second and third levels of Campus Center, in the stairway. This piece employs Yatomi’s typical style of realism, and many of the faces on the mural are based off of real students and staff at the university at the time of its creation in 1990.' },
    ],
    location: 		'Campus Center stairway',
    sharing: 		'Share your story',
    thumbnail: 		'images/untitled1/thumbnail.jpg',
    centerpiece: 	'images/untitled1/thumbnail.jpg',
    geo_location: 	'21.2982869,-157.8186422', 
    lat: 			21.2982869,
    lon: 		    -157.8186422
};

pathContent['adam'] = {
    name:		'Adam',
	subtitle: 	'Sinclair Library stairwell',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/adam/A1.jpg', headline: 'From painter to welder', description: 'Even though Moiliili resident Satoru Abe began his art career in the 1940s by painting, it wasn’t long before he made a name for himself by welding. This skinny figure, “Adam,” is in a seated position, located on the first-level stairwell of Sinclair Library. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/adam/A2.jpg', headline: 'What is he thinking?', description: 'A slender, bronze stick figure sits and crosses his curved arms over his bent legs. One must imagine his oval head looking up, since his face has no distinctive shapes on it. ' },
    ],
    location: 		'Sinclair Library stairwell',
    sharing: 		'Share your story',
    thumbnail: 		'images/adam/thumbnail.jpg',
    centerpiece: 	'images/adam/thumbnail.jpg',
    geo_location: 	'21.29839,-157.82063', 
    lat: 			21.29839,
    lon: 		    -157.82063
};

pathContent['anuenue'] = {
    name:		'Anuenue #2',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/anuenue/A1.jpg', headline: 'How you say Rainbow in Hawaiian', description: 'Anuenue means “Rainbow” in Hawaiian, and this three-piece tapestry on Hamilton Library’s second floor is just that, with colors ranging from deep purple to bright yellow, contrasting against the industrial beige walls.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/anuenue/A2.jpg', headline: 'Shape and movement in fibers', description: 'Woven into each panel is an arch that continues through each of the three panels, emulating the shape of a rainbow. Where two lines of beige wall show through, between the horizontal panels, a viewer might imagine the colors to be fluid and the carpet-like weaving to be waving. ' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/anuenue/thumbnail.jpg',
    centerpiece: 	'images/anuenue/thumbnail.jpg',
    geo_location: 	'21.30104,-157.81658', 
    lat: 			21.30104,
    lon: 		    -157.81658
};

pathContent['backyard'] = {
    name:		'Backyard Cooking',
	subtitle: 	'Inside the Law School',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/backyard/B1.jpg', headline: 'A backyard cookout', description: 'Preparation for a luau is shown on this 1977 mural by Mataumu Toelupe Alisa, titled “Backyard Cooking.” People prepare an imu for a pig being brought. Poi also is being pounded, and laulaus are being wrapped.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/backyard/B2.jpg', headline: 'Passing down poi pounding', description: 'A family circles around the ku\'i ai (poi pounding board), as a child learns how to prepare this integral staple of family meals.' },
    ],
    location: 		'Inside the Law School',
    sharing: 		'Share your story',
    thumbnail: 		'images/backyard/thumbnail.jpg',
    centerpiece: 	'images/backyard/thumbnail.jpg',
    geo_location: 	'21.29639,-157.81761', 
    lat: 			21.29639,
    lon: 		    -157.81761
};

pathContent['ryu'] = {
    name:		'Ryū',
	subtitle: 	'In John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/ryu/R1.jpg', headline: 'Behold, the dragon', description: 'The pieceʻs title, “Ryū,” is the Japanese word for dragon. In this calligraphy, artist Sano Tankyu depicts the transformation of the Japanese dragon. The character “ryū” is done in very old calligraphic style, representing the word as a fish-like creature transforming into a celestial being. A long serpentine curve’s metamorphosis emphasizes the high regard that Japanese culture has for dragons as mythological creatures. In certain Japanese myths, Emperor Jimmu, the legendary first ruler of Japan, was descended from Toyotama-hime, the daughter of the dragon sea god Ryūjin. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/ryu/R2.jpg', headline: 'A gift from alumni', description: 'This piece was given to the East-West Center by the 1978 East-West Center Japan Alumni Chapter. “EWCA chapter leader Peter Iizuka likened the dragon character to the East-West Center,” said the artwork description, “an earthly endeavor possessing the potential of being a powerful messenger of international understanding and peace.” ' },
    ],
    location: 		'In John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/ryu/thumbnail.jpg',
    centerpiece: 	'images/ryu/thumbnail.jpg',
    geo_location: 	'21.3454146,-158.0179418', 
    lat: 			21.3454146,
    lon: 		    -158.0179418
};

pathContent['gidayu'] = {
    name:		'Gidayu',
	subtitle: 	'In John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gidayu/G1.jpg', headline: 'From the Meiji Era', description: 'This painting was donated to the East-West Center in 2011 by Barbara B. Smith, Professor Emeritus of Music at the University of Hawai’i at Manoa and an important figure in Hawai’i’s music-and-culture scene for more than half a decade. The piece dates back to the late 19th century, also known as the Meiji Era, a period of art in Japan defined by its constantly shifting ideologies on style. Early during this period, increased contact with the west prompted campaigns for Europeanization and modernization by the government. This extended to every aspect of social and cultural life, including art. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gidayu/G2.jpg', headline: 'A tribute to puppet theater', description: 'The yōga, or western, style was meant to emulate the aesthetics of western artists, applying techniques in such mediums as watercolors, oil paintings, and pastels. But by the 1880s, Japanese art critics like Okakura Kakuzo criticized the romanticizing of western culture and called for a return to traditional Japanese aesthetics also known as the nihonga style. This piece – which illustrates Buranku, or a popular form of puppet theatre – is an example of this return to traditional styles. Using techniques and materials that have been developed for thousands of years, the aesthetic illustrated in this piece shows the style of Japanese art.' },
    ],
    location: 		'In John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/gidayu/thumbnail.jpg',
    centerpiece: 	'images/gidayu/thumbnail.jpg',
    geo_location: 	'21.3454146,-158.0179418', 
    lat: 			21.3454146,
    lon: 		    -158.0179418
};

pathContent['shwe'] = {
    name:		'Shwe Gyi Do',
	subtitle: 	'In John Burns Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/shwe/S1.jpg', headline: 'Sacred spirits of Myanmar', description: 'Born in Sagaing, Myanmar, U Sein Myint is considered by art critics as a leader in Myanmar’s culture and folk art. In his 20s, he trained under such artists as Paw Oo Thet and Win Pe Myint, painters credited with spearheading Myanmar’s modernist art movement. Sein Myint is best known for his works that depict, in excruciating detail, the legends of nats, sacred spirits worshipped throughout Myanmar. Since 1985, Sein Myint, has been translating these folk stories into intricately designed tapestries, such as the one that hangs at the John A. Burns Hall in the East-West Center.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/shwe/S2.jpg', headline: 'Illustrating Burmese weaving', description: 'This piece was a part of Sein Myint’s residency and 1996 exhibition at the East-West Center. The exhibit, titled Shwe Gyi Do, showed Sein Myint’s skills in traditional Burmese weaving techniques which he learned during his travels throughout rural Myanmar.' },
    ],
    location: 		'In John Burns Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/shwe/thumbnail.jpg',
    centerpiece: 	'images/shwe/thumbnail.jpg',
    geo_location: 	'21.3454146, -158.0179418', 
    lat: 			21.3454146,
    lon: 		    -158.0179418
};

pathContent['maka'] = {
    name:		'Maka’a, E ‘Ike Aku',
	subtitle: 	'In front of Marines Sciences',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka/M1.jpg', headline: 'Craft learned from a mechanic', description: 'Bumpei Akaji was born in 1921 in Lawai, Kauai. In 1942, he joined the decorated 442nd Infantry Regiment famous as a fighting unit composed entirely of second-generation Japanese Americans. During his military stay in Italy, he found artistic inspiration in the frescoes and mosaics of Florence and Ravenna. After the war, he stayed in Italy and went to school at the Academy of Fine Arts in Florence and the Academia de Belle Arti, Brera. In 1952, after returning to Honolulu, he became the first student to graduate with a Masters of Fine Arts in sculpture from the University of Hawaii at Manoa. He is known throughout the state for his large-scale copper structures, welded together using the knowledge he learned from a local mechanic. His most famous piece stands across of the Hawaii State Capitol. The Eternal Flame statue is in commemoration of the fallen soldiers from the attack on Pearl Harbor.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/maka/M2.jpg', headline: 'See the curve of Manoa Valley?', description: 'Akaji’s piece at the University of Hawai’i at Manoa, Maka’a, E ‘Ike Aku I Ke Awawa Uluwhi I Na Kuahiwi O Manoa, originally existed at the parking lot of Manoa Marketplace in the heart of Manoa Valley. It was given its new home at UH in 1994, though with competition from some community colleges who also hoped to acquire the piece. The sculpture, whose Hawaiian name translates to “Glowing Eyes Looking at the Lush Valley in the Mountains of Manoa,” is meant to evoke the curve of Manoa Valley and the generous clouds that usually hang overhead. It is typical of Akaji’s hammered copper style, and one can see the artistry involved in the shaping and welding of the individual pieces to form a cohesive, free-standing structure.' },
    ],
    location: 		'In front of Marines Sciences',
    sharing: 		'Share your story',
    thumbnail: 		'images/maka/thumbnail.jpg',
    centerpiece: 	'images/maka/thumbnail.jpg',
    geo_location: 	'21.343027,-157.8146', 
    lat: 			21.343027,
    lon: 		    -157.8146
};

pathContent['bridge'] = {
    name:		'Bridge, Bridge',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/bridge/B1.jpg', headline: 'Representing our local environment', description: 'Honolulu native Sidney Yee describes this painting to be a typical Saturday morning in our city’s Chinatown, and to be even more exact, on the corner of River and King streets. Not only does this picture depict the actual bridge, it symbolizes the fluid bridge between the present and the past.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/bridge/B2.jpg', headline: 'Symbols of the past overlaid on the present', description: 'Shadowy terra cotta soldiers fill the area under the bridge, representing our connection to the past.' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/bridge/thumbnail.jpg',
    centerpiece: 	'images/bridge/thumbnail.jpg',
    geo_location: 	'21.30102,-157.81652', 
    lat: 			21.30102,
    lon: 		    -157.81652
};

pathContent['crack'] = {
    name:		'Crack Seed Caper',
	subtitle: 	'On the side of the Physical Science Building',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/crack/C1.jpg', headline: 'The Great Manoa Crack Seed Caper', description: 'Jars filled with various assortments of salted, sweetened and dried nuts line the Ewa side of the second floor of the Physical Science Building. Once a vibrant array of colors, these nine jars have faded in the sun to a warm collection of browns and yellows.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/crack/C2.jpg', headline: 'Looking over the merchandise', description: 'Maybe the best views of this mural are from the second story of the neighboring building, Bilger Hall. Names of the students responsible for painting this piece appear in the leftmost jar.' },
    ],
    location: 		'On the side of the Physical Science Building',
    sharing: 		'Share your story',
    thumbnail: 		'images/crack/thumbnail.jpg',
    centerpiece: 	'images/crack/thumbnail.jpg',
    geo_location: 	'21.17570,-157.48580', 
    lat: 			21.17570,
    lon: 		    -157.48580
};

pathContent['chinese'] = {
    name:		'Chinese Soldier',
	subtitle: 	'Hamilton Library, 4th floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/chinese/C1.jpg', headline: 'A terracotta sentry', description: 'More than 8,000 terracotta warriors and horses have been found in the Mausoleum of the First Qin Emperor. This replica appears modeled after an infantry, calvary or chariot warrior, meant for the purpose of protecting the Emperor. Standing nearly 6 feet tall, these warriors can weigh up to 700 pounds. The duel-layer gown this replica is wearing shows that this is a higher ranking soldier. Knots and laces adorning the smooth leather suggest that this may have been a Qin general. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/chinese/C2.jpg', headline: 'Connection to the Qin Mausoleum', description: 'This particular replica was given to the university by Nobumoto Tanahashi in 1987, the same year the Mausoleum became listed as a World Heritage Site. Tanahashi was a Japanese businessman, whose personal mission was world peace.' },
    ],
    location: 		'Hamilton Library, 4th floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/chinese/thumbnail.jpg',
    centerpiece: 	'images/chinese/thumbnail.jpg',
    geo_location: 	'21.30095,-157.8161', 
    lat: 			21.30095,
    lon: 		    -157.8161
};

pathContent['commencement'] = {
    name:		'Commencement',
	subtitle: 	'Bachman Hall, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: '', headline: 'About the Jean Charlot Collection at UH', description: '<iframe width="100%" height="300" src="https://www.youtube.com/embed/cy9ODCAKF9s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/commencement/C1.jpg', headline: 'A wall-length fresco', description: 'Once a vibrant fresco depicting a commencement ceremony, this painting reaches down the long hallway of Bachman Hall.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/commencement/C2.jpg', headline: 'Another work by Charlot', description: 'Details of a college graduation are painted by artist Jean Charlot. Born in France at the turn of the 20th century, Charlot came to the University of Hawaii in 1949 and became a professor.' },
    ],
    location: 		'Hamilton Library, 4th floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/commencement/thumbnail.jpg',
    centerpiece: 	'images/commencement/thumbnail.jpg',
    geo_location: 	'21.29724,-157.81986', 
    lat: 			21.29724,
    lon: 		    -157.81986
};

pathContent['defining'] = {
    name:		'Defining Moment',
	subtitle: 	'Hamilton Library, 3rd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/defining/D1.jpg', headline: 'Mapping the destruction', description: 'Inspired by post-flood reconstruction of the libraries’ map collection, artist Ross Togashi used mixed media to represent the view from his mind’s eye. The year following the library’s devastating flood in 2004, which filled the basement with water, former map keeper Togashi said he wanted to make something that represented his feelings regarding the destruction and rebuilding.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/defining/D2.jpg', headline: 'Inspired by a flood', description: 'Chaos and disorder are a few of the feelings you get from seeing a scaled-down representation using a variety of materials. A chair thrown through a window. Stains shining through.' },
    ],
    location: 		'Hamilton Library, 3rd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/defining/thumbnail.jpg',
    centerpiece: 	'images/defining/thumbnail.jpg',
    geo_location: 	'21.30074,-157.8161', 
    lat: 			21.30074,
    lon: 		    -157.8161
};

pathContent['flight'] = {
    name:		'Flight to the Sun',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/flight/F1.jpg', headline: 'Mapping the destruction', description: 'Inspired by post-flood reconstruction of the libraries’ map collection, artist Ross Togashi used mixed media to represent the view from his mind’s eye. The year following the library’s devastating flood in 2004, which filled the basement with water, former map keeper Togashi said he wanted to make something that represented his feelings regarding the destruction and rebuilding.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/flight/F2.jpg', headline: 'Inspired by a flood', description: 'Chaos and disorder are a few of the feelings you get from seeing a scaled-down representation using a variety of materials. A chair thrown through a window. Stains shining through.' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/flight/thumbnail.jpg',
    centerpiece: 	'images/flight/thumbnail.jpg',
    geo_location: 	'21.30051,-157.81609', 
    lat: 			21.30051,
    lon: 		    -157.81609
};

pathContent['nana'] = {
    name:		'Nana I Ke Kumu',
	subtitle: 	'Hamilton Library, 1st floor stairwell',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/nana/N1.jpg', headline: 'Where does it come from?', description: 'Three panels of cloth, covering redwood, depict people in traditional Hawaiian clothing illustrating their cultural roots. “Nana I Ke Kumu” translates to “Look to the Source.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/nana/N2.jpg', headline: 'Education comes from somewhere', description: 'Cultural specialist Charles Kauluwehi Maxwell, Sr., wrote that ancient Hawaiians used this phrase to describe the practice of “educating the youth to seek answers from the elderly people around them.”' },
    ],
    location: 		'Hamilton Library, 1st floor stairwell',
    sharing: 		'Share your story',
    thumbnail: 		'images/nana/thumbnail.jpg',
    centerpiece: 	'images/nana/thumbnail.jpg',
    geo_location: 	'21.30051,-157.81604', 
    lat: 			21.30051,
    lon: 		    -157.81609
};

pathContent['rain'] = {
    name:		'Rain’s Reflections',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rain/R1.jpg', headline: 'Subtle color, meanings', description: 'A wispful white and blue acrylic painting that looks similar to watercolor paintings that artist and former UH Manoa Art Department chairman John Wisnosky created during this period of his life. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rain/R2.jpg', headline: 'White on white, with a bit of blue', description: 'Very light clouds of blue touch on a white background. Against a white wall, this can be easy to miss.' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/rain/thumbnail.jpg',
    centerpiece: 	'images/rain/thumbnail.jpg',
    geo_location: 	'21.30103,-157.81655', 
    lat: 			21.30103,
    lon: 		    -157.81655
};

pathContent['fourth'] = {
    name:		'The Fourth Sign',
	subtitle: 	'In front of the Art Building',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fourth/F1.jpg', headline: 'A zodiac sculpture', description: 'Latin for crab, Cancer is the fourth zodiac sign and is symbolically represented by this large steel structure.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/fourth/F2.jpg', headline: 'A team effort', description: 'Guest professor and sculptor Tony Smith taught a class in the summer of ‘69 and came up with the concept of this piece during that time. It wasn’t until half a decade later, though, with the help of UH professor and sculptor Mamoru Sato, that the piece was successfully fabricated.' },
    ],
    location: 		'In front of the Art Building',
    sharing: 		'Share your story',
    thumbnail: 		'images/fourth/thumbnail.jpg',
    centerpiece: 	'images/fourth/thumbnail.jpg',
    geo_location: 	'21.299690,-157.817452', 
    lat: 			21.299690,
    lon: 		    -157.817452
};

pathContent['pigeon'] = {
    name:		'The Pigeon',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pigeon/P1.jpg', headline: 'A traditional batik style', description: 'Yellows, pinks and blues highlight a beige and brown background on cloth. When looking close, small white dots make up the mass of design on this cloth.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pigeon/P2.jpg', headline: 'A complicated cloth-dying process', description: 'Wax was drawn on this cloth in the shape of “pigeon eyes,” and the cloth was dyed around it. The title of this painting, in turn, is “The Pigeon.”' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/pigeon/thumbnail.jpg',
    centerpiece: 	'images/pigeon/thumbnail.jpg',
    geo_location: 	'21.30051,-157.81609', 
    lat: 			21.30051,
    lon: 		    -157.81609
};

pathContent['untitled2'] = {
    name:		'Untitled',
	subtitle: 	'Hamilton Library, 2nd floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled2/U1.jpg', headline: 'A focus on technique', description: 'An abstract acrylic painting filled with whites and blues highlights the different patterns and brush strokes artists can make with acrylic paints.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled2/U2.jpg', headline: 'Another work by UH’s Wisnosky', description: 'White hairlike-whisps fall down over a foggy-blue background in former Art Department Chairman John Wisnosky’s Untitled painting from 1984.' },
    ],
    location: 		'Hamilton Library, 2nd floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/untitled2/thumbnail.jpg',
    centerpiece: 	'images/untitled2/thumbnail.jpg',
    geo_location: 	'21.30051,-157.81604', 
    lat: 			21.30051,
    lon: 		    -157.81604
};

pathContent['untitled3'] = {
    name:		'Untitled',
	subtitle: 	'Inside Kuykendall Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled3/U1.jpg', headline: 'Ceramic on concrete', description: 'Ceramicist Isami Enomoto designed this abstract ceramic mural to adorn the concrete walls of Kuykendall Hall.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled3/U2.jpg', headline: 'A silverish look', description: 'Thick brush strokes of deep brown, beige, white and blues cover this viney piece and, from a far distance, may appear to be silver.' },
    ],
    location: 		'Inside Kuykendall Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/untitled3/thumbnail.jpg',
    centerpiece: 	'images/untitled3/thumbnail.jpg',
    geo_location: 	'21.298278,-157.817444', 
    lat: 			21.298278,
    lon: 		    -157.817444
};

pathContent['untitled4'] = {
    name:		'Untitled',
	subtitle: 	'Keller Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled4/U1.jpg', headline: 'Art as a part of architecture', description: 'Standing four-stories tall, stained-glass enthusiasts can appreciate this work from within the walls of Keller Hall or from the outside. Artists Murray and Phyllis Turnbull are honored for their untitled creation in a small plaque next to the entryway doors, memorializing the year 1959. Turnbull is also known as the founder of UH Manoa’s East-West Center and for his other works of art, one being a series of concrete wall structures in the university’s Music Building.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled4/U2.jpg', headline: 'Integrated into the design', description: 'During the brightest hours of the day, vibrant blues, reds, browns and turquoise shine through the small hallways of Keller Hall. Each stairwell has a smaller version of the Turnbulls’ four-story stained glass creation. Because this piece of art is also the building’s main source of light, it can be enjoyed from any focal point in the building.' },
    ],
    location: 		'Keller Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/untitled4/thumbnail.jpg',
    centerpiece: 	'images/untitled4/thumbnail.jpg',
    geo_location: 	'21.299940,-157.815772', 
    lat: 			21.299940,
    lon: 		    -157.815772
};

pathContent['wa'] = {
    name:		'Wa',
	subtitle: 	'Inside Bachman Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wa/W1.jpg', headline: 'Looking for Harmony? Here it is', description: 'This 1982 clay sculpture is named “Wa,” which translates from Japanese into English as harmony. This word gives the meaning of unity within a group.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wa/W2.jpg', headline: 'Made by a KCC lecturer', description: 'Wayne Miyata worked as a lecturer at Kauai Community College.' },
    ],
    location: 		'Inside Bachman Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/wa/thumbnail.jpg',
    centerpiece: 	'images/wa/thumbnail.jpg',
    geo_location: 	'21.29721,-157.81988', 
    lat: 			21.29721,
    lon: 		    -157.81988
};

pathContent['water_garden'] = {
    name:		'Water Garden',
	subtitle: 	'Outside Krauss Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water_garden/W1.jpg', headline: 'Built and rebuilt', description: 'Originally created in 1948 by Richard Tongg and Lorraine Kuck, this water garden is an example of early 20th century landscape design. It was restored by Betsy Sakata in 1996. She is an expert in water lilies.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/water_garden/W2.jpg', headline: 'Tongg designs elsewhere', description: 'The Asian gardens at Honolulu International Airport also were were designed by Richard Tongg.' },
    ],
    location: 		'Outside Krauss Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/water_garden/thumbnail.jpg',
    centerpiece: 	'images/water_garden/thumbnail.jpg',
    geo_location: 	'21.17509,-157.49034', 
    lat: 			21.17509,
    lon: 		    -157.49034
};

pathContent['pair'] = {
    name:		'Pair of Fu Dogs',
	subtitle: 	'In front of Jefferson Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pair/P1.jpg', headline: 'Added, upon request', description: 'The pair of Fu Dogs outside of Jefferson Hall at the East-West Center were a gift from Taiwan in 1971, at the request of UH students from that region of the world.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pair/P2.jpg', headline: 'A male and a female', description: 'Consisting of one male (makai side) and one female (mauka side), both lion-dogs sit with their heads turned toward one another, their hands on a round ball. ' },
    ],
    location: 		'Outside Krauss Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/pair/thumbnail.jpg',
    centerpiece: 	'images/pair/thumbnail.jpg',
    geo_location: 	'21.299077,-157.814095', 
    lat: 			21.299077,
    lon: 		    -157.814095
};

pathContent['pepper'] = {
    name:		'Pepper Dog',
	subtitle: 	'Hamilton Library, CILC Lab',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pepper/P1.jpg', headline: 'A dream about a cat and dog', description: 'The 1996 triptych by Sally French depicts a fantasy of the artist’s in three parts. “This piece refers to a dream I had in which our family cat (Bobby) was pressing bright green frozen peas, one by one, into the black fur on the head of our other cat, Poochie. I awoke with a migraine,” said French.  The full piece, “Pepper Dog Lovingly Chews on Bobby Cat While … Bobby Puts Frozen Peas on Pooche\'s Head, To Help with a Migraine,” depicts the strange scene in bright pastels contrasted in the dark browns and blacks of the hand-painted lettering.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/pepper/P2.jpg', headline: 'By a Kauai artist', description: 'French was born in Stockton, Calif., in 1947, and now resides in Kalaheo, Kauai. She maintained her studio, Double Dog DARE Studio, for more than 30 years and opened it to the public in 2014. The studio offers artist residency and monotype printing workshops.' },
    ],
    location: 		'Hamilton Library, CILC Lab',
    sharing: 		'Share your story',
    thumbnail: 		'images/pepper/thumbnail.jpg',
    centerpiece: 	'images/pepper/thumbnail.jpg',
    geo_location: 	'21.3005721,-157.8160977', 
    lat: 			21.3005721,
    lon: 		    -157.8160977
};

pathContent['hamilton_lib'] = {
    name:		'Hamilton Library, CILC Lab',
	subtitle: 	'Hamilton Library, CILC Lab',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hamilton_lib/H1.jpg', headline: 'In a churn of water', description: 'On loan from the Hawaii State Foundation on Culture and the Arts, "Swimmer\'s Quilt" is about losing one\'s identity in a pool full of swimmers, a recurring theme in Mari Sakamoto\'s artworks. "In the annual Waikiki Roughwater Swim all wear the same caps, splash water in the same manner, and make a very beautiful pattern,” Sakamoto told the Hawaii State Art Museum.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hamilton_lib/H2.jpg', headline: 'Same theme, different medium', description: 'In comparison to Sakamoto’s paintings, “Swimmer’s Quilt” presents the group identity of a crowd in pattern stitching, a medium that conveys the idea in “a warm and comforting way.”' },
    ],
    location: 		'Hamilton Library, CILC Lab',
    sharing: 		'Share your story',
    thumbnail: 		'images/hamilton_lib/thumbnail.jpg',
    centerpiece: 	'images/hamilton_lib/thumbnail.jpg',
    geo_location: 	'21.3005721, -157.8160977', 
    lat: 			21.3005721,
    lon: 		    -157.8160977
};

pathContent['hamilton_painting'] = {
    name:		'Hamilton painting',
	subtitle: 	'Hamilton Library, circulation desk',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hamilton_painting/H1.jpg', headline: 'A president with integrity', description: 'This portrait of Thomas Hale Hamilton was painted by Eve Inceldon in oil on canvas and presented by the Class of 1968. Thomas Hale Hamilton moved to Oahu to serve as the University of Hawaii president in January 1963, after working as the president of the State College of New York in Albany. Hamilton resigned in December 1968, after a dispute over the tenure of a political science professor. The professor, Oliver Lee, was a critic of the Vietnam war. While he was previously sent a letter of intent to be granted tenure, he was later denied tenure for his actions as a faculty advisor to a group of students who “issued a statement calling for the sabotage of United States military forces,” according to New York Times reporting at the time.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hamilton_painting/H2.jpg', headline: 'Making a stand for academic responsibility', description: '“Dr. Hamilton said that his resignation represented a stand for ‘academic responsibility,’” according to the New York Times. “[He said] he found himself in direct conflict with an agency of the faculty government.”' },
    ],
    location: 		'Hamilton Library, circulation desk',
    sharing: 		'Share your story',
    thumbnail: 		'images/hamilton_painting/thumbnail.jpg',
    centerpiece: 	'images/hamilton_painting/thumbnail.jpg',
    geo_location: 	'21.3003806,-157.8159763', 
    lat: 			21.3003806,
    lon: 		    -157.8159763
};

pathContent['tickets_home'] = {
    name:		'Tickets Home',
	subtitle: 	'Hamilton Library, microfilm room',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/tickets_home/T1.jpg', headline: 'A series of prints', description: 'A leader in the printmaking community in Hawaii, Laura Smith’s works invite the viewer to interact and interpret their own meanings. A former Executive Director of the Honolulu Printmakers, Smith was also one of the founders of the Honolulu Printmaking Workshop. Her works can be found in the Honolulu Museum of Art, and the Hawaii State Art Museum, as well as other public and private collections. Smith has worked with multiple mediums to create her prints, three of her works, on loan from the Hawaii State Foundation for Culture and the Arts, include methods such as woodcut, serigraph, and linocut screenprint.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/tickets_home/T2.jpg', headline: 'What are the tickets for?', description: 'In “Tickets Home,” a woodcut screenprint, depicting three figures, two appear to hold paper tickets, while looking at one another. Like the “Birthday Party Guest,” “Tickets Home” uses mixed methods of woodcut stamping, and screenprinting achieve the contrasting blends of bold color and sharp patterns.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/tickets_home/T3.jpg', headline: 'Cut into linoleum', description: '“Night” is a linocut screenprint, a technique wherein a design is cut into linoleum to stamp onto a paper (or other surface).' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/tickets_home/T4.jpg', headline: 'Another printmaking process on display', description: '“Birthday Party Guest” was created with woodcut and serigraph printing, and paper cut outs. Serigraph printing is a screen printing technique which uses silk screens stretched over a frame, with areas blocked off by a stencil, ink is spread over the screen, and forced through the fabric to be printed on the paper. Different types of screens are used to achieve different levels of color and texture.' }
    ],
    location: 		'Hamilton Library, microfilm room',
    sharing: 		'Share your story',
    thumbnail: 		'images/tickets_home/thumbnail.jpg',
    centerpiece: 	'images/tickets_home/thumbnail.jpg',
    geo_location: 	'21.300381,-157.816116', 
    lat: 			21.300381,
    lon: 		    -157.816116
};

pathContent['wallhanging'] = {
    name:		'Wallhanging',
	subtitle: 	'Hamilton Library, microfilm room',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wallhanging/W1.jpg', headline: 'Pheasant feathers and chenille', description: 'Jean Williams’ Wallhanging is a three dimensional woven piece made with pheasant feathers and chenille, a velvety yarn, spun and dyed by the artist. Williams originally taught herself weaving and and fiber arts. She later studied at the University of Hawaii at Manoa, where she also worked as a lecturer. Williams’ art incorporates both synthetic and natural fibers, including yarns she spins herself, which help give structure to her multidimensional pieces.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wallhanging/W2.jpg', headline: 'Using local materials', description: 'Williams also experiments with using local plant and vegetable dyes, as well as organic materials found in the environment, according to the Public Art Archive. Wallhanging is on loan from the Hawaii State Foundation on Culture and the Arts.' },
    ],
    location: 		'Hamilton Library, microfilm room',
    sharing: 		'Share your story',
    thumbnail: 		'images/wallhanging/thumbnail.jpg',
    centerpiece: 	'images/wallhanging/thumbnail.jpg',
    geo_location: 	'21.300381,-157.816116', 
    lat: 			21.300381,
    lon: 		    -157.816116
};

pathContent['wisdom'] = {
    name:		'Wisdom of the East',
	subtitle: 	'Inside Jefferson Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wisdom/W1.jpg', headline: 'The hand of God', description: 'Wisdom of the East is a 13x16-foot fresco mural in the Makai starwell of Jefferson Hall, painted by Indonesian expressionist artist Affandi. According to the Affandi Museum, it depicts the hand of God reaching across the ocean to the West, while holding Gandhi, Lo The, and Semar, a wiseman of Indonesian Epic.', caption: 'Courtesy of the East-West Center' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/wisdom/W2.jpg', headline: 'Restored in 2009', description: 'The work is part of a collaboration with Jean Charlot, who created its counterpart, Wisdom of the West, located on the Mauka side stairwell of the hall in 1967. Both murals were restored in January 2009 by a visiting team from the Winterthur Museum and University of Delaware graduate program in art conservation.' },
    ],
    location: 		'Inside Jefferson Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/wisdom/thumbnail.jpg',
    centerpiece: 	'images/wisdom/thumbnail.jpg',
    geo_location: 	'21.299554,-157.814357', 
    lat: 			21.299554,
    lon: 		    -157.814357
};

pathContent['vvv'] = {
    name:		'VVV',
	subtitle: 	'QLC, first floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/vvv/V1.jpg', headline: 'A hero’s journey', description: 'Created in 1995 by Bumpei Akaji, “VVV” symbolizes courage and dedication. It was based off a Japanese folk story called “Momotaro.” That story was about a young boy who came from “humble beginnings” and went on to overcome adversaries and hardships to help save his village.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/vvv/V2.jpg', headline: 'Connected to Pearl Harbor', description: 'The artwork is located on the first-floor entrance of the Queen Liliuokalani Center for Student Services (the QLC). It is a copper sculpture. The artwork resembles a cup. When Pearl Harbor was attacked on Dec. 7, 1941, students of the Reserve Officers’ Training Corps were required to join the military. “VVV” stands for Varsity Victory Volunteers, which was a civilian unit that was composed of almost entirely Japanese Americans.' },
    ],
    location: 		'QLC, first floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/vvv/thumbnail.jpg',
    centerpiece: 	'images/vvv/thumbnail.jpg',
    geo_location: 	'21.30132,-157815803', 
    lat: 			21.30132,
    lon: 		    -157.815803
};

pathContent['untitled5'] = {
    name:		'Untitled',
	subtitle: 	'In front of Orvis Auditorium',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled5/U1.jpg', headline: 'Visual art about music', description: 'In front of the university’s music auditorium is this greenish metal sculpture created by Edward Brownlee in 1962. The sculpture shows different pieces of different instruments, but these instruments look like something out of a Mad Hatter’s tea party or like part of a puzzle.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/untitled5/U2.jpg', headline: 'A pioneering artist in Hawaii', description: 'Brownlee also created the “Hawkeye” sculpture on the lower campus. Brownlee was born in Portland, Ore., in 1929. He was an Army veteran, and after leaving the Army, Brownlee studied at Oregon State University as well as the California College of Arts and Crafts. Brownlee then went to the University of Hawaii in 1954, becoming the first person at UH to receive a master’s degree in fine arts.' },
    ],
    location: 		'In front of Orvis Auditorium',
    sharing: 		'Share your story',
    thumbnail: 		'images/untitled5/thumbnail.jpg',
    centerpiece: 	'images/untitled5/thumbnail.jpg',
    geo_location: 	'21.296102,-157.820323', 
    lat: 			21.296102,
    lon: 		    -157.820323
};

pathContent['nth'] = {
    name:		'To the Nth Power',
	subtitle: 	'In front of Shidler Hall',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/nth/N1.jpg', headline: 'The interconnectedness of currency', description: '“To the Nth Power” was created in 1971 by Charles W. Watson. The sculpture has five reddish-brown circles intertwining, which represent money.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/nth/N2.jpg', headline: 'From Canada to Oahu', description: 'Watson was born in Guelph, Ontario, Canada, but died in Kaneohe, Hawaii. Besides at UH, the Honolulu Museum of Art’s Spalding House also features Watson’s work.' },
    ],
    location: 		'In front of Shidler Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/nth/thumbnail.jpg',
    centerpiece: 	'images/nth/thumbnail.jpg',
    geo_location: 	'21.3011,-157.8200', 
    lat: 			21.3011,
    lon: 		    -157.8200
};

pathContent['sumotori'] = {
    name:		'Sumotori (Sumo Wrestler)',
	subtitle: 	'In front of Orvis Auditorium',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/sumotori/S1.jpg', headline: 'The size of a sumo', description: 'Created by Greg Culman in 1975, this stone white-ish statue conveys the size of a sumo wrestler. It is a rock sculpture that shows a wrestler crossing his arms, but it does not have a lower body. The artwork has some discoloration and cracks. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/sumotori/S2.jpg', headline: 'History and tradition', description: 'The sculpture is said to be a mixture of the history of a sumo wrestler intertwined with traditions that many sumo wrestlers still practice to this day.' },
    ],
    location: 		'In front of Orvis Auditorium',
    sharing: 		'Share your story',
    thumbnail: 		'images/sumotori/thumbnail.jpg',
    centerpiece: 	'images/sumotori/thumbnail.jpg',
    geo_location: 	'21.296143,-157.820643', 
    lat: 			21.296143,
    lon: 		    -157.820643
};

pathContent['loyalty'] = {
    name:		'Spirit of Loyalty',
	subtitle: 	'QLC, ground floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/loyalty/L1.jpg', headline: 'Inspired by the university and this place', description: 'When light is trapped within the artwork, it is known as “chu gi – the heart of loyalty and perseverance in the face of adversary.” Like the “Spirit of Manoa” artwork, at the Manoa Public Library, also by Mills, this sculpture has drawn on the history of UH Manoa and the community, inspiring a “Spirit of Loyalty.”' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/loyalty/L2.jpg', headline: 'By a current UH professor', description: 'This work of art sits on a stone platform, and it is made out of bronze and glass. It was created in 1995. When the lights hits it, this triangular stone comes alive as a magical and sparkling piece of art that works sort of like a prism, looking sort of like water streaming down a mirror. The artwork is a pale green and blue, with a tinge of gray. Mills works as a glass-art professor at the University of Hawaii at Manoa.' },
    ],
    location: 		'QLC, ground floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/loyalty/thumbnail.jpg',
    centerpiece: 	'images/loyalty/thumbnail.jpg',
    geo_location: 	'21.300275,-157.818447', 
    lat: 			21.300275,
    lon: 		    -157.818447
};

pathContent['buddha'] = {
    name:		'Seated Amida Buddha',
	subtitle: 	'Hamilton Library, 4th floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/buddha/B1.jpg', headline: 'Made in the 15th century', description: 'The date of this work and who made it are unknown, but it appears to be from the 15th century, making it one of the oldest artworks at UH.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/buddha/B2.jpg', headline: 'How did it get to Hawaii?', description: 'This is a wood and lacquer sculpture. This buddha appears to be in meditation. How it came to Hawaii and what it has seen throughout the centuries is a mystery.' },
    ],
    location: 		'Hamilton Library, 4th floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/buddha/thumbnail.jpg',
    centerpiece: 	'images/buddha/thumbnail.jpg',
    geo_location: 	'21.300902,-157.816191', 
    lat: 			21.300902,
    lon: 		    -157.816191
};

pathContent['rosarito'] = {
    name:		'Rosarito',
	subtitle: 	'Hamilton Library, basement',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rosarito/R1.jpg', headline: 'From ethereal to people', description: 'Wisnosky was a painter and also the former chairman of the art department at the University of Hawaii at Manoa. He is best known for his use of acrylic and watercolor. His early works showcased “ethereal clouds and valleys achieved with delicate air-brush technique.” This 1995 work, though is quite different.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rosarito/R2.jpg', headline: 'Donated by the Wisnosky family', description: 'It was a gift to the library from Wisnosky’s wife, Merium, in 2012.' },
    ],
    location: 		'Hamilton Library, basement',
    sharing: 		'Share your story',
    thumbnail: 		'images/rosarito/thumbnail.jpg',
    centerpiece: 	'images/rosarito/thumbnail.jpg',
    geo_location: 	'21.300367,-157.815909', 
    lat: 			21.300367,
    lon: 		    -157.815909
};

pathContent['rainbow_spirit'] = {
    name:		'Rainbow Spirit',
	subtitle: 	'In front of Stan Sheriff Center',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/R1.jpg', headline: '', description: 'Did you know that when the sun goes down, Rainbow Spirit actually lights up? If you aren’t able to view this sculpture at night, click the Video link below to see what it looks like. <iframe width="560" height="315" src="https://www.youtube.com/embed/mhArUIku0KM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: '', headline: '', description: 'Rainbow Spirit can be seen from the practice room for the University of Hawaii at Manoa cheerleaders. For this reason, they have developed a very special connection to the art piece, and over the years, they have developed a special tradition that dates back to 1998. Click the video below to hear from the Cheerleading Coach, Michael Baker, on how it all got started. <iframe width="560" height="315" src="https://www.youtube.com/embed/7-sKIKzDsW8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: '', headline: '', description: 'Kealoha Feliciano is an 8-year veteran of the University of Hawaii Cheerleading team. He is a leader within the program and has been able to participate in the Rainbow photo tradition for many years. Click the video below for his perspective on Rainbow Spirit. <iframe width="560" height="315" src="https://www.youtube.com/embed/68Kl6kARIvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: '', headline: '', description: 'Karlee Shay is a freshman and a first-year participant on the Cheerleading team. Although she has not been able to participate in the rainbow photo tradition before, it has been her dream to be on the Hawaii Cheerleading team since she was in seventh grade. Before making the team, she followed the Hawaii Cheer Instagram page closely and has seen the team photos at the statue. Click below for her perspective on the Rainbow Statue. <iframe width="560" height="315" src="https://www.youtube.com/embed/8npBSL0tpa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: '', headline: '', description: 'If you are curious about what some of these team photos look like, pick a year below from 1997 to 2019. You can see how the people, the uniforms, and style changes, but the one thing that has remained the same is the iconic Rainbow Spirit.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/1996-7.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/1997-98.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/1998-99.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2003-4.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2004-5.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2005-6.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2007-8.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2009-10.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2010-11.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2012-13.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2013-14.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2014-15.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2015-16.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2016-17.JPG', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2017-18.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2018-19.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rainbow_spirit2/2019-20.jpg', headline: '', description: '' },
    ],
    location: 		'In front of Stan Sheriff Center',
    sharing: 		'Share your story',
    thumbnail: 		'images/rainbow_spirit/thumbnail.jpg',
    centerpiece: 	'images/rainbow_spirit/thumbnail.jpg',
    geo_location: 	'21.294094,-157.818419', 
    lat: 			21.294094,
    lon: 		    -157.818419
};

pathContent['shinto_dogs'] = {
    name:		'Shinto Dogs',
	subtitle: 	'Hamilton Library entrance',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/shinto_dogs/S1.jpg', headline: 'Guardians of the library', description: 'Known as “Animal Guardian Figures,” these “lion-dog” figures were brought from Japan in 1924 to be placed at the Shinto Wakamiya Inari Shrine, which was on King Street.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/shinto_dogs/S2.jpg', headline: 'At UH since World War II', description: 'These dogs were moved to UH Manoa in 1942.' },
    ],
    location: 		'Hamilton Library entrance',
    sharing: 		'Share your story',
    thumbnail: 		'images/shinto_dogs/thumbnail.jpg',
    centerpiece: 	'images/shinto_dogs/thumbnail.jpg',
    geo_location: 	'21.300348,-157.815784', 
    lat: 			21.300348,
    lon: 		    -157.815784
};

pathContent['neumes'] = {
    name:		'Neumes o Hawaii',
	subtitle: 	'In front of Orvis Auditorium',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/neumes/N1.jpg', headline: 'A representation of breath', description: '“Neume” means breath, and that is a basic element for both the Western and Eastern musical notations.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/neumes/N2.jpg', headline: 'In a state of disrepair', description: '“Neumes o Hawaii” was created in 1976 by Suzi Pleyte Horan. As a ceramic tile bench, it is both colorful and fades into the landscape. If you look closely, though, hieroglyphics are engraved on the tiles and some of them are damaged or missing.' },
    ],
    location: 		'In front of Orvis Auditorium',
    sharing: 		'Share your story',
    thumbnail: 		'images/neumes/thumbnail.jpg',
    centerpiece: 	'images/neumes/thumbnail.jpg',
    geo_location: 	'21.296093,-157.820411', 
    lat: 			21.296093,
    lon: 		    -157.820411
};

pathContent['mind'] = {
    name:		'Mind and Heart',
	subtitle: 	'QLC, ground floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mind/M1.jpg', headline: 'A burning symbol', description: '“Mind and Heart” was created by LInda Yamamoto in 1995. The sculpture is made of bronze and resembles a twisting flame.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mind/M2.jpg', headline: 'A current UH teacher', description: 'Yamamoto created the sculpture after President Franklin D. Roosevelt’s announcement that Japanese Americans would be allowed to serve in the American military, adding such service was “a matter of the mind and heart, not a matter of race or ancestry.” Yamamoto teaches at UH Manoa.' },
    ],
    location: 		'QLC, ground floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/mind/thumbnail.jpg',
    centerpiece: 	'images/mind/thumbnail.jpg',
    geo_location: 	'21.300390,-157.818383', 
    lat: 			21.300390,
    lon: 		    -157.818383
};

pathContent['mana'] = {
    name:		'Mana’o’io',
	subtitle: 	'In front of Athletics',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mana/M1.jpg', headline: 'Confidence and faith', description: '“Mana’o’io” means “confidence and faith.” This statue was created by a Kauai native, Bumpei Akaji. Akaji was born in 1921 in Lawai, Kauai. Bumpei served in the famed 442 Battalion in World War II, composed mostly of second-generation soldiers of Japanese ancestry, and after his discharge, he went to Milan to study the arts.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mana/M2.jpg', headline: 'A symbol of unity, strength, and purity', description: 'In 1981, Akaji created this sculpture out of metal (bronze and copper). The art is intended to be symbolic of unity, strength, and purity.' },
    ],
    location: 		'In front of Athletics',
    sharing: 		'Share your story',
    thumbnail: 		'images/mana/thumbnail.jpg',
    centerpiece: 	'images/mana/thumbnail.jpg',
    geo_location: 	'21.294229,-157.818518', 
    lat: 			21.294229,
    lon: 		    -157.818518
};

pathContent['hula'] = {
    name:		'Hula',
	subtitle: 	'P.E. Building, second floor',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hula/H1.jpg', headline: 'A hidden gem', description: 'Hula was created by Mataumu Alisa in 1982. It is located on the second floor of the Physical Education Athletic Complex Multi-Purpose Lecture Building, near Room 241.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hula/H2.jpg', headline: 'Sharing hula traditions', description: 'The art portrays men and women dancing the traditional hula using the traditional instruments. The art is considered to be one of the Art in Public Places pieces.' },
    ],
    location: 		'P.E. Building, second floor',
    sharing: 		'Share your story',
    thumbnail: 		'images/hula/thumbnail.jpg',
    centerpiece: 	'images/hula/thumbnail.jpg',
    geo_location: 	'21.294460,-157.818242', 
    lat: 			21.294460,
    lon: 		    -157.818242
};

pathContent['hina'] = {
    name:		'Hina-o Nalani',
	subtitle: 	'Campus Center',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hina/H1.jpg', headline: 'Mother of the Universe', description: 'Hina-o Nalani (or Mother of the Universe) was created by Gregory Clurman in 1975. Clurman used a block of Minnesota granite that had a pinkish tinge of Rosa Porrino, which is another way to say it is pink granite.', caption: 'Courtesy of UH Archives' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/hina/H2.jpg', headline: 'In a new place', description: 'Originally, it was in the middle of a Campus Center pathway, but it later was moved.' },
    ],
    location: 		'Campus Center',
    sharing: 		'Share your story',
    thumbnail: 		'images/hina/thumbnail.jpg',
    centerpiece: 	'images/hina/thumbnail.jpg',
    geo_location: 	'21.296093,-157.820411', 
    lat: 			21.296093,
    lon: 		    -157.820411
};

pathContent['epitaph'] = {
    name:		'Epitaph',
	subtitle: 	'In front of Hamilton Library',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/epitaph/E1.jpg', headline: 'A horror, or a warning', description: 'At the entrance to Hamilton Library, this Harold Tovish piece is a cross of sorts and, if you look closely, contains a face.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/epitaph/E2.jpg', headline: 'Modern-day issues', description: 'Tovish, who created this piece in 1970, modeled the sculpture so it “belongs on the cover of a Clive Barker horror novel.” He said it reflects the dilemmas and issues that modern-day humans face. ' },
    ],
    location: 		'In front of Hamilton Library',
    sharing: 		'Share your story',
    thumbnail: 		'images/epitaph/thumbnail.jpg',
    centerpiece: 	'images/epitaph/thumbnail.jpg',
    geo_location: 	'21.300217,-157.815750', 
    lat: 			21.300217,
    lon: 		    -157.815750
};

pathContent['chance'] = {
    name:		'Chance Meeting',
	subtitle: 	'In front of the Law School',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/chance/C1.jpg', headline: 'Odd people, oddly dressed', description: 'These statues are standing under a crosswalk sign that gives direction to different locations on the island. The design originally was from New York, hence the raincoats, and they are engaged in a conversation.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/chance/C2.jpg', headline: 'Taken out of place but given place', description: 'This artwork was created by George Segal in 1992, and it is part of the Art in Public Places Program.' },
    ],
    location: 		'In front of the Law School',
    sharing: 		'Share your story',
    thumbnail: 		'images/chance/thumbnail.jpg',
    centerpiece: 	'images/chance/thumbnail.jpg',
    geo_location: 	'21.297059,-157.818108', 
    lat: 			21.297059,
    lon: 		    -157.818108
};

pathContent['frear_hall'] = {
    name:		'Frear Hall',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F1.jpg', headline: '', description: 'The last remaining piece of the original Frear Hall can be found in the lobby of the current Frear Hall, in the Student Housing Services campus. This mosaic – most likely created by Jean Charlot, a prominent UH Manoa art professor – is from 1952.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F2.jpg', headline: '', description: 'The mosaic somewhat echoes the Mayan art style that Charlot loved to recreate. At the same time, he uses elements of line and light to add depth to the piece. It features two fish that resemble Indo-Pacific sergeant (Abudefduf vaigiensis). These do not look like fish found around Hawaii, so they likely relate to Charlot\'s travels around the world. Up close, you can see how Charlot reverses the color scheme in the bubble to achieve the bubble’s shape and depth.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F3.jpg', headline: '', description: 'This 1952 photo shows the mosaic intact in 1952. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F4.jpg', headline: '', description: 'When the desk was remodeled in the 1950s, several of the parts of this mosaic were separated and put into storage. These photos show the slabs of concrete currently sitting in a utiliy closet in the basement of Frear Hall today. Will they ever all be brought back together? This artwork was created by George Segal in 1992, and it is part of the Art in Public Places Program.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F5.jpg', headline: '', description: '' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/frear_hall/F6.jpg', headline: '', description: '' },
    ],
    location: 		'Frear Hall',
    sharing: 		'Share your story',
    thumbnail: 		'images/frear_hall/thumbnail.jpg',
    centerpiece: 	'images/frear_hall/thumbnail.jpg',
    geo_location: 	'21.295556,-157.813889', 
    lat: 			21.295556,
    lon: 		    -157.813889
};

pathContent['stevenson_hut'] = {
    name:		'Stevenson Hut',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/stevenson_hut/S1.jpg', headline: '', description: 'Author Robert Louis Stevenson visited Hawaii from 1889-1893, and while he was here, he formed a friendship with Princess Ka’iulani. It has been rumored that the two had a romantic relationship because of the poem “The Island Rose” that Stevenson wrote for Ka’iulani, but that has not been confirmed. While in Hawaii, Stevenson resided in what is referred to today as “The Stevenson Hut.”  The Stevenson Hut is made out of Native Hawaiian Pili Grass to showcase what the hut looked like. The hut that stands at the Waioli Tea Room in Manoa today is a replica.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/stevenson_hut/S2.jpg', headline: '', description: 'Inside the Stevenson Hut, furniture is displayed in a way that Stevenson might have kept his home. A copy of “Treasure Island,” his most famous book, is on the table.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/stevenson_hut/S3.jpg', headline: '', description: 'The owner of the estate on which Stevenson resided while living in Hawaii, Archibald Cleghorn, had a daughter, Ka’iulani. Ka’iulani left Hawaii toward the end of Stevenson’s time on Hawaii to study in Scotland, where Stevenson was originally from. It was rumored that Stevenson fell in love with Princess Ka’iulani, which would have been a controversial cultural match considering Ka’iulani’s half-Hawaiian, half-caucasian heritage and the fact that she was only 14 and Stevenson was 39.' },
	{ image: '', headline: '', description: '<audio controls><source src="images/stevenson_hut/monolith.mp3" type="audio/mpeg"></audio> <br /><br />Recorded at the Stevenson Hut in Manoa, by the author of this piece, Anna Barrett, a graduate student in the School of Communications in 2019, this is a reading of the poem that Robert Louis Stevenson wrote for Princess Ka’iulani. The poem is nostalgic, romantic and reminiscent of a lover who is missing their love. In the recording, you can hear sounds of children playing nearby, which is fitting, since a middle school nearby is named after the author. ' },
    ],
    location: 		'Stevenson Hut',
    sharing: 		'Share your story',
    thumbnail: 		'images/stevenson_hut/thumbnail.jpg',
    centerpiece: 	'images/stevenson_hut/thumbnail.jpg',
    geo_location: 	'21.3162,-157.8121', 
    lat: 			21.3162,
    lon: 		    -157.8121
};

pathContent['mayan_warrior'] = {
    name:		'Mayan Warrior',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mayan_warrior/M1.jpg', headline: '', description: '<p>You might recognize two of the 20th Century’s most famous artists in this photo, hanging out with Jean Charlot, a University of Hawaii art professor. We do not know the occasion, but we do know that the image was taken in the Palace of Cortés’ corridor where Diego Rivera’s mural of “Conquest of México, History of Cuernavaca and Morelos” (1930) hangs over the group.</p><p>Charlot was a French painter and naturalized American citizen who actively worked in Mexico and the United States. On his mother’s side of the family, Charlot’s great-grandfather immigrated to Mexico, and his grandfather was a mestizo. This mixed heritage created a fascination in Charlot about Mexican culture. </p><p>Here is what we know about the people in the photo, from left to right: Dr. Leo Eloesser, Frances F. Payne, Frida Kahlo, Jean Charlot, Elie Faure, Diego Rivera. Cuernavaca, August of 1931. Courtesy of the Rockefeller Archive Center.</p><ul><li>Dr. Leo Eloesser: A thoracic surgeon; Kahlo’s lifelong friend and medical advisor.</li><li>Frances Flynn Payne: A professional conservator-restorer of Mexican artifacts and art for the Rockefeller family.</li><li>Frida Kahlo: Mexican painter known for her Mexican-inspired portraits and self-portraits.</li><li>Elie Faure: French art historian and essayist.</li><li>Diego Rivera: Mexican painter (husband to Kahlo) whose art helped to establish Mexican muralism.</li></ul><p>Upon his arrival to Mexico in the early 1920s, Charlot became involved, along with Diego Rivera, in the Mexican muralist movement. Between 1926 and 1928, Charlot worked as an archaeologist in the Mayan temples at Chichen Itza. This experience had a major influence on his artwork.</p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mayan_warrior/M2.gif', headline: '', description: '<p>Years after working in Mexico and other states within the U.S., Charlot arrived in Honolulu in 1949 and taught at the University of Hawaii at Manoa, where he stayed for 30 years, until his death in 1979. His work can be found around the islands, such as in the Hawaii State Art Museum, the Honolulu Museum of Art, the Isaacs Art Center in Waimea, and in Hamilton Library at UH Manoa.</p><p>The “Mayan Warrior” (1970) is one of nine acrylic-painted masonite images that represent Charlot’s close involvement with major archaeological work at ancient Mayan sites in the Yucatán Peninsula in Mexico. The 36-foot mural rarely has been seen since Charlot painted it for the ethnobotanical exposition, "Flora Pacifica," which was held at the Blaisdell Center in 1970. Today, it is part of Hamilton Library’s special collections in the Archives & Manuscripts Department. </p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/mayan_warrior/M3.jpg', headline: '', description: '<p>Charlot’s fascination with Mayan art and indigenous Mexican culture is portrayed through his bold use of colors. In addition, his signature abstraction of the human figures included geometrical shapes, curves, cubes and cylinders, as can be seen through the Mayan Warrior murals.</p><p>Eight of the nine Mayan Warrior murals are being kept in storage in the Architecture Building. The only painting not under UH care is the centerpiece, which is the corn painting. </p><p>The Jean Charlot Collection is a standalone unit located across the hall from the Hawaiian/Pacific Collection on the fifth floor of the Hamilton Library; the Mayan Warrior is used to mark the collection’s entrance.</p><p>For more about Jean Charlot, contact: Jean Charlot Collection, 808-956-2849 or <a href="http://manoa.hawaii.edu/library/research/collections/charlot-collection/" target="_blank">visit the Charlot website</a></p><p>The other Mayan Warriors paintings can be <a href="https://jeancharlot.org/murals-sculpture/usa_hi_oahu_honolulu_uhm_1970_mayan.html" target="_blank">seen here</a>.' },
	{ image: '', headline: '', description: '' },
    ],
    location: 		'Mayan Warrior',
    sharing: 		'Share your story',
    thumbnail: 		'images/mayan_warrior/thumbnail.jpg',
    centerpiece: 	'images/mayan_warrior/thumbnail.jpg',
    geo_location: 	'21.3162,-157.8121', 
    lat: 			21.3162,
    lon: 		    -157.8121
};

pathContent['waikiki_mural'] = {
    name:		'Waikiki Mural',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W1.png', headline: '', description: '<p>This mural is depicting Diamond Head and Waikiki, as it was in 1919. What differences do you notice when comparing this painting to what Diamond Head and Waikiki look like today?</p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W2.png', headline: 'Closeup of Diamond Head', description: '<img src="https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W2b.png" /><p>Here is a closeup photo of this same mural. This depicts what the Waikiki skyline must have looked like when the artist, Frank M. Moore, painted it. Now, swipe to see photographic evidence of what a similar shot of the south shore actually looked like circa 1920. </p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W3.jpg', headline: 'The Perfect Wave', description: 'The mural to the left of the lobby depicts what Moore thought of as “the perfect wave.” This gorgeous painting, along with the other two murals, once were displayed in the Old Blaisdell Hotel in downtown Honolulu (which has since shut down). In the first half of the 20th century, this photo must have welcomed and excited travelers who had come to Hawaii to experience the pristine natural environment, and some “perfect waves.” ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W4.png', headline: 'Context shot of South shore', description: 'This mural is a depiction of Oahu’s South Shore, from the perspective of the water. Imagine it’s sunset, and you are out on a sailboat today. If you were looking at this exact same scene, what similarities would you see between this 1919 depiction and the modern shoreline?' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W5.png', headline: 'Lights on the ridge', description: 'This is a close up photo of the same mural. There are no large office buildings, hotels, restaurants, and malls, but notice the subtle hint of civilization from the glowing lights along the water, and the dots of lights scattered up one of Honolulu’s ridges. Do you know how many people lived in Honolulu at the time this was painted (according to the 1920 census)? Take a guess.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W6.jpg', headline: 'Aerial photo of Ridges and Valleys in Honolulu', description: 'This is an aerial photograph that shows Honolulu from above, and at a distance, including Diamond Head, parts of Waikiki, and many ridges and valleys. Compare this photo from June 2015 to Moore’s 1919 mural. Compared to the few, subtle, scattered lights in his murals, it is clear to see how much not only the residential areas have expanded. These trends reflect the overall population boom that has occurred since the murals’ inception in the early 20th century. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/waikiki_mural/W7.jpg', headline: 'Aerial photo of Waikiki and Diamond Head', description: '<i><small>Photo licensed for reuse. From: <a href="https://www.goodfreephotos.com/united-states/hawaii/honolulu/view-from-waikiki-beach- in-honolulu-hawaii.jpg.php">https://www.goodfreephotos.com/united-states/hawaii/honolulu/view-from-waikiki-beach- in-honolulu-hawaii.jpg.php</a></small></i><p>This is a photograph that is similar to the perspective of the first mural (of Diamond Head and Waikiki). This photo was taken recently and shows what that same skyline looks like today. In addition to the overall population growth of Honolulu over the past 100 years, globalization has lead to a booming tourism industry. Here on O’ahu, much of the pristine shoreline has been developed for commercial interests. Considering the fact that these murals once belonged inside a hotel in Honolulu, juxtapose the 1919 depiction of the South Shore, when used as artwork to please tourists in an early 20th Century hotel, with the modern-day depiction of what the tourism industry’s effects on the South Shore looks like. The Waikiki that exists today is filled with highrise hotels, shopping stores, restaurants, and people who come from all over the world to experience O’ahu’s beautiful natural beaches and mountains, yet it is this industrialization and commercialization of the island that takes away from the island’s natural beauty.' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/waikiki_mural/thumbnail.jpg',
    centerpiece: 	'images/waikiki_mural/thumbnail.jpg',
    geo_location: 	'21.2964,-157.8178', 
    lat: 			21.2964,
    lon: 		    -157.8178
};

pathContent['gathering_of_chiefs'] = {
    name:		'Gathering of Chiefs',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gathering_of_chiefs/C1.jpg', headline: '', description: '<p>“The Gathering of Chiefs” is a painting by local artist Brooke Kapukuniahi-Parker. It is hung inside of the UH Manoa Rainbow Warriors’ locker room, on lower campus, with viewing available by appointment (email: teric@hawaii.edu). Historically, each Hawaiian was born into a social class, and at the top, were the rulers, a small but powerful class of chiefs known as the aliʻi. In those days, the aliʻi was the government. Parker gave the UH football team the paiting because he wanted to start a new tradition, as a way to symbolize the gathering of great warriors to protect this land from anyone who stands in their way. As a part of this tradition, each member of the football team looks into the eyes of each individual chief to feel the “Mana” pouring out of the painting.</p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gathering_of_chiefs/C2.jpg', headline: '', description: '<p>Upon entering the University of Hawaii football locker room, you will follow the rows of locker cubbies on the right-hand side, until you see the beautiful painting on the right.  Besides this painting on the left, you will see a handcrafted piece of Koa wood that you can touch and feel while looking into this painting, so that you can transfer your energy into those who will touch it next. The mana is a symbol of the power of the Hawaiian people, while also serving as power for those in support of the culture itself. This mana doesn’t come from the wood or painting themselves, yet serves as a spiritual passageway from those who have felt it before you. This piece of art goes hand in hand with the painting as it gives the viewer something to touch or feel when seeing these Chiefs. Martin & MacArthur, a local company, supplied the koa for this project and chose a piece that would fit proportionally to the painting.</p>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gathering_of_chiefs/C3.jpg', headline: 'PHOTO CREDIT: Courtesy of “Warrior Beat” media', description: 'The artist, Brooke, can be seen in this photo introducing the painting to the Rainbow Warriors after an emotional ceremony. During the ceremony, the warriors were embraced by past alumni and those who have been around the program for years. At this time, they were told the stories of the struggle chiefs had and about the resilience it took to overcome adversity. The group then gathered one last time in prayer and everyone touched the koa before leaving campus that night. Thus, began the new tradition of sharing this piece with the team, and all those who support it, for years to come. Since 2018, the Warriors touch the wood every day when they leave the locker room to practice. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/gathering_of_chiefs/C4.jpg', headline: '', description: 'Players individually touch the Koa wood and look into the eyes of each chief. It was said that some chiefs catch the attention of different people, almost like it is calling to them. Which chief calls to you as you touch this screen.' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/gathering_of_chiefs/thumbnail.jpg',
    centerpiece: 	'images/gathering_of_chiefs/thumbnail.jpg',
    geo_location: 	'21.2940,-157.8180', 
    lat: 			21.2940,
    lon: 		    -157.8180
};

pathContent['punahou'] = {
    name:		'The Legend of Ka Punahou',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/punahou/P1.jpg', headline: '', description: 'When the doors opened to the Omidyar K-1 Neighborhood in August 2010, as part of the final touches, students partnered with artist and Punahou alumna Lia Kilpatrick Rigg (’86) to create a mural. The Kindergarten (Class of 2023) and Grade 1 (Class of 2022) students, and their teachers drew contour drawing of things that belonged to the ahupua’a. Each student created clay pieces that were incorporated in the mural to tell the story of The Legend of Ka Punahou. Omidyar K-1 Neighborhood includes the construction of five new buildings and the renovation of Wilcox Hall. The Omidyar K-1 Neighborhood is named for Pierre Omidyar (‘84) and his wife Pam.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/punahou/P2.jpg', headline: '', description: 'Long ago, according to legend, an aged Hawaiian couple lived on the slope of Rocky Hill, above the present campus, and had to travel far for water. They prayed for a spring. In a dream answering their prayers, they were told to uproot the stump of an old hala tree. They did as they were told and found a spring of clear, sweet water, which they named Ka Punahou, the New Spring. This legend lives on in the Punahou seal with the hala tree and two taro leaves.<br /><br /><iframe width="560" height="315" src="https://www.youtube.com/embed/eeZbMGoc9oQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/punahou/P3.jpg', headline: '', description: 'The symbol that perhaps most closely qualifies as a school mascot is the hala tree, whose image is used in the school\'s seal. ' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/punahou/thumbnail.jpg',
    centerpiece: 	'images/punahou/thumbnail.jpg',
    geo_location: 	'21.3045,-157.8265', 
    lat: 			21.3045,
    lon: 		    -157.8265
};

pathContent['rotc'] = {
    name:		'AF ROTC',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rotc/R1.jpg', headline: '', description: 'There is a commemorative bench in front of the University of Hawaii at Manoa - Air Force Reserve Officer Training Corps (AF ROTC) portable classrooms. These buildings are one of the three primary commissioning sources for local officers in the Air Force. The bench is under a plumeria tree, so it is always provides shade. It is also placed strategically in front of the AF ROTC building, so the wind is channelled to the right side of the bench. There is a metal plaque on the middle top of the bench with a dedication to two officers. The names are Lt. Col Rafael Garfield and Cpt. Thomas Odgers. Who are they? Why are they being honored? ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rotc/R2a.jpg', headline: '', description: '<br /><img src="https://api.montanab.com/ManoaPublicArt/images/rotc/R2b.jpg" /><br />Each AF ROTC graduating class has the option of donating a commemorative item of any type for their instructors. This is part of a tradition that goes back in this place to the 1970s. Other commemorative items nearby include memorable rock slabs with the students\' names, a pull-up bar and even a gas barbeque grill. Garfield and Odgers were honored by their students, before they moved on to other Air Force jobs elsewhere. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/rotc/R3.jpg', headline: '', description: 'All of these various artworks combined, from the small rocks to the bench to the pull-up bar, are intended to convey and promote a sense of camaraderie among the roughly 180 AF ROTC cadets on the UH Manoa campus.' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/rotc/thumbnail.jpg',
    centerpiece: 	'images/rotc/thumbnail.jpg',
    geo_location: 	'21.292251,-157.816890', 
    lat: 			21.292251,
    lon: 		    -157.816890
};

pathContent['zodiac'] = {
    name:		'Chinese Zodiac Signs',
	subtitle: 	'',
    details: 		'',
	hide:			false,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/zodiac/Z1.jpg', headline: '', description: 'You might be wondering, why is there a Chinese cemetery in the middle of Manoa? And what do those animal figurines represent? This is supposed to help. ' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/zodiac/Z2.jpg', headline: '', description: 'This audio recording provides an overview of historical information about Chinese immigration to Hawaii and also explains some of the reasons why Chinese culture is so developed and strong in the islands. It also describes influences that Chinese people had on Hawaii’s culture. <audio><source src="https://api.montanab.com/ManoaPublicArt/images/zodiac/chinese_culture_in_hawaii.mp3" ></audio><br />Besides the story that these sculptures represent, this art piece is also a symbol of the Chinese culture. These animals are still commonly seen in Chinese spaces, especially here in Hawaii. The Twelve Zodiac Signs sit near the entrance of the Manoa Chinese Cemetery. This cemetery was founded in 1852 and is the oldest and largest Chinese cemetery in the state of Hawaii. With things like the cemetery and Chinatown, it is easy to see that the Chinese culture is extremely prominent in Hawaii. This might lead you to ask why. <br/><br/>Since 1788, the Chinese have been coming to the Hawaiian Islands. They were very interested in the sandalwood that was used to make carved images and incense sticks for burning. When the first Chinese settlers came to Hawaii, they also learned that the soil and climate would be suitable for growing sugar cane. So in 1802, a stone sugar mill from China was rebuilt on Lanai. Some of their crops failed due to the lack of water and they were running out of money. This forced the Chinese to stop farming sugar cane and some of them even returned to China. <br><br>To avoid becoming homesick, many newcomers brought plants into Hawaii. They began planting rice, certain types of mangoes, lychee, longan, and bamboo. These are very familiar flavors to Hawaii, so it is evident how influential these plants have been.<br><br>Before 1865, most of the people coming from China were men. Some of these men married Hawaiian women and created new lives for themselves on the islands. When people first move to a new place, they try to seek out people who are similar to them and try to recreate their old lives. This is when Chinatown was born. They began building stores, temples, and even cemeteries like the Manoa Chinese Cemetery. <br><br>By 1880, many restaurants and shops were owned by the Chinese. This was concerning to a number of people, so in 1882, a law was passed that restricted Chinese immigration. This law did not get changed until 1943. <br><br>In 1886, a fire was started in Chinatown that lasted 3 days. 8 blocks were destroyed. 350 Hawaiians and 7,000 Chinese were left homeless, but this wasn’t even the end. The bubonic plague was discovered in Chinatown in 1899 and the government decided to burn the spots in which it was found. They started a fire in Chinatown, at the intersection of Beretania St. and Nuuanu Ave.. 5 people dies in just a few days. They were forced to move outside of their Chinese community, but these hardships did not stop them. They continued working and learning.<br><br>William Kwai Fong Yap was born in Honolulu in 1873, just before the fires. In 1919, Yap went around Honolulu, asking people to sign a petition to expand the College of Hawaii. He wanted the college to become a university that offered graduate degrees. He got more than 400 signatures and the University of Hawaii was established 2 years later. <br><br>The Twelve Zodiac Signs are just a small part of a rich history, but it represents the strong perpetuation of the Chinese culture in Hawaii and its people’s resilience.' },
	{ image: 'https://api.montanab.com/ManoaPublicArt/images/zodiac/Z3.jpg', headline: '', description: 'Nearby, in downtown, many cultural connections to China are apparent, including a busy Chinatown, with diverse restaurants and stores, as well as regular dragon-boat races in Waikiki, bilingual signage around town and common public displays of culture, such as this image of people performing a traditional Chinese dance in the Chinatown Cultural Plaza courtyard. The dance comes from the Han Dynasty, about 1,800 years ago.' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/zodiac/thumbnail.jpg',
    centerpiece: 	'images/zodiac/thumbnail.jpg',
    geo_location: 	'21.3179567,-157.8031013', 
    lat: 			21.3179567,
    lon: 		    -157.8031013
};

pathContent['our_story'] = {
    name:		"Our Story",
	subtitle:   '',
    details: 		'',
	hide:			true,
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'https://api.montanab.com/ManoaPublicArt/images/our_story/O1.png', description: '<small><i>Associate Professor Brett Oppegaard, right, working with graduate students near the Founders’ Gate at UH Manoa in the fall of 2015. The mobile story about the gate, created that semester in the Com 691 class, became one of the first interactive experiences in the Manoa Public Art project. Students have been contributing new work to this project every year since.</i></small><br /><h2>&nbsp;&nbsp;About this project</h2> <p>The Manoa Public Art project began as a class experiment, supported by the local organization Malama Manoa, and since has grown into an expansive effort to chronicle the stories of public artwork in this Honolulu neighborhood, which includes the flagship University of Hawai‘i campus. <br><br>Hawai‘i was the first state in the country to adopt a "Percent for Art" program, requiring at least 1 percent of all money going toward public construction projects to be spent on public art. The Manoa neighborhood, and the University of Hawai‘i at Manoa, in particular, has been a major beneficiary of this law. This mobile app, in turn, is dedicated to promoting public discourse about the public art in this place.</p> <br><h2>&nbsp;&nbsp;Credits</h2><p><strong>Principal Investigator:</strong> Dr. Brett Oppegaard (School of Communications, University of Hawai‘i, brett.oppegaard@hawaii.edu)<br /><br /> <strong>Contributors</strong> <strong>Adam:</strong> Katie Boon<br /><br /> <strong>Air:</strong> Kapiolani Ching and Godwin Polendey<br /><br /><strong>Air Force ROTC:</strong> Winlove Almazan <br/><br/><strong>Alae A Hina:</strong> Eunica Escalante<br /><br /> <strong>Anuenue #2:</strong> Katie Boon<br /><br /> <strong>Arctic Portals:</strong> Eunica Escalante<br /><br /> <strong>Backyard Cooking:</strong> Katie Boon<br /><br /> <strong>Birthday Party Guests:</strong> Shannon Manamtam<br /><br /> <strong>Bobby Puts Frozen Peas on Poochie’s Head:</strong> Shannon Manamtam<br /><br /> <strong>Bridge, Bridge:</strong> Katie Boon<br /><br /> <strong>Calligraphy:</strong> Eunica Escalante<br /><br /> <strong>Candy Mural:</strong> Katie Boon<br /><br /> <strong>Chance Meeting:</strong> Tracy Kim<br /><br /> <strong>Chinese Soldier:</strong> Katie Boon<br /><br /> <strong>Chinese Zodiacs:</strong> Laura Young<br><br><strong>Commencement:</strong> Katie Boon<br /><br /> <strong>Defining Moment:</strong> Katie Boon<br /><br /> <strong>Divers:</strong> Eunica Escalante<br /><br /> <strong>Diverse:</strong> Eunica Escalante<br /><br /> <strong>Earth:</strong> Kapiolani Ching and Godwin Polendey<br /><br /> <strong>Epitaph:</strong> Tracy Kim<br /><br /> <strong>Fallen Warrior:</strong> Aven Santiago<br /><br /> <strong>Fire:</strong> Kapiolani Ching and Godwin Polendey<br /><br /> <strong>Flight to the Sun:</strong> Katie Boon<br /><br /> <strong>Founders’ Gate:</strong> Marc Arakaki<br /><br /> <strong>Fourth Sign:</strong> Katie Boon<br /><br /> <strong>Frear Hall murals:</strong> Andreas Miguel<br><br><strong>Fu Dogs:</strong> Shannon Manamtam<br /><br /> <strong>Gate of Hope:</strong> Brett Oppegaard<br /><br /><strong>Gathering of Chiefs:</strong> Jacob Hensley<br><br> <strong>Gidayu Poster:</strong> Eunica Escalante<br /><br /> <strong>Hawai‘i Ka‘u Kumu:</strong> Nicole Tam<br /><br /> <strong>Hina-O Nalani:</strong> Tracy Kim<br /><br /> <strong>Hula:</strong> Tracy Kim<br /><br /> <strong>Imperial Vase:</strong> Eunica Escalante<br /><br /><strong>Ka Punahou:</strong> Melissa Tiogangco<br><br> <strong>Kahuna with Sacred Stone:</strong> Eunica Escalante<br /><br /> <strong>Kanewai Lo‘i:</strong> Kaainoa Fernandez<br /><br /> <strong>Korean Center:</strong> Brett Oppegaard<br /><br />	<strong>Kumulipo:</strong> Glenn Ugalde<br><br>	<strong>Krypton:</strong> Shannon Manamtam<br /><br /> <strong>Maka \'a e \'Ike Aku i ke Awawa Uluwehi i na. Kuahiwi o Manoa:</strong> Eunica Escalante and Shannon Manamtam<br /><br /> <strong>Maka‘lo or Hawk’s Eye:</strong> Brandon Rivera<br /><br /> <strong>Makahiki Ho‘okupu:</strong> Bronson Doria<br /><br /> <strong>Man and Nature:</strong> Chanel Dias<br /><br /> <strong>Mana o\'i\'o:</strong> Tracy Kim<br /><br /> <strong>Maori Female:</strong> Eunica Escalante<br /><br /> <strong>Mayan Warrior:</strong> Leslie Betancourt<br><br><strong>Mind and Heart:</strong> Tracy Kim<br /><br /> <strong>Nana I Ke Kumu:</strong> Katie Boon<br /><br /> <strong>Natoma:</strong> Eunica Escalante<br /><br /> <strong>Neumes o Hawaii:</strong> Tracy Kim<br /><br /> <strong>Night:</strong> Shannon Manamtam<br /><br /> <strong>Night Hula:</strong> Brett Oppegaard<br /><br /> <strong>Pakipika:</strong> Eunica Escalante<br /><br /> <strong>Peace Garden:</strong> Eunica Escalante<br /><br /> <strong>Peace Memorial:</strong> Eunica Escalante<br /><br /> <strong>Peace Pole:</strong> Eunica Escalante<br /><br /> <strong>Pepper Dog Lovingly Chews on Bobby Cat While:</strong> Shannon Manamtam<br /><br />	<strong>Pigeon:</strong> Katie Boon<br /><br /> <strong>Pulelehua:</strong> Brett Oppegaard<br /><br /> <strong>Rainbow Spirit:</strong> Tracy Kim, Ashley Gomez<br /><br /> <strong>Rainbows:</strong> Harrison Patino<br /><br /> <strong>Rain’s Reflections:</strong> Katie Boon<br /><br /> <strong>Rosarito:</strong> Tracy Kim<br /><br /> <strong>Ryu:</strong> Eunica Escalante<br /><br /> <strong>Seated Amida Buddha:</strong> Tracy Kim<br /><br /> <strong>Shinto Dogs:</strong> Tracy Kim<br /><br /> <strong>Shwe Gyi Do:</strong> Eunica Escalante<br /><br /> <strong>Spirit of Loyalty:</strong> Tracy Kim<br /><br /> <strong>Spirit of Manoa:</strong> Tracy Kim and Brett Oppegaard<br /><br /><strong>Stevenson hut:</strong> Anna Barrett<br><br> <strong>Sumo Wrestler:</strong> Tracy Kim<br /><br /> <strong>Swimmers’ Quilt:</strong> Shannon Manamtam<br /><br /> <strong>Tea House:</strong> Eunica Escalante<br /><br /> <strong>Thai Pavilion:</strong> Eunica Escalante<br /><br /> <strong>Thomas Hale Hamilton:</strong> Shannon Manamtam<br /><br /> <strong>Tickets Home:</strong> Shannon Manamtam<br /><br /> <strong>To Help with a Migraine:</strong> Shannon Manamtam<br /><br /> <strong>To the Nth Power:</strong> Tracy Kim<br /><br /> <strong>Untitled Acrylic:</strong> Katie Boon<br /><br /> <strong>Untitled Bronze:</strong> Tracy Kim<br /><br /> <strong>Untitled Ceramic:</strong> Katie Boon<br /><br /> <strong>Untitled Hawaiian Studies:</strong> Eunica Escalante<br /><br /> <strong>Untitled Stained Glass:</strong> Katie Boon<br /><br /> <strong>Varney Circle Fountain:</strong> Mari Galiher, Cynthia Arata, and Jim Bea Ildefonso Sampaga<br /><br /> <strong>VVV:</strong> Tracy Kim<br /><br /> <strong>Wa:</strong> Katie Boon<br /><br /> <strong>Waikiki murals:</strong> Ivy Martin<br><br><strong>Wallhanging:</strong> Shannon Manamtam<br /><br /> <strong>Water:</strong> Kapiolani Ching and Godwin Polendey<br /><br /> <strong>Water Garden:</strong> Katie Boon<br /><br /> <strong>Whorl:</strong> Eunica Escalante<br /><br /> <strong>Wisdom of the East:</strong> Shannon Manamtam<br /><br />			<strong>Yatomi:</strong> Eunica Escalante<br /><br /> <strong>Additional imagery:</strong> Courtesy of University of Hawai‘i Archives, through its Digital and Digitized Collections<br /><br /> <strong>Additional photography:</strong> Godwin Polendey and Jessica Homrich<br /><br /> <strong>Additional reporting:</strong> Jessica Homrich<br /><br /> <strong>Additional sources:</strong> The University of Hawai‘i\'s Campus Art brochure, its Campus Heritage Report, and "Building a Rainbow," edited by Victor Kobayashi<br />Waikiki mural photos: https://commons.wikimedia.org/wiki/File:Waikiki,_Honolulu_(Forty_Years_On_the_Pacifi c).png) and https://commons.wikimedia.org/wiki/File:Diamond_Head_Hawaii_-_panoramio.jpg.<br><br /> <strong>Mobile design and development:</strong> Montana Banana Web and Mobile Development, https://montanab.com/<br /><br /><strong>Project sponsor:</strong> Malama Manoa (2015-2016, $2,000; 2016-2017, $2,000; 2018-2019, $2,000)' }, 
    ],
    location: 		'Go to UH Manoa’s campus',
    sharing: 		'',
    thumbnail: 		'images/our_story/thumbnail.jpg',
    centerpiece: 	'images/our_story/thumbnail.jpg',
    geo_location: 	'21.29979,-157.81673',
    lat: 			'', 
    lon: 		    '',
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

