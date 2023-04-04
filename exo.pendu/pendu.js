const letter document.querySelector("#letter"); // on recupere la lettre
const submitBtn = document.querySelector


//ecrire un tableau avvec de smots
const arraywords = ["arbre", "pisotlet", "dictionnaire", "papier", "presque", "chaise", "ours", "lapin", "fleur", "soleil"];

//fonction pour générer un mot aleatoirement
function wording() {
    let worldToFind = Math.floor(Math.random() * 10);
    let wordChoose = arraywords[wordToFind]
    return wordChoose


}



//générer un mot au hasard 
let selectWord = Math.ceil(Math.random() * arraywords.length);

const letter = document.querySelector("#letter"); //donc on reccupere la lettre dans l'input
const submitBtn = document.querySelector("#submitBtn"); //on reccupere la requete par le bouton


//ecrire un tableau avec des mots
const arrayWords = ["arbre", "pistolet", "dictionnaire", "papier", "presque", "chaise", "ours", "lapin", "fleur", "soleil", ];

// fonction pour generer un mot aleatoirement
function wording() {
    let wordToFind = Math.floor(Math.random() arrayWords.length);
    let wordChoose = arrayWords[wordToFind]
    return wordChoose
}

function checkLetter(mot) {
    let tab = mot.split("")
    return tab
}

let word = checkLetter(wording());
console.log(word);

word.forEach((lettre, index) => {
    const Btn = document.createElement("button");
    Btn.id = index + lettre;
    const mots = document.querySelector("#mots");
    Btn.innerHTML = "";
    mots.appendChild(Btn);
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (input.value == letter) {
        document.getElementById(index + letter).innerHTML = letter;
    }
})

// affich(input.value);
//mettre en clique quand on appel la function


// function affich (lettre){
//      word.forEach((element,index)=>{
//             if(input.value == lettre ){
//             document.getElementById(index+lettre).innerHTML=lettre;
//                                  }
//                         })
// }





// submitBtn.addEventListener("click",()=>(e){         //mettre en clique quand on appel la function

// })
[07: 30]
// //generer un mot au hasard
// // let selectWord = Math.ceil (Math.random()*(arrayWords.length));

// // pour initialiser la recherche en partant de zero
// // let tryNumber = 0;

// //pour afficher le resultat dans la console
// // console.log(wordToFind);

// function checkLetter(e) { 
//     e.preventDefault();
// let inputLetter = parseInt(letter.value);
// resultContent = result.textContent;

// if (inputLetter != wordToFind){
//             result.textContent = "la lettre proposé n'est pas dans le mot"
// }
// else{
//     if (inputLetter==wordToFind) {
//     result.textContent = "afficher la lettre a la bonne place dans le mot";
// }

// }
// }//pour initialiser la recherhce en partant de zero
let tryNumber = 0;

//pour afficher le résultat dans la console
console.log(wordToFind);

function checkletter(e) {
    e.preventDefault();
    let inputletter = parseInt(letter.value);
    resultContent = result.textContent

    if (inputletter != wordToFind) {
        result.textContent = "La lettre proposé n'est pas dans le mot"
    } else {
        if (inputletter == wordToFind) {
            result.textContent = "afficher la lettre à la bonne place"
        }

    }