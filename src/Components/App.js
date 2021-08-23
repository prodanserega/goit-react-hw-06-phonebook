import React, { useState, useEffect } from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import "../index.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts"));
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handelAddContact = (newContact) =>
    setContacts([...contacts, newContact]);

  const handelCheckUniqueContact = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert("Contact is already exist");

    return !isExistContact;
  };

  const handleRemoveContact = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  const handelFilterChange = (filter) => setFilter(filter);

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ContactForm
        onAdd={handelAddContact}
        onCheckUnique={handelCheckUniqueContact}
      />
      <h2 className="title">Contacts List</h2>
      <Filter filter={filter} onChange={handelFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onRemove={handleRemoveContact}
      />
    </>
  );
}
