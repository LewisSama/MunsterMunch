
let final_key='';

//block for cadenas_porte
const cadenas_porte = document.querySelector('#cadenas_porte');
const c_porte_block = document.querySelector('#c_porte_block');
const c_porte_block_off = document.querySelector('#c_porte_block_off');
const c_porte_open_block = document.querySelector('#c_porte_open_block');
const c_porte_open_block_off = document.querySelector('#c_porte_open_block_off');

cadenas_porte.addEventListener('click', isFinalKeyGet);
c_porte_open_block_off.addEventListener('click', closeOpenDoorBlock);
c_porte_block_off.addEventListener('click', closeCloseDoorBlock);
function isFinalKeyGet() {

    if (final_key == 'get') {
        c_porte_open_block.style.display = ('block');
    } else {
        c_porte_block.style.display = ('block');
    }
}
function closeOpenDoorBlock() {
    c_porte_open_block.style.display = ('none');
}
function closeCloseDoorBlock(){
    c_porte_block.style.display = ('none');

}
//end block for cadenas_porte

//block for roue
var roue_block_turned = '';
const roue = document.querySelector('#roue');
const roue_block = document.querySelector('#roue_block');
const roue_block_off = document.querySelector('#roue_block_off');
const roue_turned_text = document.querySelector('#roue_turned_text');
const closeTurnedText = document.querySelector('#closeTurnedText')
roue.addEventListener('click', function () {
    roue_block.style.display = ('block');
});
roue_block_off.addEventListener('click', function () {
    roue_turned_text.style.display = ('block');
    return roue_block_turned = true;
});
closeTurnedText.addEventListener('click', function () {
    roue_block.style.display = ('none');
    roue_turned_text.style.display = ('none');
});

//End block tiroir

const tiroir = document.querySelector('#tiroir');
const tiroir_block = document.querySelector('#tiroir_block');
const tiroir_block_off = document.querySelector('#tiroir_block_off');
tiroir.addEventListener('click', function () {
    tiroir_block.style.display = ('block');
});
tiroir_block_off.addEventListener('click', function () {
    tiroir_block.style.display = ('none');
});

//End block tiroir

//Start block timer


const timer = document.querySelector('#timer');
const timer_block = document.querySelector('#timer_block');
const timer_block_off = document.querySelector('#timer_block_off');
timer.addEventListener('click', function () {
    timer_block.style.display = ('block');
});
timer_block_off.addEventListener('click', function () {
    timer_block.style.display = ('none');
});

//End block timer


//Start block boitaclef
const boitaclef = document.querySelector('#boitaclef');
const boitaclef_block = document.querySelector('#boitaclef_block');
const boitaclef_block_off = document.querySelector('#boitaclef_block_off');
const boitaclef_open_block = document.querySelector('#boitaclef_open_block');
const boitaclef_open_block_off = document.querySelector('#boitaclef_open_block_off');
boitaclef.addEventListener('click', actionOnOpenBlock);
boitaclef_open_block_off.addEventListener('click', actionCloseBlock);
boitaclef_block_off.addEventListener('click', actionOnCloseOpenBlock);

function actionOnOpenBlock() {
    if (key_key == 'get' && key_evier == 'get' && key_tiroir == 'get') {

        boitaclef_open_block.style.display = ('block');
        final_key = 'get';
    }
    else {
        boitaclef_block.style.display = ('block');

    }
}
function actionCloseBlock() {
    boitaclef_block.style.display = ('none');
}


function actionOnCloseOpenBlock(){
    boitaclef_open_block.style.display = ('none');
}
//End block boitaclef

//Start block hache
let coup2hache = '';
const hache = document.querySelector('#hache');
const hache_block = document.querySelector('#hache_block');
const hache_block_off = document.querySelector('#hache_block_off');


hache.addEventListener('click', function () {
    hache_block.style.display = ('block');

});
hache_block_off.addEventListener('click', function () {
    hache_block.style.display = ('none');
    return coup2hache = 'done';
});

//End block hache

//Start block evier
let key_evier ='';
const evier = document.querySelector('#evier');
const evier_block = document.querySelector('#evier_block');
const evier_block_off = document.querySelector('#evier_block_off');
const evier_block_fouille = document.querySelector('#evier_block_fouille');
const evier_block_off_fouille = document.querySelector('#evier_block_off_fouille');
evier.addEventListener('click', function () {
    evier_block.style.display = ('block');
});
evier_block_off.addEventListener('click', function () {
    evier_block.style.display = ('none');
    evier_block_fouille.style.display = ('block');
});
evier_block_off_fouille.addEventListener('click', function () {
    evier_block_fouille.style.display = ('none');
    return key_evier = 'get';
})

//end block evier

//Start block mot_cle
let key_key = '';
const mot_cle = document.querySelector('#mot_cle');
const mot_cle_block = document.querySelector('#mot_cle_block');
const mot_cle_block_off = document.querySelector('#mot_cle_block_off');
const hache_hole_block = document.querySelector("#hache_hole_block");
const hache_hole_block_off = document.querySelector('#hache_hole_block_off');
mot_cle.addEventListener('click', isHoleMade);
hache_hole_block_off.addEventListener('click', closeHacheHoleBlock);
mot_cle_block_off.addEventListener('click', closeMotCleBlock);
function isHoleMade() {
    if(coup2hache == 'done'){
        hache_hole_block.style.display = ('block');
        return key_key = 'get';
    }
    else{
        mot_cle_block.style.display = ('block');
    }
}
function closeHacheHoleBlock() {
    hache_hole_block.style.display = ('none');
}
function closeMotCleBlock(){
    mot_cle_block.style.display = ('none');

}
//End block mot_cle

//Verification
//Code porte
let key_tiroir = '';
const code_success =document.querySelector("#code_success");
const code_fail=document.querySelector("#code_fail");
const closeWin = document.querySelector('#closeWin');
const closeFail = document.querySelector('#closeFail');
const code_near_success = document.querySelector('#code_near_success');
const closenearSuccess = document.querySelector('#closenearSuccess');
const code_near_fail = document.querySelector('#code_near_fail');
const closenearFail = document.querySelector('#closenearFail');
function controle()
{
    let saisie =document.getElementById("code").value;
    if(roue_block_turned == true){
        if (saisie == 401)
        {
            console.log('ca marche');
            code_success.style.display = ('block');
            closeWin.addEventListener('click', function () {
                code_success.style.display = ('none');
            })
            return key_tiroir = 'get';
        }
        else
        {
            console.log('pas');
            code_fail.style.display = ('block');
            closeFail.addEventListener('click', function () {
                code_fail.style.display = ('none');
            })
        }
    }
    else {
        if (saisie == 401)
        {
            console.log('ca marche');
            code_near_success.style.display = ('block');
            closenearSuccess.addEventListener('click', function () {
                code_near_success.style.display = ('none');
            })
        }
        else
        {
            console.log('pas');
            code_near_fail.style.display = ('block');
            closenearFail.addEventListener('click', function () {
                code_near_fail.style.display = ('none');
            })
        }
    }

}