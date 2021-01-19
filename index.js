// --- BUTTON
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);


document.addEventListener("wheel", function (e) {
    $(".cursor").style.left = e.clientX - 25 + "px";
    $(".cursor").style.top = e.clientY - 25 + "px";
});

// --- CURSOR
document.addEventListener("mousemove", function (e) {
    $(".cursor").style.left = e.clientX - 25 + "px";
    $(".cursor").style.top = e.clientY - 25 + "px";
});
