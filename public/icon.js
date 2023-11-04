let icons = [
    "./assets/images/Icon1.png",
    "./assets/images/Icon2.png",
    "./assets/images/Icon3.png"
];
let favicon = $("#favicon");
let i = 1;

setInterval(() => {
    $( favicon ).attr("href", icons[i++]);
    (i === 3) ? i = 0 : "";
}, 2000);