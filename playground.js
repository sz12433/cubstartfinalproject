let counter = document.getElementById("counter");
let result = document.getElementById("result");
let save = document.getElementById("save");
let load = document.getElementById("load");
let count = 0;

counter.addEventListener("click", () => {
    count += 1;
    result.innerHTML = count;
})

save.addEventListener("click", () => {
    localStorage.setItem("count", count);
<<<<<<< Updated upstream
    windows.alert("Saved");
=======
>>>>>>> Stashed changes
})

load.addEventListener("click", () => {
    count = localStorage.getItem("count");
    count = parseInt(count);
    result.innerHTML = count;
})

