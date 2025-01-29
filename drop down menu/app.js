// FAIRE UN DROP DOWN MENU AVEC JS (Il faudra modifier à la fois le HTML et le JS)

// 1) Vous allez devoir insérer le burger icone dans le html 
// 2) Dans le JS vous viendrez sélectionner le burger icone 
// 3) Vous ajouterez un écouteur d'événement sur le burger icone pour le click
// 4) Lors du click vous pourrez : 
//  - Soit modifier du CSS pour créer cet effet de glissement (via les transitions ...)
//  - Soit ajouter des classes de animate css 
//  - Soit vous le faites sans animation mais fonctionnel

// En revanche, un impératif, lorsque l'on clique une première fois le menu s'ouvre
// Et lorsque l'on reclique il se ferme

const burger = document.querySelector("#burger-logo")
const menu = document.querySelector(".menu-wrapper")
const links = menu.querySelectorAll("a")

burger.addEventListener("click", () => {
    // Si jamais mon menu est ouvert alors on le cache vers la droite et on réduit l'opacité de nos lien à 0
    if (menu.style.right === "0px") {
        // Repositionnement du menu wrapper vers la droite 
        menu.style.right = "-100vw"

        // On transforme notre links (objet) en tableau avant de boucler 
        // Pouyr chaque lien je veux réduire son opacité 
        Array.from(links).forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = "0"
            }, 200 * index)
        })
    // Dans les autres cas on affiche le menu et les liens de manière progressive 
    } else {
        // On affiche le menu en précisant right = 0
        menu.style.right = "0px";

        // Pour chaque lien de links je les fait apparaitre avec un léger délai entre chaque (j'utilise l'index)
        Array.from(links).forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = "1"
            }, 200 * index)
        })
    }


})