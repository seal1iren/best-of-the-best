let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
let suitType;

function randomize() {
  suitType = Math.floor(Math.random() * 4);
  let suitResult = suits[suitType];
  console.log(suitResult);
}

let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  let randomRot = -43 + Math.ceil(Math.random() * 3);
  card.style.transform = `rotateX(60deg) rotateY(0deg) rotateZ(${randomRot}deg) translateZ(${(index+1)*3}px)`;

  card.addEventListener("click", () => {
    if (card.classList.contains("down")) {
      card.classList.remove("down");
      card.classList.add("opened");
    } else if (card.classList.contains("opened")) {
      card.classList.add("is-removed");
    }
    randomize();
  });
});
