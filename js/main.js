var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");
var images = new Array(
  "img/calender.jpg",
  "img/3rdQ-02.jpg",
  "img/TRESH.jpg",
  "img/page01.jpg",
  "img/PAGE2.jpg"
);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    gallery.src = images[i];
    let current = document.getElementsByClassName("active")[0];
    current.className = current.className.replace("active", "");
    this.className += " active";
  };
}
