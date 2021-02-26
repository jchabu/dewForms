const inputApellidos = document.getElementById('apellidos');
const errorPass = document.getElementsByClassName('error-apellidos')[0];

inputApellidos.addEventListener('blur', validarApellido);

export function validarApellido() {
    if (inputApellidos.validity.patternMismatch) {
        inputApellidos.classList.remove('valido');
        inputApellidos.classList.add('invalido');
        errorPass.classList.remove('oculto');
        errorPass.textContent = 'Solo puede contener letras, espacios en blancos y guiones medios';
    } else if (inputApellidos.validity.valueMissing) {
        inputApellidos.classList.remove('valido');
        inputApellidos.classList.add('invalido');
        errorPass.classList.remove('oculto');
        errorPass.textContent = 'Campo Obligatorio *';
    } else if (inputApellidos.validity.tooShort) {
        inputApellidos.classList.remove('valido');
        inputApellidos.classList.add('invalido');
        errorPass.classList.remove('oculto');
        errorPass.textContent = 'Debe contener más de 1 carácter';
    }
    else {
        inputApellidos.classList.remove('invalido');
        inputApellidos.classList.add('valido');
        errorPass.classList.add('oculto');
    }
}