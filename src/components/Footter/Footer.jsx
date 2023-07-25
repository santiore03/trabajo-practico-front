import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Foot">
        <div className="column1Foot">
          <h2>Constructor</h2>
          <p>Pellegrini 2342, Rosario, Santa Fe</p>
          <p>CP 2000 Argentina</p>
        </div>
        <div>
          <p>Corporate sales</p>
          <p>Feedback</p>
          <p>Jobs</p>
          <p>News</p>
          <p>Sales Rules</p>
          <p>For Partners</p>
        </div>
        <div>
          <p>Bonus Program</p>
          <p>Gift Cards</p>
          <p>Bill Payment Verification</p>
          <p>Loans</p>
          <p>Delivery</p>
          <p>Service centers</p>
        </div>
        <div className="column4Foot">
          <p>How to place an order</p>
          <p>Ways of payment</p>
          <p>Exchange and return of goods</p>
          <p>Warranty service</p>
          <p>Order status</p>
          <p>Knowledge base</p>
        </div>
        <div className="columnEndFoot">
          <p>2030 Company. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      {/* //---------------------- */}
      <div className="FootCel">
        <div className="column1Foot">
          <div className="c1">
            <h2>Constructor</h2>
          </div>
          <div className="c2">
            <p>Pellegrini 2342, Rosario, Santa Fe</p>
            <p>CP 2000 Argentina</p>
          </div>
        </div>
        <div className="secondRow">
          <div className="c1">
            <p>Corporate sales</p>
            <p>Feedback</p>
            <p>Jobs</p>
            <p>News</p>
            <p>Sales Rules</p>
            <p>For Partners</p>
          </div>
          <div className="c2">
            <p>Bonus Program</p>
            <p>Gift Cards</p>
            <p>Bill Payment Verification</p>
            <p>Loans</p>
            <p>Delivery</p>
            <p>Service centers</p>
          </div>
        </div>
        <div className="lastRow">
          <p>2030 Company. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
