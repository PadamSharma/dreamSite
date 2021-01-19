// --- BUTTON
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

document.addEventListener("wheel", function (event) {
    //only vertical scroll
    if (event.deltaY > 0) {
        event.preventDefault();
        smoothScroll(document.documentElement, 100, 1000);
    }
});
function smoothScroll(domElement, pixel, delay) {
    const intervalToRepeat = 25;
    const step = (intervalToRepeat * pixel) / delay;
    if (step < pixel) {
        domElement.scrollTop += step;
        setTimeout(function () {
            smoothScroll(domElement, pixel - step, delay);
        }, intervalToRepeat);
    } else {
        domElement.scrollLeft += step;
        setTimeout(function () {
            smoothScroll(domElement, pixel - step, delay);
        }, intervalToRepeat);
    }
}
document.addEventListener("wheel", function (e) {
    $(".cursor").style.left = e.clientX - 25 + "px";
    $(".cursor").style.top = e.clientY - 25 + "px";
});

// --- CURSOR
document.addEventListener("mousemove", function (e) {
    $(".cursor").style.left = e.clientX - 25 + "px";
    $(".cursor").style.top = e.clientY - 25 + "px";
});
