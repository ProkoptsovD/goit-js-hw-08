const throttle = require('lodash.throttle');

const LOCALSTORAGE_FEEDBACK_KEY = 'feedback-form-state';
const FEEDBACK_DATA = {};

const feedbackFormElem = document.querySelector('.feedback-form');

window.addEventListener('load', onWindowLoad);
feedbackFormElem.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackFormElem.addEventListener('submit', onFeedbackFormSibmit);

function onFeedbackFormInput(event) {
  const { name, value } = event.target;

  FEEDBACK_DATA[name] = value;
  localStorage.setItem(LOCALSTORAGE_FEEDBACK_KEY, JSON.stringify(FEEDBACK_DATA));
}

function onWindowLoad() {
  try {
    const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));
    const formInput = document.querySelector('input[name="email"]');
    const formTextarea = document.querySelector('textarea[name="message"]');

    formInput.value = formDataObj.email;
    formTextarea.value = formDataObj.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFeedbackFormSibmit(event) {
  event.preventDefault();

  const feedbackForm = event.currentTarget;
  const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

  console.log(formDataObj);
  localStorage.removeItem(LOCALSTORAGE_FEEDBACK_KEY);
  feedbackForm.reset();
}
