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

var gameState = {
	greenConcept: null,
	greenDetails: [],
	redConcept: null,
	redDetails: [],
	blueConcept: null,
	blueDetails: [],
	blackConcept: null,
	blackDetails: [],
	yellowConcept: null,
	yellowDetails: [],
}
const GREEN = 'rgb(0, 255, 0)';
const OFFGREEN = 'rgb(0, 50, 0)';
const RED = 'rgb(255, 0, 0)';
const OFFRED = 'rgb(50, 0, 0)';
const BLUE = 'rgb(0, 0, 255)';
const OFFBLUE = 'rgb(0, 0, 50)';
const BLACK = 'black';
const OFFBLACK = 'rgb(100, 100, 100)';
const YELLOW = 'rgb(255, 255, 0)';
const OFFYELLOW = 'rgb(50, 50, 0)';

var alreadyDrawn = [];
var currentSelectedColor = 'green'

document.getElementById("drawButton").addEventListener('click', draw);
document.getElementById("takeoverButton").addEventListener('click', takeOver);
document.getElementById("resetButton").addEventListener('click', resetGameState);

document.getElementById('buttonGreenConcept').addEventListener('click', function() { selectColor(GREEN); });
document.getElementById('buttonRedConcept').addEventListener('click', function() { selectColor(RED); });
document.getElementById('buttonBlueConcept').addEventListener('click', function() { selectColor(BLUE); });
document.getElementById('buttonBlackConcept').addEventListener('click', function() { selectColor(BLACK); });
document.getElementById('buttonYellowConcept').addEventListener('click', function() { selectColor(YELLOW); });
document.getElementById('buttonGreenClear').addEventListener('click', function() { clearColor(GREEN); });
document.getElementById('buttonRedClear').addEventListener('click', function() { clearColor(RED); });
document.getElementById('buttonBlueClear').addEventListener('click', function() { clearColor(BLUE); });
document.getElementById('buttonBlackClear').addEventListener('click', function() { clearColor(BLACK); });
document.getElementById('buttonYellowClear').addEventListener('click', function() { clearColor(YELLOW); });

var conceptImages = document.getElementsByClassName('conceptImage');
for (conceptImage of conceptImages) {
	conceptImage.addEventListener('click', function(e) { 
		conceptImageClick(e.target.parentNode.id); 
	});
}
var addButtons = document.getElementsByClassName('addButton');
for (addButton of addButtons) {
	addButton.addEventListener('click', function(e) { 
		addButtonClick(e.target.parentNode.parentNode.id); 
	});
}
var minusButtons = document.getElementsByClassName('minusButton');
for (minusButton of minusButtons) {
	minusButton.addEventListener('click', function(e) { 
		minusButtonClick(e.target.parentNode.parentNode.id); 
	});
}

function drawGameStatePlayer() {
	console.log(`drawGameStatePlayer ${JSON.stringify(gameState)}`);
	const concepts = document.getElementsByClassName('concept');
	for (concept of concepts) {
		concept.style.backgroundColor = null;
		concept.getElementsByClassName('detailCount')[0].innerHTML = '';
	}
	var greenConcept = document.getElementById(gameState.greenConcept);
	if (greenConcept != null) { greenConcept.style.backgroundColor = OFFGREEN; }
	for (detail of gameState.greenDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${GREEN}">|</span>`;
		}
	}
	var redConcept = document.getElementById(gameState.redConcept);
	if (redConcept != null) { redConcept.style.backgroundColor = OFFRED; }
	for (detail of gameState.redDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${RED}">|</span>`;
		}
	}
	var blueConcept = document.getElementById(gameState.blueConcept);
	if (blueConcept != null) { blueConcept.style.backgroundColor = OFFBLUE; }
	for (detail of gameState.blueDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${BLUE}">|</span>`;
		}
	}
	var blackConcept = document.getElementById(gameState.blackConcept);
	if (blackConcept != null) { blackConcept.style.backgroundColor = OFFBLACK; }
	for (detail of gameState.blackDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${BLACK}">|</span>`;
		}
	}
	var yellowConcept = document.getElementById(gameState.yellowConcept);
	if (yellowConcept != null) { yellowConcept.style.backgroundColor = OFFYELLOW; }
	for (detail of gameState.yellowDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${YELLOW}">|</span>`;
		}
	}
}

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
	// document.getElementById("card").setAttribute('style','text-align:center;');
	document.getElementById("card").innerHTML = 
			`<hr><b style="color:blue">Easy</b></br><hr>${card.easy}</br><hr>` +
			`<b style="color:red">Medium</b></br><hr>${card.medium}</br><hr>` +
			`<b style="color:black">Hard</b></br><hr>${card.hard}</br></br>`;
}

function resetGameState() {
	console.log('reset');
	gameState = {
		greenConcept: null,
		greenDetails: [],
		redConcept: null,
		redDetails: [],
		blueConcept: null,
		blueDetails: [],
		blackConcept: null,
		blackDetails: [],
		yellowConcept: null,
		yellowDetails: [],
	};
	drawGameStatePlayer();
}

function takeOver() {
	console.log('takeover');
	document.getElementById('activePlayerArea').style.display = "block";
}

function selectColor(color) {
	console.log(`selectColor ${color}`);
	currentSelectedColor = color;
}

function clearColor(color) {
	switch (color) {
		case GREEN:
			gameState.greenConcept = null;
			gameState.greenDetails = [];
			break;
		case RED:
			gameState.redConcept = null;
			gameState.redDetails = [];
			break;
		case BLUE:
			gameState.blueConcept = null;
			gameState.blueDetails = [];
			break;
		case BLACK:
			gameState.blackConcept = null;
			gameState.blackDetails = [];
			break;
		case YELLOW:
			gameState.yellowConcept = null;
			gameState.yellowDetails = [];
			break;
	}
	drawGameStatePlayer();
}

function conceptImageClick(parentName) {
	console.log(`Set ${parentName} background to ${currentSelectedColor}`);
	switch (currentSelectedColor) {
		case GREEN:
			gameState.greenConcept == parentName
				? gameState.greenConcept = null
				: gameState.greenConcept = parentName;
			break;
		case RED:
			gameState.redConcept == parentName
				? gameState.redConcept = null
				: gameState.redConcept = parentName;
			break;
		case BLUE:
			gameState.blueConcept == parentName
				? gameState.blueConcept = null
				: gameState.blueConcept = parentName;
			break;
		case BLACK:
			gameState.blackConcept == parentName
				? gameState.blackConcept = null
				: gameState.blackConcept = parentName;
			break;
		case YELLOW:
			gameState.yellowConcept == parentName
				? gameState.yellowConcept = null
				: gameState.yellowConcept = parentName;
			break;
	}
	drawGameStatePlayer();
}

function addButtonClick(parentName) {
	console.log(`addButtonClick ${parentName}`);
	switch (currentSelectedColor) {
		case GREEN:
			if (gameState.greenDetails.length < 10) {
				gameState.greenDetails.push(parentName);
			}
			break;
		case RED:
			if (gameState.redDetails.length < 10) {
				gameState.redDetails.push(parentName);
			}
			break;
		case BLUE:
			if (gameState.blueDetails.length < 10) {
				gameState.blueDetails.push(parentName);
			}
			break;
		case BLACK:
			if (gameState.blackDetails.length < 10) {
				gameState.blackDetails.push(parentName);
			}
			break;
		case YELLOW:
			if (gameState.yellowDetails.length < 10) {
				gameState.yellowDetails.push(parentName);
			}
			break;
	}
	drawGameStatePlayer();
}

function minusButtonClick(parentName) {
	console.log(`minusButtonClick ${parentName}`);
	switch (currentSelectedColor) {
		case GREEN:
			remove(gameState.greenDetails, parentName);
			break;
		case RED:
			remove(gameState.redDetails, parentName);
			break;
		case BLUE:
			remove(gameState.blueDetails, parentName);
			break;
		case BLACK:
			remove(gameState.blackDetails, parentName);
			break;
		case YELLOW:
			remove(gameState.yellowDetails, parentName);
			break;
	}
	drawGameStatePlayer();
}

function remove(array, item) {
	var index = array.indexOf(item);
	if (index !== -1) {
		array.splice(index, 1);
	}
}