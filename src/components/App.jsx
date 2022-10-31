import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

export const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(selectContacts);

  const status = {
    pending: isLoading,
    rejected: error && !isLoading,
    fulfilled: !isLoading && !error,
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
