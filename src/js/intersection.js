const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let elem = entry.target;
    if (entry.isIntersecting) {
      elem.classList.add("loaded");
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, options);

const targets = [
  ...document.querySelectorAll(".latest__post"),
  ...document.querySelectorAll(".top__post"),
];

targets.forEach((target) => observer.observe(target));
