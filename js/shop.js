let productMiddle = document.querySelector('.products-middle');

// 판매 상품 반복 
let products = `                
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


