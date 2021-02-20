import { existingUserNames } from './userNames.js';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const checkboxPassword = document.getElementById('showPass');


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
    musica: false,
    deporte: false,
    videojuegos: false,
    manualidades: false,
    artes: false,
    lectura: false,
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
            
            break;
        case "telefono":

            break;
        case "telefono":

            break;
        case "telefono":

            break;
        case "telefono":

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

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
});