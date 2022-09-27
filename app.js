const elfirstdropdown = document.querySelector(".first-dropdown");
const elfirstdropdowninline = document.querySelector(".dropdown");

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