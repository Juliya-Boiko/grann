import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: '',
  tel: '',
  comment: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim()
    .min(2, 'Мінімум 2 символи')
    .max(30, 'Максимум 30 символів!')
    .required("Обов'якове поле"),
  tel: Yup.string().trim()
     .matches(phoneRegExp, 'Невірний номер')
     .required("Обов'якове поле"),
   comment: Yup.string(),
});
 
export const feedbackSets = {
  initialValues,
  validationSchema
};