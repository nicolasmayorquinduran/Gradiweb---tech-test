
const topBar = document.getElementById('top-bar');
const header = document.getElementById('header');
const headerHamburger = document.getElementById('header__hamburger');
const headerLinks = document.querySelector(".header__link")
const topBarHeight = topBar.offsetHeight;
const headerHeight = header.offsetHeight;
const hamburgerButtonOpen = document.getElementById('open-hamburger-btn');
const hamburgerButtonClose = document.getElementById('close-hamburger-btn');

export function conditionalStickyStyle() {
     if (window.scrollY > topBarHeight + headerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
}

hamburgerButtonOpen?.addEventListener( "click", () => {
  headerHamburger?.classList.add('header__hamburger--open');
  headerHamburger?.classList.remove('header__hamburger--closed');
})

hamburgerButtonClose?.addEventListener( "click", () => {
  headerHamburger?.classList.add('header__hamburger--closed');
  headerHamburger?.classList.remove('header__hamburger--open');
})

headerLinks.addEventListener( "click", () => {
  headerHamburger?.classList.add('header__hamburger--closed');
  headerHamburger?.classList.remove('header__hamburger--open');
})