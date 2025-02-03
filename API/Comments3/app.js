
const section = document.querySelector(".comments")

// Lien pour l'API de faux commentaires
let commentAPI = "https://jsonplaceholder.typicode.com/comments"

// REQUETE API en GET avec FETCH API

// Je vais faire une requete de type GET vers mon API de commentaires 
fetch(commentAPI)
// Ici pour le premier then on covertit la réponse de l'API depuis JSON
.then(res => res.json()) // Ici res => res.json() est une fonction flechée
// Ici pour le 2eme then on boucle dans le tableau de comments "data"
.then(data => {
    // Pour chaque élément de data on vient créér des éléments HTML qui 
    // auront pour contenu le name, email et message du comment
    data.forEach((item) => {
        console.log(item)
        // Je recup les détails de chaque comment 
        // (en vue de les afficher via mes éléments html ci-dessous)
        let name = item.name
        let message = item.body
        let email= item.email
        // Je crée les destinataires pour ces infos du comment
        let wrapper = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let h3 = document.createElement("h3")
        // Je rajoute du style à mes elmeents HTML crée plus haut
        wrapper.style.border = "solid 1px black"
        wrapper.style.margin = "16px 0"
        wrapper.style.padding = "6px 12px"
        // Je viens donner du contenu à mes éléménts HTML
        h2.textContent = name
        p.textContent = message
        h3.textContent = email
        // Je vais enfin insérer ces éléments sur ma page HTML
        // Je réunis d'abord tout dans le wrapper
        wrapper.append(h2, p, h3)
        section.appendChild(wrapper)
    })
})
.catch(error => console.log(error))
