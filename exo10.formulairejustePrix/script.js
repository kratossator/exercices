//je commencer par récuperer les elements avec lesquels je vais travailler
const price = document.querySelector("#price");
const submitBtn = document.querySelector("#submitBtn");
const tryDone = document.querySelector("#tryDone");
const result = document.querySelector("#result");
const restartBtn = document.querySelector("#restartBtn");
const arrGift = [
	"une twingo", // 0
	"une poire", // 1
	"une paire de babouche", // 2
	"une djellaba pour vincent", // 3
	"une poire à lavement", // 4
	"un gueridon en bois massif", // 5
];

// je créer les variables du jeu
let tryNumber = 0; // permet de compter le nombdre d'essai
let priceToFind = Math.round(Math.random() * 100); // je genere une chiffre compris entre 0 et 100 et j'arrondi a l'entier le plus proche

// je vais choisir de maniere alétoire un cadeau dans le tableau
let randomGift = Math.round(Math.random() * (arrGift.length - 1)); // genere un numéro de cadeau
let selectedGift = arrGift[randomGift]; // recupere le nom correspondant au numéro de cadeau
console.log(priceToFind);
console.log(selectedGift);

submitBtn.addEventListener("click", function (event) {
	event.preventDefault(); // j'empeche le comportement par défaut (ici recharger la page et regenerer un nouveau prix aléatoire)

	if (tryNumber >= 7) {
		// ou > 6
		result.textContent = "Vous avez perdu";
		return false; // permet de sortir de la fonction, autrement je ne continue pas le traitement
	}

	const proposedPrice = parseInt(price.value); // je convertit en numérique le prix proposer par mon utilisateur
	//je peux comparer le prix proposé avec le prix a trouver
	if (proposedPrice === priceToFind) {
		result.textContent = `Bravo vous avez gagné le lot suivant : ${selectedGift}`;
	} else {
		//le prix n'est pas bon, je compte un essai supplémentaire
		tryNumber++; // j'aoute un essai raté au compteur
		tryDone.textContent =
			tryNumber > 1 ? `${tryNumber} essais` : `${tryNumber} essai`; //j'affiche le nombre d'essais effectués

		// /? équivalent à
		// if (tryNumber > 1) {
		// 	tryDone.textContent = `${tryNumber} essais`;
		// } else {
		// 	tryDone.textContent = `${tryNumber} essai`;
		// }

		//ensuite je verifie si il est trop ou trop petit
		if (proposedPrice > priceToFind) {
			//le prix proposé est trop grand
			result.textContent = "Trop grand";
		} else {
			//si il n'est pas égale, ni trop grand, il est forcement trop petit
			result.textContent = "Trop petit";
		}
	}
});

restartBtn.addEventListener("click", function () {
	tryNumber = 0; // je raz le compteur d'essai
	priceToFind = Math.round(Math.random() * 100); // je genere un nouveau prix
	// je choisi un nouveau cadeau
	randomGift = Math.round(Math.random() * (arrGift.length - 1)); // genere un numéro de cadeau
	selectedGift = arrGift[randomGift];
	console.log(priceToFind);
	console.log(selectedGift);
});
