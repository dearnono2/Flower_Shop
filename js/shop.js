// 메뉴 카테고리 영역
const category = document.querySelector('#category');
const a = category.querySelectorAll('#category > li > a');
const ul = category.querySelectorAll('ul');



// shop page - category list section
function categoryListNum (num) {
  a[num].addEventListener('click', (e) => {
    e.preventDefault();
    ul[num].classList.toggle('on');
  })
}

categoryListNum(0);
categoryListNum(1);



// 판매 상품 영역

const productMiddle = document.querySelector('.products-middle');

// 판매 상품 반복 
const products = `                
<div class="product-items">
  <div class="item">
    <div class="img">
      <img src="https://via.placeholder.com/300" alt="">
    </div>
    <div class="txt">
      <p><b>PRODUCT</b></p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  <div class="item">
    <div class="img">
      <img src="https://via.placeholder.com/300" alt="">
    </div>
    <div class="txt">
      <p><b>PRODUCT</b></p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  <div class="item">
    <div class="img">
      <img src="https://via.placeholder.com/300" alt="">
    </div>
    <div class="txt">
      <p><b>PRODUCT</b></p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>`;


for(let i = 1; i <= 3; i++) {
  productMiddle.insertAdjacentHTML('beforeend', products);
}


