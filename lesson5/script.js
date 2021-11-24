const d = new Date()
let date = d.getDay()

document.getElementById("party").style.visibility = "hidden";

if (date == 5) {
    document.getElementById("party").style.visibility = "visible";
}