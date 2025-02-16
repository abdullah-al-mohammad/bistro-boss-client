import { loadStripe } from "@stripe/stripe-js"
import SectionTitle from "../../../assets/Components/SectionTitle/SectionTitle"
import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "./CheckOutForm"

// TODO: set publishable key
const stripPromise = loadStripe(import.meta.env.VITE_payment_gatway_pk)

const Payment = () => {
  return (
    <div>
      <SectionTitle heading={'Payment'} subHeading={'Resevation'}></SectionTitle>
      <div>
        <Elements stripe={stripPromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
