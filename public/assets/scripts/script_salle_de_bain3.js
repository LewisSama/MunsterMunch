
//block for statue
const statue = document.querySelector('#statue');
const c_statue_block = document.querySelector('#c_statue_block');
const c_statue_block_off = document.querySelector('#c_statue_block_off');
let ischairclicked  = false;
statue.addEventListener('click', statueTurn);

function statueTurn(){
    if(ischairclicked === true){
        c_statue_block.style.display = ('block');
    }
}

c_statue_block_off.addEventListener('click', function () {
    c_statue_block.style.display = ('none');
});
//end for statue
let ischairok = '';
//block for chair
const chair = document.querySelector('#chair');
const c_chair_block = document.querySelector('#c_chair_block');
const c_chair_block_off = document.querySelector('#c_chair_block_off');
chair.addEventListener('click', function () {
    c_chair_block.style.display = ('block');
});
c_chair_block_off.addEventListener('click', function () {
    c_chair_block.style.display = ('none');
    ischairclicked = true ;
    return ischairok ='ok';
});
 // end for statue
