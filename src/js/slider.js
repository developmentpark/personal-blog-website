function getSlideWidth() {
  return document.querySelector(".slider__post").getBoundingClientRect().width;
}

const slides = document.querySelectorAll(".slider__post");

function getContainerLength() {
  const slideWidth = document
    .querySelector(".slider__post")
    .getBoundingClientRect().width;
  const containerWidth = document
    .querySelector(".slider__content")
    .getBoundingClientRect().width;

  const slidesInContainer = containerWidth / slideWidth;
  return Math.ceil(slides.length / slidesInContainer);
}

let curr = 0;
function next() {
  if (curr >= getContainerLength() - 1) {
    curr = 0;
  } else {
    curr++;
  }
  slides.forEach(
    (slide) => (slide.style.left = `-${curr * getSlideWidth()}px`),
  );
}

function prev() {
  if (curr == 0) {
    curr = getContainerLength() - 1;
  } else {
    curr--;
  }
  slides.forEach(
    (slide) => (slide.style.left = `-${curr * getSlideWidth()}px`),
  );
}

document.addEventListener("click", (ev) => {
  if (ev.target.matches(".slider__btn_prev")) {
    prev();
  } else if (ev.target.matches(".slider__btn_next")) {
    next();
  }
});

window.addEventListener("resize", () => {
  curr = 0;
  slides.forEach((slide) => (slide.style.left = `0px`));
});
