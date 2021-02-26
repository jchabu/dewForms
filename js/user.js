import { existingUserNames } from './userNames.js';

const inputUsuario = document.getElementById('usuario');
const errorUser = document.getElementsByClassName('error-usuario')[0];

inputUsuario.addEventListener('input', validarUsuario);

export function validarUsuario() {
	existingUserNames.forEach(user => {
		if (inputUsuario.validity.patternMismatch) {
			inputUsuario.classList.remove('valido');
			inputUsuario.classList.add('invalido');
			errorUser.classList.remove('oculto');
			errorUser.textContent = 'Solo puede contener números, letras y _';
		} else if (inputUsuario.validity.valueMissing) {
			inputUsuario.classList.remove('valido');
			inputUsuario.classList.add('invalido');
			errorUser.classList.remove('oculto');
			errorUser.textContent = 'Campo Obligatorio *';
		} else if (inputUsuario.validity.tooShort) {
			inputUsuario.classList.remove('valido');
			inputUsuario.classList.add('invalido');
			errorUser.classList.remove('oculto');
			errorUser.textContent = 'Debe contener más de 4 caracteres';
		} else if (inputUsuario.value.includes(user.userName)) {
			if (inputUsuario.value === user.userName) {
				inputUsuario.classList.remove('valido');
				inputUsuario.classList.add('invalido');
				errorUser.classList.remove('oculto');
				errorUser.textContent = 'El usuario ya existe';
			} else {
				inputUsuario.classList.remove('invalido');
				inputUsuario.classList.add('valido');
				errorUser.classList.add('oculto');
			}
		}
	});
}