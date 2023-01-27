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
// FIN PASSWORD

// CODIGO