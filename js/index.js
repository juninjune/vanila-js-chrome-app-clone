function scrollDisable(event) {
  event.preventDefault();
}

document.body.addEventListener("scroll", scrollDisable);
document.body.addEventListener("touchmove", scrollDisable);
document.body.addEventListener("mousewheel", scrollDisable);
