var modal = document.getElementById("myModal");
var next = document.getElementById("modalNext");
var back = document.getElementById("modalBack");
var close = document.getElementById("modalClose");
var modalImg = document.getElementById("modalImg");
var modalVideo = document.getElementById("modalVideo");
var modalTriggers = document.getElementsByName("modal");
var index = 0;

for (var _index = 0; _index < modalTriggers.length; _index++) {
  modalTriggers[_index].onclick = function () {
    modal.style.display = "flex";
    if (this.tagName == "VIDEO") {
      modalVideo.src = this.firstElementChild.src;
      modalImg.style.display = "none"
      modalVideo.style.display = "block"
    }
    else if (this.tagName == "IMG") {
      modalImg.src = this.src;
      modalImg.style.display = "block"
      modalVideo.style.display = "none"
    }
    index = Array.prototype.indexOf.call(modalTriggers, this);
    mybutton.classList.remove("active");
  }
}

modalImg.onclick = function () {
  modal.style.display = "none";
  mybutton.classList.add("active");
}

modalVideo.onclick = function () {
  modal.style.display = "none";
  mybutton.classList.add("active");
}

modalClose.onclick = function () {
  modal.style.display = "none";
  mybutton.classList.add("active");
}

next.onclick = function () {
  index += 1;
  if (index >= modalTriggers.length - 1) {
    index = 0;
  }
  if (modalTriggers[index].tagName == "VIDEO") {
    modalVideo.src = modalTriggers[index].firstElementChild.src;
    modalImg.style.display = "none"
    modalVideo.style.display = "block"
  }
  else if (modalTriggers[index].tagName == "IMG") {
    modalImg.src = modalTriggers[index].src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
  }
}

back.onclick = function () {
  index -= 1;
  if (index < 0) {
    index = modalTriggers.length - 1;
  }
  if (modalTriggers[index].tagName == "VIDEO") {
    modalVideo.src = modalTriggers[index].firstElementChild.src;
    modalImg.style.display = "none"
    modalVideo.style.display = "block"
  }
  else if (modalTriggers[index].tagName == "IMG") {
    modalImg.src = modalTriggers[index].src;
    modalImg.style.display = "block"
    modalVideo.style.display = "none"
  }
}