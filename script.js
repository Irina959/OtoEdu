
// Scroll with arrow in intro section

let arrowBtn = document.querySelector('.arrow-btn');
let blockLessons = document.getElementById('anchor');

function scrollDown() {
    blockLessons.scrollIntoView({block: "start", behavior: "smooth"});
}

arrowBtn.addEventListener('click', scrollDown);



// Scroll benefits animation

function onEntry(entry) {

    entry.forEach(change => {
        
        if(change.isIntersecting) {
            change.target.classList.add('benefits-show');
        } else {
            change.target.classList.remove('benefits-show');
        }
    });
}

let options = {
    threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);


let hidenElements = document.querySelectorAll('.animate-block');

for(let elem of hidenElements) {
    observer.observe(elem);
}



//Carousel in Blog

let width = 400;
let count = 3;

let list = document.querySelector('.block__blog-wrapper');
let listElems = document.querySelectorAll('.blog__item');

let nextBtn = document.querySelector('.blog-carousel__btn_next');
let prevBtn = document.querySelector('.blog-carousel__btn_prev');

let pos = 0;

prevBtn.onclick = function () {
    pos += width * count;
    pos = Math.min(pos, 0);
    list.style.marginLeft = pos + 'px';
};

nextBtn.onclick = function() {
    // сдвиг вправо
    pos -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    pos = Math.max(pos, -width * (listElems.length - count));
    list.style.marginLeft = pos + 'px';
  };



// MENU-BURGER

let burger = document.querySelector('.menu-burger');
let navMenu = document.querySelector('.menu__list');

burger.addEventListener('click', burgerMenu);

function burgerMenu() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.menu__link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
}