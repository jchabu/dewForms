const inputTelefono = document.getElementById('telefono');
const errorPhone = document.getElementsByClassName('error-telefono')[0];

inputTelefono.addEventListener('input', validarPhone);


export function validarPhone() {
	if (inputTelefono.validity.patternMismatch) {
		inputTelefono.classList.remove('valido');
		inputTelefono.classList.add('invalido');
		errorPhone.classList.remove('oculto');
		errorPhone.textContent = 'El teléfono puede tener prefijo del país opcional y 9 cifras. Ejem: (+34)678123123 / 822123123';
	} else if (inputTelefono.validity.valueMissing) {
		inputTelefono.classList.remove('valido');
		inputTelefono.classList.add('invalido');
		errorPhone.classList.remove('oculto');
		errorPhone.textContent = 'Campo Obligatorio *';
	}
	else {
		inputTelefono.classList.remove('invalido');
		inputTelefono.classList.add('valido');
		errorPhone.classList.add('oculto');
	}
}