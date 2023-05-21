import { useSelector } from 'react-redux';
import { orderSets } from 'schemas/orderSchema';
import { Formik } from 'formik';
import { OrderComponent } from './OrderComponent';
import {
  OrderFormContainer, OrderFormSubtitle, OrderFormLabel, OrderFormBtn, 
  OrderFormAddress, OrderFormComment, OrderFormTotal, OrderFormPrice
} from './OrderForm.styled';
import { useNavigate } from 'react-router';

export const OrderForm = () => {
  const { items } = useSelector(state => state.orders);
  const navigate = useNavigate();

  const totalOrder = items.reduce((acc, { price, options }) => {
    return acc + (price * options.weight.value + options.decor.value);
  }, 0);

  const disabledHandler = (value) => {
    return value === orderSets.deliverySets[0].id ? true : false;
  }

  return (
    <Formik
      initialValues={orderSets.initialValues}
      validationSchema={orderSets.validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
        navigate('/processing');
      }}
    >
      {({ values, handleChange, errors, touched }) => (
      <OrderFormContainer>
        <OrderFormSubtitle>Контакти:</OrderFormSubtitle>
        <OrderComponent handleChange={handleChange} value={values.contacts.name} name="contacts.name" placeholder="Ім’я" errors={errors?.contacts?.name ? errors.contacts.name : null} touched={touched?.contacts?.name} />
        <OrderComponent handleChange={handleChange} type='tel' value={values.contacts.tel} name="contacts.tel" placeholder="Номер телефону" errors={errors?.contacts?.tel ? errors.contacts.tel : null} touched={touched?.contacts?.tel}/>
        <OrderComponent handleChange={handleChange} type="email" value={values.contacts.email} name="contacts.email" placeholder="E-mail" errors={errors?.contacts?.email ? errors.contacts.email : null} touched={touched?.contacts?.email}/>
        <OrderComponent handleChange={handleChange} type="date" value={values.date} name="date" placeholder="Дата доставки" errors={errors?.date ? errors.date : null} touched={touched?.date}/>
        
        <OrderFormSubtitle>Спосіб доставки</OrderFormSubtitle>
        {orderSets.deliverySets.map(({ id, value }) => {
          return <OrderFormLabel key={id}>
            <input type="radio" name="delivery" value={id} checked={values.delivery === id} onChange={handleChange} />
              {value}
          </OrderFormLabel>
        })}
        <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.city} name="address.city" placeholder="Місто" errors={errors?.address?.city ? errors.address.city : null } touched={touched?.address?.city}/>
        <OrderFormAddress>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.street} name="address.street" placeholder="Вулиця" errors={errors?.address?.street ? errors.address.street : null } touched={touched?.address?.street}/>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.build} name="address.build" placeholder="Будинок" errors={errors?.address?.build ? errors.address.build : null } touched={touched?.address?.build}/>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.entrance} name="address.entrance" placeholder="Під’їзд" errors={errors?.address?.entrance ? errors.address.entrance : null } touched={touched?.address?.entrance}/>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.corps} name="address.corps" placeholder="Корпус" errors={errors?.address?.corps ? errors.address.corps : null } touched={touched?.address?.corps}/>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.apartment} name="address.apartment" placeholder="Квартира" errors={errors?.address?.apartment ? errors.address.apartment : null } touched={touched?.address?.apartment}/>
          <OrderComponent disabled={disabledHandler(values.delivery)} handleChange={handleChange} value={values.address.floor} name="address.floor" placeholder="Поверх" errors={errors?.address?.floor ? errors.address.floor : null } touched={touched?.address?.floor}/>
        </OrderFormAddress>
        
        <OrderFormSubtitle>Спосіб оплати</OrderFormSubtitle>
          {orderSets.paySets.map((item) => {
          return <OrderFormLabel key={item}>
            <input type="radio" name="pay" value={item} checked={values.pay === item} onChange={handleChange} />
              {item}
          </OrderFormLabel>
        })}
        
        <OrderFormComment onChange={handleChange} value={values.comment} name='comment' placeholder="Додати коментар" cols="30" rows="10"></OrderFormComment>
        
        <OrderFormTotal>Всього до сплати: <OrderFormPrice>{totalOrder} грн</OrderFormPrice></OrderFormTotal>
          
        <OrderFormBtn type='submit'>Оформити замовлення</OrderFormBtn>
      </OrderFormContainer>
      )}
    </Formik>
  );
};