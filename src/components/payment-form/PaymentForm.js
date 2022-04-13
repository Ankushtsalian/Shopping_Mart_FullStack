import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormContainer, PaymentFormContainer } from "./paymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const PaymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
