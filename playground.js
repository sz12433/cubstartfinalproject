let counter = document.getElementById("counter");
let result = document.getElementById("result");
let save = document.getElementById("save");
let load = document.getElementById("load");
let count = 0;

counter.addEventListener("click", () => {
    count += 1;
    result.innerHTML = count
})

save.addEventListener("click", () => {
    localStorage.setItem("count", count)
})

load.addEventListener("click", () => {
    count = localStorage.getItem("count") - 1;
    count = parseInt(count);
    document.getElementById("result") = count;
})

