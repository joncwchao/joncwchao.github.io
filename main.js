function draw()
{
	var random = Math.floor(Math.random() * cards.length);
	// for 1000 turns
	// switch the values of two random cards
	console.log(`got random ${random}`);
	renderCard(cards[random]);
}

function renderCard(card)
{
	console.log(`card value = ${card}`);
	document.getElementById("card").innerHTML = 
			`<b>Easy</b></br></hr></br>${card.easy}</br></hr></br>` +
			`<b>Medium</b></br></hr></br>${card.medium}</br></hr></br>` +
			`<b>Hard</b></br></hr></br>${card.hard}</br></hr></br>`;
}

var cards = [
	{
		easy: ["Restaurant</br>Style</br>Mole"],
		medium: ["Prosthesis</br>Leaves of Grass</br>Maggie Gyllenhaal"],
		hard: ["Resident Evil</br>Game of Thrones</br>Statue of Liberty"]
	},
	{
		easy: ["Crocodile</br>Canary</br>Piano"],
		medium:["Target</br>Billy the Kid</br>Moustache"],
		hard: ["Adam Carolla</br>Footbath</br>Not for the faint-hearted"]
	},
	{
		easy: ["Fork</br>Gun</br>Bat"],
		medium:["Forrest Gump</br>Ferret</br>Cockroach"],
		hard: ["Know your limits</br>Disappear into thin air</br>Heartbreaking"]
	},
	{
		easy: ["Little House on the Prairie</br>Public holiday</br>Volcano"],
		medium:["Tinkerbell</br>Julia Roberts</br>Whiskey"],
		hard: ["The Nightmare Before Christmas</br>Boys will be boys</br>Sell your soul to the devil"]
	},
	{
		easy: ["Bank</br>Bedroom</br>Flute"],
		medium:["Archimedes</br>Borat</br>Fast and Furious"],
		hard: ["To be given free rein</br>Billy Jean</br>Eureka!"]
	},
	{
		easy: ["Wallet</br>Tin</br>Diamond"],
		medium:["Beach</br>Lawyer</br>Cookie"],
		hard: ["Fools rush in</br>I smell a rat</br>From the Earth to the Moon"]
	},
	{
		easy: ["Meteorite</br>Museum</br>Refrigerator"],
		medium:["Contact lens</br>The Sims</br>Power Rangers"],
		hard: ["The Age of Enlightenment</br>Clammy hands</br>Rain Man"]
	},
	{
		easy: ["Printer</br>Chalet</br>Carpet"],
		medium:["John Lennon</br>Bowling for Columbine</br>Snowboard"],
		hard: ["Ted Koppel</br>Big Ben</br>Skyfall"]
	},
	{
		easy: ["Tepee</br>Shirt</br>Rocket"],
		medium:["Sushi</br>Calculator</br>French fries"],
		hard: ["Tina Turner</br>Brood over</br>Fight Club"]
	},
	{
		easy: ["SpongeBob SquarePants</br>Spice</br>Tarzan"],
		medium:["Gone With The Wind</br>Ocean's Eleven</br>Crop circle"],
		hard: ["Hungover</br>Sleep with one eye open</br>Snoopy"]
	},
];