import React from "react";
import "./Successpage.css";
import Logo from "../assets/images/DTlogo.png";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Sucesspage() {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let transform = today.toLocaleDateString("en-us", options);
  const pdfExportComponent = React.useRef(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const [summary, setSummary] = React.useState({});
  const txnRef = searchParam.get("trxref");
  React.useEffect(() => {
    const getTrans = async () => {
      return await axios.get(
        `/paystack/callback?trxref=${txnRef}&reference=${txnRef}`
      );
    };
    getTrans()
      .then((resp) => {
        setSummary(resp.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, []);

  return (
    <PDFExport
      avoidLinks={true}
      paperSize="A4"
      margin="2cm"
      ref={pdfExportComponent}
    >
      <div className="success-wrapper">
        <div className="top-wrapper">
          <div className="image-wrapper">
            <img src={Logo} alt="" />
            <p> Ticket type: Early bird</p>
          </div>
          <div className="date-wrapper">
            <div className="time-wrapper">
              <p>Downtown the brand - Ticketing</p>
              <p>{transform}. </p>
            </div>
          </div>
        </div>
        <div className="middle-wrapper">
          <div className="background-line"></div>
          <div className="text-content-top">
            <div className="text-top-header">
              <h1 className="summary">Summary</h1>
            </div>
            <div className="horizontal"></div>
            <h2>Name: {summary.full_name} </h2>
            <h2>Email: {summary.email} </h2>
            <h2> Price: {summary.amount} </h2>
            <h2>Phone number: {summary.phone_number}</h2>
            <h2>Ticket ID: #{summary.ticketId} </h2>
            <button className="btn-submit" onClick={() => window.print()}>
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </PDFExport>
  );
}

export default Sucesspage;
