import React from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import "./Ticket.css";

function Ticket() {
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
          validationSchema={Yup.object().shape({
            full_name: Yup.string().required("Full Name is required!"),
            email: Yup.string()
              .email("Must be a valid email")
              .required("Email is required"),
            amount: Yup.number().required("Amount is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
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
          {({
            values,
            handleChange,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="form-cover">
              <input
                type="text"
                value={values.full_name}
                onChange={handleChange}
                name="full_name"
                placeholder="Name:"
                className={
                  errors.full_name &&
                  touched.full_name &&
                  "shadow appearance-none border border-red-500 rounded"
                }
              />
              {errors.full_name && touched.full_name && (
                <p class="text-red-500 text-lg italic">{errors.full_name}</p>
              )}
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                className={
                  errors.email &&
                  touched.email &&
                  "shadow appearance-none border border-red-500 rounded"
                }
              />

              {errors.email && touched.email && (
                <p class="text-red-500 text-lg italic">{errors.email}</p>
              )}
              <input
                type="text"
                value={values.amount}
                onChange={handleChange}
                name="amount"
                placeholder="Amount"
                className={
                  errors.amount &&
                  touched.amount &&
                  "shadow appearance-none border border-red-500 rounded"
                }
              />
              {errors.amount && touched.amount && (
                <p class="text-red-500 text-lg italic">{errors.amount}</p>
              )}
              <div className="button-wrapper">
                {isSubmitting ? (
                  <button type="button" className="bg-indigo-500 ..." disabled>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </button>
                ) : (
                  <button href="" type="submit" className="btn-2">
                    Submit
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
