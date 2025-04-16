function generarContraseña() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercaseBtn').classList.contains('active');
    const numbers = document.getElementById('numbersBtn').classList.contains('active');
    const symbols = document.getElementById('symbolsBtn').classList.contains('active');

    // caracteres base
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) caracteres += '0123456789';
    if (symbols) caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    let hasNumber = false;
    let hasSymbol = false;

    // generar contraseña asegurando que si se seleccionan numeros o simbolos, esten presentes
    while (password.length < length) {
        const char = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        password += char;

        // verificar si la contraseña tiene al menos un numero
        if (numbers && !hasNumber && '0123456789'.includes(char)) {
            hasNumber = true;
        }
        // verificar si la contraseña tiene al menos un simbolo
        if (symbols && !hasSymbol && '!@#$%^&*()_+-=[]{}|;:,.<>?'.includes(char)) {
            hasSymbol = true;
        }
    }

    // si la contraseña generada no tiene numeros o simbolos, se regenera
    if ((numbers && !hasNumber) || (symbols && !hasSymbol)) {
        return generarContraseña();
    }

    // mostrar la contraseña generada
    document.querySelector('#password').value = password;
    // actualizar el valor del slider
    document.getElementById('lengthValue').textContent = length;
}

// funcion para copiar la contraseña
function copiarContraseña() {
    const passwordField = document.getElementById('password');
    // verificar si hay una contraseña generada
    if (!passwordField.value) {
        alert('Primero genera una contraseña');
        return;
    }

    passwordField.select();
    document.execCommand('copy');

    // mostrar mensaje de copiado
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('oculto');
    setTimeout(() => mensaje.classList.add('oculto'), 2000);
}

// actualizar el valor del slider
document.getElementById('length').addEventListener('input', function () {
    document.getElementById('lengthValue').textContent = this.value;
});

// cambiar el estado de los botones al hacer click
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});

// funcion para mostrar u ocultar la contraseña
document.getElementById('toggleVisibility').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('toggleVisibility');

    // cambiar tipo de input y el icono segun la visibilidad de la contraseña
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>'; // cambiar icono a 'ocultar'
    } else {
        passwordInput.type = 'password';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>'; // cambiar icono a 'mostrar'
    }
});

// generar una contraseña al cargar la pagina
window.addEventListener('load', () => {
    document.getElementById('password').type = 'password';
    generarContraseña();
});
