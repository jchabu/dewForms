import { existingUserNames } from './userNames.js';

const formulario = document.getElementById('formulario');
const campos = {
    usuario: false,
    password: false,
    nombre: false,
    apellidos: false,
    telefono: false,
    codPostal: false,
    documentacion: false,
    numDocumentacion: false,
    tipoCuenta: false,
    nacimiento: false,
    checkbox: false,
    titulo: false,
    descripcion: false,
    canal: false
}

var inputUsuario = document.getElementById('usuario');
var inputPassword = document.getElementById('password');
var inputNombre = document.getElementById('nombre');
var inputApellidos = document.getElementById('apellidos');
var inputTelefono = document.getElementById('telefono');
var inputCodPostal = document.getElementById('codpostal');
var selectDocumentacion = document.getElementById('documentacion');
var inputDocumentacion = document.getElementById('numDocumentacion');
var selectNacimiento = document.getElementById('nacimiento');
var checkboxes = document.querySelectorAll('input[type=checkbox]');
var checkboxPassword = document.getElementById('showPass');
var botonEnviar = document.getElementsByClassName('enviar')[0];
var inputTitulo = document.getElementById('titulo');
var inputDescripcion = document.getElementById('descripcion');
var inputCanal = document.getElementById('canal');
var contenedorEdad = document.getElementsByClassName('nacimiento')[0];
var iconoCanal = document.getElementsByClassName('icono')[0];

/**
 * Para rellenar el select de edades
 */
for (var i = 2010; i >= 1930; i--) {
    // create option element
    var option = document.createElement('option');
    // add value and text name
    option.value = i;
    option.innerHTML = i;
    // add the option element to the selectbox
    contenedorEdad.appendChild(option);
}

/**
 * Listeners de usuario
 */
inputUsuario.addEventListener('input', validarUsuario);
inputUsuario.addEventListener('blur', validarUsuario);

/**
 * Listeners de contraseña
 */
inputPassword.addEventListener('input', function () {
    validarCampo(inputPassword, 'password', 'error-password');
});
inputPassword.addEventListener('blur', function () {
    validarCampo(inputPassword, 'password', 'error-password');
});
checkboxPassword.addEventListener('click', showPassword);

/**
 * Listeners de Nombre
 */
inputNombre.addEventListener('input', function () {
    validarCampo(inputNombre, 'nombre', 'error-nombre');
})
inputNombre.addEventListener('blur', function () {
    validarCampo(inputNombre, 'nombre', 'error-nombre');
})

/**
 * Listeners de apellidos
 */
inputApellidos.addEventListener('input', function () {
    validarCampo(inputApellidos, 'apellidos', 'error-apellidos');
})
inputApellidos.addEventListener('blur', function () {
    validarCampo(inputApellidos, 'nombre', 'error-apellidos');
})

/**
 * Listeners de telefono
 */
inputTelefono.addEventListener('input', function () {
    validarCampo(inputTelefono, 'telefono', 'error-telefono');
})
inputTelefono.addEventListener('blur', function () {
    validarCampo(inputTelefono, 'telefono', 'error-telefono');
})

/**
 * Listeners de codPostal
 */
inputCodPostal.addEventListener('input', function () {
    validarCampo(inputCodPostal, 'codPostal', 'error-codPostal');
})
inputCodPostal.addEventListener('blur', function () {
    validarCampo(inputCodPostal, 'codPostal', 'error-codPostal');
})

/**
 * Listeners de documento de identificación
 */
selectDocumentacion.addEventListener('change', function () {
    seleccionDNI(selectDocumentacion, 'documentacion', 'error-dni');
})
selectDocumentacion.addEventListener('blur', function () {
    seleccionDNI(selectDocumentacion, 'documentacion', 'error-dni');
})
inputDocumentacion.addEventListener('input', function () {
    validarCampo(inputDocumentacion, 'numDocumentacion', 'error-dni');
})
inputDocumentacion.addEventListener('blur', function () {
    validarCampo(inputDocumentacion, 'numDocumentacion', 'error-dni');
})

/**
 * Listeners de edad
 */
selectNacimiento.addEventListener('change', function () {
    validarEdad(selectNacimiento, 'nacimiento', 'error-nacimiento');
})
selectNacimiento.addEventListener('blur', function () {
    validarEdad(selectNacimiento, 'nacimiento', 'error-nacimiento');
})

/**
 * Listener checkboxes
 */

checkboxes.forEach(check => {
    check.addEventListener('change', function () {
        validarAficiones('checkbox', 'error-aficiones');
    });
});

/**
 * Listeners titulo
 */
inputTitulo.addEventListener('input', function () {
    validarCampo(inputTitulo, 'titulo', 'error-titulo');
})
inputTitulo.addEventListener('blur', function () {
    validarCampo(inputTitulo, 'titulo', 'error-titulo');
})

/**
 * Listeners descripcion
 */
inputDescripcion.addEventListener('input', function () {
    validarCampo(inputDescripcion, 'descripcion', 'error-descripcion');
})
inputDescripcion.addEventListener('blur', function () {
    validarCampo(inputDescripcion, 'descripcion', 'error-descripcion');
})

/**
 * Listeners canal
 */

inputCanal.addEventListener('input', function () {
    validarCanal(inputCanal, 'canal', 'error-canal', 'error-url');
})
inputCanal.addEventListener('blur', function () {
    validarCanal(inputCanal, 'canal', 'error-canal', 'error-url');
})


/**
 * Función para validar al usuario
 */
function validarUsuario() {
    var errorUser = document.getElementsByClassName('error-usuario')[0];
    existingUserNames.forEach(user => {
        if (inputUsuario.value.includes(user.userName)) {
            if (inputUsuario.validity.patternMismatch) {
                inputUsuario.classList.remove('valido');
                inputUsuario.classList.add('invalido');
                document.getElementsByClassName('error-usuario')[0].classList.remove('oculto');
                errorUser.innerHTML = 'Solo puede contener números, letras y _';
                campos['usuario'] = false;
            } else if (inputUsuario.validity.rangeOverflow) {
                inputUsuario.classList.remove('valido');
                inputUsuario.classList.add('invalido');
                document.getElementsByClassName('error-usuario')[0].classList.remove('oculto');
                errorUser.innerHTML = 'Debe tener entre 4 y 20 caracteres';
                campos['usuario'] = false;
            } else if (inputUsuario.validity.rangeUnderflow) {
                inputUsuario.classList.remove('valido');
                inputUsuario.classList.add('invalido');
                document.getElementsByClassName('error-usuario')[0].classList.remove('oculto');
                errorUser.innerHTML = 'Debe tener entre 4 y 20 caracteres';
                campos['usuario'] = false;
            } else if (inputUsuario.value === user.userName) {
                inputUsuario.classList.remove('valido');
                inputUsuario.classList.add('invalido');
                document.getElementsByClassName('error-usuario')[0].classList.remove('oculto');
                errorUser.innerHTML = 'El usuario ya existe';
                campos['usuario'] = false;
            } else {
                inputUsuario.classList.remove('invalido');
                inputUsuario.classList.add('valido');
                document.getElementsByClassName('error-usuario')[0].classList.add('oculto');
                campos['usuario'] = true;
            }
        }
    })
    if (inputUsuario.value === '') {
        inputUsuario.classList.remove('valido');
        inputUsuario.classList.add('invalido');
        errorUser.innerHTML = 'Campo obligatorio';
        campos['usuario'] = false;
        document.getElementsByClassName('error-usuario')[0].classList.remove('oculto');
    }
};

function showPassword() {
    var input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
};


function validarCampo(contenedor, campo, error) {
    if (contenedor.validity.patternMismatch) {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = false;
    } else if (contenedor.validity.rangeOverflow) {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = false;
    } else if (contenedor.validity.rangeUnderflow) {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = false;
    } else {
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    }
    if (contenedor.value === '') {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(error)[0].classList.remove('oculto');
        campos[campo] = false;
    }
}

function seleccionDNI(contenedor, campo, error) {
    if (contenedor.value === "DNI") {
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        inputDocumentacion.disabled = false;
        inputDocumentacion.setAttribute('pattern', '^[0-9]{8}[a-zA-Z]$');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    } else if (contenedor.value === "NIE") {
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        inputDocumentacion.disabled = false;
        inputDocumentacion.setAttribute('pattern', '^[ZYX][0-9]{7}[a-zA-Z]$');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    } else {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        inputDocumentacion.disabled = true;
        campos[campo] = false;
        document.getElementsByClassName(error)[0].classList.remove('oculto');
    }
}

function validarTipoCuenta(campo, error) {
    var radio = $('input[type=radio]:checked').length;
    if (radio == 1) {
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    } else {
        document.getElementsByClassName(error)[0].classList.remove('oculto');
        campos[campo] = false;
    }
};

function validarEdad(contenedor, campo, error) {
    var fechaHoy = new Date;
    fechaHoy = fechaHoy.getFullYear();
    if ((fechaHoy - contenedor.value) >= 18) {
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    } else {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(error)[0].classList.remove('oculto');
        campos[campo] = false;
    }
}

function validarAficiones(campo, error) {
    var checked = $('input[type=checkbox]:checked').length;
    if (checked >= 2) {
        document.getElementsByClassName(error)[0].classList.add('oculto');
        campos[campo] = true;
    } else if (checked < 2) {
        document.getElementsByClassName(error)[0].classList.remove('oculto');
        campos[campo] = false;
    };
}

function validarCanal(contenedor, campo, errorRequired, errorUrl) {
    if (contenedor.value.includes("https://www.twitch.tv/")) {
        iconoCanal.classList.remove('fas')
        iconoCanal.classList.remove('fa-question-circle')
        iconoCanal.classList.remove('fa-youtube')
        iconoCanal.classList.remove('fa-instagram')
        iconoCanal.classList.add('fab')
        iconoCanal.classList.add('fa-twitch')
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        document.getElementsByClassName(errorUrl)[0].classList.add('oculto');
        campos[campo] = true;
    } else if (contenedor.value.includes("https://www.youtube.com/")) {
        iconoCanal.classList.remove('fas')
        iconoCanal.classList.remove('fa-question-circle')
        iconoCanal.classList.remove('fa-twitch')
        iconoCanal.classList.remove('fa-instagram')
        iconoCanal.classList.add('fab')
        iconoCanal.classList.add('fa-youtube')
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        document.getElementsByClassName(errorUrl)[0].classList.add('oculto');
        campos[campo] = true;
    } else if (contenedor.value.includes('https://instagram.com/')) {
        iconoCanal.classList.remove('fas')
        iconoCanal.classList.remove('fa-question-circle')
        iconoCanal.classList.remove('fa-youtube')
        iconoCanal.classList.remove('fa-question-circle')
        iconoCanal.classList.remove('fa-twitch')
        iconoCanal.classList.add('fab')
        iconoCanal.classList.add('fa-instagram')
        contenedor.classList.remove('invalido');
        contenedor.classList.add('valido');
        document.getElementsByClassName(errorUrl)[0].classList.add('oculto');
        campos[campo] = true;
    } else if (contenedor.value === '') {
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        document.getElementsByClassName(errorRequired)[0].classList.remove('oculto');
        document.getElementsByClassName(errorUrl)[0].classList.add('oculto');
        campos[campo] = false;
    } else {
        iconoCanal.classList.remove('fab')
        iconoCanal.classList.remove('fa-youtube')
        iconoCanal.classList.remove('fa-twitch')
        iconoCanal.classList.remove('fa-instagram')
        iconoCanal.classList.remove('fa-instagram')
        iconoCanal.classList.add('fas')
        iconoCanal.classList.add('fa-question-circle')
        contenedor.classList.remove('valido');
        contenedor.classList.add('invalido');
        campos[campo] = false;
        document.getElementsByClassName(errorRequired)[0].classList.add('oculto');
        document.getElementsByClassName(errorUrl)[0].classList.remove('oculto');
    }
}

botonEnviar.addEventListener('click', function () {
    validarUsuario();
    validarCampo(inputPassword, 'password', 'error-password');
    validarTipoCuenta('tipoCuenta', 'error-cuenta');
    validarCampo(inputNombre, 'nombre', 'error-nombre');
    validarCampo(inputApellidos, 'apellidos', 'error-apellidos');
    validarCampo(inputTelefono, 'telefono', 'error-telefono');
    validarCampo(inputCodPostal, 'codPostal', 'error-codPostal');
    seleccionDNI(selectDocumentacion, 'documentacion', 'error-dni');
    validarCampo(inputDocumentacion, 'numDocumentacion', 'error-dni');
    validarEdad(selectNacimiento, 'nacimiento', 'error-nacimiento');
    validarAficiones('checkbox', 'error-aficiones');
    validarCampo(inputTitulo, 'titulo', 'error-titulo');
    validarCampo(inputDescripcion, 'descripcion', 'error-descripcion');
    validarCanal(inputCanal, 'canal', 'error-canal', 'error-url');
    if (comprobarCampos()) {
        crearOutput();
        formulario.reset();
        resetearInputsValue();
        resetearInputs();
    }
});


function comprobarCampos() {
    var error = false;

    for (var campo in campos) {
        if (campos[campo] === false) {
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
    inputDescripcion.classList.remove('valido');
    inputDescripcion.classList.remove('invalido');
    selectNacimiento.classList.remove('valido');
    selectNacimiento.classList.remove('invalido');
    selectDocumentacion.classList.remove('valido');
    selectDocumentacion.classList.remove('invalido');
    iconoCanal.classList.remove('fab')
    iconoCanal.classList.remove('fa-youtube')
    iconoCanal.classList.remove('fa-twitch')
    iconoCanal.classList.remove('fa-instagram')
    iconoCanal.classList.remove('fa-instagram')
    iconoCanal.classList.add('fas')
    iconoCanal.classList.add('fa-question-circle')
}

function resetearInputsValue() {
    var inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = "";
        input.checked = false;
        input.defaultValue = input.defaultValue;
    })
    inputDescripcion.value = "";
    inputDescripcion.checked = false;
}

function crearOutput() {
    var contenedorOutput = document.getElementsByClassName('output')[0];
    var tipoCuenta = document.querySelectorAll('input[name=tipoCuenta]:checked')[0];
    var fechaHoy = new Date
    fechaHoy = fechaHoy.getFullYear();
    var edad = fechaHoy - selectNacimiento.value;
    var aficiones = document.querySelectorAll('input[type=checkbox]:checked');


    contenedorOutput.removeChild(contenedorOutput.lastChild);
    contenedorOutput.appendChild(createNode("div", "", [], []));
    contenedorOutput.lastChild.appendChild(createNode("h1", "Datos Usuario", ["underline"], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "userName: " + inputUsuario.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Password: " + inputPassword.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("h1", "Datos Personales", ["underline"], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Nombre: " + inputNombre.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Apellidos: " + inputApellidos.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Teléfono: " + inputTelefono.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Código Postal: " + inputCodPostal.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", selectDocumentacion.value + ": " + inputDocumentacion.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Tipo cuenta: " + tipoCuenta.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Tipo cuenta: " + tipoCuenta.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Edad del usuario: " + edad, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Aficiones del usuario: ", [], []));
    contenedorOutput.lastChild.appendChild(createNode("ul", "", [], []));
    aficiones.forEach(aficion => {
        contenedorOutput.lastChild.lastChild.appendChild(createNode("li", aficion.id, [], []));
    });
    contenedorOutput.lastChild.appendChild(createNode("h1", "Datos Publicación", ["underline"], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Titulo: " + inputTitulo.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Descripción: " + inputDescripcion.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode("p", "Canal: ", [], []));
    contenedorOutput.lastChild.lastChild.appendChild(createNode("a", inputCanal.value, [], [{ name: 'src', value: 'inputCanal.value' }]))
}

function createNode(name, content, classes, attributes) {
    var node = document.createElement(name);

    if (content != "") {
        var nodeContent = document.createTextNode(content);
        node.appendChild(nodeContent);
    }
    if (classes.length > 0) {
        classes.forEach(classElement => {
            node.classList.add(classElement);
        });
    }

    if (attributes.length > 0) {
        attributes.forEach(nodeAttribute => {
            node.setAttribute(nodeAttribute.name, nodeAttribute.value);
        })
    }
    return node;
}