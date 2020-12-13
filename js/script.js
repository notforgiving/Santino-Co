const footer = document.querySelector('.footer')
const nav = footer.querySelector('.header__nav')
const container = footer.querySelector('.container')
const copy = footer.querySelector('.footer__copyright')
const header__menu = footer.querySelector('.header__menu')
const mobile__menu = footer.querySelector('.mobile__menu')
const footer__btn = footer.querySelector('.header__call-btn')

if(window.innerWidth<=1280){
  container.append(nav)
  container.append(copy)
}

window.addEventListener('resize',()=>{
  if(window.innerWidth<=1280){
    container.append(nav)
    container.append(copy)
  }
  else
  {
    header__menu.append(nav)
    header__menu.append(footer__btn)
    header__menu.append(mobile__menu)
  }
})