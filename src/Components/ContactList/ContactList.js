import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import s from "../ContactList/ContactList.module.css";

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      {name}: {phone}{" "}
      <button className={s.button} onClick={() => onRemove(id)}>
        delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove, id }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list} key={id}>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const filterContacts = (contacts, filter) => {
  const nonormalizeFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nonormalizeFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
