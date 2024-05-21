let placeYourOrderButton
let placeYourOrderDiv

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM content loaded")
    placeYourOrderButton = document.getElementsByClassName("bloques")[1]
    placeYourOrderDiv = document.getElementsByClassName("place-order-options")[0]

    placeYourOrderButton.addEventListener("mouseover", () => {
        placeYourOrderDiv.style.display = "flex"
    })
    placeYourOrderButton.addEventListener("mouseout", () => {
        placeYourOrderDiv.style.display = "none"
    })

    placeYourOrderDiv.addEventListener("mouseover", () => {
        placeYourOrderDiv.style.display = "flex"
    })
    placeYourOrderDiv.addEventListener("mouseout", () => {
        placeYourOrderDiv.style.display = "none"
    })
})











