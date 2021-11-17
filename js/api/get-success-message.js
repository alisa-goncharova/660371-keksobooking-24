import {switchForm} from '../helpers/form.js';

const hiddenModalSuccess = () => {
  const successModal = document.querySelector('.modal__success');
  setTimeout(()=> {
    successModal.classList.add('hidden'); switchForm();}, 2000);
};
const onSuccess = () => {
  const fragment = document.querySelector('#success');
  const recording = fragment.content.cloneNode(true);
  const container = document.querySelector('.modal__success');
  container.appendChild(recording);
  hiddenModalSuccess();
};
export { onSuccess };

