const btnJournal = document.querySelector('#btnJournal');
const overlay1 = document.querySelector('#overlay1');
const btnClose1 = document.querySelector('#btnClose1');
btnJournal.addEventListener('click', function () {
   overlay1.style.display = ('block');
});
btnClose1.addEventListener('click', function () {
   overlay1.style.display = ('none');
});

const btnImage = document.querySelector('#btnImage');
const overlay2 = document.querySelector('#overlay2');
const btnClose2 = document.querySelector('#btnClose2');
btnImage.addEventListener('click', function () {
   overlay2.style.display = ('block');
});
btnClose2.addEventListener('click', function () {
   overlay2.style.display = ('none');
});

const btnLustre = document.querySelector('#btnLustre');
const overlay4 = document.querySelector('#overlay4');
const btnClose4 = document.querySelector('#btnClose4');
btnLustre.addEventListener('click', function () {
   overlay4.style.display = ('block');
});
btnClose4.addEventListener('click', function () {
   overlay4.style.display = ('none');
});

const btnBoite = document.querySelector('#btnBoite');
const overlay5 = document.querySelector('#overlay5');
const btnClose5 = document.querySelector('#btnClose5');
btnBoite.addEventListener('click', function () {
   overlay5.style.display = ('block');
});
btnClose5.addEventListener('click', function () {
   overlay5.style.display = ('none');
});

const btnMallette = document.querySelector('#btnMallette');
const overlay6 = document.querySelector('#overlay6');
const btnClose6 = document.querySelector('#btnClose6');
btnMallette.addEventListener('click', function () {
   overlay6.style.display = ('block');
});
btnClose6.addEventListener('click', function () {
   overlay6.style.display = ('none');
});

function controle()
{
 const saisie =document.getElementById("code").value
 const displayBlockFail=document.querySelector(".displayBlockFail")
 const displayBlockSucces=document.querySelector(".displayBlockSucces")
 if (saisie == 'fumée')
 {
   console.log('ça marche')
   displayBlockSucces.style.display = ('block')
 }
 else
 {
   console.log('pas')
   displayBlockFail.style.display = ('block')
 }
}