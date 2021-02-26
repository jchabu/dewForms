const inputCodPostal = document.getElementById('codpostal');
const errorPostal = document.getElementsByClassName('error-codPostal')[0];

inputCodPostal.addEventListener('input', validarCodPostal);

export function validarCodPostal() {
	if (inputCodPostal.validity.tooShort) {
		inputCodPostal.classList.remove('valido');
		inputCodPostal.classList.add('invalido');
		errorPostal.classList.remove('oculto');
		errorPostal.textContent = 'El código postal ha de tener 5 cifras';
	} else if (inputCodPostal.validity.valueMissing) {
		inputCodPostal.classList.remove('valido');
		inputCodPostal.classList.add('invalido');
		errorPostal.classList.remove('oculto');
		errorPostal.textContent = 'Campo Obligatorio *';
	} else if (inputCodPostal.validity.patternMismatch) {
		inputCodPostal.classList.remove('valido');
		inputCodPostal.classList.add('invalido');
		errorPostal.classList.remove('oculto');
		errorPostal.textContent = 'El código postal ha de tener 5 cifras y ser de Tenerife (38XXX)';
	} else {
		inputCodPostal.classList.remove('invalido');
		inputCodPostal.classList.add('valido');
		errorPostal.classList.add('oculto');
	}
}