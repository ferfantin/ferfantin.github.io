const myPreloader = document.querySelector('.preloader');

const fadeOutEffect = () => {
    myPreloader.classList.add("preloader-fadeout")
};

setTimeout(function(){
    myPreloader.classList.add("preloader-fadeout");
  }, 1000);

window.addEventListener('load', fadeOutEffect);