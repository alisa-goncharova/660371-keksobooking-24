//получаем значения options
const getValues = (options) => {
  let objectValues = {};
  // let arr = [];
  for(let i = 0; i < options.length; i++){
    if(options[i].selected === true){
      objectValues.key = options.id;
      objectValues.value = options[i].value;
    }
  }
  // console.log(objectValues);
};

//получаем select'ы
const getOptions = (formFilter) => {
  for(let i = 0; i < formFilter.children.length; i++){
    getValues(formFilter.children[i]);
  }
};

//получаем саму форму фильтрации, навешиваем обработчик на клик
const getFormFilter = () => {
  const formFilter = document.querySelector('.map__filters');
  formFilter.addEventListener('click', ()=>{
    getOptions(formFilter);
  });
};

export { getFormFilter };


// let type;
// let price;
// let numberOfRooms;
// let guests;
// console.log(formFilter.children);
