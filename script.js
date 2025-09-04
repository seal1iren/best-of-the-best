let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
let suitType;

randomize = () => {
	suitType = Math.floor(Math.random() * 4);
  let suitResult = suits[suitType];
	console.log(suitResult);
}

let cardAmount = ($('.card').length) + 1;

for (i = 1; i < cardAmount; i++) {
	var randomRot = -43 + Math.ceil(Math.random() * 3);
	var card = document.querySelector(`.card:nth-child(${i})`);
	card.style.transform = `rotateX(60deg) rotateY(0deg) rotateZ(${randomRot}deg) translateZ(${i*3}px)`;
}

$('.card').click(function(){
	if ($(this).hasClass('down')) {
		$(this).removeClass('down');
		$(this).addClass('opened');
	}
	else if ($(this).hasClass('opened')) {
		$(this).addClass('is-removed');
	}
	randomize();
});
