const getSelectedItem = (formValues) =>{
  const options = formValues.numberOfSeats;
  formValues.numberOfRooms.addEventListener('change', function() {
    const currentVal = Number(this.value);
    if (currentVal === 0) {
      for (let i = 0; i < options.children.length; i++) {
        options.children[i].disabled = true;
      }
      options.children[options.children.length - 1].disabled = false;
      options.children[options.children.length - 1].selected = true;
    } else {
      for (let i = 0; i < options.children.length; i++) {
        options.children[i].disabled = i >= currentVal;
      }
      options.children[0].selected = true;
    }
  });
};

export { getSelectedItem };
