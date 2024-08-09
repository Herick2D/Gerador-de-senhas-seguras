import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';


const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

let randomPassword = '';

passwordBtnEl.addEventListener('click', () => {
    randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', () => {
    copy(randomPassword);
});