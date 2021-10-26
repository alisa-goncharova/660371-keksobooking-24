// const correctingSeats = (numberOfRoms, numberOfSeats) =>{
//   const count = Number(numberOfRoms.value) % 100;
//   const arr = numberOfSeats.querySelectorAll('option');
//   arr.forEach((elem)=>{
//     if(Number(elem.value) > count){
//       elem.remove();
//       // location.reload();
//     }
//   });
// };

const getSelectedItemRoom = (numberOfRoms, numberOfSeats) =>{
  (numberOfRoms.value === '100')? numberOfSeats.value = '0' : numberOfSeats.value = numberOfRoms.value;
  // correctingSeats(numberOfRoms, numberOfSeats);
};

export { getSelectedItemRoom };
