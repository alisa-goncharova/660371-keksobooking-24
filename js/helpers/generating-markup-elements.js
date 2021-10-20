import  {getDataUsers} from './data.js';
import {getDataCheckItem, getDataFeatures, getDataPhotos} from './get-data-check.js';

const dataUsers = Array.from({length: 10}, getDataUsers);
const container = document.querySelector('.map__canvas');
//временные стили, которые потом удалятся
container.style.height = '100%';
container.style.columnCount = '2';
container.style.padding = '40px 40px';
//клонируем фрагмент
const fragment = document.querySelector('#card');

const getGeneratingMarkupElements = () =>{
  dataUsers.forEach((elem)=>{
    const recording = fragment.content.cloneNode(true);
    recording.querySelector('.popup__title').textContent = `${elem.offer.title}`;
    recording.querySelector('.popup__text--price').textContent = `${elem.offer.price} ₽/ночь`;
    recording.querySelector('.popup__type').textContent = `${getDataCheckItem(elem.offer.type)}`;
    recording.querySelector('.popup__text--capacity').
      textContent = `${elem.offer.rooms} комнаты для ${elem.offer.guests} гостей`;
    recording.querySelector('.popup__text--time').
      textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;
    //вывод необходимых иконок
    getDataFeatures(elem.offer.features, recording.querySelector('.popup__features'));
    recording.querySelector('.popup__description').textContent = elem.offer.description;
    // вывод фотографий
    getDataPhotos(elem.offer.photos, recording.querySelector('.popup__photos'));
    recording.querySelector('.popup__avatar').src = `${elem.author.avatar}`;
    container.appendChild(recording);
  });
};

export {getGeneratingMarkupElements};
