document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide("#image-slider", {
    autoplay: true,
    speed: 800,
    type: "loop",
    arrows: false,
  }).mount();
});
