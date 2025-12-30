var hamburger = document.getElementsByClassName("hamburger");
var bar1 = document.getElementsByClassName("bar1");
var bar2 = document.getElementsByClassName("bar2");
var bar3 = document.getElementsByClassName("bar3");
var menu = document.getElementById("mobilemenu");

hamburger[0].onclick = function () {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
        bar1[0].classList.remove("active");
        bar2[0].classList.remove("active");
        bar3[0].classList.remove("active");
    }
    else {
        menu.classList.add("active")
        bar1[0].classList.add("active");
        bar2[0].classList.add("active");
        bar3[0].classList.add("active");
    }

}