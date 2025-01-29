const names = [
    "ABDILLAHI Ylang",
    "BANEN Gina",
    "BARAKA KAYEMBE Exauce",
    "BERFEUIL Gabriel",
    "BOURGOIN Ralph",
    "BOUYASSINE Rayan",
    "BRAND Nicolas",
    "CAI Paul",
    "CAKPO Kenneth",
    "CHARBIT Samuel",
    "CHITOROAGA Stefan",
    "DIZON Richard",
    "DU William",
    "FRENARD Clément",
    "JAEN Raphael",
    "JOLY Maxim",
    "KONE Kadiatou Sadio",
    "LUMBALA JUNIOR Roger",
    "MILLER Yohann",
    "STAMPER Lucas",
    "YAKARSIMSEK Raphael"
]

// 1) Déclaration de la fonction 
function pickRandomStudent(listeEleve) {
    // Avec Math.random() on va pouvoir générer un nombre aléatoire
    // Avec Math.floor() on vient arrondir au chiffre du dessous (2.6 devient 2)
    // Car je vais me retrouver probablement avec des floats (ou décimaux)
    let random = Math.floor(Math.random() * listeEleve.length) // Je vais générere un index aléatoire

    // Je retourne un élève aléatoire issu de mon tableau
    return listeEleve[random]    
}

// 2) Appel de la fonction
let randomStudent = pickRandomStudent(names)
console.log(randomStudent)
