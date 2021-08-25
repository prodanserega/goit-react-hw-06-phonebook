import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import s from "../Filter/Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <form className={s.form}>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter name for Search"
      />
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
