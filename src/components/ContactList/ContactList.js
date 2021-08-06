import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <p className={s.contactName}>{name}:</p>
          <p className={s.contactNumber}>{number}</p>
          <button className={s.contactBtn} onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
