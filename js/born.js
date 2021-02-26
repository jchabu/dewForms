const contenedorEdad = document.getElementsByClassName('nacimiento')[0];
const selectNacimiento = document.getElementById('nacimiento');
const errorEdad = document.getElementsByClassName('error-nacimiento')[0];

selectNacimiento.addEventListener('change', function () {
	validarEdad(selectNacimiento, 'nacimiento', 'error-nacimiento');
});

/**
 * Función para rellenar el select desde la fecha seleccionada
 */
for (var i = 2010; i >= 1930; i--) {
	var option = document.createElement('option');
	option.value = i;
	option.textContent = i;
	contenedorEdad.appendChild(option);
}

export function validarEdad() {
	var fechaHoy = new Date;
	fechaHoy = fechaHoy.getFullYear();
	if ((fechaHoy - contenedorEdad.value) >= 18) {
		contenedorEdad.classList.remove('invalido');
		contenedorEdad.classList.add('valido');
		errorEdad.classList.add('oculto');
	} else {
		contenedorEdad.classList.remove('valido');
		contenedorEdad.classList.add('invalido');
        errorEdad.textContent = 'El usuario debe ser mayor de edad';
		errorEdad.classList.remove('oculto');
	}
}