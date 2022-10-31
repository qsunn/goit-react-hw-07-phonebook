import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
