import { getDataFilter } from './get-data-filter.js';

let filterArr = [];

//получаем саму форму фильтрации c объектами значений
const getFormFilter = (evt) => {
  evt.target.querySelectorAll('option').forEach((option)=>{
    if(option.selected === true) {
      filterArr.push(
        new Object({
          key: evt.target.id,
          value: option.value,
        }),
      );
    }
  });
  getDataFilter();
};

const clickInputFilter = () => {
  const form = document.querySelector('.map__filters');
  form.addEventListener('change', getFormFilter);
};


export { getFormFilter, clickInputFilter, filterArr };
