import shortid from 'shortid';
import s from './App.module.css';
import { useState } from 'react';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

interface Contact {
  name: string;
  number: string;
  id: string;
};

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [filter, setFilter] = useState('')

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const addContact = ({ name, number }: { name: string, number: string }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkingContacts = (el: Contact) => el.name === name;

    if (contacts.some(checkingContacts)) {
      alert(`${name} is alreaby in contacts`);
      return;
    };

    setContacts([contact, ...contacts])
  };

  const deleteContacts = (idContact: string) => {
    setContacts(contacts.filter(contact => contact.id !== idContact))
  };

  const chengeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setFilter(value)
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={chengeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContacts}
      />
    </div>
  );
};

export default App;
