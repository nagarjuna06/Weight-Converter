let kgEl = document.getElementById("kg");

let lbEl = document.getElementById("lb");

let ozEl = document.getElementById("oz");

let convertFromKg = () => {
    let kg = kgEl.value;

    //toFixed(2) limits the decimals to 2 digits.

    lbEl.value = (kg * 2.205).toFixed(2);

    ozEl.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
    let lb = lbEl.value;

    kgEl.value = (lb / 2.205).toFixed(2);

    ozEl.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
    let oz = ozEl.value;

    kgEl.value = (oz / 35.274).toFixed(2);

    lbEl.value = (oz / 16).toFixed(2);
};

kgEl.addEventListener("input", convertFromKg);

lbEl.addEventListener("input", convertFromLb);

ozEl.addEventListener("input", convertFromOz);

window.addEventListener("load", convertFromKg);
