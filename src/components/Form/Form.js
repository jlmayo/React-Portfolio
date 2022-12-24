import React, { useState } from 'react';
import './style.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : setEmail(value); //This isn't right. Look again tomorrow.
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>
        Contact Me
      </p>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email address"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
