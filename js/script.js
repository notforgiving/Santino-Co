const footer = document.querySelector(".footer");
const nav = footer.querySelector(".header__nav");
const container = footer.querySelector(".container");
const copy = footer.querySelector(".footer__copyright");
const header__menu = footer.querySelector(".header__menu");
const mobile__menu = footer.querySelector(".mobile__menu");
const footer__btn = footer.querySelector(".header__call-btn");

if (window.innerWidth <= 1280) {
  container.append(nav);
  container.append(copy);
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1280) {
    container.append(nav);
    container.append(copy);
  } else {
    header__menu.append(nav);
    header__menu.append(footer__btn);
    header__menu.append(mobile__menu);
  }
});

const slider = document.querySelector(".about-us__slider");
const sliders = slider.querySelectorAll(".slider__body");
const arrowleft = slider.querySelector(".slider__arrow-left");
const arrowright = slider.querySelector(".slider__arrow-right");
const max = sliders.length-1;

sliders.forEach((item, index) => {
  item.querySelector(".order-active").innerHTML =
    index < 9 ? `0${index + 1}` : index + 1;
  item.querySelector(".order-end").innerHTML = `0${max + 1}`;
  item.id = `${index}`;
});
let active = 0;
arrowright.addEventListener("click", () => {
  sliders.forEach((item, index) => {
    if (item.classList.length == 1) {
      active = index;
    }
  });

  if (active == sliders.length - 1) {
    sliders[active].classList.add("slider__body-no-active");
    sliders[0].classList.remove("slider__body-no-active");
  } else {
    sliders[active].classList.add("slider__body-no-active");
    sliders[active + 1].classList.remove("slider__body-no-active");
  }
  active += 1;
});

arrowleft.addEventListener("click", () => {
  sliders.forEach((item, index) => {
    if (item.classList.length == 1) {
      active = index;
    }
  });
  if (sliders[active].id == 0 ) {
    sliders[active].classList.add("slider__body-no-active");
    sliders[sliders.length-1].classList.remove("slider__body-no-active");
  } else {
    sliders[active].classList.add("slider__body-no-active");
    sliders[active - 1].classList.remove("slider__body-no-active");
  }
  active -= 1;
});
