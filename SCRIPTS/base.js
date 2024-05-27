let placeYourOrderButton
let placeYourOrderDiv

let loginButton
let loginDiv

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
    loginButton = document.getElementsByClassName("boton")[1]
    loginDiv = document.getElementsByClassName("InicioUsuariosDiv")[0]

    loginButton.addEventListener("click", () => {
        if (loginDiv.style.display != "flex")
        {
            loginDiv.style.display = "flex"
        } else {loginDiv.style.display = "none"}
    })
})
