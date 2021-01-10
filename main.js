var cardsJson = `{
	"cards": [{
			"easy": ["Restaurant", "Style", "Mole"],
			"medium": ["Prosthesis", "Leaves of Grass", "Maggie Gyllenhaal"],
			"hard": ["Resident Evil", "Game of Thrones", "Statue of Liberty"]
		},
		{
			"easy": ["Crocodile", "Canary", "Piano"],
			"medium": ["Target", "Billy the Kid", "Moustache"],
			"hard": ["Adam Carolla", "Footbath", "Not for the faint-hearted"]
		},
		{
			"easy": ["Fork", "Gun", "Bat"],
			"medium": ["Forrest Gump", "Ferret", "Cockroach"],
			"hard": ["Know your limits", "Disappear into thin air", "Heartbreaking"]
		},
		{
			"easy": ["Little House on the Prairie", "Public holiday", "Volcano"],
			"medium": ["Tinkerbell", "Julia Roberts", "Whiskey"],
			"hard": ["The Nightmare Before Christmas", "Boys will be boys", "Sell your soul to the devil"]
		},
		{
			"easy": ["Bank", "Bedroom", "Flute"],
			"medium": ["Archimedes", "Borat", "Fast and Furious"],
			"hard": ["To be given free rein", "Billy Jean", "Eureka!"]
		},
		{
			"easy": ["Wallet", "Tin", "Diamond"],
			"medium": ["Beach", "Lawyer", "Cookie"],
			"hard": ["Fools rush in", "I smell a rat", "From the Earth to the Moon"]
		},
		{
			"easy": ["Meteorite", "Museum", "Refrigerator"],
			"medium": ["Contact lens", "The Sims", "Power Rangers"],
			"hard": ["The Age of Enlightenment", "Clammy hands", "Rain Man"]
		},
		{
			"easy": ["Printer", "Chalet", "Carpet"],
			"medium": ["John Lennon", "Bowling for Columbine", "Snowboard"],
			"hard": ["Ted Koppel", "Big Ben", "Skyfall"]
		},
		{
			"easy": ["Tepee", "Shirt", "Rocket"],
			"medium": ["Sushi", "Calculator", "French fries"],
			"hard": ["Tina Turner", "Brood over", "Fight Club"]
		},
		{
			"easy": ["SpongeBob SquarePants", "Spice", "Tarzan"],
			"medium": ["Gone With The Wind", "Ocean's Eleven", "Crop circle"],
			"hard": ["Hungover", "Sleep with one eye open", "Snoopy"]
		},
		{
			"easy": ["Storm", "Vitamin", "Bell"],
			"medium": ["Space station", "Twenty Thousand Leagues Under The Sea", "Casino Royale"],
			"hard": ["Be a third wheel", "V for Vendetta", "Pig-headed"]
		},
		{
			"easy": ["Sonic the hedgehog", "Pole vault", "Trumpet"],
			"medium": ["Sauna", "Romeo and Juliet", "Leaning Tower of Pisa"],
			"hard": ["Get up on the wrong side of bed", "Pop the cork", "Different strokes for different folks"]
		},
		{
			"easy": ["Electric chair", "Windshield wiper", "Titanic"],
			"medium": ["Bowling", "Bleach", "Stiletto heel"],
			"hard": ["Justin Bieber", "Dumb as a box of hammers", "Pass out"]
		},
		{
			"easy": ["Concord", "The Invisible Man", "Radar"],
			"medium": ["Catwoman", "Koala", "Gunpowder"],
			"hard": ["Circle of friends", "Money doesn't grow on trees", "When pigs fly"]
		},
		{
			"easy": ["Teacher", "Chocolate", "Pepper spray"],
			"medium": ["The Red and the Black", "Astro Boy", "Bagheera"],
			"hard": ["The Good, the Bad, and the Ugly", "Running a red light", "Have your head in the clouds"]
		},
		{
			"easy": ["Boots", "Diving gear", "Ferrari"],
			"medium": ["Lease", "The Fox and the Hound", "Escalator"],
			"hard": ["Wearing your heart on your sleeve", "Seasonal", "Be all spruced up"]
		},
		{
			"easy": ["Shooting star", "Cake", "Champagne"],
			"medium": ["Edward Scissorhands", "Ghostbusters", "Bridget Jones"],
			"hard": ["Wallflower", "Bubblegum", "The more you know"]
		},
		{
			"easy": ["Ice Age", "Dolphin", "Water tower"],
			"medium": ["The Black Cauldron", "Keyboard", "Bruce Lee"],
			"hard": ["Kremlin", "Leave someone speechless", "Down the wrong hatch"]
		},
		{
			"easy": ["Air bag", "Fox", "Binoculars"],
			"medium": ["Hovercraft", "Princess", "Jumanji"],
			"hard": ["Double-edged sword", "Tangled", "Jim Carrey"]
		},
		{
			"easy": ["Miner", "Prison", "Mill"],
			"medium": ["Wait, Wait... Don't Tell Me", "Poseidon", "The Grapes of Wrath"],
			"hard": ["Moonlighting", "Drink a toast", "Piece of cake"]
		},
		{
			"easy": ["Drill", "Office", "Daisy"],
			"medium": ["Mr. Potato Head", "Dam", "The Lord of the Rings"],
			"hard": ["By the skin of my teeth", "Take a dive", "Dead Poets Society"]
		},
		{
			"easy": ["Pumpkin", "Bra", "Panther"],
			"medium": ["Smart card", "Waitress", "Mary Poppins"],
			"hard": ["Doesn't cost anything", "Get an eyeful", "Marco Polo"]
		},
		{
			"easy": ["Snow White and the Seven Dwarfs", "Genius", "Minecraft"],
			"medium": ["Asterix and Obelix", "Gladiator", "Jaws"],
			"hard": ["Break out in a cold sweat", "Mount Rushmore", "Around the World in 80 Days"]
		},
		{
			"easy": ["Milk", "Rhinoceros", "Unicorn"],
			"medium": ["The Quest for Fire", "Advertisement", "Lance Armstrong"],
			"hard": ["Sticks and stones may break my bones", "Back to the Future", "Silence is golden"]
		},
		{
			"easy": ["Ice cube", "Ostrich", "Marriage"],
			"medium": ["William Tell", "Directory", "The Sphinx of Giza"],
			"hard": ["Marshmallow", "Step on the gas", "The Boxcar Children"]
		},
		{
			"easy": ["Zebra", "Mechanic", "DVD"],
			"medium": ["Xylophone", "Yeti", "Cyclist"],
			"hard": ["Blind as a bat", "A Study in Scarlet", "Down in flames"]
		},
		{
			"easy": ["Policeman", "Banana", "Nest"],
			"medium": ["The Bogeyman", "Rainbow", "Luc Besson"],
			"hard": ["In the kingdom of the blind, the one-eyed man is king", "Kick the bucket", "Three wise men"]
		},
		{
			"easy": ["Retirement home", "Vampire", "Ladder"],
			"medium": ["This Land Is Your Land", "Troll", "Cyrano de Bergerac"],
			"hard": ["The Fifth Element", "A bad check", "Detective"]
		},
		{
			"easy": ["Cars", "Yoda", "Submarine"],
			"medium": ["Mailbox", "Woody Allen", "Allen Ginsberg"],
			"hard": ["Tanning bed", "Thief", "As alike as two peas in a pod"]
		},
		{
			"easy": ["Nutella", "Sled", "Sword"],
			"medium": ["Toilet seat", "Lords of Dogtown", "Jon Stewart"],
			"hard": ["Encino Man", "Laïka", "Bury the hatchet"]
		},
		{
			"easy": ["Spinach", "Barge", "Heritage"],
			"medium": ["Dr. Jekyll", "Moses", "Jack Bauer"],
			"hard": ["Esmeralda", "The Girl With the Dragon Tattoo", "Luke, I am your father"]
		},
		{
			"easy": ["Truck", "Mouse", "Parking meter"],
			"medium": ["Beer", "Bucket", "Mike Tyson"],
			"hard": ["Scatterbrained", "Navel gazing", "Beggar"]
		},
		{
			"easy": ["Robot", "Starfish", "Soccer"],
			"medium": ["Railway line", "Braille", "Horseshoe"],
			"hard": ["Rio de Janeiro", "White as snow", "Get a lot of ink"]
		},
		{
			"easy": ["Outlet", "Plumber", "Barbie"],
			"medium": ["Popcorn", "Toilet paper", "Elevator"],
			"hard": ["Popeye", "Opening Pandora's box", "Limber like a monkey"]
		},
		{
			"easy": ["Fear Factor", "Teddy bear", "Magpie"],
			"medium": ["Zipper", "Makeup", "Mosquito netting"],
			"hard": ["Cut in line", "Madame Tussaud", "Dive right in"]
		},
		{
			"easy": ["Feather", "Coconut", "Port"],
			"medium": ["Parachute", "Catapult", "Clothespin"],
			"hard": ["Shopping cart", "Censorship", "A rolling stone gathers no moss"]
		},
		{
			"easy": ["Glider", "Dentures", "Crab"],
			"medium": ["Palm tree", "Accountant", "Ammo clip"],
			"hard": ["What's bred in the bone comes out in the flesh", "Silhouette", "Prima ballerina"]
		},
		{
			"easy": ["Subway", "Watch", "Werewolf"],
			"medium": ["Seven Samurai", "The Russian Dolls", "Lara Croft"],
			"hard": ["Achilles' heel", "Knights of the Zodiac", "Bury your head in the sand"]
		},
		{
			"easy": ["Horse", "Credit card", "Flying saucer"],
			"medium": ["Chameleon", "Atomic bomb", "Scotch tape"],
			"hard": ["Watercooler talk", "Building an empire", "Dressed to the nines"]
		},
		{
			"easy": ["Pilot", "Gas mask", "Pinocchio"],
			"medium": ["Neil Armstrong", "Hanging on the Telephone", "A Clockwork Orange"],
			"hard": ["Straddle the fence", "Sunday paper", "Confuse the issue"]
		},
		{
			"easy": ["Ambulance", "Syringe", "Pajamas"],
			"medium": ["Magnet", "Lightsaber", "Garbage can"],
			"hard": ["It is what it is", "Shoot yourself in the foot", "Alcatraz"]
		},
		{
			"easy": ["Chimney", "Avatar", "Sombrero"],
			"medium": ["Coffee pot", "Aphrodite", "Sausage"],
			"hard": ["Hairbrush", "Every cloud has a silver lining", "Take the plunge"]
		},
		{
			"easy": ["Dr. House", "Toy Story", "Cherry"],
			"medium": ["Cupid", "The Artist", "Compass"],
			"hard": ["Resign", "Beat about the bush", "Ben-Hur"]
		},
		{
			"easy": ["Strawberry", "Firecracker", "Fireman"],
			"medium": ["Bill Clinton", "Pepper mill", "Seal"],
			"hard": ["Fidel Castro (Ruz)", "Roll up your sleeves", "Die Hard"]
		},
		{
			"easy": ["Parrot", "Straw", "The Eiffel Tower"],
			"medium": ["Crossword puzzle", "Marilyn Manson", "Dexter"],
			"hard": ["My precious", "Pushing up the daisies", "Easter Island"]
		},
		{
			"easy": ["The Pink Panther", "Dice", "The Simpsons"],
			"medium": ["The Birdcage", "Key", "Venus de Milo"],
			"hard": ["The road to hell is paved with good intentions", "The Roman Colosseum", "Vietnam War"]
		},
		{
			"easy": ["Yogurt", "Umbrella", "Ninja"],
			"medium": ["Winnie-the-Pooh", "Mother Teresa", "Lucky Luke"],
			"hard": ["Plunger", "Mars Attacks!", "Beetle Bailey"]
		},
		{
			"easy": ["Drone", "The Mummy", "Castle"],
			"medium": ["Utility knife", "The Exorcist", "Sand trap"],
			"hard": ["To move mountains", "Ferris Bueller", "Calvin and Hobbes"]
		},
		{
			"easy": ["Tennis", "Airport", "Hat"],
			"medium": ["Kate Middleton", "Enjoy the Silence", "Brigitte Bardot"],
			"hard": ["Tex Avery", "Ten Little Indians", "War wounds"]
		},
		{
			"easy": ["Fan", "Coffee", "Rattle"],
			"medium": ["Twilight", "Batman", "Johnny Carson"],
			"hard": ["A picture is worth a thousand words", "Have a frog in his throat", "Jean-Claude Van Damme"]
		},
		{
			"easy": ["Polar bear", "Witch", "Snowman"],
			"medium": ["Lincoln Memorial", "Soap", "Baguette"],
			"hard": ["Honeymoon", "Out in the weeds", "To weigh on one's heart"]
		},
		{
			"easy": ["Weathervane", "Gymnasium", "Veranda"],
			"medium": ["War and Peace", "Swallow", "Vaccine"],
			"hard": ["The Lascaux caves", "Inception", "Romance novel"]
		},
		{
			"easy": ["Fire-fighting plane", "Squirrel", "Angel"],
			"medium": ["Bilbo Baggins", "David Guetta", "Captain Harlock"],
			"hard": ["Hungry like the wolf", "Dragonball Z", "Remembrance of Things Past"]
		},
		{
			"easy": ["Snail", "Zorro", "Car stereo"],
			"medium": ["Dumbo", "Zelda", "Angry Birds"],
			"hard": ["Criminal Minds", "Mother hen", "American Beauty"]
		},
		{
			"easy": ["Infomercial", "Garden hose", "Roadrunner"],
			"medium": ["Skeleton", "Trampoline", "The Green Mile"],
			"hard": ["Tempting fate", "Court", "The Sun Also Rises"]
		},
		{
			"easy": ["Lumberjack", "Mosquito", "Microwave oven"],
			"medium": ["Peggy Lee", "Boondock Saints", "Butterknife"],
			"hard": ["Have your feet firmly planted on the ground", "Dangerous Liaisons", "Starvation"]
		},
		{
			"easy": ["Harry Potter", "Lake", "Coca-Cola"],
			"medium": ["Leaving on a Jet Plane", "Stand By Me", "Casserole"],
			"hard": ["I'd stake my life on it", "Feel like a fifth wheel", "Nightmare"]
		},
		{
			"easy": ["Cellphone", "Infrared telescope", "Giraffe"],
			"medium": ["Hannibal Lecter", "The Name of the Rose", "Toaster"],
			"hard": ["Once Upon a Time in the West", "Forked tongue", "Church lady"]
		},
		{
			"easy": ["Defibrillator", "Tetris", "Whale"],
			"medium": ["Barcode", "Stonehenge", "Crossbow"],
			"hard": ["Confess your sins", "The Avengers", "Vacuum cleaner"]
		},
		{
			"easy": ["Pineapple", "Egg", "Mailman"],
			"medium": ["Poodle", "McDonald's", "Empire State Building"],
			"hard": ["Loose talk", "Lewis Caroll", "Fast as lightning"]
		},
		{
			"easy": ["Penguin", "Library", "Doctor"],
			"medium": ["Uncle Scrooge", "Aspartame", "Croissant"],
			"hard": ["George W. Bush", "On pins and needles", "Start off with a bang"]
		},
		{
			"easy": ["Lock", "Duck", "Magnifying glass"],
			"medium": ["Dalai Lama", "Billiards", "Lassie"],
			"hard": ["Curled up in a ball", "Raging fever", "Tower of Babel"]
		},
		{
			"easy": ["Bull", "Fir tree", "Pac-Man"],
			"medium": ["Tintin", "Roller skate", "Margaret Thatcher"],
			"hard": ["Suffer the slings and arrows of outrageous fortune", "Statue of Christ the Redeemer", "Snogging"]
		},
		{
			"easy": ["Vulture", "Jeans", "iPad"],
			"medium": ["Black hole", "Jukebox", "Jonathan Livingston Seagull"],
			"hard": ["Beauty mark", "Cast the first stone", "Pour money down the drain"]
		},
		{
			"easy": ["Tiger", "Fish", "Parasol"],
			"medium": ["Sudoku", "Modeling clay", "Michael Jordan"],
			"hard": ["Prince Valiant", "Mutter under one's breath", "Martin Luther King"]
		},
		{
			"easy": ["Bathtub", "Notebook", "Stethoscope"],
			"medium": ["Spider", "Battery", "Silicone"],
			"hard": ["Meeting halfway", "Never do a lick of work", "Six feet under"]
		},
		{
			"easy": ["Tow truck", "Sewing machine", "Harpoon"],
			"medium": ["Cucumber", "Tom Thumb", "Hula hoop"],
			"hard": ["David and Goliath", "Richie Rich", "Yuri Gagarin"]
		},
		{
			"easy": ["Pirate", "Bike", "Piggy bank"],
			"medium": ["Organ", "Tsunami", "Pencil sharpener"],
			"hard": ["Black eye", "Forewarned is forearmed", "Corkscrew"]
		}
	]
}`

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
const OFFBLACK = 'rgb(70, 70, 70)';
const YELLOW = 'rgb(255, 255, 0)';
const OFFYELLOW = 'rgb(50, 50, 0)';

var cards = null;

fetch("cards.json").then(response => response.json()).then(cardsFromJson => {
	cards = cardsFromJson;
});
// cards = JSON.parse(cardsJson);

var alreadyDrawn = [];
var currentSelectedColor = 'green'

document.body.onkeydown = function(e){
    if (e.keyCode == 120) { 
		if (document.getElementById('takeoverButton').style.display == 'block') {
			document.getElementById('takeoverButton').style.display = 'none';
			document.getElementById('activePlayerArea').style.display = 'none';
			clearGameState();
		} else {
			document.getElementById('takeoverButton').style.display = "block"; 
		}
	}
};

document.getElementById("drawButton").addEventListener('click', drawCard);
document.getElementById("takeoverButton").addEventListener('click', takeOver);
document.getElementById("clearGameStateButton").addEventListener('click', clearGameState);

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

function takeOver() {
	document.getElementById('activePlayerArea').style.display = "block";
}

// active player

// concept cards
function drawCard()
{
	if (alreadyDrawn.length == cards.cards.length) {
		alreadyDrawn = [];
	}
	var random = Math.floor(Math.random() * cards.cards.length);
	while (alreadyDrawn.includes(random)) {
		random = Math.floor(Math.random() * cards.cards.length);
	}
	renderCard(cards.cards[random]);
	alreadyDrawn.push(random);
}

function renderCard(card)
{
	// document.getElementById("card").setAttribute('style','text-align:center;');
	document.getElementById("card").innerHTML = '<hr><b style="color:blue">Easy</b></br><hr></hr>';
	for (string of card.easy) {
		document.getElementById("card").innerHTML += `${string}</br>`;
	}
	document.getElementById("card").innerHTML += '<hr><b style="color:red">Medium</b></br><hr>';
	for (string of card.medium) {
		document.getElementById("card").innerHTML += `${string}</br>`;
	}
	document.getElementById("card").innerHTML += '<hr><b style="color:black">Hard</b></br><hr>';
	for (string of card.hard) {
		document.getElementById("card").innerHTML += `${string}</br>`;
	}
	document.getElementById("card").innerHTML += '</br>';
}

// board
function clearGameState() {
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
	renderGameStatePlayer();
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
	renderGameStatePlayer();
}

function conceptImageClick(parentName) {
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
	renderGameStatePlayer();
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
	renderGameStatePlayer();
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
	renderGameStatePlayer();
}

function renderGameStatePlayer() {
	console.log(`drawGameStatePlayer ${JSON.stringify(gameState)}`);
	const concepts = document.getElementsByClassName('concept');
	for (concept of concepts) {
		concept.style.backgroundColor = null;
		concept.style.backgroundImage = '';
		concept.style.backgroundSize = '';
		concept.getElementsByClassName('detailCount')[0].innerHTML = '';
	}
	var greenConcept = document.getElementById(gameState.greenConcept);
	if (greenConcept != null) { 
		greenConcept.style.backgroundImage += `linear-gradient(${OFFGREEN}, ${OFFGREEN})`;
	}
	var redConcept = document.getElementById(gameState.redConcept);
	if (redConcept != null) { 
		if (redConcept.style.backgroundImage) {
			redConcept.style.backgroundImage += `,linear-gradient(${OFFRED}, ${OFFRED})`;
		} else {
			redConcept.style.backgroundImage += `linear-gradient(${OFFRED}, ${OFFRED})`; 
		}
	}
	var blueConcept = document.getElementById(gameState.blueConcept);
	if (blueConcept != null) { 
		if (blueConcept.style.backgroundImage) {
			blueConcept.style.backgroundImage += `,linear-gradient(${OFFBLUE}, ${OFFBLUE})`;
		} else {
			blueConcept.style.backgroundImage += `linear-gradient(${OFFBLUE}, ${OFFBLUE})`; 
		}
	}
	var blackConcept = document.getElementById(gameState.blackConcept);
	if (blackConcept != null) { 
		if (blackConcept.style.backgroundImage) {
			blackConcept.style.backgroundImage += `,linear-gradient(${OFFBLACK}, ${OFFBLACK})`;
		} else {
			blackConcept.style.backgroundImage += `linear-gradient(${OFFBLACK}, ${OFFBLACK})`; 
		}
	}
	var yellowConcept = document.getElementById(gameState.yellowConcept);
	if (yellowConcept != null) { 
		if (yellowConcept.style.backgroundImage) {
			yellowConcept.style.backgroundImage += `,linear-gradient(${OFFYELLOW}, ${OFFYELLOW})`;
		} else {
			yellowConcept.style.backgroundImage += `linear-gradient(${OFFYELLOW}, ${OFFYELLOW})`; 
		}
	}

	var conceptList = [greenConcept, redConcept, blueConcept, blackConcept, yellowConcept];
	for (concept of conceptList) {
		if (concept != null && concept.style.backgroundSize != null) {
			concept.style.backgroundImage = concept.style.backgroundImage;
			var count = concept.style.backgroundImage.split("linear-gradient").length - 1;
			var str = '';
			for (var i = 1; i <= count; i++) {
				str += `${i * (100/count)}% 100%,`;
			}
			str = str.slice(0, -1);
			concept.style.backgroundSize = str;
		}
	}

	for (detail of gameState.greenDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${GREEN}">|</span>`;
		}
	}
	for (detail of gameState.redDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${RED}">|</span>`;
		}
	}
	for (detail of gameState.blueDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${BLUE}">|</span>`;
		}
	}
	for (detail of gameState.blackDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${BLACK}">|</span>`;
		}
	}
	for (detail of gameState.yellowDetails) {
		var detailObj = document.getElementById(detail);
		if (detailObj != null) { 
			detailObj.getElementsByClassName('detailCount')[0].innerHTML += `<span style="color: ${YELLOW}">|</span>`;
		}
	}
}

// Utility
function remove(array, item) {
	var index = array.indexOf(item);
	if (index !== -1) {
		array.splice(index, 1);
	}
}