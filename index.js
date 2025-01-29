// En JS on peut aussi récupèrer / sélectionner des éléments de notre page HTML

// Ici avec querySelector je sélectionne l'élément avec la balise h1
const h1 = document.querySelector("h1")
const ball = document.querySelector(".ball")

// On va ensuite écouter les événements : un click, une touche pressée, la page qui finit de charger ...
h1.addEventListener("click", () => {
    h1.classList.add("animate__hinge")
})

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        ball.style.left = ball.offsetLeft + 10 + "px"
    }

    if (event.key === "ArrowLeft") {
        ball.style.left = ball.offsetLeft - 10 + "px"
    }

    if (event.key === "ArrowUp") {
        ball.style.top = ball.offsetTop - 10 + "px"
    }

    if (event.key === "ArrowDown") {
        ball.style.top = ball.offsetTop + 10 + "px"
    }
})

