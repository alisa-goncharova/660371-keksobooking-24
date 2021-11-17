const setUserFormSubmit = (evt, onSuccess, onFail) => {
  const formData = new FormData(evt.target);
  try {
    fetch(
      'https://24.javascript.pages.academy/keksobooking/data',
      {
        method: 'POST',
        credentials: 'same-origin',
        body: formData,
      },
    ).then((response) => (response.ok)? onFail(): onSuccess());
  } catch (e) {
    console.log(e);
  }
};

export {setUserFormSubmit};
