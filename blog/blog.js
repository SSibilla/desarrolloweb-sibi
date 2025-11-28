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

// Formulario de contacto: no guardar todavía
var form = document.querySelector('#contacto');
if (form){
  form.onsubmit = function(ev){
    ev.preventDefault(); // por ahora no envía
    alert('¡Gracias por enviar tu consulta!'); // feedback simple
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-overlay");
  const btn = document.getElementById("footer-toggle");

  let abierto = true;

  btn.addEventListener("click", () => {
    abierto = !abierto;

    if (abierto) {
      footer.classList.remove("hidden");
      btn.textContent = "▲"; // arriba
    } else {
      footer.classList.add("hidden");
      btn.textContent = "▼"; // abajo
    }
  });
});
