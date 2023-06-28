import { Component } from 'react';
import s from './ContactForm.module.css';

interface Props {
  onSubmit: ({ name, number }: State) => void;
};

interface State {
  name: string;
  number: string;
};

class ContactForm extends Component<Props, State> {
  state = {
    name: '',
    number: '',
  };

  handleNameChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState((state) => ({ ...state, [name]: value }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <p className={s.text}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChenge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p className={s.text}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNameChenge}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  };
};

export default ContactForm;
