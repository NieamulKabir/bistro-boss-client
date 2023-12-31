import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Payment_Gateway);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price= parseFloat(total.toFixed(2))
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="Please Process"
        heading="Payment"
      ></SectionTitle>

      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl my-6">Teka o teka twmi uira uira jaw</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
