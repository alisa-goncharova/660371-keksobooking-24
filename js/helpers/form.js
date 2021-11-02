import { fieldsValidation } from './field-validation.js';
//форма
const form = document.querySelector('.ad-form');
const formValues = {
  noticeTitleInput: form.querySelector('.ad-form__title'), //заголовок объявления
  address: form.querySelector('.ad-form__address'), //адресс
  typeOfHousing: form.querySelector('.ad-form--type'), //тип жилья
  nightPrice: form.querySelector('.ad-form__night--price'), //цена за ночь
  checkInTime: form.querySelector('.ad-form__checkIn'), //время заезда
  checkOutTime: form.querySelector('.ad-form__checkOut'), //время выезда
  numberOfRooms: form.querySelector('.ad-form--rooms--number'), //количество комнат
  numberOfSeats: form.querySelector('.ad-form--capacity--number'), //количество мест
  comfort: form.querySelector('.ad-form__comfort'), //удобства
  description: form.querySelector('.ad-form--description'), //описание
  photo: form.querySelector('.ad-form__photo'), //фотография
};
//переключение формы в активное и не активное состояние
const switchForm = () =>{
  form.classList.toggle('ad-form--disabled');
  (form.querySelectorAll('.ad-form__element')).forEach((item)=>{
    item.classList.toggle('ad-form__element--disabled');
  });
  document.querySelector('.map__filters').classList.toggle('map__filters--disabled');
};
//метод на отправку формы
const submittingForm = (evt) =>{
  evt.preventDefault();
  switchForm();
  if(fieldsValidation(formValues.noticeTitleInput, formValues.nightPrice)){
    form.submit();
  } else {
    switchForm();
  }
};

const disabledItem = () => formValues.numberOfSeats.disabled = !formValues.numberOfSeats.disabled;

export { switchForm, submittingForm, form, formValues, disabledItem };

