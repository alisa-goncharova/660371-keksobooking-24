import { formValues} from '../helpers/form.js';

const clickMarker = (point) => {
  formValues.address.value = point.address;
};

export { clickMarker };
