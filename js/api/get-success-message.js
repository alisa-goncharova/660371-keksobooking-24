import {switchForm} from '../helpers/form.js';

const hiddenModalSuccess = () => {
  const successModal = document.querySelector('.modal__success');
  successModal.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Escape') {
      successModal.classList.add('hidden');
      switchForm();
    }
  });
  successModal.addEventListener('click', ()=>{
    successModal.classList.add('hidden');
    switchForm();
  });
};
const onSuccess = () => {
  const fragment = document.querySelector('#success');
  const recording = fragment.content.cloneNode(true);
  const container = document.querySelector('.modal__success');
  container.appendChild(recording);
  hiddenModalSuccess();
};
export { onSuccess };

