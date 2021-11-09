//функция созания активного состояния маркера
const makeMarkerActive = (marker) => {
  // marker.options.icon.options.iconSize[0] = 98;
  // marker.options.icon.options.iconSize[1] = 98;
  console.log('click' + marker);
  console.log(marker);
  // marker.bindPopup('какой-то текст');
};

export { makeMarkerActive };
