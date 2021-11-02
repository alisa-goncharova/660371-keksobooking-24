const TITLE_MIN = 30;
const TITLE_MAX = 100;
const PRICE_MAX = 1000000;
const PRICE_LENGTH = 0;

const correctionLayout = (title, price, isTitle, isPrice) =>{
  //здесь нужны раздельные условия для того чтобы выделить либо не правильный заголовок, либо цену, либо все вместе
  // если сделать isTitle === false && isPrice === false, тогда вне зависимости от того, правильно указан title или price
  // посвечивать будут все как не правильные
  // и зайдите в Skype пожалуйста)
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
