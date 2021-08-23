import React from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import "../index.css";

const App = () => {
  return (
    <>
      <ContactForm />
      <h2 className="title">Contacts List</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
