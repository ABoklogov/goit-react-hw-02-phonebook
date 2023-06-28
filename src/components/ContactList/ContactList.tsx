import s from './ContactList.module.css';
import ContactItem from './ContactItem';

type Contact = {
  name: string;
  number: string;
  id: string;
};

interface Props {
  contacts: Contact[];
  onDeleteContact: (idContact: string) => void;
};

const ContactList = ({ contacts, onDeleteContact }: Props) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
