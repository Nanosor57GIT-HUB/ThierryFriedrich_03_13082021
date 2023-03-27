import React, { useEffect } from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import Modal from "./ModalConfirmForm";

const FormContact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      let tempErrors = { ...errors };
      delete tempErrors[e.target.name];
      setErrors(tempErrors);
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name) {
      tempErrors.first_name = "FirstName is required";
    }

    if (!formData.last_name) {
      tempErrors.last_name = "LastName is required";
    }

    if (!formData.user_email) {
      tempErrors.user_email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)
    ) {
      tempErrors.user_email = "Invalid email address";
    }

    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 15) {
      tempErrors.message = "Message must be at least 15 characters long";
    } else if (formData.message.length > 300) {
      tempErrors.message = "Message must be no more than 300 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const resetErrors = () => {
    const formContact = document.getElementById("contact");
    if (formContact) {
      const formRect = formContact.getBoundingClientRect();
      const isVisible =
        formRect.bottom >= 0 && formRect.bottom <= window.innerHeight;
      if (isVisible) {
        setErrors({});
      }
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid!");
      try {
        await emailjs.sendForm(
          "service_19k8uap",
          "template_t2zgykl",
          form.current,
          "MMxU-Ki_LKRNh3M4q"
        );
        console.log("message send");
        setFormData({
          first_name: "",
          last_name: "",
          user_email: "",
          message: "",
        });
        openModal();
        // Make API call or perform other form actions
      } catch (error) {
        console.log(error.text);
      }
    } else {
      console.log("Form is invalid.");
    }
  };

  const [modalState, setModalState] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", resetErrors);
  return () => {
    window.removeEventListener("scroll", resetErrors);
  };
}, []);

  function openModal() {
    setModalState(!modalState);
  }

  function closeModal() {
    setModalState(false);
    resetErrors();
  }

  return (
    <div id="contact" className="containerContact">
      <h1 className="titleContact">Contact</h1>
      <div className="block_form">
        <h2 className="titleContactForm">Besoin d'en savoir plus ?</h2>
        <form ref={form} autoComplete="OFF" onSubmit={sendEmail}>
          <div className="containerInput">
            <div className="name">
              <div className="flex_input">
                <label htmlFor="first_name">Prénom</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  className="first_name"
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                />
                {errors.first_name && (
                  <p className="errors">{errors.first_name}</p>
                )}
              </div>
              <div className="flex_input">
                <label htmlFor="last_name">Nom</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  className="last_name"
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
                {errors.last_name && (
                  <p className="errors">{errors.last_name}</p>
                )}
              </div>
            </div>
            <div className="flex_input">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                className="user_email"
                onChange={handleChange}
                placeholder="Votre adresse mail"
                required
              />
              {errors.user_email && (
                <p className="errors">{errors.user_email}</p>
              )}
            </div>
          </div>

          <label htmlFor="textarea">En quoi puis-je vous aider ?</label>
          <span style={{ color: "#fbd437", fontSize: 12 }}>
            ( 300 characters Maxi )
          </span>

          <textarea
            rows="8"
            cols="46"
            name="message"
            value={formData.message}
            className="textarea"
            onChange={handleChange}
            placeholder="Votre message ici ...."
            required
          />
          {errors.message && <p className="errors">{errors.message}</p>}

          <button type="submit" className="btn_contact" onClick={sendEmail}>
            Envoyez
          </button>
        </form>
      </div>
      <Modal toggle={modalState} action={closeModal} />
    </div>
  );
};

export default FormContact;
