import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { feedbackSets } from 'schemas/feedbackSets';
import { FeedbackComponent } from './FeedbackComponent';
import { FeedbackBtn } from 'components/buttons/FeedbackBtn';
import { FeedbackSection, FeedbackWrapper, FeedbackTitle, FeedbackForm, FeedbackTextarea } from "./Feedback.styled";

export const Feedback = () => {

  return (
    <FeedbackSection>
      <FeedbackWrapper>
        <FeedbackTitle
          initial="hidden" whileInView="visible"
          transition={{ delay: 0.4, duration: 1 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
        >
          Давайте зробимо щось унікальне разом!
        </FeedbackTitle>
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
            <FeedbackTextarea
              onChange={handleChange} value={values.comment}
              name="comment" placeholder="Опишіть ваші побажання:" />
            <FeedbackBtn disabled={values.name === '' || values.tel === ''}  />
          </FeedbackForm>
        )}
      </Formik>
    </FeedbackSection>
  );
};