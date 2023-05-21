import { FeedbackComponentWrapper, FeedbackComponentInput, FeedbackComponentError } from "./FeedbackComponent.styled";

export const FeedbackComponent = ({ type = 'text', handleChange, value, name, placeholder, errors, touched }) => {
  return (
    <FeedbackComponentWrapper>
      <FeedbackComponentInput
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        accentOutline={errors && touched ? true : false}
      />
      {errors && touched ? <FeedbackComponentError>{errors}</FeedbackComponentError> : null}
    </FeedbackComponentWrapper>
  );
};
