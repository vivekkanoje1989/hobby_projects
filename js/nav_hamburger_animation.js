const hamberger = document.querySelector('.hamberger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links .links');

hamberger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
})