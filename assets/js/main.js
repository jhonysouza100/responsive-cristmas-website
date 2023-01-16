// =============== SHOW MENU ===============
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// =============== MENU SHOW ===============
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// =============== MENU HIDDEN ===============
// validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// =============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// =============== CHANGE BACKGROUND HEADER ===============
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport innerHeight, add the scroll-header class
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scrollup
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home_village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home_pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home_mountain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home_mountain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home_mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });

gsap.from(".home_moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home_trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });

gsap.from(".home_title", 1.2, { opacity: 0, y: -60, delay: 1 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
  })

sr.reveal(`.about_data, .celebrate_img`, {origin: 'right'})
sr.reveal(`.about_img, .celebrate_data`, {origin: 'left'})
sr.reveal(`.send_card`, {interval: 100})
sr.reveal(`.footer`)