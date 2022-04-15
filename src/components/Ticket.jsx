import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Formik } from 'formik';
import { usePaystackPayment } from "react-paystack";


import "./Ticket.css";

function Ticket() {

    let config = {
        reference: (new Date()).getTime().toString(),
        email: 'john@gmail.com',
        amount: '5000',
        publicKey: 'pk_test_30a38a70272f62f99fd392d9925674fe3dfd4bd1',
     }
    const initalizePayment = usePaystackPayment(config);
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };

      // you can call this function anything
      const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }

  return (
    <div className='ticket-container'>
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
                 initialValues={{ full_name: '', amount: '2000', email: ''  }}
                 onSubmit = {(values) => {
                    config.amount = values.amount;
                    config.email = values.email;
                    console.log(config)
                    initalizePayment(onSuccess, onClose)

                    // axios.post("http://127.0.0.1:3500/paystack/pay", {...values}, {headers: {"Access-Control-Allow-Origin": "*"}} )
                    // .then((response) => {
                    //     console.log(response)
                    // })
                    // .catch((error) => {
                    //     console.log(error.message)
                    // })
                 }}
                >{({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}  className='form-cover'>
                    <input type="text" value={values.full_name} onChange={handleChange} name="full_name"  placeholder='Name:'/>
                    <input type="email" value={values.email} onChange={handleChange} name="email" placeholder='Email' />
                    <input type="text" value={values.amount} onChange={handleChange} name="amount" placeholder='Phone' />
                    <div className="button-wrapper">
                        <button href="" type='submit' className='btn-2'> submit</button>
                    </div>
                </form>
                )}</Formik>
            </div>
    </div>
  )
}

// <div className="ticket-content">
//                 <div className="image-wrapper">
//                     <img className='ruger' src="images/Rugerlive.jpg" alt="RUGER" />
//                 </div>
//                 <div className="ticket-inner">
//                     <div className="typography">
//                         <h1>Purchase Summary</h1>
//                         <p>Name</p>
//                         <p>Email</p>
//                         <p>Phone</p>
//                     </div>
//                     <div className="button-wrapper">
//                         <a href="#" className='btn-2'>Submit</a>
//                     </div>
//                 </div>
//             </div>

export default Ticket