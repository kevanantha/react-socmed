import { initialize } from 'redux-form';

export const initForm = (form, values) => {
  return initialize(form, values);
};
