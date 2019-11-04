/* Second code et ouverture de la porte - phase 2*/

const btnfontDoor = document.querySelector('#btnfontDoor');
const overlay3 = document.querySelector('#overlay3'); 
const btnClose3 = document.querySelector('#btnClose3');

btnfontDoor.addEventListener('click', function () {
    overlay3.style.display = ('block');
});

btnClose3.addEventListener('click', function () {
    overlay3.style.display = ('none'); 
});

function controle()
{
  const saisie = document.getElementById("code").value
  const displayBlockFail = document.querySelector(".displayBlockFail")
  const displayBlockSucces = document.querySelector(".displayBlockSucces")
  if (saisie == 'Whitechapel')
  {
    console.log('Il est vivant !')
    displayBlockSucces.style.display = ('block')
  }
  else 
  {
    console.log('Et que brûle la galaxie')
    displayBlockFail.style.display = ('block');
  }
}

const btnBook1 = document.querySelector('#btnBook1');
const overlay = document.querySelector('#overlay'); 
const btnClose = document.querySelector('#btnClose');

btnBook1.addEventListener('click', function () {
    overlay.style.display = ('block');
});

btnClose.addEventListener('click', function () {
    overlay.style.display = ('none'); 
});

const btnboard = document.querySelector('#btnboard');
const overlay2 = document.querySelector('#overlay2'); 
const btnClose2 = document.querySelector('#btnClose2');

btnboard.addEventListener('click', function () {
    overlay2.style.display = ('block');
});

btnClose2.addEventListener('click', function () {
    overlay2.style.display = ('none'); 
});