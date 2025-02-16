import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";


const CheckOutForm = () => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const [cart] = useCart()
  const axiosSecure = useAxiosSecure()


  const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
  console.log(totalPrice);

  useEffect(() => {
    const res = axiosSecure.post('/create-payment-intent', totalPrice)
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)

      })
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === 'null') {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('[error]', error);
      setError(error.message)

    } else {
      console.log('[paymentMethod]', paymentMethod);
      setError('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <Link to={'/payment'}>
          <button className="btn btn-sm btn-primary my-6" type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>
        </Link>
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;