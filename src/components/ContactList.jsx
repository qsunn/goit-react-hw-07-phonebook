import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';
import { getFilter } from '../redux/filterSlice';
import { Contact } from './Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contacts">
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
