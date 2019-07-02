var hamburgerButton = document.querySelector('.icon-menu');
var mobileNav = document.querySelector('.mobile');
var bgcolor = document.getElementsByTagName('body');

function openMobile() {
    mobileNav.classList.add('open');
    bgcolor.style = "body: background: rgba(90, 90, 90, 0.9);";
}

function closeMobile() {
    mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);