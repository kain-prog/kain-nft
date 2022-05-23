const btn = document.querySelector('.up-scroll');

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const menu = document.querySelector('.o');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
})