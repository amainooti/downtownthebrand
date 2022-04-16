import React from "react";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import "./Ticket.css";

const DisabledBtn = styled.button`
  border: 1px solid #efefef;
  padding: 10px;
  height: auto !important;
`;

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
          initialValues={{
            full_name: "",
            amount: "2000",
            email: "",
            phone: "",
          }}
          validationSchema={Yup.object().shape({
            full_name: Yup.string().required("Full Name is required!"),
            email: Yup.string()
              .email("Must be a valid email")
              .required("Email is required"),
            amount: Yup.number().required("Amount is required"),
            phone: Yup.number().required("Phone Number is required!"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setConfig({ amount: values.amount, email: values.email });
            // console.log(config);
            // initalizePayment(onSuccess, onClose);
            try {
              axios
                .post(
                  "/paystack/pay",
                  { ...values },
                  { headers: { "Access-Control-Allow-Origin": "*" } }
                )
                .then((response) => {
                  if ((response.status = 200)) {
                    window.location = response.data;
                  }
                })
                .catch((error) => {
                  alert(error.message);
                  setSubmitting(false);
                });
            } catch (error) {
              alert(error.message);
              setSubmitting(false);
            }
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
                placeholder="Name"
                className={
                  errors.full_name && touched.full_name && "border-red-500"
                }
              />
              {errors.full_name && touched.full_name && (
                <p class="text-red-500">{errors.full_name}</p>
              )}
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                className={errors.email && touched.email && "border-red-500"}
              />

              {errors.email && touched.email && (
                <p class="text-red-500">{errors.email}</p>
              )}
              <input
                type="text"
                value={values.phone}
                onChange={handleChange}
                name="phone"
                placeholder="Phone Number"
                className={errors.phone && touched.phone && "border-red-500"}
              />
              {errors.phone && touched.phone && (
                <p class="text-red-500">{errors.phone}</p>
              )}
              <input
                type="text"
                value={values.amount}
                onChange={handleChange}
                name="amount"
                placeholder={values.amount}
                disabled
              />
              <div className="button-wrapper">
                {isSubmitting ? (
                  <DisabledBtn type="button" disabled>
                    Processing...
                  </DisabledBtn>
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
