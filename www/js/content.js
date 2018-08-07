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

pathContent['relation'] = {
    name:		'Relation of Man and Nature',
    details: 		'',
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
    thumbnail: 		'images/relation/thumbnail.jpg',
    centerpiece: 	'images/relation/thumbnail.jpg',
    geo_location: 	'21.2975,-157.81978',
    lat: 			21.2975,
    lon: 			-157.81978
};

pathContent['harvest_celebration'] = {
    name:		"Makahiki Ho'okupu (Harvest Celebration)",
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'H1.jpg', description: "This mural was created by Juliette May Fraser for the 1939 San Francisco World's Fair. It consists of 13 masonite panels depicting the harvest and gift-giving ceremony of Native Hawaiians during the Makahiki season. Fraser was born in Honolulu during the reign of King Kalakaua, and built a reputation for portraying Hawaiian legends and other themes through linoleum cut, oil painting, ceramic, and fresco." },
		{ image: 'H2.jpg', description: 'The Makahiki season is dedicated to honor the god Lono, who is associated with fertility, rainfall, agriculture, food, music and peace. Makahiki is roughly four months long and usually celebrated October through February.' },
		{ image: 'H3.jpg', description: 'Ancient Hawaiians stopped their work and made offerings to the chief or aliʻi. Warfare was forbidden during Makahiki season. Time then was also spent on practicing sports, eating, dancing and renewing communal bonds.' },
		{ image: 'H4.jpg', description: 'Ancient Hawaiians collected agricultural and aquacultural products like pigs, taro, sweet potatoes, dry fish, kapa and mats. Some even offered feathers from forest birds, and all of these hoʻokupu (offering) were presented or collected sort of like taxes (Auhau) during Makahiki.' },
		{ image: 'H5.jpg', description: 'Each ahupuaʻa gathered its taxes to be given to the Ali’i Nui or the High Chief of the island. He acted as the deputy for Lono during the Makahiki Festival. The Ali’i Nui would hold an Akua Loa (representation of Lono), which was a long pole with a carved pig’s head on top and a strip of tapa (ancient Hawaiian cloth).' },
		{ image: 'H6.jpg', description: 'Ancient Hawaiians were passionate to test their minds with games, which consisted of riddles, recitation of genealogies, proverbs and knowledge of hidden meanings, even board games, which was a stone slab or flat surface with shallow holes.' },
		{ image: 'H7.jpg', description: 'Just like during the Makahiki season, with Native Hawaiians, set time aside today for peace and relaxation. Try to enjoy some games, test your brain or even dance. Maybe even make an offering, or in this case a donation. If you want to give back to The University of Hawaii, or support a specific part of the UH system, any contribution would be gladly appreciated. <a href="https://giving.uhfoundation.org/give-now" target="_system">Tap to donate</a>' },
    ],
    location: 		'At main entrance of Hamilton Library, behind the front entrance door Hamilton Library Main Entrance',
    sharing: 		'Share your thoughts.',
    thumbnail: 		'images/relation/thumbnail.jpg',
    centerpiece: 	'images/relation/thumbnail.jpg',
    geo_location: 	'21.30047795319491,-157.8158144720395',
    lat: 			21.30047795319491,
    lon: 			-157.8158144720395
};

pathContent['maka_io_or_hawks_eye'] = {
    name:		"Maka ‘Io or Hawk’s (1984) Eye by Edward M. Brownlee",
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'M1.jpg', description: "Students, teachers and visitors once were greeted by a curious contraption as they entered the University of Hawaii at Manoa’s lower campus. For nearly a decade, the Maka ‘Io served as a proud symbol of strength and teamwork, representing the university’s flourishing athletic programs." },
		{ image: 'M2.jpg', description: 'When Maka Io first was installed at the university in 1984, it was said to encompass the spirit of the Hawaiian hawk’s keen eye and express the motion of sport.' },
		{ image: 'M3.jpg', description: 'Yet in 1994, during the construction of the Stan Sheriff Center, Edward Brownlee’s sculpture was moved from its original location to a seemingly random field in front of Klum Gym.' },
		{ image: 'M4.jpg', description: 'What the heck is it doing here? The sculpture now is cloaked in the shade of various trees and unnoticeable to those who drive down Lower Campus Road. The Public Art Archive explained that the parallel bronze forms represent fascia or a bundle of reeds, which further emphasizes strength in numbers.' },
		{ image: 'M5.jpg', description: 'How could moving this sculpture to a more-visible area enhance the atmosphere of the university’s athletic complex? If you would like to find out, click on the image below and show us where you think Maka Io should be.' },
		{ image: 'M6.jpg', description: 'Ancient Hawaiians were passionate to test their minds with games, which consisted of riddles, recitation of genealogies, proverbs and knowledge of hidden meanings, even board games, which was a stone slab or flat surface with shallow holes.' },
    ],
    location: 		'',
    sharing: 		'This Brownlee work is “Untitled.” What would you call it?',
    thumbnail: 		'images/maka_io_or_hawks_eye/thumbnail.jpg',
    centerpiece: 	'images/maka_io_or_hawks_eye/thumbnail.jpg',
    geo_location: 	'21.294603814465095,-157.81961653718497',
    lat: 			21.294603814465095,
    lon: 			-157.81961653718497
};

pathContent['stan_sheriff_center'] = {
    name:		"Stan Sheriff Center",
    details: 		'',
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
    name:		"Campus Center",
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'C1.jpg', description: "Hawai&#39;i Ka&#39;u Kumu, or “Hawai&#39;i is My Teacher,” was painted on the Campus Center walls at the University of Hawai&#39;i at Mānoa in 1982. Artist Calley O&#39;Neill says the mural, celebrating UH’s 70 anniversary, centers on how Hawai&#39;i’s people, food and energy flowed from mauka to makai." },
		{ image: 'C2.jpg', description: '“I reflect and I meditate the time on the land and the people, nothing comes from ‘I want to do this.’ What is the community asking to communicate? … It’s a then and now. The left is the then and the right is the now,” O’Neill said.' },
		{ image: 'C3.jpg', description: 'O’Neill spent two years researching and drawing sections of the mural.' },
		{ image: 'C4.jpg', description: 'The mural features faces of real people around the islands with a story behind each person. O’Neill’s favorite element is the girls eating poi. “This is what life is about, savoring the moment, eating food of the land,” she said.' },
    ],
    location: 		'',
    sharing: 		'What did Hawai&#39;i teach you?',
    thumbnail: 		'images/campus_center/thumbnail.jpg',
    centerpiece: 	'images/campus_center/thumbnail.jpg',
    geo_location: 	'21.298675,-157.818566',
    lat: 			21.298675,
    lon: 			-157.818566
};

pathContent['loi'] = {
    name:		"Kanewai Loʻi",
    details: 		'',
    //caption: 		'',
    video_image: 	'',
    video_url: 		'',
    gallery_images: [
		{ image: 'L1.jpg', description: "Ka Papa Loʻi ʻO Kanewai, located next to the Hawaiʻinuiākea School of Hawaiian Knowledge, is an ancient Hawaiian parcel of land used to cultivate Kalo (Taro) using an integrated system of fresh water streams." },
		{ image: 'L2.jpg', description: 'A group of Mānoa students rediscovered the abandoned ʻAwai (water ditch system) in 1980 and began planting Kalo and other indigenous and endemic plants. Through volunteers and UH Manoa students and staff regularly working the land, the art and tradition of Hawaiian agricultural practices continues.' },
		{ image: 'L3.jpg', description: 'Today, Ka Papa Loʻi ʻO Kanewai consists of 10 terraces used to cultivate freshwater Kalo, classrooms and a Hale (covered thatched structure). The ancient loʻi is used as an outdoor classroom for many Manoa students and offers a place for those beyond the manoa campus to learn about the hawaiian perspective and way of thinking.' },
		{ image: 'L4.jpg', description: 'Kanewai hosts a workday every first saturday of the month, open to the public. It is recommended to bring: Slippers, T-shirt and shorts (that can get dirty), hat, sunglasses, sunscreen, water and water bottles, and snacks' },
    ],
    location: 		'',
    sharing: 		'Share your story',
    thumbnail: 		'images/loi/thumbnail.jpg',
    centerpiece: 	'images/loi/thumbnail.jpg',
    geo_location: 	'21.295605,-157.812918',
    lat: 			21.295605,
    lon: 			-157.812918
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

