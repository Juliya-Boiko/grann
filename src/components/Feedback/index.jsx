import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  FeedbackSection, FeedbackWrapper, FeedbackTitle,
  FeedbackForm, FeedbackInput, FeddbackTextarea, FeedbackSubmitBtn
} from "./Feedback.styled";

const initialValues = {
  name: '',
  tel: '',
  comment: ''
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(30, 'Too Long!')
     .required('Required'),
  tel: Yup.string()
     .matches(phoneRegExp, 'Phone number is not valid')
     .required('Required'),
   comment: Yup.string(),
 });

export const Feedback = () => {

  return (
    <FeedbackSection>
      <FeedbackWrapper>
        <FeedbackTitle>Давайте зробимо щось унікальне разом!</FeedbackTitle>
        <p>Ви можете замовити свій власний рецепт десерту, який вам буде до вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити деталі замовлення.</p>
      </FeedbackWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          toast.success('Очикуйте дзвінка!');
          resetForm();
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <FeedbackForm>
            <FeedbackInput
              type="text"
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder="Ім’я"
            />
            {/* {errors.name && touched.name ? console.log(errors.name) : null} */}
            <FeedbackInput
              type="text"
              onChange={handleChange}
              value={values.tel}
              name="tel"
              placeholder="Номер телефону"
            />
            {/* {errors.tel && touched.tel ? <div>{errors.tel}</div> : null} */}
            <FeddbackTextarea
              alue={values.comment}
              name="comment"
              placeholder="Опишіть ваші побажання:"
              onChange={handleChange}
            />
            {/* {errors.comment && touched.comment ? <div>{errors.comment}</div> : null} */}
            <FeedbackSubmitBtn type='submit' disabled={values.name === '' || values.tel === ''}>Надіслати</FeedbackSubmitBtn>
          </FeedbackForm>
        )}
      </Formik>
    </FeedbackSection>
  );
};