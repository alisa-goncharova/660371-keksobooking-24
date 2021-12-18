import { points } from '../map/get-points.js';
import { filterArr } from './get-form-filter.js';

const priceRanges = {
  'low':    { from: 0,     to: 10000    },
  'middle': { from: 10000, to: 50000    },
  'high':   { from: 50000, to: Infinity },
};

const getDataFilter = () => {
  points.filter((item) => filterArr.every(({key, value}) => {
    switch (key) {
      case 'housing-rooms': return item.rooms === +value;
      case 'housing-guests': return item.guests === +value;
      case 'housing-type': return item.type === value;
      case 'housing-price': return item.price >= priceRanges[value].from && item.price <= priceRanges[value].to;
    }
  }));
console.log(points);
  return points;
};
export { getDataFilter };
