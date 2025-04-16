function generarContraseña() {
    // corregi la variable length que tenia mal escrito el id
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    
    // caracteres base
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    
    // agregar mayusculas si checked
    if (uppercase) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    // agregar numeros si checked
    if (numbers) {
        caracteres += '0123456789';
    }
    
    // agregar simbolos si checked
    if (symbols) {
        caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    // variable para la contraseña
    let password = '';
    
    // corregi el for que tenia <= y lo cambie por <
    for (let i = 0; i < length; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    // corregi el nombre de la variable passsword que tenia una s de mas
    document.querySelector('#password').value = password;
    
    // actualizar el span con el valor actual del slider
    document.getElementById('lengthValue').textContent = length;
}

function copiarContraseña() {
    const passwordField = document.getElementById('password');
    
    // verificar que haya contraseña para copiar
    if (!passwordField.value) {
        alert('Primero genera una contraseña');
        return;
    }
    
    passwordField.select();
    document.execCommand('copy');
    
    // mostrar mensaje de copiado en vez de alert
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('oculto');
    
    // ocultar mensaje despues de 2 segundos
    setTimeout(function() {
        mensaje.classList.add('oculto');
    }, 2000);
}

// agregar evento al slider
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');

lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = this.value;
});

// generar una contraseña inicial al cargar la pagina
window.addEventListener('load', generarContraseña);