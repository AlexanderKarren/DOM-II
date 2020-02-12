const dashedBorder = "2px dashed #C0C0C0"

// mouseover
const busImage = document.querySelector("#bus-img");
busImage.addEventListener(("mouseover"), function(event) {
    busImage.style.borderBottom = dashedBorder;
    busImage.style.borderLeft = dashedBorder;
    busImage.style.borderRight = dashedBorder;
});
// mouseleave
busImage.addEventListener(("mouseleave"), function(event) {
    busImage.style.border = "0";
});

// dblclick
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
});

// scroll
const header = document.querySelector("header");
document.addEventListener("scroll", function(event) {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "deepskyblue";
        header.style.transition = "all .5s";
    }
    else {
        header.style.backgroundColor = "white";
    }
})

// click
document.querySelectorAll("h2").forEach(function(element) {
    element.addEventListener("click", function(event) {
        console.log("text selected");
    })
});

// resize
const body = document.querySelector("body");
const warning = document.querySelector("#warning");
const originalWarning = warning.textContent;
window.addEventListener("resize", function(event) {
    if (window.screenX > 0) {
      body.style.backgroundColor = "lightcoral";
      warning.textContent = "OH NO!"
    }
    else {
        body.style.backgroundColor = "white";
        warning.textContent = originalWarning;
    }
});

// form
const form = document.querySelector("form");
const nameInput = document.querySelector("[name=Name]");
const textArea = document.querySelector("textarea");
const submitButton = document.querySelector("[type=submit]");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (nameInput.value.length == 0) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Fill it out!";
        errorMessage.style.color = "red";
        form.appendChild(errorMessage);
    }
    else {
        form.style.display = "none";
        const doneMessage = document.createElement("p");
        doneMessage.textContent = `Thank you, ${nameInput.value}, for filling out the form.`
        form.parentElement.appendChild(doneMessage);
    }
});

// stopPropagation()

const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", function(event) {
    mainHeading.color = "blue";
    console.log("asshole");
});
