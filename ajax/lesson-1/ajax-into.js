function loadDoc() {
    const xhr = new XMLHttpRequest();

    // what to do when request arrive

    xhr.onload = function () {
      const container =  document.getElementById("demo")
      container.innerHTML = xhr.responseText;
    }

    xhr.open("GET", "./data/data.txt");

    xhr.send();
 
}

