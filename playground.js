let counter = document.getElementById("counter");
let result = document.getElementById("result");
let save = document.getElementById("save");
let load = document.getElementById("load");
let recruiter = document.getElementById("recruiter");
let oskicost = document.getElementById("oskicost");
let upgrades = document.getElementById("upgrades");
let count = 0;
let reccount = 0;
let cost = 2;

function Update() {
    count += reccount;
    result.innerHTML = count;
}

setInterval(Update, 500);

counter.addEventListener("click", () => {
    count += 1;
    result.innerHTML = count;
})

save.addEventListener("click", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("reccount", reccount);
    localStorage.setItem("cost", cost);
    windows.alert("Saved");
})

load.addEventListener("click", () => {
    count = localStorage.getItem("count");
    cost = localStorage.getItem("cost");
    reccount = localStorage.getItem("reccount");
    count = parseInt(count);
    result.innerHTML = count;
    oskicost.innerHTML = cost;
    upgrades.innerHTML = reccount;
})

recruiter.addEventListener("click", () => {
    if (count >= cost) {
        count -= cost;
        result.innerHTML = count;
        reccount += 1;
        upgrades.innerHTML = reccount;
        cost = cost * 3;
        oskicost.innerHTML = cost;
    }
    else {
        windows.alert("Not enough Oskis to sacrifice!")
    }
})

