import React from "react";
import { Link } from "react-router-dom";

const Modal = (props) => {
  //props transform(css)
  const toggle = props.toggle;
  const action = props.action;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`container-modal ${toggle ? "active" : ""}`}>
      <div className="modal">
        {/* <img
          src="images/bgConfirm.jpg"
          className="bgConfirm"
          alt="bgdark"
        ></img> */}
        <div className="internBorder">
          <div className="ContainerCloseModal">
            <Link
              className="btnCloseModal"
              onClick={() => {
                action();
                handleClick();
              }}
            >
              X
            </Link>

            <span className="close">Close</span>
          </div>
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + "images/logoWithoutTitle.webp"}
              className="imgModal"
              alt="img modal"
            />
            <h1 className="confirmText">
              Nous accusons réception de votre demande et vous répondrons dans
              les plus brefs délais.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
