import { switchForm } from '../helpers/form.js';

const clickBntFail = () => {
  const button = document.querySelector('.error__button');
  const errorModal = document.querySelector('.modal__error');
  button.addEventListener(('click'), ()=>{
    errorModal.classList.add('hidden');
    // switchForm();
  });
  errorModal.addEventListener('keydown', (event) => {
    const key = event.key; // const {key} = event; in ES6+
    if (key === 'Escape') {
      errorModal.classList.add('hidden');
      switchForm();
    }
  });
  errorModal.addEventListener('click', ()=>{
    errorModal.classList.add('hidden');
    switchForm();
  });
};
const onFail = () => {
  const fragment = document.querySelector('#error');
  const recording = fragment.content.cloneNode(true);
  const container = document.querySelector('.modal__error');
  container.appendChild(recording);
  clickBntFail();
};

export { onFail };
