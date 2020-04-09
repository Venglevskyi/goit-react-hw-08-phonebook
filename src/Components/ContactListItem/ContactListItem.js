import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeContact } from "../../redux/contacts/contactsOperations";
import { getContactsById } from "../../redux/contacts/contactsSelectors";
import IconLabelButtons from "../Button/DeleteButton";

import styles from "./contactList.module.css";

const ContactListItem = ({ name, number, removeContact }) => (
  <li className={styles.contactsListItem}>
    <div className={styles.contactInfo}>{name}</div>
    <div className={styles.contactInfo}>{number}</div>
    <IconLabelButtons removeContact={() => removeContact()} />
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const item = getContactsById(state, ownProps.id);

  return {
    ...item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(removeContact(ownProps.id))
});

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  removeContact: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
