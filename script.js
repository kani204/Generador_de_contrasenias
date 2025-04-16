function generarContraseña() {
    const length = document.getElementById('lenght').value; // Error: "lenght" en vez de "length"
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    let caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    for (let i = 0; i <= length; i++) {
    password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.querySelector('#password').value = passsword;
}

function copiarContraseña() {
 const passwordField = document.getElementById('password');
 passwordField.select();
 document.execCommand('copy');
 alert('Contraseña copiada!');
}
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
lengthSlider.addEventListener('input', function() {
 lengthValue.textContent = this.value;
});