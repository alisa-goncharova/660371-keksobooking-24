import { getGeneratingMarkupElements } from './helpers/generating-markup-elements.js';
import { switchForm, submittingForm,  form, formValues, disabledItem } from './helpers/form.js';
import { getSelectedItem, getSelectedPrice } from './helpers/get-selected-item.js';

getGeneratingMarkupElements(); // генерация фейковых данных
switchForm(); // переключение формы в (не) активное состояние
switchForm();
disabledItem(formValues.numberOfSeats);//блокируем изменение select количество мест
getSelectedItem(formValues); //собитие на нажатие input (количество комнат, количество мест)
// разблокируем select количество мест на нажатие выбора комнат
formValues.numberOfRooms.addEventListener('change', ()=> { disabledItem(formValues.numberOfSeats); }, {once: true});
form.addEventListener('submit', (evt) => submittingForm(evt)); //событие на отправку формы
getSelectedPrice(formValues);
