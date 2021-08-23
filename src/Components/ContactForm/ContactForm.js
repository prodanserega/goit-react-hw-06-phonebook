import { Component } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import s from "../ContactForm/ContactForm.module.css";

const INIITAL_STATE = {
  name: "",
  phone: "",
};

class ContactForm extends Component {
  state = INIITAL_STATE;

  handelChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
    this.resetForm();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert("Some filed is empty");
      return false;
    }

    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INIITAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handelChangeForm}
        />
        <input
          className={s.input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handelChangeForm}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
