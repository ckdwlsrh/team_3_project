document.addEventListener('DOMContentLoaded', function () {
  // 장바구니에 담을 수 있는 상품 목록 (이름과 가격 설정)
  const products = [
    { name: '상품 A', price: 10000 },
    { name: '상품 B', price: 15000 },
    { name: '상품 C', price: 20000 },
  ];

  // 장바구니 배열 (이전 세션에서 저장된 데이터 불러오기, 없으면 빈 배열)
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // 페이지가 로드되면 상품 목록과 장바구니 목록을 표시
  displayProducts();
  updateCart();

  //상품 목록을 화면에 표시하는 함수

  function displayProducts() {
    const productList = document.getElementById('product-list');
    // 기존 목록 초기화
    productList.innerHTML = '';

    // 상품 배열을 순회하며 리스트 추가
    products.forEach((product, index) => {
      let li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="product-${index}" onchange="toggleProduct(${index})">
        ${product.name} - ${product.price}원
      `;
      productList.appendChild(li);
    });
  }

  // 체크박스 선택 시 상품을 장바구니에 추가/삭제하는 함수
  window.toggleProduct = function (index) {
    const checkbox = document.getElementById(`product-${index}`);

    // 체크 여부에 따라 장바구니에 추가 또는 삭제
    if (checkbox.checked) {
      // 선택한 상품 추가
      cartItems.push(products[index]);
    } else {
      cartItems = cartItems.filter(
        (item) => item.name !== products[index].name
      ); // 체크 해제 시 제거
    }
    // 장바구니 업데이트
    updateCart();
  };

  /**
   * 🛒 장바구니 목록을 업데이트하는 함수
   */
  function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    cartList.innerHTML = ''; // 기존 장바구니 목록 초기화
    let total = 0; // 총 가격 변수

    // 장바구니에 있는 모든 상품을 화면에 표시
    cartItems.forEach((item) => {
      let li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}원`;
      cartList.appendChild(li);
      total += item.price; // 총 가격 계산
    });

    // 총 가격을 화면에 표시
    totalPriceEl.textContent = `총 가격: ${total}원`;

    // 장바구니 상태를 localStorage에 저장 (새로고침해도 유지)
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  /**
   * ❌ 장바구니의 모든 상품을 삭제하는 함수
   */
  window.allClear = function () {
    cartItems = []; // 장바구니 초기화

    // 체크된 모든 상품의 체크 해제
    document
      .querySelectorAll("input[type='checkbox']")
      .forEach((checkbox) => (checkbox.checked = false));

    updateCart(); // 장바구니 UI 업데이트
  };

  /**
   * 💳 결제 버튼 클릭 시 결제 페이지로 이동하는 함수
   */
  window.payment = function () {
    if (cartItems.length === 0) {
      alert('장바구니가 비어 있습니다.'); // 장바구니가 비었을 경우 알림
      return;
    }
    window.location.href = 'payment.html'; // 결제 페이지로 이동
  };
});
