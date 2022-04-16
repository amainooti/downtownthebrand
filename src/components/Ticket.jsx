import React from "react";
import axios from "axios";
import { Formik } from "formik";
import { usePaystackPayment } from "react-paystack";

import "./Ticket.css";

function Ticket() {
  const [config, setConfig] = React.useState({
    reference: new Date().getTime().toString(),
    email: "john@gmail.com",
    amount: "5000",
    publicKey: "pk_test_30a38a70272f62f99fd392d9925674fe3dfd4bd1",
  });
  const initalizePayment = usePaystackPayment(config);
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <div className="ticket-container">
      <div className="ticket-form">
        <div className="top-section">
          <div className="ticket-write">
            <h1>Ticket type</h1>
            <p>Ruger live in ABUAD</p>
          </div>
          <div className="price">
            <h1>Unit price</h1>
            <p> ₦2000 </p>
          </div>
        </div>
        <Formik
          initialValues={{ full_name: "", amount: "2000", email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            // setConfig({ amount: values.amount, email: values.email });
            // console.log(config);
            // initalizePayment(onSuccess, onClose);

            axios
              .post(
                "/paystack/pay",
                { ...values },
                { headers: { "Access-Control-Allow-Origin": "*" } }
              )
              .then((response) => {
                if ((response.status = 200)) {
                  window.location = response.data;
                  setSubmitting(false);
                }
              })
              .catch((error) => {
                alert(error);
                setSubmitting(false);
              });
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="form-cover">
              <input
                type="text"
                value={values.full_name}
                onChange={handleChange}
                name="full_name"
                placeholder="Name:"
              />
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
              />
              <input
                type="text"
                value={values.amount}
                onChange={handleChange}
                name="amount"
                placeholder="Amount"
              />
              <div className="button-wrapper">
                {isSubmitting ? (
                  <button type="button" class="bg-indigo-500 ..." disabled>
                    <svg
                      class="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </button>
                ) : (
                  <button href="" type="submit" className="btn-2">
                    submit
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

{
  /* <div className="ticket-content">
                <div className="image-wrapper">
                    <img className='ruger' src="images/Rugerlive.jpg" alt="RUGER" />
                </div>
                <div className="ticket-inner">
                    <div className="typography">
                        <h1>Purchase Summary</h1>
                        <p>Name</p>
                        <p>Email</p>
                        <p>Phone</p>
                    </div>
                    <div className="button-wrapper">
                        <a href="#" className='btn-2'>Submit</a>
                    </div>
                </div>
            </div> */
}

export default Ticket;
