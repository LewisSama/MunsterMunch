
const btnPopup1 = document.querySelector('#btnPopup1');
const overlay1 = document.querySelector('#overlay1');
const btnClose1 = document.querySelector('#btnClose1');
btnPopup1.addEventListener('click', function () {
  overlay1.style.display = ('block');
  
});
btnClose1.addEventListener('click', function () {
  overlay1.style.display = ('none');
});
  
const btnPopup2 = document.querySelector('#btnPopup2');
const overlay2 = document.querySelector('#overlay2');
const btnClose2 = document.querySelector('#btnClose2');
btnPopup2.addEventListener('click', function () {
  overlay2.style.display = ('block');
});
btnClose2.addEventListener('click', function () {
  const displayBlockFail=document.querySelector(".displayBlockFail")
  document.querySelector('#code').value = ''
  displayBlockFail.style.display = 'none'
  overlay2.style.display = ('none');

});

const btnPopup3 = document.querySelector('#btnPopup3');
const overlay3 = document.querySelector('#overlay3');
const btnClose3 = document.querySelector('#btnClose3');
btnPopup3.addEventListener('click', function () {
  overlay3.style.display = ('block');
});
btnClose3.addEventListener('click', function () {
  overlay3.style.display = ('none');
});

const btnPopup4 = document.querySelector('#btnPopup4');
const overlay4 = document.querySelector('#overlay4');
const btnClose4 = document.querySelector('#btnClose4');
btnPopup4.addEventListener('click', function () {
  overlay4.style.display = ('block');
});
btnClose4.addEventListener('click', function () {
  overlay4.style.display = ('none');
});

const btnPopup5 = document.querySelector('#btnPopup5');
const overlay5 = document.querySelector('#overlay5');
const btnClose5 = document.querySelector('#btnClose5');
btnPopup5.addEventListener('click', function () {
  overlay5.style.display = ('block');
});
btnClose5.addEventListener('click', function () {
  overlay5.style.display = ('none');
});

const btnPopup6 = document.querySelector('#btnPopup6');
const overlay6 = document.querySelector('#overlay6');
const btnClose6 = document.querySelector('#btnClose6');
btnPopup6.addEventListener('click', function () {
  overlay6.style.display = ('block');
});
btnClose6.addEventListener('click', function () {
  overlay6.style.display = ('none');
});

const btnPopup7 = document.querySelector('#btnPopup7');
const overlay7 = document.querySelector('#overlay7');
const btnClose7 = document.querySelector('#btnClose7');
btnPopup7.addEventListener('click', function () {
  overlay7.style.display = ('block');
});
btnClose7.addEventListener('click', function () {
  overlay7.style.display = ('none');
});

const btnPopup8 = document.querySelector('#btnPopup8');
const overlay8 = document.querySelector('#overlay8');
const btnClose8 = document.querySelector('#btnClose8');
btnPopup8.addEventListener('click', function () {
  overlay8.style.display = ('block');
});
btnClose8.addEventListener('click', function () {
  overlay8.style.display = ('none');
});

const btnPopup9 = document.querySelector('#btnPopup9');
const overlay9 = document.querySelector('#overlay9');
const btnClose9 = document.querySelector('#btnClose9');
btnPopup9.addEventListener('click', function () {
  overlay9.style.display = ('block');
});
btnClose9.addEventListener('click', function () {
  overlay9.style.display = ('none');
});

const btnPopup10 = document.querySelector('#btnPopup10');
const overlay10 = document.querySelector('#overlay10');
const btnClose10 = document.querySelector('#btnClose10');
btnPopup10.addEventListener('click', function () {
  overlay10.style.display = ('block');
});
btnClose10.addEventListener('click', function () {
  overlay10.style.display = ('none');
});

function controle()
{
  const saisie =document.getElementById("code").value
  const displayBlockFail=document.querySelector(".displayBlockFail")
  const displayBlockSucces=document.querySelector(".displayBlockSucces")
  if (saisie == 1984)
  {
    console.log('ca marche')
    displayBlockSucces.style.display = ('block')
  }
  else 
  {
    console.log('pas')
    displayBlockFail.style.display = ('block')
  }
}





