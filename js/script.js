const header = document.querySelector(".header");
const menu__btn_header = header.querySelector("#mobile-menu__btn");
const menuHeader = header.querySelector(".header__nav");
const checkbox = document.querySelector(".mobile-menu__checkbox");

const height = header.clientHeight;
menuHeader.style.top = `${height - 20}px`;

menu__btn_header.addEventListener("click", () => {
  menuHeader.classList.toggle("menu__bodile__show");
});

if (window.innerWidth <= 1280) {
  menuHeader.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      checkbox.checked = "";
      if (menuHeader.classList.length > 1) {
        menuHeader.classList.toggle("menu__bodile__show");
      }
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1280) {
  } else {
    checkbox.checked = "";
    if (menuHeader.classList.length > 1) {
      menuHeader.classList.toggle("menu__bodile__show");
    }
  }
});

const slider = document.querySelector(".about-us__slider");
const sliders = slider.querySelectorAll(".slider__body");
const arrowleft = slider.querySelector(".slider__arrow-left");
const arrowright = slider.querySelector(".slider__arrow-right");
const max = sliders.length - 1;

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
  if (sliders[active].id == 0) {
    sliders[active].classList.add("slider__body-no-active");
    sliders[sliders.length - 1].classList.remove("slider__body-no-active");
  } else {
    sliders[active].classList.add("slider__body-no-active");
    sliders[active - 1].classList.remove("slider__body-no-active");
  }
  active -= 1;
});

document.querySelector(".header__call-btn").addEventListener("click", () => {
  document.querySelector(".header__call-phone-block").classList.toggle("show");
});


const footer = document.querySelector('#footer')
const bottomNav = footer.querySelector('.header__nav')
const container = footer.querySelector('.container')
const footerWrap = footer.querySelector('.header__wrapper')
const copy = footer.querySelector('.footer__copyright')

const footerblock = footer.querySelector('.header__menu')
const callbtnfooter = footer.querySelector('.header__call-btn')
const burgerfooter = footer.querySelector('.mobile-menu')

if (window.innerWidth <= 1280){
  container.append(footerWrap)
  container.append(bottomNav)
  container.append(copy)
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1280) {
    container.append(footerWrap)
    container.append(bottomNav)
    container.append(copy)
  } else {
    footerblock.append(bottomNav)
    footerblock.append(callbtnfooter)
    footerblock.append(burgerfooter)
  }
});

document.querySelector('#footer_menu').addEventListener('click',()=>{
  console.log('click')
  bottomNav.classList.toggle('header__nav__show')
})


const img_call = document.querySelectorAll('.header__call-btn')

img_call.forEach(item=>{
  item.addEventListener('mouseenter',(e)=>{
    console.log('mousedown')
    item.querySelector('.call-btn__img').src="./img/phone-hover.png"
  })
  item.addEventListener('mouseleave',(e)=>{
    console.log('mouseout')
    item.querySelector('.call-btn__img').src="./img/phone.png"
  })
})


