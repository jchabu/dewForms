const inputPassword = document.getElementById('password');
const errorPass = document.getElementsByClassName('error-password')[0];
const checkboxPassword = document.getElementById('showPass');

inputPassword.addEventListener('input', validarPassword);
checkboxPassword.addEventListener('click', showPassword);

export function validarPassword() {
    if (inputPassword.validity.valueMissing) {
        inputPassword.classList.remove('valido');
        inputPassword.classList.add('invalido');
        errorPass.classList.remove('oculto');
        errorPass.textContent = 'Campo Obligatorio *';
    } else if (inputPassword.validity.tooShort) {
        inputPassword.classList.remove('valido');
        inputPassword.classList.add('invalido');
        errorPass.classList.remove('oculto');
        errorPass.textContent = 'Debe contener más de 6 caracteres';
    }else {
        inputPassword.classList.remove('invalido');
        inputPassword.classList.add('valido');
        errorPass.classList.add('oculto');
    }
}

export function showPassword() {
    var input = document.getElementById('password');
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}