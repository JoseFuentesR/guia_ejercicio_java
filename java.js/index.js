import demo1 from './modules/1ero.js';
import demo2 from './modules/2do.js';
import demo3 from './modules/3ero.js';
var caja = document.getElementById("caja");

window.uno = demo1.uno;
window.dos = demo2.dos;
window.tres = demo3.tres;
document.getElementById("1ero").addEventListener("click",() => {
    caja.innerHTML= demo1.data;
});

document.getElementById('2do').addEventListener('click',()=>{
    caja.innerHTML= demo2.data;
});


document.getElementById('3ero').addEventListener('click',()=>{
    caja.innerHTML = demo3.data;
});