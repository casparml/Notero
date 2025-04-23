// SHOW MENU
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000
})

sr.reveal(`.home-data`, { origin: 'top', delay: 400 })
sr.reveal(`.home-img`, { origin: 'bottom', delay: 600 })
sr.reveal(`.home-footer`, { origin: 'bottom', delay: 800 })


/**
 * Auto Copyright Year Updater
 * @param {number} startYear
 * @returns {string}
 * @author: Caspar Landman
 */
function updateCopyright(startYear = new Date().getFullYear()) {
    const currentYear = new Date().getFullYear();
    const yearText = startYear === currentYear ?
        startYear : `${startYear} - ${currentYear}`;

    const copyright = document.getElementById('copyright');
    if (copyright) copyright.textContent = yearText;

    return yearText;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => updateCopyright(2025));