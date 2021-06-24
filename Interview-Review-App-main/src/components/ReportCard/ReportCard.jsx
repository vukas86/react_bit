import React from "react";
import "./ReportCard.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";

const ReportCard = () => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <section className="candidates-report">
      <div className="report-card">
        <div className="company">
          <p>Company:</p>
          <span>Google</span>
        </div>
        <div className="interview-date">
          <p>Interview Date:</p>
          <span>Google</span>
        </div>
        <div className="status">
          <p>Status:</p>
          <span>Google</span>
        </div>
        <div className="modulo-link">
          <button onClick={onClick}>klikni</button>
          <Modal show={show} isClosed={(arg) => setShow(!arg)} />
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
