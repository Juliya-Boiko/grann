import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const paySets = ['Готівка', 'Liqpay'];

const deliverySets = [
  { id: 'cамовивіз', value: 'Самовивіз з Печерського р-ну, м. Київ' },
  { id: 'таксі', value: 'На таксі (за тарифами служби таксі)' },
];

const initialValues = {
  contacts: { name: '', tel: '', email: '', },
  date: '',
  delivery: deliverySets[0].id,
  address: { city: '', street: '', build: '', entrance: '', corps: '', apartment: '', floor: '' },
  pay: paySets[0],
  comment: '',
};

const validationSchema = Yup.object().shape({
  contacts: Yup.object().shape({
    name: Yup.string().trim()
      .min(2, 'Мінімум 2 символи')
      .max(30, 'Максимум 30 символів!')
      .required("Обов'язкове поле"),
    tel: Yup.string()
      .matches(phoneRegExp, 'Невірний номер')
      .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний email').required("Обов'язкове поле"),
  }),
  date: Yup.string().trim().required("Обов'язкове поле"),
  delivery: Yup.string().oneOf(deliverySets.map(item => item.id)).trim().required("Обов'язкове поле"),
  address: Yup.object().shape({
    city: Yup.ref('delivery') === deliverySets[1].id ? Yup.string().trim() : Yup.string().trim().required("Обов'язкове поле"),
    //city: Yup.string().trim().required("Обов'язкове поле"),
    street: Yup.ref('delivery') === deliverySets[1].id ? Yup.string().trim() : Yup.string().trim().required("Обов'язкове поле"),
   // street: Yup.string().trim().required("Обов'язкове поле"),
    build: Yup.ref('delivery') === deliverySets[1].id ? Yup.string().trim().max(10, 'Максимум 10 символів!'): Yup.string().trim().max(10, 'Максимум 10 символів!').required("Обов'язкове поле"), 
   // build: Yup.string().trim().max(10, 'Максимум 10 символів!').required("Обов'язкове поле"),
    entrance: Yup.string().trim(),
    corps: Yup.string().trim().max(10, 'Максимум 10 символів!'),
    apartment: Yup.string().trim().max(10, 'Максимум 10 символів!'),
    floor: Yup.string().trim().max(2, 'Максимум 2 символи!')
  }),
  pay : Yup.string().trim().oneOf(paySets).required("Обов'язкове поле"),
  comment: Yup.string().trim(),
});

export const orderSets = {
  initialValues,
  validationSchema,
  paySets,
  deliverySets
};