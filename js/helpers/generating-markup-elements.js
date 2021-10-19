import  {getDataUsers} from './data.js';
import {getDataCheckItem} from './get-data-check.js';

const dataUsers = Array.from({length: 10}, getDataUsers);

//блок в который будет вставляться фрагмент с данными
const container = document.querySelector('.map__canvas');
//клонируем фрагмент
const fragment = (document.querySelector('#card').content.cloneNode(true));

//функция перебора popupItems и встраивании их в container
const getGeneratingMarkupElements = () =>{
  dataUsers.forEach((elem)=>{
    const recording = fragment;
    recording.querySelector('.popup__title').textContent = `${elem.offer.title}`;
    recording.querySelector('.popup__text--price').textContent = `${elem.offer.price} ₽/ночь`;
    // popup__type сделать
    // recording.querySelector('.popup_type').textContent = `Тип ${getDataCheckItem(elem.offer.type)}`;
    recording.querySelector('.popup__text--capacity').textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
    recording.querySelector('.popup__text--time').textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
    // popup__features сделать
    recording.querySelector('.popup__description').textContent = elem.offer.description;
    // popup__photos сделать
    // .popup__avatar сделать
    recording.querySelector('.popup__avatar').src = `${elem.author.avatar}`;
    container.appendChild(recording);
  });
};
export {getGeneratingMarkupElements};
