const pokedex = document.querySelector(".pokedex")

// Lien pour l'API monstre de poche
let apiLink = "https://pokebuildapi.fr/api/v1/pokemon"


// Avec fetch et une requete GET on va recup les pokemons et leurs infos
// On pourra recup par exemple : le nom, l'id, l'image et le type de pokemon.
// Vous etes libres sur le reste.

// On fera comme avec les comments on pourra créer les éléments depuis le JS 
// et les insérer dans le HTML

// Vous pouvez suivre les memes étapes que pour le cas des commentaires : 

// 1) Utiliser Fetch pour faire la requete GET
// 2) Dans les then, traduire depuis json, recup les données et crée les elems html
// 3) Enfin insérer ces éléments de notre page HTML 
// Ne pas oublier le catch pour gérer les erreurs. 

fetch(apiLink)
.then(res => res.json())
.then(data => {

    console.log(data)

    data.forEach((pokemon) => {
        // Je recup les infos nécessaires depuis l'api
        let name = pokemon.name
        let image = pokemon.image 
        let id = pokemon.id
        
        let types = pokemon.apiTypes

        // On créer nos éléments HTML
        let wrapper = document.createElement("div")
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        let p = document.createElement("p")

        // Ajout des règles de style (possible de le faire en CSS directement)
        wrapper.style.border = "solid 1px black"
        wrapper.style.margin = "16px 0"
        wrapper.style.padding = "6px 12px"
        img.style.width = "120px"
        wrapper.style.display = "flex"
        wrapper.style.flexDirection = "column"
        wrapper.justifyContent = "center"
        wrapper.style.cursor = "pointer"

        // Ajouter du contenu au sein de nos élméments HTML
        h2.textContent = name
        img.src = image
        p.textContent = id

        // J'insère ces éléments HTML dans ma page HTML
        wrapper.append(h2, p, img)

        // Je boucle dans le tableau apiTypes poyur venir ajouter chaque type 
        types.forEach((item) => {
            let type = document.createElement("h3")
            type.textContent = item.name
            wrapper.appendChild(type)
        })

        // J'écoute le click sur un wrapper (cad une cart pokemon)
        wrapper.addEventListener("click", () => {
            // Je récupère les stats pour un pokemon
            let stats = pokemon.stats

            // On peut aussi boucler avec des objets, grace au for ... in ici
            // Ainsi on accède à chaque clé et sa valeur associée 
            for (let key in stats) {
               
                let statParagraph = document.createElement("p")
                statParagraph.textContent = key + " : " + stats[key]
                wrapper.appendChild(statParagraph)
            }

            // Ici j'aimerais afficher juste le pokemon sur lequel on clique
            pokedex.innerHTML = ""

            pokedex.appendChild(wrapper)
        })

        // J'ajoute finalement le(s) wrappers dans le contenant pokedex (créée dans le HTML)
        pokedex.appendChild(wrapper)



    })

})


let array = [1, 2, 3, 4]

array.forEach((number) => {
    number += 1;
    console.log(number)
})