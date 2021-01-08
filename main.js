var alreadyDrawn = [];

function draw()
{
	if (alreadyDrawn.length == cards.length) {
		alreadyDrawn = [];
	}
	var random = Math.floor(Math.random() * cards.length);
	while (alreadyDrawn.includes(random)) {
		random = Math.floor(Math.random() * cards.length);
	}
	renderCard(cards[random]);
	alreadyDrawn.push(random);
}

function renderCard(card)
{
	document.getElementById("card").innerHTML = 
			`<b>Easy</b></br></hr></br>${card.easy}</br></hr></br>` +
			`<b>Medium</b></br></hr></br>${card.medium}</br></hr></br>` +
			`<b>Hard</b></br></hr></br>${card.hard}</br></hr></br>`;
}

const cards = [
	// row 1
	{
		easy: ["Restaurant</br>Style</br>Mole"],
		medium: ["Prosthesis</br>Leaves of Grass</br>Maggie Gyllenhaal"],
		hard: ["Resident Evil</br>Game of Thrones</br>Statue of Liberty"],
	},
	{
		easy: ["Crocodile</br>Canary</br>Piano"],
		medium: ["Target</br>Billy the Kid</br>Moustache"],
		hard: ["Adam Carolla</br>Footbath</br>Not for the faint-hearted"],
	},
	{
		easy: ["Fork</br>Gun</br>Bat"],
		medium: ["Forrest Gump</br>Ferret</br>Cockroach"],
		hard: ["Know your limits</br>Disappear into thin air</br>Heartbreaking"],
	},
	{
		easy: ["Little House on the Prairie</br>Public holiday</br>Volcano"],
		medium: ["Tinkerbell</br>Julia Roberts</br>Whiskey"],
		hard: ["The Nightmare Before Christmas</br>Boys will be boys</br>Sell your soul to the devil"],
	},
	{
		easy: ["Bank</br>Bedroom</br>Flute"],
		medium: ["Archimedes</br>Borat</br>Fast and Furious"],
		hard: ["To be given free rein</br>Billy Jean</br>Eureka!"],
	},
	{
		easy: ["Wallet</br>Tin</br>Diamond"],
		medium: ["Beach</br>Lawyer</br>Cookie"],
		hard: ["Fools rush in</br>I smell a rat</br>From the Earth to the Moon"],
	},
	{
		easy: ["Meteorite</br>Museum</br>Refrigerator"],
		medium: ["Contact lens</br>The Sims</br>Power Rangers"],
		hard: ["The Age of Enlightenment</br>Clammy hands</br>Rain Man"],
	},
	{
		easy: ["Printer</br>Chalet</br>Carpet"],
		medium: ["John Lennon</br>Bowling for Columbine</br>Snowboard"],
		hard: ["Ted Koppel</br>Big Ben</br>Skyfall"],
	},
	{
		easy: ["Tepee</br>Shirt</br>Rocket"],
		medium: ["Sushi</br>Calculator</br>French fries"],
		hard: ["Tina Turner</br>Brood over</br>Fight Club"],
	},
	{
		easy: ["SpongeBob SquarePants</br>Spice</br>Tarzan"],
		medium: ["Gone With The Wind</br>Ocean's Eleven</br>Crop circle"],
		hard: ["Hungover</br>Sleep with one eye open</br>Snoopy"],
	},
	// row 2
	{
		easy: ["Storm</br>Vitamin</br>Bell"],
		medium: ["Space station</br>Twenty Thousand Leagues Under The Sea</br>Casino Royale"],
		hard: ["Be a third wheel</br>V for Vendetta</br>Pig-headed"],
	},
	{
		easy: ["Sonic the hedgehog</br>Pole vault</br>Trumpet"],
		medium: ["Sauna</br>Romeo and Juliet</br>Leaning Tower of Pisa"],
		hard: ["Get up on the wrong side of bed</br>Pop the cork</br>Different strokes for different folks"],
	},
	{
		easy: ["Electric chair</br>Windshield wiper</br>Titanic"],
		medium: ["Bowling</br>Bleach</br>Stiletto heel"],
		hard: ["Justin Bieber</br>Dumb as a box of hammers</br>Pass out"],
	},
	{
		easy: ["Concord</br>The Invisible Man</br>Radar"],
		medium: ["Catwoman</br>Koala</br>Gunpowder"],
		hard: ["Circle of friends</br>Money doesn't grow on trees</br>When pigs fly"],
	},
	{
		easy: ["Teacher</br>Chocolate</br>Pepper spray"],
		medium: ["The Red and the Black</br>Astro Boy</br>Bagheera"],
		hard: ["The Good, the Bad, and the Ugly</br>Running a red light</br>Have your head in the clouds"],
	},
	{
		easy: ["Boots</br>Diving gear</br>Ferrari"],
		medium: ["Lease</br>The Fox and the Hound</br>Escalator"],
		hard: ["Wearing your heart on your sleeve</br>Seasonal</br>Be all spruced up"],
	},
	{
		easy: ["Shooting star</br>Cake</br>Champagne"],
		medium: ["Edward Scissorhands</br>Ghostbusters</br>Bridget Jones"],
		hard: ["Wallflower</br>Bubblegum</br>The more you know"],
	},
	{
		easy: ["Ice Age</br>Dolphin</br>Water tower"],
		medium: ["The Black Cauldron</br>Keyboard</br>Bruce Lee"],
		hard: ["Kremlin</br>Leave someone speechless</br>Down the wrong hatch"],
	},
	{
		easy: ["Air bag</br>Fox</br>Binoculars"],
		medium: ["Hovercraft</br>Princess</br>Jumanji"],
		hard: ["Double-edged sword</br>Tangled</br>Jim Carrey"],
	},
	{
		easy: ["Miner</br>Prison</br>Mill"],
		medium: ["Wait, Wait... Don't Tell Me</br>Poseidon</br>The Grapes of Wrath"],
		hard: ["Moonlighting</br>Drink a toast</br>Piece of cake"],
	},
	// row 3
	{
		easy: ["Drill</br>Office</br>Daisy"],
		medium: ["Mr. Potato Head</br>Dam</br>The Lord of the Rings"],
		hard: ["By the skin of my teeth</br>Take a dive</br>Dead Poets Society"],
	},
	{
		easy: ["Pumpkin</br>Bra</br>Panther"],
		medium: ["Smart card</br>Waitress</br>Mary Poppins"],
		hard: ["Doesn't cost anything</br>Get an eyeful</br>Marco Polo"],
	},
	{
		easy: ["Snow White and the Seven Dwarfs</br>Genius</br>Minecraft"],
		medium: ["Asterix and Obelix</br>Gladiator</br>Jaws"],
		hard: ["Break out in a cold sweat</br>Mount Rushmore</br>Around the World in 80 Days"],
	},
	{
		easy: ["Milk</br>Rhinoceros</br>Unicorn"],
		medium: ["The Quest for Fire</br>Advertisement</br>Lance Armstrong"],
		hard: ["Sticks and stones may break my bones</br>Back to the Future</br>Silence is golden"],
	},
	{
		easy: ["Ice cube</br>Ostrich</br>Marriage"],
		medium: ["William Tell</br>Directory</br>The Sphinx of Giza"],
		hard: ["Marshmallow</br>Step on the gas</br>The Boxcar Children"],
	},
	{
		easy: ["Zebra</br>Mechanic</br>DVD"],
		medium: ["Xylophone</br>Yeti</br>Cyclist"],
		hard: ["Blind as a bat</br>A Study in Scarlet</br>Down in flames"],
	},
	{
		easy: ["Policeman</br>Banana</br>Nest"],
		medium: ["The Bogeyman</br>Rainbow</br>Luc Besson"],
		hard: ["In the kingdom of the blind, the one-eyed man is king</br>Kick the bucket</br>Three wise men"],
	},
	{
		easy: ["Retirement home</br>Vampire</br>Ladder"],
		medium: ["This Land Is Your Land</br>Troll</br>Cyrano de Bergerac"],
		hard: ["The Fifth Element</br>A bad check</br>Detective"],
	},
	{
		easy: ["Cars</br>Yoda</br>Submarine"],
		medium: ["Mailbox</br>Woody Allen</br>Allen Ginsberg"],
		hard: ["Tanning bed</br>Thief</br>As alike as two peas in a pod"],
	},
	{
		easy: ["Nutella</br>Sled</br>Sword"],
		medium: ["Toilet seat</br>Lords of Dogtown</br>Jon Stewart"],
		hard: ["Encino Man</br>Laïka</br>Bury the hatchet"],
	},
	// row 4
	{
		easy: ["Spinach</br>Barge</br>Heritage"],
		medium: ["Dr. Jekyll</br>Moses</br>Jack Bauer"],
		hard: ["Esmeralda</br>The Girl With the Dragon Tattoo</br>Luke, I am your father"],
	},
	{
		easy: ["Truck</br>Mouse</br>Parking meter"],
		medium: ["Beer</br>Bucket</br>Mike Tyson"],
		hard: ["Scatterbrained</br>Navel gazing</br>Beggar"],
	},
	{
		easy: ["Robot</br>Starfish</br>Soccer"],
		medium: ["Railway line</br>Braille</br>Horseshoe"],
		hard: ["Rio de Janeiro</br>White as snow</br>Get a lot of ink"],
	},
	{
		easy: ["Outlet</br>Plumber</br>Barbie"],
		medium: ["Popcorn</br>Toilet paper</br>Elevator"],
		hard: ["Popeye</br>Opening Pandora's box</br>Limber like a monkey"],
	},
	{
		easy: ["Fear Factor</br>Teddy bear</br>Magpie"],
		medium: ["Zipper</br>Makeup</br>Mosquito netting"],
		hard: ["Cut in line</br>Madame Tussaud</br>Dive right in"],
	},
	{
		easy: ["Feather</br>Coconut</br>Port"],
		medium: ["Parachute</br>Catapult</br>Clothespin"],
		hard: ["Shopping cart</br>Censorship</br>A rolling stone gathers no moss"],
	},
	{
		easy: ["Glider</br>Dentures</br>Crab"],
		medium: ["Palm tree</br>Accountant</br>Ammo clip"],
		hard: ["What's bred in the bone comes out in the flesh</br>Silhouette</br>Prima ballerina"],
	},
	{
		easy: ["Subway</br>Watch</br>Werewolf"],
		medium: ["Seven Samurai</br>The Russian Dolls</br>Lara Croft"],
		hard: ["Achilles' heel</br>Knights of the Zodiac</br>Bury your head in the sand"],
	},
	{
		easy: ["Horse</br>Credit card</br>Flying saucer"],
		medium: ["Chameleon</br>Atomic bomb</br>Scotch tape"],
		hard: ["Watercooler talk</br>Building an empire</br>Dressed to the nines"],
	},
	{
		easy: ["Pilot</br>Gas mask</br>Pinocchio"],
		medium: ["Neil Armstrong</br>Hanging on the Telephone</br>A Clockwork Orange"],
		hard: ["Straddle the fence</br>Sunday paper</br>Confuse the issue"],
	},
	// row 5
	
	{
		easy: ["Ambulance</br>Syringe</br>Pajamas"],
		medium: ["Magnet</br>Lightsaber</br>Garbage can"],
		hard: ["It is what it is</br>Shoot yourself in the foot</br>Alcatraz"],
	},
	{
		easy: ["Chimney</br>Avatar</br>Sombrero"],
		medium: ["Coffee pot</br>Aphrodite</br>Sausage"],
		hard: ["Hairbrush</br>Every cloud has a silver lining</br>Take the plunge"],
	},
	{
		easy: ["Dr. House</br>Toy Story</br>Cherry"],
		medium: ["Cupid</br>The Artist</br>Compass"],
		hard: ["Resign</br>Beat about the bush</br>Ben-Hur"],
	},
	{
		easy: ["Strawberry</br>Firecracker</br>Fireman"],
		medium: ["Bill Clinton</br>Pepper mill</br>Seal"],
		hard: ["Fidel Castro (Ruz)</br>Roll up your sleeves</br>Die Hard"],
	},
	{
		easy: ["Parrot</br>Straw</br>The Eiffel Tower"],
		medium: ["Crossword puzzle</br>Marilyn Manson</br>Dexter"],
		hard: ["My precious</br>Pushing up the daisies</br>Easter Island"],
	},
	{
		easy: ["The Pink Panther</br>Dice</br>The Simpsons"],
		medium: ["The Birdcage</br>Key</br>Venus de Milo"],
		hard: ["The road to hell is paved with good intentions</br>The Roman Colosseum</br>Vietnam War"],
	},
	{
		easy: ["Yogurt</br>Umbrella</br>Ninja"],
		medium: ["Winnie-the-Pooh</br>Mother Teresa</br>Lucky Luke"],
		hard: ["Plunger</br>Mars Attacks!</br>Beetle Bailey"],
	},
	{
		easy: ["Drone</br>The Mummy</br>Castle"],
		medium: ["Utility knife</br>The Exorcist</br>Sand trap"],
		hard: ["To move mountains</br>Ferris Bueller</br>Calvin and Hobbes"],
	},
	{
		easy: ["Tennis</br>Airport</br>Hat"],
		medium: ["Kate Middleton</br>Enjoy the Silence</br>Brigitte Bardot"],
		hard: ["Tex Avery</br>Ten Little Indians</br>War wounds"],
	},
	{
		easy: ["Fan</br>Coffee</br>Rattle"],
		medium: ["Twilight</br>Batman</br>Johnny Carson"],
		hard: ["A picture is worth a thousand words</br>Have a frog in his throat</br>Jean-Claude Van Damme"],
	},
	// row 6
	
	{
		easy: ["Polar bear</br>Witch</br>Snowman"],
		medium: ["Lincoln Memorial</br>Soap</br>Baguette"],
		hard: ["Honeymoon</br>Out in the weeds</br>To weigh on one's heart"],
	},
	{
		easy: ["Weathervane</br>Gymnasium</br>Veranda"],
		medium: ["War and Peace</br>Swallow</br>Vaccine"],
		hard: ["The Lascaux caves</br>Inception</br>Romance novel"],
	},
	{
		easy: ["Fire-fighting plane</br>Squirrel</br>Angel"],
		medium: ["Bilbo Baggins</br>David Guetta</br>Captain Harlock"],
		hard: ["Hungry like the wolf</br>Dragonball Z</br>Remembrance of Things Past"],
	},
	{
		easy: ["Snail</br>Zorro</br>Car stereo"],
		medium: ["Dumbo</br>Zelda</br>Angry Birds"],
		hard: ["Criminal Minds</br>Mother hen</br>American Beauty"],
	},
	{
		easy: ["Infomercial</br>Garden hose</br>Roadrunner"],
		medium: ["Skeleton</br>Trampoline</br>The Green Mile"],
		hard: ["Tempting fate</br>Court</br>The Sun Also Rises"],
	},
	{
		easy: ["Lumberjack</br>Mosquito</br>Microwave oven"],
		medium: ["Peggy Lee</br>Boondock Saints</br>Butterknife"],
		hard: ["Have your feet firmly planted on the ground</br>Dangerous Liaisons</br>Starvation"],
	},
	{
		easy: ["Harry Potter</br>Lake</br>Coca-Cola"],
		medium: ["Leaving on a Jet Plane</br>Stand By Me</br>Casserole"],
		hard: ["I'd stake my life on it</br>Feel like a fifth wheel</br>Nightmare"],
	},
	{
		easy: ["Cellphone</br>Infrared telescope</br>Giraffe"],
		medium: ["Hannibal Lecter</br>The Name of the Rose</br>Toaster"],
		hard: ["Once Upon a Time in the West</br>Forked tongue</br>Church lady"],
	},
	{
		easy: ["Defibrillator</br>Tetris</br>Whale"],
		medium: ["Barcode</br>Stonehenge</br>Crossbow"],
		hard: ["Confess your sins</br>The Avengers</br>Vacuum cleaner"],
	},
	{
		easy: ["Pineapple</br>Egg</br>Mailman"],
		medium: ["Poodle</br>McDonald's</br>Empire State Building"],
		hard: ["Loose talk</br>Lewis Caroll</br>Fast as lightning"],
	},
	// row 7
	{
		easy: ["Penguin</br>Library</br>Doctor"],
		medium: ["Uncle Scrooge</br>Aspartame</br>Croissant"],
		hard: ["George W. Bush</br>On pins and needles</br>Start off with a bang"],
	},
	{
		easy: ["Lock</br>Duck</br>Magnifying glass"],
		medium: ["Dalai Lama</br>Billiards</br>Lassie"],
		hard: ["Curled up in a ball</br>Raging fever</br>Tower of Babel"],
	},
	{
		easy: ["Bull</br>Fir tree</br>Pac-Man"],
		medium: ["Tintin</br>Roller skate</br>Margaret Thatcher"],
		hard: ["Suffer the slings and arrows of outrageous fortune</br>Statue of Christ the Redeemer</br>Snogging"],
	},
	{
		easy: ["Vulture</br>Jeans</br>iPad"],
		medium: ["Black hole</br>Jukebox</br>Jonathan Livingston Seagull"],
		hard: ["Beauty mark</br>Cast the first stone</br>Pour money down the drain"],
	},
	{
		easy: ["Tiger</br>Fish</br>Parasol"],
		medium: ["Sudoku</br>Modeling clay</br>Michael Jordan"],
		hard: ["Prince Valiant</br>Mutter under one's breath</br>Martin Luther King"],
	},
	{
		easy: ["Bathtub</br>Notebook</br>Stethoscope"],
		medium: ["Spider</br>Battery</br>Silicone"],
		hard: ["Meeting halfway</br>Never do a lick of work</br>Six feet under"],
	},
	{
		easy: ["Tow truck</br>Sewing machine</br>Harpoon"],
		medium: ["Cucumber</br>Tom Thumb</br>Hula hoop"],
		hard: ["David and Goliath</br>Richie Rich</br>Yuri Gagarin"],
	},
	{
		easy: ["Pirate</br>Bike</br>Piggy bank"],
		medium: ["Organ</br>Tsunami</br>Pencil sharpener"],
		hard: ["Black eye</br>Forewarned is forearmed</br>Corkscrew"],
	},
];