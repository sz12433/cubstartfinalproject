let counter = document.getElementById("counter");
let result = document.getElementById("result");
let count = 0;

counter.addEventListener("click", () => {
    count += 1;
    result.innerHTML = count
})
