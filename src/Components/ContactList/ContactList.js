import PropTypes from "prop-types";

import s from "../ContactList/ContactList.module.css";

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={s.item}>
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
