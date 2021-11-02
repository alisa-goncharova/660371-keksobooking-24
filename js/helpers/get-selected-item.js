import { getMinPrice } from './get-min-price.js';

const getSelectedItem = (formValues) =>{
  const options = formValues.numberOfSeats;
  formValues.numberOfRooms.addEventListener('change', function() {
    const currentVal = Number(this.value);
    if (currentVal === 0) {
      for (let i = 0; i < options.children.length; i++) {
        options.children[i].disabled = true;
      }
      options.children[options.children.length - 1].disabled = false;
      options.children[options.children.length - 1].selected = true;
    } else {
      for (let i = 0; i < options.children.length; i++) {
        options.children[i].disabled = i >= currentVal;
      }
      options.children[0].selected = true;
    }
  });
};

const getSelectedPrice = (formValues) => {
  let type,
    minPrice;
  formValues.typeOfHousing.addEventListener('change',() => {
    for(let i = 0; i < formValues.typeOfHousing.length; i++){
      if(formValues.typeOfHousing[i].selected === true){
        //узнаем выбранный тип: hotel и т.п.
        type = formValues.typeOfHousing[i];
      }
    }
    //узнаем минимальную цену для выбранного типа 0, 1000, 5000 и т.п.
    minPrice = getMinPrice(type.value);
    //присваиваем минимальную цену input = number (цена за ночь)
    formValues.nightPrice.value =  minPrice;
    //меняем значение min на поле nightPrice в верстке
    formValues.nightPrice.min = Number(minPrice);
  });
  formValues.nightPrice.addEventListener('change', () => {
    if(minPrice > formValues.nightPrice.value) {
      formValues.nightPrice.disabled = false;
      formValues.nightPrice.value = String(Number(formValues.nightPrice.value) + 1);
    }
  });
};

const getSelectedTimeIn = (formValues) => {
  let timeIn;
  formValues.checkInTime.addEventListener('change', () => {
    for(let i = 0; i <  formValues.checkInTime.length; i++){
      if(formValues.checkInTime[i].selected === true){
        timeIn = formValues.checkInTime[i];
      }
    }
    for(let i = 0; i < formValues.checkOutTime.length; i++){
      if(formValues.checkOutTime[i].value === timeIn.value){
        formValues.checkOutTime[i].selected = true;
      }
    }
  });
};

const getSelectedTimeOut = (formValues) => {
  let timeOut;
  formValues.checkOutTime.addEventListener('change', () => {
    for(let i = 0; i < formValues.checkOutTime.length; i++){
      if(formValues.checkOutTime[i].selected === true){
        timeOut = formValues.checkOutTime[i];
      }
    }
    for(let i = 0; i < formValues.checkInTime.length; i++){
      if(formValues.checkInTime[i].value ===  timeOut.value){
        formValues.checkInTime[i].selected = true;
      }
    }
  });
};

export { getSelectedItem, getSelectedPrice, getSelectedTimeIn, getSelectedTimeOut };
