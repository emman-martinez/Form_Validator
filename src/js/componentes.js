
const form      = document.getElementById('form');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const password2 = document.getElementById('password2');

// *************** Error Message *************** //
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};
// *************** Success Message *************** //
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};
// *************** Valid Email *************** //
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // with @ true, without @ false
};
// *************** Event Listener *************** //
const eventos = () => { 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const { value: nombre } = username;
        const { value: correo } = email;
        const { value: pass } = password;
        const { value: pass2 } = password2;

        nombre === '' 
            ? showError(username, 'Username is required')
                : showSuccess(username);
        
        if(correo === '') {
            showError(email, 'Email is required');
        } else if (!isValidEmail(correo)) {
            showError(email, 'Email is not valid');
        } else {
            showSuccess(email);
        }
        
        pass === '' 
            ? showError(password, 'Password is required')
                : showSuccess(password);

        pass2 === '' 
            ? showError(password2, 'Password is required')
                : showSuccess(password2);

    });

};
// ********************************************* //

const init = () => {
    console.log('Init');
    eventos();
};

export {
    init
}