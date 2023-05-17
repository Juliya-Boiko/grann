import {
  FeedbackSection, FeedbackWrapper, FeedbackTitle,
  FeedbackForm, FeedbackInput, FeddbackTextarea, FeedbackSubmitBtn
} from "./Feedback.styled";

export const Feedback = () => {
  return (
    <FeedbackSection>
      <FeedbackWrapper>
        <FeedbackTitle>Давайте зробимо щось унікальне разом!</FeedbackTitle>
        <p>Ви можете замовити свій власний рецепт десерту, який вам буде до вподоби. Заповніть заявку та я зв’яжусь з вами, аби обговорити деталі замовлення.</p>
      </FeedbackWrapper>
      <FeedbackForm>
        <FeedbackInput type='text' placeholder="Ім’я" />
        <FeedbackInput type='tel' placeholder="Номер телефону" />
        <FeddbackTextarea name="" id="" placeholder="Опишіть ваші побажання:"></FeddbackTextarea>
        <FeedbackSubmitBtn type='submit'>Надіслати</FeedbackSubmitBtn>
      </FeedbackForm>
    </FeedbackSection>
  );
};