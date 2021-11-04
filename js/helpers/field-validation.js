import { getMinPrice } from './get-min-price.js';
import { getSelectedPrice } from './get-selected-item.js';
import { formValues } from './form.js';

const TITLE_MIN = 30;
const TITLE_MAX = 100;
const PRICE_MAX = 1000000;
const PRICE_LENGTH = 0;

const correctionLayout = (title, price, isTitle, isPrice) =>{
  if(isTitle === false) {
    title.style.borderColor = 'red';
  }
  if(isPrice === false) {
    price.style.borderColor = 'red';
  }
};

const fieldsValidation = (title, price) =>{
  let isTitle = false;
  let isPrice = false;
  if(title.value.length >= TITLE_MIN && title.value.length <= TITLE_MAX){
    isTitle = true;
  }
  if(price.value <= PRICE_MAX && price.value.length > PRICE_LENGTH){
    isPrice = true;
  }
  correctionLayout(title, price, isTitle, isPrice);
  return (isTitle === true && isPrice === true);
};
export { fieldsValidation };
