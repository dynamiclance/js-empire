
let myWindow;

let width = document.getElementById("width");
let height = document.getElementById("height");

width.innerHTML = "Total width is " + window.innerWidth;
height.innerHTML = "Total height is " + window.innerHeight;

function openWindow() {
    myWindow = window.open("https://www.google.com")
}

function closeWindow() {
    myWindow.close()
}