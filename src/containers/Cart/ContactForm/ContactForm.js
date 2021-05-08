import React, { useState } from 'react';
import './ContactForm.scss';
import axios from '../../../axios';
import { useSelector, useDispatch } from 'react-redux';
import ErrorHandler from '../../../hoc/ErrorHandler';
import { checkValidity } from '../../../shared/Validity';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { purchaseOrder } from './../../../store/actions/orderActions';

function ContactForm() {
  const cartItems = useSelector(state => state.products.cart)
  const price = useSelector(state => state.products.orderTotal)
  const loading = useSelector(state => state.order.load)
  const token = useSelector(state => state.auth.token)
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch();
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input', elementConfig: { type: 'text', placeholder: 'Name' },
      value: '', validation: { required: true }, valid: false, touched: false
    },
    street: {
      elementType: 'input', elementConfig: { type: 'text', placeholder: 'Street' },
      value: '', validation: { required: true }, valid: false, touched: false
    },
    zipCode: {
      elementType: 'input', elementConfig: { type: 'number', placeholder: 'ZIP Code' },
      value: '', validation: { required: true, minLength: 5, maxLength: 5 }, valid: false, touched: false
    },
    country: {
      elementType: 'input', elementConfig: { type: 'text', placeholder: 'Country' },
      value: '', validation: { required: true }, valid: false, touched: false
    },
    email: {
      elementType: 'input', elementConfig: { type: 'text', placeholder: 'E-mail' },
      value: '', validation: { required: true, isEmail: true }, valid: false, touched: false
    },
    deliveryMethod: {
      elementType: 'select', elementConfig: {
        options: [{ value: 'fastest', displayValue: 'Fastest' },
        { value: 'cheapest', displayValue: 'Cheapest' },]
      }, value: 'fastest', valid: true, validation: {}
    },
  })
  const [formIsValid, setFormIsValid] = useState(false)

  const orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formElementIndentifier in orderForm) {
      formData[formElementIndentifier] = orderForm[formElementIndentifier].value
    }
    const order = { products: cartItems, price: price, orderData: formData, userId: userId };
    dispatch(purchaseOrder(order, token));
  };

  const inputChangedHandler = (e, inputIndentifier) => {// ====== Immutably changind input values ======
    const updatedOrderForm = { // clone of orderForm
      ...orderForm
    };
    const updatedFormElement = {// clone each elements (name, street, ...)
      ...updatedOrderForm[inputIndentifier]
    };
    updatedFormElement.value = e.target.value;// listener for each value of elements
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation); // VALIDATION
    updatedFormElement.touched = true;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    };
    updatedOrderForm[inputIndentifier] = updatedFormElement; // change each element value in orderForm elements
    setOrderForm(updatedOrderForm)
    setFormIsValid(formIsValid)
  };
  const formElementsArray = []; // convert object of objects into array of objects
  for (let key in orderForm) { // keys are name, street, ...
    formElementsArray.push({ id: key, config: orderForm[key] });
  };

  let form = (
    <form className="contact-form" onSubmit={(e) => orderHandler(e)}>
      <h3 className="title">Enter Your Contact Data</h3>
      <Input elementType="..." elementConfig="..." value="..." />
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(e) => inputChangedHandler(e, formElement.id)}
        />
      ))}
      <Button
        btnType="dark"
        clicked={(e) => orderHandler(e)}
        disabled={!formIsValid}>Order</Button>
    </form>
  );

  if (loading) {
    form = <Spinner />
  }
  return form;
}
ContactForm.propTypes = {
  cartItems: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  userId: PropTypes.string,
  purchaseOrder: PropTypes.func.isRequired
};
export default (ErrorHandler(ContactForm, axios));