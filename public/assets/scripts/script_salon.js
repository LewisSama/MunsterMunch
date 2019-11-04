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

const btnTableau = document.querySelector('#btnTableau');
const overlay3 = document.querySelector('#overlay3');
const btnClose3 = document.querySelector('#btnClose3');
btnTableau.addEventListener('click', function () {
   overlay3.style.display = ('block');
});
btnClose3.addEventListener('click', function () {
   overlay3.style.display = ('none');
});

const btnChaise = document.querySelector('#btnChaise');
const overlay7 = document.querySelector('#overlay7');
const btnClose7 = document.querySelector('#btnClose7');
btnChaise.addEventListener('click', function () {
   overlay7.style.display = ('block');
});
btnClose7.addEventListener('click', function () {
   overlay7.style.display = ('none');
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

function controle()
{
 const saisie =document.getElementById("code").value
 const displayBlockFail=document.querySelector(".displayBlockFail")
 const displayBlockSucces=document.querySelector(".displayBlockSucces")
 if (saisie == 'charbon')
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