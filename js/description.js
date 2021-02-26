const inputDescripcion = document.getElementById('descripcion');
const errorDescripcion = document.getElementsByClassName('error-descripcion')[0];

inputDescripcion.addEventListener('input', function(){
    validarDescripcion();
    $('.word-counter-description').text(this.value.length + '/120')
});

export function validarDescripcion() {
    if (inputDescripcion.validity.valueMissing) {
        inputDescripcion.classList.remove('valido');
        inputDescripcion.classList.add('invalido');
        errorDescripcion.textContent = 'Campo Obligatorio *';
    } else {
        inputDescripcion.classList.remove('invalido');
        inputDescripcion.classList.add('valido');
    }
}