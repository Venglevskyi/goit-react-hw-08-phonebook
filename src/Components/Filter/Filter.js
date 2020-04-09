import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { formFilter } from "../../redux/contacts/contactsActions";
import {
  getFilterContact,
  getVisibleContacts
} from "../../redux/contacts/contactsSelectors";

import styles from "./filter.module.css";

const Filter = ({ value, onChange }) => (
  <div className={styles.filterForm}>
    <label className={styles.FormLabel}>
      Find contacts by name
      <input
        className={styles.FormInput}
        type="name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  value: getFilterContact(state)
});

const mapDispatchToProps = {
  onChange: formFilter
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
