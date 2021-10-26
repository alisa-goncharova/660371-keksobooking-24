import { getGeneratingMarkupElements } from './helpers/generating-markup-elements.js';
import { switchForm, submittingForm,  form } from './helpers/form.js';

getGeneratingMarkupElements(); // генерация фейковых данных
switchForm(); // переключение формы в (не) активное состояние
switchForm();
//событие на отправку формы
form.addEventListener('submit', (evt) => submittingForm(evt));








//событие на выбор количества комнат
// numberOfRooms.addEventListener('change', ()=> getSelectedItemRoom(numberOfRooms, numberOfSeats));
//событие на выбор количества мест
// numberOfSeats.addEventListener('change', ()=>{});

