import { getRequest } from './get-request.js';
export const getData = async () => {
  return getRequest({
    path: '/data',
    method: 'get',
  });
};
//await лучше не трогать, иначе все ломается
export const dataRecords = await getData().then((data) => data);
