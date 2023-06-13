import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
// const KEY_STORAGE = "feedback-form-state";
let inputData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', handlerSubmit);


function onFormInput(event) {
    inputData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
};

function handlerSubmit(event) {
    event.preventDefault();
    console.log(inputData);
    localStorage.removeItem("feedback-form-state");
    event.target.reset();
    inputData = {};
};

function onLoad() {
    inputEmail.value = inputData.email || "";
    inputMessage.value = inputData.message || "";
};
onLoad();



