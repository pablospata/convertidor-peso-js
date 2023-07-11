let kg = document.getElementById('kg');
let lb = document.getElementById('lb');
let oz = document.getElementById('oz');

let convertirDesdeKg = () => {
    let k = kg.value;
    lb.value = (k * 2.2046).toFixed(2);
    oz.value = (k * 35.274).toFixed(2);
}

let convertirDesdeLb = () => {
    let l = lb.value;
    kg.value = (l / 2.2046).toFixed(2);
    oz.value = (l * 16).toFixed(2);
}

let convertirDesdeOz = () => {
    let o = oz.value;
    kg.value = (o / 35.274).toFixed(3);
    lb.value = (o / 16).toFixed(2);
}

kg.addEventListener('input', convertirDesdeKg);
lb.addEventListener('input', convertirDesdeLb);
oz.addEventListener('input', convertirDesdeOz);

window.addEventListener('load', convertirDesdeKg);