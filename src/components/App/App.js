import shortid from 'shortid';
import s from './App.module.css';
import React, { Component } from 'react';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      // completed: false,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  chengeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.container}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>

        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.chengeFilter} />
          <ContactList contacts={visibleContacts} />
        </div>
      </div>
    );
  }
}

export default App;
