let placeYourOrderButton
let placeYourOrderDiv


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM content loaded")
    placeYourOrderButton = document.getElementsByClassName("logo2")[1]
    placeYourOrderDiv = document.getElementsByClassName("place-order-options")[0]

    placeYourOrderButton.addEventListener("click", () => {
        if (placeYourOrderDiv.style.display != "flex")
        {
            placeYourOrderDiv.style.display = "flex"
        } else {placeYourOrderDiv.style.display = "none"}
    })
})
 