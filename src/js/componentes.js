import {
    checkEmail,
    checkRequired,
    checkLength,
    checkPasswordMatch
} from './helper';
import './../css/componentes.css';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// *************** Event Listener *************** //
const eventos = () => {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkRequired([username, email, password, password2]);
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordMatch(password, password2);
    });

};

const init = () => {
    console.log('Init');
    eventos();
};

export {
    init
}