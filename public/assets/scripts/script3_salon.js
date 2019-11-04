const btnMiroir = document.querySelector('#btnMiroir');
const overlay1 = document.querySelector('#overlay1');
const btnClose1 = document.querySelector('#btnClose1');
btnMiroir.addEventListener('click', function () {
   overlay1.style.display = ('block');

});
btnClose1.addEventListener('click', function () {
   const displayBlockFail=document.querySelector(".displayBlockFail")
   document.querySelector('#code').value = ''
   displayBlockFail.style.display = 'none'
   overlay1.style.display = ('none');
  
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

function controle()
{
 const saisie =document.getElementById("code2").value
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