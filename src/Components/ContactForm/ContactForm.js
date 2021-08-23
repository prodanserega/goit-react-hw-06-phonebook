import { useState } from "react";
import { v4 as uuid } from "uuid";

import s from "../ContactForm/ContactForm.module.css";

export default function ContactForm({ onAdd, onCheckUnique }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handelChangeForm = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
    resetForm();
  };

  const validateForm = () => {
    if (!name || !phone) {
      alert("Some filed is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handelChangeForm}
      />
      <input
        className={s.input}
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handelChangeForm}
      />
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
