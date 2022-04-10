const headerHeight = document.querySelector(".header_main").scrollHeight;
const backToTopButton = document.querySelector(".back_to_top_btn");
const headerSticky = document.querySelector(".header_sticky");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > headerHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > headerHeight) {
    headerSticky.classList.add("show");
  } else {
    headerSticky.classList.remove("show");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
  document.documentElement.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);

