// Les variables en JS 

// var est une variable obsolète en JS
// Aujourd'hui on préfère let 
var x = 32
x = 44

let y = 56
y = 52

// Les constantes 
const z = 22
// z = 23 // Pas possible car const est une constante, on ne peut pas la redéclarer ou modifier sa valeur 

// Les types de données en JS : string, boolean, number, object, null ...

// En JS on a des tableaux (array)
let array = ["Tom", 352, true]

// En JS pas de tableaux associatifs mais des Objets 
let object = {
    name: "Jo",
    age : 32,
    bool : true,
    fn : () => {
        console.log("Je suis une fonction anonyme dite flechée")
    }
}

// Rajouter une paire de clé -> valeur, ici ville: "Paris"
object.ville = "Paris"

// console.log(object)

// console.log pour afficher des éléments dans la console
/// Avec typeof je détermine le type de données  
// console.log(typeof "true")

// Conditions et boucles : if, if .. else, while, do .. while, forEach, for .. in, for .. of, switch ...
// if (x > 40) {
//     console.log("Hello !!")
// } 

// Les fonctions comme en PHP aussi 

// 1) Declaration de la fonction
// function sayHello(monParametre) {
//     return "Bonjour " + monParametre
// }

// 2) Appel de la fonction
// console.log(sayHello("Romain"))
// alert("pop up !")

// Coder une fonction qui prend un mot en paramètre et retourne le nombre de lettres de ce mot 

// camelCase -> à utiliser en JS 
// PascalCase

// 1) Déclaration
function calculateLetters(word) {
    return word.length
}

// 2) Appel de la fonction (Ici on l'affiche dans la console)
// console.log(calculateLetters("test"))


// 1) Fonction avec prompt


// Déclaration : Ma fonction retourne une addition si les params sont des chiffres
//  sinon elle retourne une chaine de caractères vides
function addition(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    } else {
        return ""
    }
}

// console.log(addition(45, 897))

// Cette fois-ci une fonction qui calcule si un tableau est un palindrome retourne true si c'est le cas.
// Si le param n'est pas un tableauy on retourne la phrase "On veut un tableau en param !"

// 1) Déclaration de la fonction
function showArrayInConsole(param) {
    return param
}


// 2) Appel de la fonction 
console.log(showArrayInConsole(array))