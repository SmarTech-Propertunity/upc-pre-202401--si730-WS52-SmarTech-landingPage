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

