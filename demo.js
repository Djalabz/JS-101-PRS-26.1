// MANIPULATION DU DOM en JAVASCRIPT

// En JS un des principes essentiel est la manipulation d'éléments du DOM (Document Object Model)

// Pour manipuler les éléments de ma page je vais d'abord evoir les sélectionner 
// Cela peut passer par le nom de la balise, la classe de l'élément ou encore son id 

// Ex : je viens créer une variable qui contiendra le h présent sur ma page html
// Ici je passe par le nom de la balise (h1 en l'ocurrence) pour sélectionner mon élément.

// SELECTION DES ELEMENTS DU DOM (cad des éléments HTML de notre page)
// On peut passer par leur nom de balise 
const h1 = document.querySelector("h1")
const body = document.querySelector("body")
const btn = document.querySelector("button")

// Mais on peut aussi passer par les ids ou les classes
const h2 = document.querySelector(".second-title")
const p = document.querySelector("#smallParagraph")
// const p = document.getElementById("smallParagraph")

// ATTENTION querySelector ne peut sélectionner qu'un élément à la fois 
// Pour sélectionner plusieurs éléments on utilisera querySelectorAll
const everyLi = document.querySelectorAll("li") 

everyLi.forEach(li => li.textContent = "Je suis un li")

// Une fois mon h1 selectionné je peux vhanger par exemple son contenu texte
h1.textContent = "Je suis le nouveau contenu texte du h1 et c'est JS qui me détermine"

// Je peux aussi influer sur le style de mes éléments 
h1.style.color = "brown";

// Je peux meme changer le contenu HTML de mon élément 
h1.innerHTML = "<a>Finalement je suis un lien</a>"

// Depuis JS on peut aussi directement créer et insérer dans notre page des éléménts HTML
const newH1 = document.createElement("h1")
body.appendChild(newH1)


// LES ECOUTEURS D'EVENEMENTS 
btn.addEventListener("click", () => {
    btn.textContent = "Spreche deutsch jetzt !"
})

document.addEventListener("keydown", () => {
    btn.style.width = "300px"
})

window.addEventListener("DOMContentLoaded", () => {
    alert("Les éléments du DOM sont chargés !")
})

// Je définis ma fonction makeLetterAppear()
function makeLetterAppear() {
    let array = ["B", "i", "e", "n", "v", "e", "n", "u", "!" ]

    array.forEach((letter) => {
        setTimeout(() => {
            newH1.textContent += letter
        }, 300 * i)
    })
}

// makeLetterAppear()
let array = ["B", "i", "e", "n", "v", "e", "n", "u", "!"]

for (let i=0; i < array.length; i++) {
    setTimeout(() => {

        setTimeout(() => {
            newH1.textContent += "|"
        }, 150)

        newH1.textContent.replace("|", "")
        newH1.textContent += array[i]

    }, 300 * i)   
}
// Pour notre effet IPSSI on veut que les lettres apparaissent à interval régulier 
// Afind e travailler avec des intervales j'utilise la fonction JS setInterval()
// let interval = setInterval(makeLetterAppear(), 3000)
