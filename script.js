const form = document.getElementById('Contactanos');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    
    console.log('Formulario enviado correctamente');
    document.getElementById("Contactanos").reset();
  } else {
    alert('Por favor completa todos los campos');
  }
});

const menuToggle = document.querySelector('.menu__toggle');
const menuLinks = document.querySelector('.nav__links');

menuToggle.addEventListener('click', function() {
  const ariaExpanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !ariaExpanded);
  menuLinks.classList.toggle('show'); 
});
