const checkHobbies = document.querySelectorAll('input[name=checkbox]');
const errorHobbie = document.getElementsByClassName('error-aficiones')[0];

checkHobbies.forEach(check => {
	check.addEventListener('change', validarAficiones);
});

export function validarAficiones(){
	var checked = $('input[name=checkbox]:checked').length;
	if (checked >= 2) {
		errorHobbie.classList.add('oculto');
		errorHobbie.textContent = '';
	} else if (checked < 2) {
		errorHobbie.classList.remove('oculto');
		errorHobbie.textContent = 'Elige al menos dos aficiones';
	}
}