const inputTitulo = document.getElementById('titulo');
const errorCuenta = document.getElementsByClassName('error-titulo')[0];

inputTitulo.addEventListener('input', function(){
    validarTitulo();
    $('.word-counter-title').text(this.value.length + '/15')
});

export function validarTitulo() {
    if (inputTitulo.validity.valueMissing) {
        inputTitulo.classList.remove('valido');
        inputTitulo.classList.add('invalido');
        errorCuenta.textContent = 'Campo Obligatorio *';
    } else {
        inputTitulo.classList.remove('invalido');
        inputTitulo.classList.add('valido');
    }
}