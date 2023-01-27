const form = document.querySelector('#form');
//const nameInput = document.querySelector('#name-input');
//const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');
const ciInput = document.querySelector('#ci-input')
const fechaInput = document.querySelector('#fecha-input')
const cdgInput = document.querySelector('#cdg-input')

// REGEX CEDULA
const CI_REGEX = /([V-v]-[0-9]{7,8})/;  
let ciValidation = false;
    ciInput.addEventListener('input', e =>{
    ciValidation = CI_REGEX.test(e.target.value);
    const xIcon = ciInput.parentElement.children[1].children[0];
    const checkIcon = ciInput.parentElement.children[1].children[1];
    const information = ciInput.parentElement.parentElement.children[2];
    
    if (ciInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (ciValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!ciValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});

//REGEX FECHA DE NACIMIENTO

const FECHA_REGEX = /^(?:(?:31(\/)(?:0[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(\/)(?:02)\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\d|2[0-8])(\/)(?:(?:0[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/; 

let fechaValidation = false;
fechaInput.addEventListener('input', e =>{
    fechaValidation = FECHA_REGEX.test(e.target.value);
    const xIcon = fechaInput.parentElement.children[1].children[0];
    const checkIcon = fechaInput.parentElement.children[1].children[1];
    const information = fechaInput.parentElement.parentElement.children[2];
    
    if (fechaInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (fechaValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!fechaValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});

                                        //REGEX PASSWORD
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let passwordValidation = false;

passwordInput.addEventListener('input', e =>{
    passwordValidation = PASSWORD_REGEX.test(e.target.value);
    const xIcon = passwordInput.parentElement.children[1].children[0];
    const checkIcon = passwordInput.parentElement.children[1].children[1];
    const information = passwordInput.parentElement.parentElement.children[2];
    
    if (passwordInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (passwordValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!passwordValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
                                        // FIN VALIDACION PASSWORD


// Validacion password correcta
// CAMBIAR REGEX PARA COINCIDENCIA
const MATCH_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

let matchValidation = false;

matchInput.addEventListener('input', e =>{
    matchValidation = MATCH_REGEX.test(e.target.value);
    const xIcon = matchInput.parentElement.children[1].children[0];
    const checkIcon = matchInput.parentElement.children[1].children[1];
    const information = matchInput.parentElement.parentElement.children[2];

    if (matchInput.value === ''){
        checkIcon.classList.add('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');
    } else if (matchValidation) {
        checkIcon.classList.remove('hidden');
        xIcon.classList.add('hidden');
        information.classList.add('hidden');

    }  else if (!matchValidation) {
        xIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        information.classList.remove('hidden');

    }
});
// FIN VALIDACION PASSWORD CORRECTA

// CODIGO



