import {getDataCheckItem, getDataFeatures, getDataPhotos} from '../helpers/get-data-check.js';
import {checkingValues} from './checking-values.js';

const  createCustomPopup = (point) => {
  const fragment = document.querySelector('#card');
  const recording = fragment.content.cloneNode(true);
  recording.querySelector('.popup__title').textContent = `${point.title}`;
  recording.querySelector('.popup__text--price').textContent = `${point.price} ₽/ночь`;
  recording.querySelector('.popup__type').textContent = `${getDataCheckItem(point.type)}`;
  recording.querySelector('.popup__text--capacity').
    textContent = `${point.rooms} комнаты для ${point.guests} гостей`;
  recording.querySelector('.popup__text--time').
    textContent = `Заезд после ${point.checkin}, выезд до ${point.checkout}`;
  //вывод необходимых иконок
  getDataFeatures(point.features, recording.querySelector('.popup__features'));
  recording.querySelector('.popup__description').textContent = point.description;
  // вывод фотографий
  getDataPhotos(point.photos, recording.querySelector('.popup__photos'));
  recording.querySelector('.popup__avatar').src = `${point.avatar}`;
  //проверка на отсутсвия значений
  checkingValues(recording);
  return recording;
};
export { createCustomPopup };
