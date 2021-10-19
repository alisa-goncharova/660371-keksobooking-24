const getDataCheckItem = (element) =>{
  switch (element) {
    case 'palace': return 'Дворец';
    case 'flat': return 'Квартира';
    case 'house': return 'Дом';
    case 'bungalow': return 'Бунгало';
    case 'hotel': return 'Отель';
    default:
      break;
  }
};

export {getDataCheckItem};

