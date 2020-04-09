import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import ContactListItem from "../ContactListItem/ContactListItem";

import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";
import contactList from "./contactList.module.css";

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul">
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames={contactList}>
        <ContactListItem id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state)
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(ContactList);
