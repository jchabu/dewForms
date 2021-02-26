import {createNode} from './functions.js';
const contenedorOutput = document.getElementsByClassName('output')[0];
const inputUsuario = document.getElementById('usuario');
const inputPassword = document.getElementById('password');
const inputNombre = document.getElementById('nombre');
const inputApellidos = document.getElementById('apellidos');
const inputTelefono = document.getElementById('telefono');
const inputCodPostal = document.getElementById('codpostal');
const selectDocumentacion = document.getElementById('documentacion');
const inputDocumentacion = document.getElementById('numDocumentacion');
const selectNacimiento = document.getElementById('nacimiento');
const aficiones = document.querySelectorAll('input[name=checkbox]:checked');
const inputTitulo = document.getElementById('titulo');
const inputDescripcion = document.getElementById('descripcion');
const inputCanal = document.getElementById('canal');

/**
 * Función para pintar el output del formulario
 */
export function crearOutput() {
    let fechaHoy = new Date;
    fechaHoy = fechaHoy.getFullYear();
    var edad = fechaHoy - selectNacimiento.value;
    var tipoCuenta = document.querySelectorAll('input[name=tipoCuenta]:checked')[0];
    contenedorOutput.removeChild(contenedorOutput.lastChild);
    contenedorOutput.appendChild(createNode('div', '', [], []));
    contenedorOutput.lastChild.appendChild(createNode('h1', 'Datos Usuario', ['underline'], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'userName: ' + inputUsuario.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Password: ' + inputPassword.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('h1', 'Datos Personales', ['underline'], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Nombre: ' + inputNombre.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Apellidos: ' + inputApellidos.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Teléfono: ' + inputTelefono.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Código Postal: ' + inputCodPostal.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', selectDocumentacion.value + ': ' + inputDocumentacion.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Tipo cuenta: ' + tipoCuenta.id, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Edad del usuario: ' + edad, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Aficiones del usuario: ', [], []));
    contenedorOutput.lastChild.appendChild(createNode('ul', '', [], []));
    aficiones.forEach(aficion => {
        contenedorOutput.lastChild.lastChild.appendChild(createNode('li', aficion.id, [], []));
    });
    contenedorOutput.lastChild.appendChild(createNode('h1', 'Datos Publicación', ['underline'], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Titulo: ' + inputTitulo.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Descripción: ' + inputDescripcion.value, [], []));
    contenedorOutput.lastChild.appendChild(createNode('p', 'Canal: ', [], []));
    contenedorOutput.lastChild.lastChild.appendChild(createNode('a', inputCanal.value, [], [{ name: 'href', value: `${inputCanal.value}` }]));
}