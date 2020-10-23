//Preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
});

//To top button
window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset;
    const toTop = document.querySelector('.to-top');

    if(wScroll >= 100) {
        toTop.style.transform = 'translateX(0%)';
        toTop.style.opacity = '1';
    } else {
        toTop.style.transform = 'translateX(10rem)';
        toTop.style.opacity = '0';
    }

    //Animations
    const news = document.querySelector('.news');
    const newsHeading = document.querySelector('#newsHeading')
    const newsItems = document.querySelectorAll('.news .grid__item');

    if(news.offsetTop > (wScroll / 1.5)) {

        newsHeading.style.opacity = '1';
        newsHeading.style.transform = 'translate(0%)';

        for(let i = 0; i < newsItems.length; i++) {
            setTimeout(() => {
                newsItems[i].style.opacity = '1';
            }, i * 700);
        }
    } 
});

//Navigation
const navigation = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menuLineTop = document.querySelector('.menu__line--top');
const menuLineMid = document.querySelector('.menu__line--mid');
const menuLineBottom = document.querySelector('.menu__line--bottom');

menu.addEventListener('click', () => {
    navigation.classList.toggle('nav--open');

    menuLineTop.classList.toggle('menu__line--top-open');
    menuLineMid.classList.toggle('menu__line--mid-open');
    menuLineBottom.classList.toggle('menu__line--bottom-open');

    if(navigation.classList.contains('nav--open')){
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'visible';
    }
});

//Dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('dropdown-content-open');
});

//Footer year
let footerYear = document.querySelector('.year');
let date = new Date();
let year = date.getFullYear();
footerYear.innerText = year;


