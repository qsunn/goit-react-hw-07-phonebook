import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from '../redux/filterSlice';
import { selectFilter } from '../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => dispatch(onFilter(e.target.value))}
      value={filter}
      type="text"
      placeholder="Search"
      name="filter"
    />
  );
};
