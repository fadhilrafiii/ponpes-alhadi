import JoiDate from '@joi/date';
import Joi from 'joi';

export const joiErrorHandler = (error) => {
  let errorMsg;
  const errorKey = error.code.split('.').pop();
  if (errorKey === 'required' || errorKey === 'empty') {
    errorMsg = error.flags.label += ' tidak boleh kosong!';
  } else if (errorKey === 'base') {
    errorMsg = error.flags.label += ' tidak memiliki tipe yang sesuai!';
  } else if (errorKey === 'format') {
    errorMsg = error.flags.label += ' harus berformat ' + error.local.format;
  } else {
    errorMsg = 'Terdapat kesalahan pada input ' + error.flags.label;
  }

  const errObject = new Error(JSON.stringify({ message: errorMsg, _original: true }));

  return errObject;
};

export default Joi.extend(JoiDate);
