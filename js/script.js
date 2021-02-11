import { existingUserNames } from './userNames.js';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,32}$/, 
    password: /^.{6,}$/, 
    telefono: /^\d{9}$/,
    codpostal: /^[3][8][0-9]{5}$/
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
    cuenta: false,
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
    switch (e.target.name){
        case "usuario":
           
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellidos":

        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "codpostal":
            validarCampo(expresiones.codpostal, e.target, 'codpostal');
        break;
        case "documentacion":
            
        break;
        case "numDocumentacion":
            
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
    if (expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('invalido');
        document.getElementById(`${campo}`).classList.add('valido');
        campos[campo] = true;
    }
    else{
        document.getElementById(`${campo}`).classList.remove('valido');
        document.getElementById(`${campo}`).classList.add('invalido');
        campos[campo] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
});

