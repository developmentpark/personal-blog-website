const slider = (slides, container) => {
  let curr = 0;

  const width = () => {
    return slides[0].getBoundingClientRect().width;
  };

  const displace = () => {
    slides.forEach((slide) => (slide.style.left = `-${curr * width()}px`));
  };

  return {
    next: function () {
      if (curr >= this.size() - 1) {
        curr = 0;
      } else {
        curr++;
      }
      displace();
    },
    prev: function () {
      if (curr == 0) {
        curr = this.size() - 1;
      } else {
        curr--;
      }
      displace();
    },
    reset: function () {
      curr = 0;
      displace();
    },
    size: function () {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const containerWidth = container.getBoundingClientRect().width;
      const slidesInContainer = containerWidth / slideWidth;
      return Math.ceil(slides.length / slidesInContainer);
    },
  };
};

const slides = document.querySelectorAll(".slider__post");
const slidesContainer = document.querySelector(".slider__content");
const mySlider = slider(slides, slidesContainer);

document.addEventListener("click", (ev) => {
  if (ev.target.matches(".slider__btn_prev")) {
    mySlider.prev();
  } else if (ev.target.matches(".slider__btn_next")) {
    mySlider.next();
  }
});

window.addEventListener("resize", () => {
  mySlider.reset();
});
