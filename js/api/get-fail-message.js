import { switchForm } from '../helpers/form.js';

const clickBntFail = () => {
  const button = document.querySelector('.error__button');
  const errorModal = document.querySelector('.modal__error');
  button.addEventListener(('click'), ()=>{
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
