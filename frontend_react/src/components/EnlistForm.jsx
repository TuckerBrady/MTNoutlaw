import React, { useState, useEffect } from "react";

import InputField from "./InputField";
import { useGHStContext } from "../utils/ContextProvider";
const EnlistForm = ({ status, message, onValidated }) => {
  const { modalOpen, setModalOpen } = useGHStContext();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
    if (modalOpen && status === "success") clearFields();
  }, [status, modalOpen]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });

    return (
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
          {status === "success"
            ? "Success!"
            : "Join our email list for future updates."}
        </h3>
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">sending...</div>
        )}
        {status !== "success" ? (
          <div className="mc__field-container">// form field code...</div>
        ) : null}
        {status === "success" ? (
          <button
            onClick={() => setModalOpen(false)}
            className="g__justify-self-center"
          >
            Close
          </button>
        ) : (
          <InputField
            label="subscribe"
            type="submit"
            formValues={[email, firstName, lastName]}
          />
        )}
      </form>
    );
  };

  return (
    <form className="mc__form">
      <h3 className="mc__title">Join our email list for future updates.</h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="mc__field-container">
        <InputField
          label="First Name"
          onChangeHandler={setFirstName}
          type="text"
          value={firstName}
          placeholder="Jane"
          isRequired
        />

        <InputField
          label="Last Name"
          onChangeHandler={setLastName}
          type="text"
          value={lastName}
          placeholder="Doe"
          isRequired
        />

        <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
        />
      </div>

      <InputField
        label="Enlist Today"
        type="submit"
        formValues={[email, firstName, lastName]}
      />
    </form>
  );
};

export default EnlistForm;
