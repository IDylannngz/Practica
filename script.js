const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

window.addEventListener('click', (e) => {
    if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== hamburger) {
        sideMenu.classList.remove('open');
    }
});
