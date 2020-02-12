const dashedBorder = "2px dashed #C0C0C0"

const busImage = document.querySelector("#bus-img");
busImage.addEventListener(("mouseover"), function(event) {
    busImage.style.borderBottom = dashedBorder;
    busImage.style.borderLeft = dashedBorder;
    busImage.style.borderRight = dashedBorder;
});
busImage.addEventListener(("mouseleave"), function(event) {
    busImage.style.border = "0";
});
let isBlue = false;
busImage.addEventListener(("dblclick"), function(event) {
    if (isBlue === false) {
        busImage.setAttribute("src", "img/fun-bus-blue.jpg");
        isBlue = true;
    }
    else {
        busImage.setAttribute("src", "img/fun-bus-yellow.jpg");
        isBlue = false;
    }
    console.log(event);
});

const header = document.querySelector("header");
document.addEventListener("scroll", function(event) {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "deepskyblue";
        header.style.transition = "all .5s";
    }
    else {
        header.style.backgroundColor = "white";
    }
    console.log(window.scrollY);
})