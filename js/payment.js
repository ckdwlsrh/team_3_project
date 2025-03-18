const cancel = document.getElementById('cancel');
const pay = document.getElementById('pay');

cancel.addEventListener('click', () => {
  alert('결제가 취소 되었습니다.');
});
pay.addEventListener('click', () => {
  alert('결제창에서 결제를 완료하세요.');
});
