// JEU DE SHI-FU-MI


// 1 - L'idée est de permettre au joueur de choisir entre pierre feuille ou ciseaux 
//     dans un premier temps
// 2 - Suite à ce choix l'ordinateur fera également un choix random 
// 3 - Vous comparerez ensuite les 2 choix 
// 4 - Si vous gagnez c'est un point de plus au niveau des scores 
//     Sinon 0 points...
// 5 - Faire en sorte qu'une manche ne dure que 10 tours.


// Recup les éléments HTML dans un premier temps (querySelector etc)
// Ecouter le bouton de jeu + les boutons pour pierre feuille et ciseaux
// Lorsque l'on clique sur le bouton de jeu on recup le choix du joueur (via event target ou autre méthode)
// On vient s'occuper du choix de l'ordi : ce sera un choix aléatoire parmi pierre feuille et ciseaux
// On va comparer les  choix (joueur et ordi) et donner un point au joueur si il a gagné
// On viendra enfin afficher les éléments dans notre HTML


// RECUPERATION DE NOS ELEMENTS EN HTML
const play = document.querySelector(".play")

const result = document.querySelector(".result")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")

const choices = document.querySelectorAll("img")

let arrayChoices = ["pierre", "feuille", "ciseaux"]
let score = 0

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        // Je console log l'attribut personnalisé data-elem, voir dans le HTML
        console.log(event.target.dataset.elem)

        playerChoice = event.target.dataset.elem
        player.textContent = `Joueur : ${playerChoice}`
    })
})

play.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * 3)
    let computerChoice = arrayChoices[randomIndex]
    computer.textContent = `Ordinateur : ${computerChoice}`
})