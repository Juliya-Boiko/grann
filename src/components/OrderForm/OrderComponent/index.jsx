import { OrderComponentWrapper, OrderComponentInput, OrderComponentError } from "./OrderComponent.styled";

export const OrderComponent = ({ type = 'text', handleChange, value, name, placeholder, errors, touched, disabled}) => {
  return (
    <OrderComponentWrapper>
      <OrderComponentInput
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors && touched && !disabled ? <OrderComponentError>{errors}</OrderComponentError> : null}
    </OrderComponentWrapper>
  );
};