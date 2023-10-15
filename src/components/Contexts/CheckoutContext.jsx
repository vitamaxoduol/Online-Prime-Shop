import React, { createContext, useContext, useState } from 'react';


const CheckoutContext = createContext();

export function useCheckout() {
  return useContext(CheckoutContext);
}

export function CheckoutProvider({ children }) {
  const [step, setStep] = useState(1); // Current step in the checkout process
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phonenumber: '',
    email: '',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phonenumber: '',
    city: '',
    streetAddress: '',
    apartment: '',
    collectionPoint: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Function to advance to the next step
  const nextStep = () => setStep(step + 1);

  // Function to go back to the previous step
  const prevStep = () => setStep(step - 1);

  // Function to handle placing the order
  const placeOrder = () => {
    // You can implement order placement logic here
    // For example, sending the order data to a server
    setOrderPlaced(true);
  };

  const values = {
    step,
    customerInfo,
    setCustomerInfo,
    deliveryInfo,
    setDeliveryInfo,
    paymentMethod,
    setPaymentMethod,
    orderPlaced,
    placeOrder,
    nextStep,
    prevStep,
  };

  return (
    <CheckoutContext.Provider value={values}>{children}</CheckoutContext.Provider>
  );
}