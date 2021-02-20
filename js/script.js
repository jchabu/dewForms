import { existingUserNames } from './userNames.js';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const checkboxPassword = document.getElementById('showPass');
const botonEnviar = document.getElementsByClassName('enviar')[0];

const expresiones = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ ]{1,32}$/,
    apellidos: /^[a-zA-ZÀ-ÿ ]{1,32}$/,
    password: /^.{6,}$/,
    telefono: /^\d{9}$/,
    telefono2: /^[(][+][3][4][)][0-9]{9}$/,
    codpostal: /^[3][8][0-9]{3}$/,
    dni: /^[0-9]{8}[a-zA-Z]$/,
    nie: /^[ZYX][0-9]{7}[a-zA-Z]$/
}

const campos = {
    usuario: false,
    password: false,
    nombre: false,
    apellidos: false,
    telefono: false,
    codpostal: false,
    docuemtacion: false,
    numDocumentacion: false,
    tipoCuenta: false,
    nacimiento: false,
    checkbox: false,
    titulo: false,
    descripcion: false,
    canal: false
}



const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarUsuario(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
        case "telefono":
            validarTelefono(expresiones.telefono, expresiones.telefono2, e.target, 'telefono');
            break;
        case "codpostal":
            validarCampo(expresiones.codpostal, e.target, 'codpostal');
            break;
        case "documentacion":
            seleccionDNI(e.target, 'documentacion');
            break;
        case "numDocumentacion":
            validarDocumentacion(expresiones.dni, expresiones.nie, e.target, 'numDocumentacion');
            break;
        case "cuenta":
            var radio = $('input[type=radio]:checked').length;
            if (radio == 1) {
                campos[tipoCuenta] = true;
            } else {
                campos[tipoCuenta] = false;
            }
            break;
        case "checkbox":
            var checked = $('input[type=checkbox]:checked').length;
            if (checked >= 2) {
                campos['checkbox'] = true;
            } else if (checked < 2) {
                campos['checkbox'] = false;
            };
            break;
        case "nacimiento":
            var fechaHoy = new Date;
            fechaHoy = fechaHoy.getFullYear();
            if ((fechaHoy - e.target.value) >= 18) {
                campos[nacimiento] = true;
            } else {
                campos[nacimiento] = false;
            }
            break;
        case "canal":
            var iconoCanal = document.getElementsByClassName('icono')[0];
            if (e.target.value.includes("twitch")) {
                iconoCanal.classList.remove('fas')
                iconoCanal.classList.remove('fa-question-circle')
                iconoCanal.classList.remove('fab')
                iconoCanal.classList.remove('fa-youtube')
                iconoCanal.classList.add('fab')
                iconoCanal.classList.add('fa-twitch')
            } else if (e.target.value.includes("youtube")) {
                iconoCanal.classList.remove('fas')
                iconoCanal.classList.remove('fa-question-circle')
                iconoCanal.classList.remove('fab')
                iconoCanal.classList.remove('fa-twitch')
                iconoCanal.classList.add('fab')
                iconoCanal.classList.add('fa-youtube')
            } else {
                iconoCanal.classList.remove('fab')
                iconoCanal.classList.remove('fa-youtube')
                iconoCanal.classList.remove('fab')
                iconoCanal.classList.remove('fa-twitch')
                iconoCanal.classList.add('fas')
                iconoCanal.classList.add('fa-question-circle')
            }
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.remove('invalido');
        document.getElementById(`${campo}`).classList.add('valido');
        campos[campo] = true;
    }
    else {
        document.getElementById(`${campo}`).classList.remove('valido');
        document.getElementById(`${campo}`).classList.add('invalido');
        campos[campo] = false;
    }
}

const validarUsuario = (expresion, input, campo) => {
    var usuario = document.getElementById(`${campo}`).value;
    existingUserNames.forEach(user => {
        if (expresion.test(input.value)) {
            if (user.userName.includes(usuario)) {
                document.getElementById(`${campo}`).classList.remove('invalido');
                document.getElementById(`${campo}`).classList.add('valido');
                campos[campo] = true;
            }
        } else {
            document.getElementById(`${campo}`).classList.remove('valido');
            document.getElementById(`${campo}`).classList.add('invalido');
            campos[campo] = false;
        }
    })
}

const validarTelefono = (expresion, expresionDos, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.remove('invalido');
        document.getElementById(`${campo}`).classList.add('valido');
        campos[campo] = true;
    }
    else {
        if (expresionDos.test(input.value)) {
            document.getElementById(`${campo}`).classList.remove('invalido');
            document.getElementById(`${campo}`).classList.add('valido');
            campos[campo] = true;
        } else {
            document.getElementById(`${campo}`).classList.remove('valido');
            document.getElementById(`${campo}`).classList.add('invalido');
            campos[campo] = false;
        }
    }
}

const seleccionDNI = (input, campo) => {
    if (input.value === "DNI" || input.value === "NIE") {
        document.getElementById(`${campo}`).classList.remove('invalido');
        document.getElementById(`${campo}`).classList.add('valido');
        document.getElementById("numDocumentacion").disabled = false;
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}`).classList.remove('valido');
        document.getElementById(`${campo}`).classList.add('invalido');
        document.getElementById("numDocumentacion").disabled = true;
        campos[campo] = false;
    }
}

const validarDocumentacion = (expresionDNI, expresionNIE, input, campo) => {
    var documento = document.getElementById('documentacion').value;
    if (documento === "DNI") {
        if (expresionDNI.test(input.value)) {
            document.getElementById(`${campo}`).classList.remove('invalido');
            document.getElementById(`${campo}`).classList.add('valido');
            campos[campo] = true;
        } else {
            document.getElementById(`${campo}`).classList.remove('valido');
            document.getElementById(`${campo}`).classList.add('invalido');
            campos[campo] = false;
        }
    } else {
        if (expresionNIE.test(input.value)) {
            document.getElementById(`${campo}`).classList.remove('invalido');
            document.getElementById(`${campo}`).classList.add('valido');
            campos[campo] = true;
        } else {
            document.getElementById(`${campo}`).classList.remove('valido');
            document.getElementById(`${campo}`).classList.add('invalido');
            campos[campo] = false;
        }
    }
};

function showPassword() {
    var input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
selects.forEach((select) => {
    select.addEventListener('focusout', validarFormulario);
})

checkboxPassword.addEventListener('click', showPassword);

botonEnviar.addEventListener('click', function () {
    if (comprobarCampos()) {
        crearOutput();
        resetearInputsValue();
        resetearInputs();
    }
});

function comprobarCampos() {
    var error = false;
    for (const campo in campos) {
        if (campos[campo] == false) {
            error = true;
        }
    }
    if (error === true) {
        return false;
    } else {
        return true;
    }
}

function resetearInputs() {
    var inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('invalido');
        input.classList.remove('valido');
    })
}

function resetearInputsValue() {
    var inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = "";
        input.checked = false;
        input.defaultValue = input.defaultValue;
    })
}

function crearOutput() {
    var username = document.getElementById('nombre').value;
    var password = document.getElementById('password').value;
    
}