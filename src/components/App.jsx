import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';

import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContacts);

  const status = {
    pending: isLoading,
    fulfilled: items && !isLoading && !error,
    rejected: error && !isLoading,
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      {status.pending && <p>Loading...</p>}
      {status.rejected && <p>{error}</p>}
      {status.fulfilled && <ContactList />}
    </div>
  );
};
