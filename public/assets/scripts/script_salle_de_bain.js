

//block for statue

const statue = document.querySelector('#statue');
const c_statue_block = document.querySelector('#c_statue_block');
const c_statue_block_off = document.querySelector('#c_statue_block_off');
statue.addEventListener('click', function () {
    c_statue_block.style.display = ('block');
});
c_statue_block_off.addEventListener('click', function () {
    c_statue_block.style.display = ('none');
});
 // end for statue

 //block for bath
const bath = document.querySelector('#bath');
const c_bath_block = document.querySelector('#c_bath_block');
const c_bath_block_off = document.querySelector('#c_bath_block_off');
bath.addEventListener('click', function () {
    c_bath_block.style.display = ('block');
});
c_bath_block_off.addEventListener('click', function () {
    c_bath_block.style.display = ('none');
});
//end for bath

//block for dressing_table
const dressing_table = document.querySelector('#dressing_table');
const c_dressing_table = document.querySelector('#c_dressing_table_block');
const c_dressing_table_block_off = document.querySelector('#c_dressing_table_block_off');
dressing_table.addEventListener('click', function () {
    c_dressing_table_block.style.display = ('block');
});
c_dressing_table_block_off.addEventListener('click', function () {
    c_dressing_table_block.style.display = ('none');
});

//end for dressing table

//block for sink
const sink = document.querySelector('#sink');
const c_sink = document.querySelector('#c_sink_block');
const c_sink_block_off = document.querySelector('#c_sink_block_off');
sink.addEventListener('click', function () {
    c_sink_block.style.display = ('block');
});
c_sink_block_off.addEventListener('click', function () {
    c_sink_block.style.display = ('none');
});

