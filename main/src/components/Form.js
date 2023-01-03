import "./FormStyles.css";

const Form = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message`);
  };

  return (
    <div className="form">
      <div className="form-heading">
        <h1>CONTACT ME</h1>
      </div>
      <form>
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Message</label>
        <textarea rows="6" />
        <button className="btn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
