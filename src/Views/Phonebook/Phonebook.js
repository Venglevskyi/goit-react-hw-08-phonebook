import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';
import {
  getLoadingContact,
  getErrorServer,
  getContact,
} from '../../redux/contacts/contactsSelectors';

import Spiner from '../../Components/Loader/Loader';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactList from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import ServerError from '../../Components/ServerError/ServerError';
import Notification from '../../Components/Notification/Notification';

import styles from './title.module.css';
import animationTitle from '../../css-animation-title/animationTitle.module.css';
import animationFormContact from '../../Components/ContactForm/animationFormContact.module.css';
import contactList from '../../Components/ContactList/contactList.module.css';
import animationNotification from '../../Components/Notification/notification.module.css';

class Phonebook extends Component {
  state = {
    isExist: false,
  };

  componentDidMount() {
    this.props.onGetContacts();
  }

  showNotification = () => {
    this.setState({ isExist: true });
  };

  hideNotification = () => {
    this.setState({ isExist: false });
  };

  render() {
    const { isLoadingContact, errorServer, contacts } = this.props;
    return (
      <>
        {errorServer && <ServerError />}
        {!errorServer && (
          <div>
            <CSSTransition
              in={this.state.isExist}
              timeout={300}
              classNames={animationNotification}
              unmountOnExit
            >
              <Notification />
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationTitle}
              unmountOnExit
            >
              <h1 className={styles.title}>Phonebook</h1>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationFormContact}
              unmountOnExit
            >
              <ContactForm
                showNotification={this.showNotification}
                hideNotification={this.hideNotification}
              />
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationTitle}
              unmountOnExit
            >
              <h2 className={styles.title}>Contacts</h2>
            </CSSTransition>
            <CSSTransition
              in={contacts.length > 1}
              timeout={250}
              classNames={contactList}
              unmountOnExit
            >
              <Filter />
            </CSSTransition>

            <CSSTransition
              in={contacts.length > 0}
              timeout={250}
              classNames={contactList}
              unmountOnExit
            >
              <ContactList />
            </CSSTransition>

            {isLoadingContact && <Spiner />}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: getLoadingContact(state),
  errorServer: getErrorServer(state),
  contacts: getContact(state),
});

const mapDispatchToProps = {
  onGetContacts: getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
