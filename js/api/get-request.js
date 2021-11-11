const baseUrl = 'https://24.javascript.pages.academy/keksobooking';
const getRequest = ({path, method, data}) =>{
  try{
    return fetch(`${baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => response.json());
  }
  catch(e){
    console.log(e);
  }
};

export { getRequest };
