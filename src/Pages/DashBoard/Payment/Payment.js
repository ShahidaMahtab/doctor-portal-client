import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw6ifG7HrHcr2IyP64GByXr2qFejyfDiKZpyLn3GeuTzc6nZNiyPp2jAkk6W8rPNxO4mYhRm16rFgiudEFCATAX00fhfo4vlH"
);
//loading user data
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://ancient-eyrie-18743.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h5>
        id: {appointmentId}
        please pay for : {appointment?.patientName}
        {appointment?.serviceName}
      </h5>
      <h6>pay : {appointment?.price}</h6>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          {/* credit card */}
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
