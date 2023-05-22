import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { feedbackSets } from 'schemas/feedbackSets';
import { FeedbackComponent } from './FeedbackComponent';
import { FeedbackSection, FeedbackWrapper, FeedbackTitle,
  FeedbackForm, FeddbackTextarea, FeedbackSubmitBtn
} from "./Feedback.styled";

export const Feedback = () => {

  return (
    <FeedbackSection>
      <FeedbackWrapper>
        <FeedbackTitle>Давайте зробимо щось унікальне разом!</FeedbackTitle>
        <p>Ви можете замовити свій власний рецепт десерту, який вам буде до вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити деталі замовлення.</p>
      </FeedbackWrapper>
      <Formik
        initialValues={feedbackSets.initialValues}
        validationSchema={feedbackSets.validationSchema}
        onSubmit={( _, { resetForm }) => {
          toast.success('Очикуйте дзвінка!');
          resetForm();
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <FeedbackForm>
            <FeedbackComponent
              handleChange={handleChange} value={values.name}
              name="name" placeholder="Ім’я"
              errors={errors.name} touched={touched.name} />
            <FeedbackComponent
              handleChange={handleChange} value={values.tel}
              name="tel" placeholder="Номер телефону"
              errors={errors.tel} touched={touched.tel} />
            <FeddbackTextarea
              onChange={handleChange} value={values.comment}
              name="comment" placeholder="Опишіть ваші побажання:" />
            <FeedbackSubmitBtn
              type='submit'
              disabled={values.name === '' || values.tel === ''}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Надіслати
            </FeedbackSubmitBtn>
          </FeedbackForm>
        )}
      </Formik>
    </FeedbackSection>
  );
};