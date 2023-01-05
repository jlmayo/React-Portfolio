import "./FormStyles.css";
import React, { useState } from "react";
import { validateEmail } from "./utils/helpers";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a valid email address.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form" id="form">
      <div className="form-heading">
        <h1>CONTACT ME</h1>
      </div>
      <form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          defaultValue={message}
          onBlur={handleChange}
          required
        />
        <button className="btn" type="submit" onSubmit={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
