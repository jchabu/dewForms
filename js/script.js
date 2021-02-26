import { validarUsuario } from './user.js';
import { validarPassword } from './password.js';
import { validarNombre } from './name.js';
import { validarApellido } from './surname.js';
import { validarPhone } from './phone.js';
import { validarCodPostal } from './postcode.js';
import { validarNDocumentacion } from './ndocument.js';
import { validarTipoCuenta } from './account.js';
import { validarEdad } from './born.js';
import { validarAficiones } from './hobbies.js';
import { validarTitulo } from './title.js';
import { validarDescripcion } from './description.js';
import { validarCanal } from './channel.js';
import { crearOutput } from './printForm.js';
import { resetearInputs, resetearInputsValue } from './functions.js';

const formulario = document.getElementById('formulario');
const botonEnviar = document.getElementsByClassName('enviar')[0];

botonEnviar.addEventListener('click', (e) => {
	e.preventDefault();

	if (formulario.checkValidity()) {
		if (validarTipoCuenta()) {
			crearOutput();
			formulario.reset();
			resetearInputs();
			resetearInputsValue();
		}
	} else {
		validarUsuario();
		validarPassword();
		validarNombre();
		validarApellido();
		validarPhone();
		validarCodPostal();
		validarNDocumentacion();
		validarTipoCuenta();
		validarEdad();
		validarAficiones();
		validarTitulo();
		validarDescripcion();
		validarCanal();
	}
});