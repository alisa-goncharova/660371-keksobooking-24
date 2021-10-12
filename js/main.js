const getRandomNumberInt = (startNumber, endNumber) => {
  if(startNumber >= 0 && endNumber >= 0 && endNumber - startNumber > 0){
    return Math.floor(startNumber + Math.random()  * (endNumber + 1 - startNumber));
  }
  return 'Введены не корректные значения';
};

getRandomNumberInt(1, 100);

const getMapCoordinates = (startNumber, endNumber, count) => {
  if(startNumber >= 0 && endNumber >= 0 && endNumber - startNumber > 0){
    const number = startNumber - 0.5 + Math.random() * (endNumber - startNumber + 1);
    return Number(number.toFixed(count));
  }
  return 'Введены не корректные значения';
};

getMapCoordinates(1, 3, 5);
