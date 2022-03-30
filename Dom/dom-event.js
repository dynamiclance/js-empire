function myFunction(this) {
    console.log(this)
}

const button = document.getElementById("id").addEventListener("click", function() {
    myFunction(" I am the hero");
})

function mOver(id) {
    id.innerHTML = "Thank You";
}

function mOut(id) {
    id.innerHTML = "Welcome back";
}

function mDown(id) {
    id.innerHTML = "Thanks";
}

function mUp(id) {
    id.innerHTML = "welcome";
}
