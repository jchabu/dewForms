const selectDocumentacion = document.getElementById('documentacion');
const inputDocumentacion = document.getElementById('numDocumentacion');
const errorDocument = document.getElementsByClassName('error-dni')[0];

selectDocumentacion.addEventListener('change', validarNDocumentacion);
inputDocumentacion.addEventListener('input', validarNDocumentacion);

export function validarNDocumentacion() {
	if (selectDocumentacion.value === 'DNI') {
		selectDocumentacion.classList.remove('invalido');
		selectDocumentacion.classList.add('valido');
		inputDocumentacion.disabled = false;
		inputDocumentacion.setAttribute('pattern', '^[0-9]{8}[a-zA-Z]$');
		errorDocument.classList.add('oculto');
        validarDNI();
	} else if (selectDocumentacion.value === 'NIE') {
		selectDocumentacion.classList.remove('invalido');
		selectDocumentacion.classList.add('valido');
		inputDocumentacion.disabled = false;
		inputDocumentacion.setAttribute('pattern', '^[ZYX][0-9]{7}[a-zA-Z]$');
		errorDocument.classList.add('oculto');
        validarNIE();
	} else {
		selectDocumentacion.classList.remove('valido');
		selectDocumentacion.classList.add('invalido');
		inputDocumentacion.disabled = true;
		errorDocument.classList.remove('oculto');
	}
}

function validarDNI() {
    if (inputDocumentacion.validity.valueMissing) {
        inputDocumentacion.classList.remove('valido');
        inputDocumentacion.classList.add('invalido');
        errorDocument.classList.remove('oculto');
        errorDocument.textContent = 'Campo Obligatorio *';
    } else if (inputDocumentacion.validity.patternMismatch) {
        inputDocumentacion.classList.remove('valido');
        inputDocumentacion.classList.add('invalido');
        errorDocument.classList.remove('oculto');
        errorDocument.textContent = 'El DNI son 8 cifras seguido de una letra';
    } else {
        inputDocumentacion.classList.remove('invalido');
        inputDocumentacion.classList.add('valido');
        errorDocument.classList.add('oculto');
    }
}

function validarNIE() {
    if (inputDocumentacion.validity.valueMissing) {
        inputDocumentacion.classList.remove('valido');
        inputDocumentacion.classList.add('invalido');
        errorDocument.classList.remove('oculto');
        errorDocument.textContent = 'Campo Obligatorio *';
    } else if (inputDocumentacion.validity.patternMismatch) {
        inputDocumentacion.classList.remove('valido');
        inputDocumentacion.classList.add('invalido');
        errorDocument.classList.remove('oculto');
        errorDocument.textContent = 'El NIE empieza con una letra (X, Y, Z) seguido por 7 cifras y una letra';
    } else {
        inputDocumentacion.classList.remove('invalido');
        inputDocumentacion.classList.add('valido');
        errorDocument.classList.add('oculto');
    }
}