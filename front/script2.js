const queryButton = document.querySelector("#query-button");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const navbar = document.querySelector(".navbar");
const input1 = document.querySelector("#name");
const input2 = document.querySelector("#email");
let counter = 0;

queryButton.addEventListener('click', function() {
    if(counter == 0){
        menu2.style.display = "flex"
        navbar.style.flexWrap = "wrap"
        input1.style.width = "100%"
        input2.style.width = "100%"
        navbar.style.justifyContent = "start"
        menu2.style.justifyContent = "space-between"
        menu1.style.width = "calc(100% - 100px)"
        menu2.style.width = "100%"
        menu1.style.width = "100%"
        menu2.style.marginTop = "10px"
        counter++
    } else {
        menu2.style.display = "none"
        counter--
    }
});