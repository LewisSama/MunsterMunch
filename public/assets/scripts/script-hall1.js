/* Premières marches de l'escalier */

const btnStairs1 = document.querySelector('#btnStairs1');
const overlay = document.querySelector('#overlay'); 
const btnClose = document.querySelector('#btnClose');

btnStairs1.addEventListener('click', function () {
    overlay.style.display = ('block');
});

btnClose.addEventListener('click', function () {
    overlay.style.display = ('none'); 
});

/* Second pallier de l'escalier */

const btnStairs2 = document.querySelector('#btnStairs2');
const overlay2 = document.querySelector('#overlay2'); 
const btnClose2 = document.querySelector('#btnClose2');

btnStairs2.addEventListener('click', function () {
    overlay2.style.display = ('block');
});

btnClose2.addEventListener('click', function () {
    overlay2.style.display = ('none'); 
});

/* fonction et activité de la bougie */

const btnCandle1 = document.querySelector('#btnCandle1');
const overlay3 = document.querySelector('#overlay3'); 
const btnClose3 = document.querySelector('#btnClose3');

btnCandle1.addEventListener('click', function () {
    overlay3.style.display = ('block');
});

btnClose3.addEventListener('click', function () {
    overlay3.style.display = ('none'); 
});

/* Action sur l'ombre, en haut des escaliers */

const btnShadow1 = document.querySelector('#btnShadow1');
const overlay4 = document.querySelector('#overlay4'); 
const btnClose4 = document.querySelector('#btnClose4');

btnShadow1.addEventListener('click', function () {
    overlay4.style.display = ('block');
});

btnClose4.addEventListener('click', function () {
    overlay4.style.display = ('none'); 
});

/* Interaction avec le livre */

const btnBook1 = document.querySelector('#btnBook1');
const overlay5 = document.querySelector('#overlay5'); 
const btnClose5 = document.querySelector('#btnClose5');

btnBook1.addEventListener('click', function () {
    overlay5.style.display = ('block');
});

btnClose5.addEventListener('click', function () {
    overlay5.style.display = ('none'); 
});

/* Activité de la lampe murale */

const btnlightBulb1 = document.querySelector('#btnlightBulb1');
const overlay6 = document.querySelector('#overlay6'); 
const btnClose6 = document.querySelector('#btnClose6');

btnlightBulb1.addEventListener('click', function () {
    overlay6.style.display = ('block');
});

btnClose6.addEventListener('click', function () {
    overlay6.style.display = ('none'); 
});

/* Blocage de la double porte */

const btndoor1 = document.querySelector('#btndoor1');
const overlay7 = document.querySelector('#overlay7'); 
const btnClose7 = document.querySelector('#btnClose7');

btndoor1.addEventListener('click', function () {
    overlay7.style.display = ('block');
});

btnClose7.addEventListener('click', function () {
    overlay7.style.display = ('none'); 
});

/* It's a trap ! */

const btncarpet1 = document.querySelector('#btncarpet1');
const overlay8 = document.querySelector('#overlay8'); 
const btnClose8 = document.querySelector('#btnClose8');

btncarpet1.addEventListener('click', function () {
    overlay8.style.display = ('block');
});

btnClose8.addEventListener('click', function () {
    overlay8.style.display = ('none'); 
});

/* Activités du candélabre */

const btncandelabra1 = document.querySelector('#btncandelabra1');
const overlay9 = document.querySelector('#overlay9'); 
const btnClose9 = document.querySelector('#btnClose9');

btncandelabra1.addEventListener('click', function () {
    overlay9.style.display = ('block');
});

btnClose9.addEventListener('click', function () {
    overlay9.style.display = ('none'); 
});

/* Interaction avec la porte du font */

const btnfontDoor = document.querySelector('#btnfontDoor');
const overlay10 = document.querySelector('#overlay10'); 
const btnClose1à = document.querySelector('#btnClose10');

btnfontDoor.addEventListener('click', function () {
    overlay10.style.display = ('block');
});

btnClose10.addEventListener('click', function () {
    overlay10.style.display = ('none'); 
});

const btnboard = document.querySelector('#btnboard');
const overlay11 = document.querySelector('#overlay11'); 
const btnClose11 = document.querySelector('#btnClose11');

btnboard.addEventListener('click', function () {
    overlay11.style.display = ('block');
});

btnClose11.addEventListener('click', function () {
    overlay11.style.display = ('none'); 
});

function controle()
{
  const saisie = document.getElementById("code").value
  const displayBlockFail = document.querySelector(".displayBlockFail")
  const displayBlockSucces = document.querySelector(".displayBlockSucces")
  if (saisie == 'Jack')
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