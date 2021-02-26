const formulario = document.getElementById('formulario');
const iconoCanal = document.getElementsByClassName('icono')[0];
const selectDocumentacion = document.getElementById('documentacion');
const selectNacimiento = document.getElementById('nacimiento');
const inputDescripcion = document.getElementById('descripcion');

/**
 * Función creadora de nodos
 * @param {string} name 
 * @param {string} content 
 * @param {array} classes 
 * @param {objec} attributes 
 */
export function createNode(name, content, classes, attributes) {
    var node = document.createElement(name);

    if (content != '') {
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
        });
    }
    return node;
}

/**
 * Resetea gran parte de los inputs a 0 quitando estilos
 */
export function resetearInputs() {
    var inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('invalido');
        input.classList.remove('valido');
    });
    inputDescripcion.classList.remove('valido');
    inputDescripcion.classList.remove('invalido');
    selectNacimiento.classList.remove('valido');
    selectNacimiento.classList.remove('invalido');
    selectDocumentacion.classList.remove('valido');
    selectDocumentacion.classList.remove('invalido');
    iconoCanal.classList.remove('fab');
    iconoCanal.classList.remove('fa-youtube');
    iconoCanal.classList.remove('fa-twitch');
    iconoCanal.classList.remove('fa-instagram');
    iconoCanal.classList.remove('fa-instagram');
    iconoCanal.classList.add('fas');
    iconoCanal.classList.add('fa-question-circle');
}
/**
 * Resetea los inputs que la anterior no puede
 */
export function resetearInputsValue() {
    var inputs = formulario.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.checked = false;
        input.defaultValue = input.defaultValue;
    });
    inputDescripcion.value = '';
    inputDescripcion.checked = false;
}