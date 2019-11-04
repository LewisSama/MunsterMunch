const btnPopup1 = document.querySelector('#btnPopup1');
const overlay1 = document.querySelector('#overlay1');
const btnClose1 = document.querySelector('#btnClose1');
btnPopup1.addEventListener('click', function () {
  overlay1.style.display = ('block');
  
});
btnClose1.addEventListener('click', function () {
  overlay1.style.display = ('none');
});