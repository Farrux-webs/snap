const elfirstdropdown = document.querySelector(".first-dropdown");
const elfirstdropdowninline = document.querySelector(".dropdown");
const elbody = document.querySelector("body");


elfirstdropdown.addEventListener("click", () => {
    if(elfirstdropdowninline.style.display == "none") {
        elfirstdropdowninline.style.display = "block";
    }else{
        elfirstdropdowninline.style.display = "none";
    }
    
})



const elSecondDropdown = document.querySelector(".second-dropdown");
const elSecondDropdowninline = document.querySelector(".dropdown2");

elSecondDropdown.addEventListener("click", () => {
    if(elSecondDropdowninline.style.display == "none") {
        elSecondDropdowninline.style.display = "block";
    }else{
        elSecondDropdowninline.style.display = "none";
    }
})


const elNavbar = document.querySelector(".navbar");
const elhamburger = document.querySelector(".hamburger");

elhamburger.addEventListener("click", () => {
    if(elNavbar.style.transform == "translate(100%)"){
        elNavbar.style.transform = "translate(0)";
        elhamburger.classList.remove("bi-list");
        elhamburger.classList.add("bi-x-lg");
        elNavbar.style.boxShadow = "0px 0px 700px 100px black"
    }else{
        elNavbar.style.transform = "translate(100%)";
        elhamburger.classList.remove("bi-x-lg");
        elhamburger.classList.add("bi-list");
        elNavbar.style.boxShadow = "none"
    }
    
})






