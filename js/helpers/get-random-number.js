const getRandomNumberInt = (startNumber, endNumber) => {
  if(startNumber >= 0 && endNumber >= 0 && endNumber - startNumber > 0){
    let result =  String(Math.floor(startNumber + Math.random()  * (endNumber + 1 - startNumber)));
    (result < 10) ? result = `0${ result }`: result;
    return result;
  }
  return 'Введены не корректные значения';
};

const getMapCoordinates = (startNumber, endNumber, count) => {
  if(startNumber >= 0 && endNumber >= 0 && endNumber - startNumber > 0){
    const number = startNumber - 0.5 + Math.random() * (endNumber - startNumber + 1);
    return Number(number.toFixed(count));
  }
  return 'Введены не корректные значения';
};

export { getRandomNumberInt, getMapCoordinates };
