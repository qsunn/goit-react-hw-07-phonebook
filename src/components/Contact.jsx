import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { PropTypes } from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
