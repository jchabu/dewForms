const inputCanal = document.getElementById('canal');
const iconoCanal = document.getElementsByClassName('icono')[0];
const errorCanal = document.getElementsByClassName('error-canal')[0];

inputCanal.addEventListener('input', validarCanal);

export function validarCanal() {
    if (inputCanal.validity.valueMissing) {
        inputCanal.classList.remove('valido');
        inputCanal.classList.add('invalido');
        errorCanal.classList.remove('oculto');
        errorCanal.textContent = 'Campo obligatorio *';
    } else if (inputCanal.validity.patternMismatch) {
        iconoCanal.classList.remove('fab');
        iconoCanal.classList.remove('fa-youtube');
        iconoCanal.classList.remove('fa-twitch');
        iconoCanal.classList.remove('fa-instagram');
        iconoCanal.classList.remove('fa-instagram');
        iconoCanal.classList.add('fas');
        iconoCanal.classList.add('fa-question-circle');
        inputCanal.classList.remove('valido');
        inputCanal.classList.add('invalido');
        errorCanal.textContent = 'La URL no tiene un formato valido (https://...)';
        errorCanal.classList.remove('oculto');
    } else {
        if (inputCanal.value.includes('https://www.twitch.tv/')) {
            iconoCanal.classList.remove('fas');
            iconoCanal.classList.remove('fa-question-circle');
            iconoCanal.classList.remove('fa-youtube');
            iconoCanal.classList.remove('fa-instagram');
            iconoCanal.classList.add('fab');
            iconoCanal.classList.add('fa-twitch');
            inputCanal.classList.remove('invalido');
            inputCanal.classList.add('valido');
            errorCanal.classList.add('oculto');
        } else if (inputCanal.value.includes('https://www.youtube.com/channel/')) {
            iconoCanal.classList.remove('fas');
            iconoCanal.classList.remove('fa-question-circle');
            iconoCanal.classList.remove('fa-twitch');
            iconoCanal.classList.remove('fa-instagram');
            iconoCanal.classList.add('fab');
            iconoCanal.classList.add('fa-youtube');
            inputCanal.classList.remove('invalido');
            inputCanal.classList.add('valido');
            errorCanal.classList.add('oculto');
        } else if (inputCanal.value.includes('https://instagram.com/')) {
            iconoCanal.classList.remove('fas');
            iconoCanal.classList.remove('fa-question-circle');
            iconoCanal.classList.remove('fa-youtube');
            iconoCanal.classList.remove('fa-question-circle');
            iconoCanal.classList.remove('fa-twitch');
            iconoCanal.classList.add('fab');
            iconoCanal.classList.add('fa-instagram');
            inputCanal.classList.remove('invalido');
            inputCanal.classList.add('valido');
            errorCanal.classList.add('oculto');
        } else {
            iconoCanal.classList.remove('fab');
            iconoCanal.classList.remove('fa-youtube');
            iconoCanal.classList.remove('fa-twitch');
            iconoCanal.classList.remove('fa-instagram');
            iconoCanal.classList.remove('fa-instagram');
            iconoCanal.classList.add('fas');
            iconoCanal.classList.add('fa-question-circle');
            inputCanal.classList.remove('valido');
            inputCanal.classList.add('invalido');
            errorCanal.textContent = 'El canal introducido tiene que ser YouTube, Instagram o TwitchTV';
            errorCanal.classList.remove('oculto');
        }
    }
}