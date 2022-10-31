import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error(`Invalid field: ${name}`);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label>
        <span>Name:</span>
        <input
          onChange={changeHandler}
          value={name}
          placeholder="Enter contact name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <span>Number:</span>
        <input
          onChange={changeHandler}
          value={number}
          placeholder="Enter contact number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
