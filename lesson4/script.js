//Link to weather API...
//Some other BS...
//Done with the JS!
const button = document.getElementById("menu-icon");
const mainnav = document.querySelector(".main-nav")
button.addEventListener(
    "click",
    () => {
        mainnav.classList.toggle("expanded");
    },
    false
);
window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove("expanded");
};
let now = new Date();
let currentDate = document.getElementById("date")
currentDate.innerHTML =  now.toLocaleString("en-US", {month: "long"}) + " " + now.getDate() + ", " + now.getFullYear()