const getMinPrice = (elem) => {
  switch (elem) {
    case 'palace': return 10000;
    case 'flat': return 1000;
    case 'house': return 5000;
    case 'bungalow': return 0;
    case 'hotel': return 3000;
    default:
      break;
  }
};

export { getMinPrice };
