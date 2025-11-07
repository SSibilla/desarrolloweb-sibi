// Menú hamburguesa: abrir/cerrar al click (y solo al click)
var burger = document.querySelector('.burger');
var menu = document.querySelector('#menu');
var year = document.querySelector('#y');
if (year){ year.textContent = new Date().getFullYear(); }

if (burger && menu){
  burger.onclick = function(){
    var isOpen = menu.className.indexOf('open') !== -1;
    if (isOpen){
      menu.className = menu.className.replace(' open','');
      burger.setAttribute('aria-expanded','false');
    } else {
      menu.className += ' open';
      burger.setAttribute('aria-expanded','true');
    }
  };
}
    