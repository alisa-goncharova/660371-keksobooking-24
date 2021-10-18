import { getRandomNumberInt } from './get-random-number.js';

export const places = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
export const times = ['12:00', '13:00', '14:00'];
export const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

export const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getFakeDataValue = (dataArr) => dataArr[Number(getRandomNumberInt(0, dataArr.length-1))];

const getFakeDataValues = (dataArr) =>{
  const arrLength = Number(getRandomNumberInt(0, dataArr.length-1));
  return dataArr.slice(0, (dataArr.length-1) - arrLength-1);
}
export {getFakeDataValue, getFakeDataValues};

