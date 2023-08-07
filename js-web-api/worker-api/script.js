let w;

function startWorker() {

    if(typeof(Worker !== "undefined")) {

        // worker supported

        if(typeof(w == "undefined")) {

            // create a new worker
            w = new Worker("worker.js");
        }
        // listening for worker events/messages
        w.onmessage = function(e) {
            document.getElementById("demo").innerHTML = e.data;
        }

    }else {
        alert("Your browser does not support web worker!");
    }


}

function stopWorker() {
    if (typeof Worker !== "undefined") {
        w.terminate();
        w = undefined;
    } else {
        alert("Your browser does not support web worker!");
    }
}