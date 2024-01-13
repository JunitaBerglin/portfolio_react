import { useState, ChangeEvent } from "react";

export const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <section id="contactWrapper" className="contact">
      <h2 className="contact__title">Get in touch!</h2>
      <p className="contact__text">
        Or, email me directly at junita.berglin@gmail.com!
      </p>
      <form
        className="form"
        action="https://formsubmit.co/68a04b80f29cd1ae7d696341179067a2"
        method="POST">
        <div className="form__container">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__container">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__container">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__container">
          <label className="form__label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form__input"
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__container">
          <label className="form__label" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="form__input form__input--message"
            id="message"
            name="message"
            required
            value={message}
            onChange={handleInputChange}></textarea>
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
