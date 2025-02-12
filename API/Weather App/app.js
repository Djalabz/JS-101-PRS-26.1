//// APP METEO 

// OBJECTIFS :

// 1) Vous allez faire une première version de l'app ou l'on peut se géolocaliser en cliquant sur un bouton 
// 2) Afin de se géolocaliser vous allez utiliser la fonction geolocate (https://www.w3schools.com/html/html5_geolocation.asp)
// 3) Quand on clique sur le bouton vous devez récupérer latitude et longitude de votre position et inclure ces infos 
// dans le lien de la requete
// 4) On va vouloir afficher une image du temps qu'il fait via des icones prévues (https://openweathermap.org/weather-conditions)
// 5) On voudra afficher également l atempérature en degrés, la ville et le pays

// ETAPES A SUIVRE : 

// Coder les éléments HTML (le bouton geolocate, les div - ou autre - destinés à recevoir les infos depuis le JS)
// Dans le JS on récupère ces éléments (querySelector tout ca), on écoute le bouton Geolocate qui lors du click
// viendra déclencher la fonction de geolocalisation (cf le lien plus haut) et la requete API avec les bonnes lat et lng
// Enfin vous afficherez les éléments pertinents que vous recevez de l'API dans le HTML (depuis le JS)
// Pourquoi pas styliser le tout eà la fin

// Récupération des éléments HTML destinés a etre utilisés dans ce script
const geolocateBtn = document.querySelector(".geolocate")
const section = document.querySelector(".meteo")

// let et lng ici juste pour l'exemple
let apiKey = "YOUR_API_KEY"

//// FONCTIONS

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
}
    
function showPosition(position) {
    let lat = position.coords.latitude
    let lng = position.coords.longitude

    fetchAPI(lat, lng)
}

function fetchAPI(lat, lng) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let city = data.name
        let temp = data.main.temp
        let country = data.sys.country
        let icon = data.weather[0].icon
        let main = data.weather[0].main
        let desc = data.weather[0].description

        let div = document.createElement("div")

        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
            <h1>${main} // ${temp} °C</h1>
            <h1>${city}, ${country}</h1>
        `
        section.appendChild(div)
    })
    .catch(err => console.log(err))
}

geolocateBtn.addEventListener("click", () => {
    // Recup lat et lng avec les fonctions de geolocalisation + Faire ma requete API
    getLocation()
}) 