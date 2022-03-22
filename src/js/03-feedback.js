const throttle = require('lodash.throttle');

const feedbackFormElem = document.querySelector('.feedback-form');

feedbackFormElem.addEventListener('input', onFeedbackFormSubmit);

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  const INPUT = 'INPUT';
  const TEXTAREA = 'TEXTAREA';
  const currentElement = event.target.nodeName;

  if (currentElement === INPUT) {
  }

  if (currentElement === TEXTAREA) {
  }
  const userFeedback = event.target;
  const { email, message } = event.target;

  console.dir(event.target);
}
