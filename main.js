const hamburger = document.querySelector(".m_hamburger");
const nav = document.querySelector(".l_header_nav");
const header = document.querySelector(".l_header");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    header.classList.toggle("is-active");
});

body.addEventListener("click", (event) => {
    const isHamburgerClicked = event.target.classList.contains("m_hamburger");
    const isNavClicked = event.target.classList.contains("l_header_nav");
    
    if (!isHamburgerClicked && !isNavClicked) {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        header.classList.remove("is-active");
    }
});
