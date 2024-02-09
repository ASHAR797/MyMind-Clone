// Hamburger navigation 

let menu = document.querySelector(".menu")
let navigation = document.querySelector("#navigation")

menu.addEventListener("click", function () {
    let visibility = navigation.getAttribute("data-visible")
    if (visibility === "false") {
        navigation.setAttribute("data-visible", true)
        menu.setAttribute("aria-expanded", true)
        document.querySelector(".main").style.display = "none"
        document.querySelector(".footer").style.display = "none"
    }
    else if (visibility === "true") {
        document.querySelector(".main").style.display = "block"
        document.querySelector(".footer").style.display = "flex"
        navigation.setAttribute("data-visible", false)
        menu.setAttribute("aria-expanded", false)
    }
})