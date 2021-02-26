const inputNombre = document.getElementById('nombre');
const errorNombre = document.getElementsByClassName('error-nombre')[0];

inputNombre.addEventListener('input', validarNombre);


export function validarNombre() {
	if (inputNombre.validity.patternMismatch) {
		inputNombre.classList.remove('valido');
		inputNombre.classList.add('invalido');
		errorNombre.classList.remove('oculto');
		errorNombre.textContent = 'Tiene que empezar por mayúscula, contener solo letras y espacios';
	}else if (inputNombre.validity.valueMissing) {
		inputNombre.classList.remove('valido');
		inputNombre.classList.add('invalido');
		errorNombre.classList.remove('oculto');
		errorNombre.textContent = 'Campo Obligatorio *';
	} else if (inputNombre.validity.tooShort) {
		inputNombre.classList.remove('valido');
		inputNombre.classList.add('invalido');
		errorNombre.classList.remove('oculto');
		errorNombre.textContent = 'Debe contener más de 1 carácter';
	}else {
		inputNombre.classList.remove('invalido');
		inputNombre.classList.add('valido');
		errorNombre.classList.add('oculto');
	}
}