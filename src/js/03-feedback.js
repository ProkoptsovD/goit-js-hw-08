const throttle = require('lodash.throttle');

const LOCALSTORAGE_FEEDBACK_KEY = 'feedback-form-state';
const FEEDBACK_DATA = {};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  formInput: document.querySelector('input[name="email"]'),
  formTextarea: document.querySelector('textarea[name="message"]'),
};

window.addEventListener('load', onWindowLoadSetInputValue);

refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
refs.feedbackForm.addEventListener('submit', onFeedbackFormSibmit);

function onFeedbackFormInput(event) {
  const { name, value } = event.target;

  FEEDBACK_DATA[name] = value;
  localStorage.setItem(LOCALSTORAGE_FEEDBACK_KEY, JSON.stringify(FEEDBACK_DATA));
}

function onWindowLoadSetInputValue() {
  try {
    const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

    refs.formInput.value = formDataObj.email;
    refs.formTextarea.value = formDataObj.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFeedbackFormSibmit(event) {
  event.preventDefault();

  const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_FEEDBACK_KEY));

  console.log(formDataObj);
  localStorage.removeItem(LOCALSTORAGE_FEEDBACK_KEY);
  refs.feedbackForm.reset();
}
