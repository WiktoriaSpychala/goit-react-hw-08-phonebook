import React from 'react';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { contactsStorage } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsStorage);
  const dispatch = useDispatch();

  const checkContactExist = (name, number) => {
    return (
      contacts &&
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };

    if (checkContactExist(name, number)) {
      alert(
        `${name} is already in contacts or number: ${number} is used with another contact`
      );
      handleReset();
      return;
    }
    dispatch(addContact(newContact));
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <h2 className={css.label}>Name</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          <h2 className={css.label}>Number</h2>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>

        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
export default ContactForm