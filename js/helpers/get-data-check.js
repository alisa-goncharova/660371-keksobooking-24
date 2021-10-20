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

const getDataFeatures = (data, container) =>{
  const userFeatures = data;
  const featureList = container.querySelectorAll('.popup__feature');

  featureList.forEach((featureListItem)=>{
    const res = userFeatures.some(
      (userFeature) => featureListItem.classList.contains(`popup__feature--${userFeature}`),
    );
    if (!res) {
      featureListItem.remove();
    }
  });
};

const getDataPhotos = (data, container) =>{
  container.removeChild(container.querySelector('img'));
  data.forEach((imageItem)=>{
    const image = document.createElement('img');
    image.src = imageItem;
    image.classList.add('popup__photo');
    image.style.width = '65px';
    image.style.height = '60px';
    container.append(image);
  });
};
export {getDataCheckItem, getDataFeatures, getDataPhotos};

