var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");
var images = new Array(
  "img/calender.jpg",
  "img/3rdQ-02.jpg",
  "img/TRESH.jpg",
  "img/page01.jpg",
  "img/PAGE2.jpg"
);

let currentSlide = 0;

function selectSlide(slide) {
  gallery.src = images[slide];
  let current = document.getElementsByClassName("active")[0];
  current.className = current.className.replace("active", "");
}

function slider() {
  if (currentSlide === 5) currentSlide = 0;
  selectSlide(currentSlide);
  btn[currentSlide].className += " active";
  currentSlide = currentSlide + 1;
}

let timer = setInterval(slider, 5000);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    stopTimer();
    currentSlide = i;
    selectSlide(i);
    this.className += " active";
    timer = setInterval(slider, 5000);
    console.log(timer);
  };
}

function stopTimer() {
  clearInterval(timer);
}

$(".gallery").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

