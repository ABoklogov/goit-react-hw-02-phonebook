import s from './ContactItem.module.css';

interface Props {
  id: string;
  name: string;
  number: string;
  onDeleteContact: (idContact: string) => void;
};

const ContactItem = ({ id, name, number, onDeleteContact }: Props) => {
  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <button className={s.contactBtn} onClick={() => onDeleteContact(id)}>
        delete
      </button>
    </>
  );
};

export default ContactItem;
