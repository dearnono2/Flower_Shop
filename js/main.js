/* section - occasion 영역 */

const wrap = document.querySelector('.slider-wrapper');
const wrapImgs = wrap.querySelector('.wrap-imgs');
const articles = wrap.querySelectorAll('article');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// 오류문제
// 1.슬라이드가 부드럽게 안됨.
// 2.초기 위치값 지정이 안먹힘.

let len = articles.length;

let enableClick = true;

init();

prev.addEventListener('click', (e) => {
  e.preventDefault();

  if(enableClick) {
    enableClick = false;

    prevSlide();
  }
})

next.addEventListener('click', (e) => {
  e.preventDefault();

  if(enableClick) {
    enableClick = false;

    nextSlide();
  }
})

// 초기화 함수
function init() {
  wrapImgs.style.left = '-300px';

  wrapImgs.prepend(wrapImgs.lastElementChild);

  wrapImgs.style.width = `${300 * len}px`;
  articles.forEach((el) => {
    el.style.width = `${1800 / len}px`;
  })
}

function prevSlide() {
  new Anim(wrapImgs, {
    prop : 'left',
    value: 0,
    duration : 500,
    callback : () => {
      wrapImgs.style.left = '-300px';
      wrapImgs.prepend(wrapImgs.lastElementChild);
      enableClick = true;
    }
  })
}

function nextSlide() {
  new Anim(wrapImgs, {
    prop : 'left',
    value: -600,
    duration : 500,
    callback : () => {
      wrapImgs.style.left = '-300px';
      wrapImgs.append(wrapImgs.firstElementChild);
      enableClick = true;
    }
  })
}

/* // section - occasion 영역 */


/* section - why choose seoul flower? 영역 */
const whySeoulFlower = document.querySelector('#why-seoul-flower');
const wrapReasons = whySeoulFlower.querySelector('.wrap');
const reasons = whySeoulFlower.querySelectorAll('.reason');



window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY);
  if(window.scrollY > 3380) {
    reasons[0].classList.add('show');
  } else if (window.scrollY > 4000) {
    reasons[0].classList.remove('show');
  }

  if(window.scrollY > 4200) {
    reasons[1].classList.add('show');
  } else if (window.scrollY > 4800) {
    reasons[1].classList.remove('show');
  }

  if(window.scrollY > 4900) {
    reasons[2].classList.add('show');
  } else if (window.scrollY > 5600) {
    reasons[2].classList.remove('show');
  }
})


/* section delivery 영역 */
const deliveryBg = document.querySelector('.delivery-bg');
const carIcon = document.querySelector('.car');

let pos = `${window.scrollY - carIcon.offsetTop}px`;
const base = -300;


window.addEventListener('scroll', () => {

  let scroll = window.scrollY || window.pageYOffset;
  let scroll2 = `${scroll - base}`;

  carIcon.style.left = `${scroll2 - 6200}px`;

})

/* // section delivery 영역 */



