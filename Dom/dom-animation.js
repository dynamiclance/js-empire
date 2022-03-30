
function myMove() {
    const animate = document.getElementById("animate");
    const interval = setInterval(frame, 5);
    let pos = 0;

    function frame() {
        if(pos < 350){
            pos++;
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        } else{
            clearInterval(interval);
        }
    }
} 



document.getElementById("moveNow").addEventListener("click", myMove);