import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { show } = props;
  const { isClosed } = props;

  const close = () => {
    isClosed(true);
  };
  return (
    <>
      {show === true ? (
        <div className="modal-bg">
          <div className="modal-content">
            <p>Pera Zmikic</p>

            <div className="n-c">
              <p>company</p>
              <span>Google</span>
              <p>date</p>
              <span>27.03</span>
              <p>phase</p>
              <span>HR</span>
              <p>status</p>
              <span>Passed</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dignissimos quae nulla sapiente sint esse amet. Quia, ab nisi
              incidunt illo vitae et eligendi quibusdam fugit cum? Omnis,
              placeat vitae!
            </p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
