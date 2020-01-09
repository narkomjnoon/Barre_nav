let menuDeroulant = document.getElementById("contenu_menu_deroulant");
let burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    menuDeroulant.classList.toggle("none");
})

let logoTitre = document.getElementsByClassName("logo_titre");
