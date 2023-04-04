// je déclare toutes mes variables
const price = document.querySelector("#price"); // recupere la balise input "#price"
const submitBtn = document.querySelector("#submitBtn"); //je recupere le bouton "#submitBtn"
const restartBtn = document.querySelector("#restartBtn"); //je recupere le bouton "#submitBtn"
const result = document.querySelector("#result"); //je recupere le p #result
const tryDone = document.querySelector("#tryDone"); //je recupere le p #result

/*
 * je crée un tableau pour stocker tout les cadeaux disponibles
 * let monTableau = ["cadeau1", "cadeau2"...]
 * let monTableau2 = [12, 34...]
 */
const giftArray = [
    "une trotinnette",
    "un chameau",
    "une poire à lavement",
    "un pc portable",
    "une voiture thermique avec un bidon d'essence vide",
];
/*
 * Math.random() => genere un chiffre a virgule compris entre 0 et 1 exemple 0,43235345346546565
 * ensuite on multiplie le chiffre par la valeur max attendu (100 dans notre exemple, car le prix max possible est 100)
 * mais on obtient toujours un resultat en nombre flotant (a virgule), ex : 23,4578999908908
 * enfin il faut arrondir ce chiffre pour le convertir entier (Math.floor())
 */
let priceToFind = Math.floor(Math.random() * 100);
/*
 * pour choisir mon n° de cadeau, je genere un entier compris entre 0
 * et la taille de mon tableau (tabeau.lenght), cependant je n'oublie pas de faire longueur tableau
 * -1 pour prendre en compte le fait que la 1er case d'un tableau (en js, php..)est la case n°0
 */
let selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // prix aléatoire entre 1 et 100
//je créer mon compteur d'essais, en l'initialisant à 0
let tryNumber = 0;

console.log(priceToFind); // j'affiche le prix à trouver en console

// fonction permettant de vérifier le prix
function checkPrice(e) {
    e.preventDefault(); // annule le comportement par défaut du formulaire => empeche la soumisson direct du formulaire

    //recuperer le prix saisie et le comparer a mon prix mystere
    let inputPrice = parseInt(price.value);

    //je sauvegarde l'historique des message
    resultContent = result.textContent;

    if (tryNumber > 7) {
        result.textContent = "Vous avez perdu!";
    } else {

		tryNumber++; // je compte un essai supplémentaire => tryNumber = tryNumber + 1

        if (inputPrice === priceToFind) {
            // j'ajoute un nouveau message à l'historique
            resultContent = `Vous avez gagné le lot suivant : ${giftArray[selectedGift]}`;
        } else if (inputPrice < priceToFind) {
            // j'ajoute un nouveau message à l'historique
            resultContent = "Plus grand";
        } else {
            // j'ajoute un nouveau message à l'historique
            resultContent = "Plus petit";
        }
        //afficher le nouvel historique
        result.textContent = resultContent;
    }

    tryDone.textContent = displayNumTryLeft(); // j'actualise l'affichage du nombre d'essai
    price.value = ""; // raz prix proposé
    price.focus();
}

// fonction de mise à jour de l'affichage du nombre d'essai
const displayNumTryLeft = () => {
    //si plus d'un essai alors version pluriel, sinon version singulier
    const trySentence =
        tryNumber > 1 ? `${tryNumber} essais` : `${tryNumber} essai`;
    //je renvoi la phrase choisi au reste du programme
    return trySentence;
};

//j'ajoute l'appel à la fonction checkPrice() sur l'evenement "click"
submitBtn.addEventListener("click", function (e) { //addEventListener permet d'ajouter une action sur un evenement
    checkPrice(e);
});

price.onkeydown = (e) => {
    if (e.key === "Enter") {
        checkPrice(e);
    }
}

// j'ajoute l'action sur le click du bouton recommencer
restartBtn.addEventListener("click", function () {
    // je réinitialise les variables qui vont bien
    priceToFind = Math.ceil(Math.random() * 100); // prix aléatoire entre 1 et 100
    selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)); // cadeau aléatoire entre 1 et longeur tableau -1
    tryNumber = 0; //initialisation

    // je remet mon affichage à 0
    result.textContent = "";
    tryDone.textContent = "";
    price.value = "";
    price.focus();

    console.log(priceToFind); // j'affiche le prix à trouver en console
});

//lancement de la musique du juste prix
const generiqueJP = new Audio(
    "https://www.televisiontunes.com/uploads/audio/Generique%20du%20Juste%20Prix%20-%201998%20-%20France.mp3"
);
// j'active le parametre de musique en boucle
generiqueJP.loop = true;
// je démarre la lecture de la musique
generiqueJP.play();

price.focus();