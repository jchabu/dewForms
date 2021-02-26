const errorCuenta = document.getElementsByClassName('error-cuenta')[0];

export function validarTipoCuenta() {
	var radio = $('input[type=radio]:checked').length;
	if (radio == 1) {
		errorCuenta.classList.add('oculto');
        errorCuenta.textContent = '';
		return true
	} else {
		errorCuenta.classList.remove('oculto');;
        errorCuenta.textContent = 'Elige un tipo de cuenta';
		return false
	}
}