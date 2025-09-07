
document.addEventListener('DOMContentLoaded', () => {
  stickyMenu();
  toggleMenu();
});


function stickyMenu() {
  const topBar = document.querySelector('#top-bar');
  const header = document.querySelector('#header');
  const topBarHeight = topBar.offsetHeight;
  const headerHeight = header.offsetHeight;
  window.addEventListener('scroll', () => {
    if (window.scrollY > topBarHeight + headerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function toggleMenu() {
  const headerLinksContainer = document.getElementById('header-links-container');
  const openBtn = document.getElementById('open-hamburger-btn');
  const closeBtn = document.getElementById('close-hamburger-btn');

  if (openBtn && headerLinksContainer) {
    openBtn.addEventListener('click', () => {
      headerLinksContainer.setAttribute('data-hamburger-open', 'true');
    });
  }

  if (closeBtn && headerLinksContainer) {
    closeBtn.addEventListener('click', () => {
      headerLinksContainer.setAttribute('data-hamburger-open', 'false');
    });
  }
}

