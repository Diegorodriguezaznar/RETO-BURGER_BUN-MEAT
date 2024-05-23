let placeYourOrderButton
let placeYourOrderDiv

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM content loaded")
    placeYourOrderButton = document.getElementsByClassName("logo2")[1]
    placeYourOrderDiv = document.getElementsByClassName("place-order-options")[0]

    placeYourOrderButton.addEventListener("click", () => {
        placeYourOrderDiv.style.display = "flex"
    })
    placeYourOrderButton.addEventListener("clickout", () => {
        placeYourOrderDiv.style.display = "none"
    })

    placeYourOrderDiv.addEventListener("click", () => {
        placeYourOrderDiv.style.display = "flex"
    })
    placeYourOrderDiv.addEventListener("clickout", () => {
        placeYourOrderDiv.style.display = "none"
    })
})











