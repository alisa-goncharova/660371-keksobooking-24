import { getRequest } from './get-request.js';

let dataApi = [];
const getData = async () => {
  dataApi = await (getRequest({
    path: '/data',
    method: 'get',
  }));
  console.log(dataApi);
};

export { getData };
