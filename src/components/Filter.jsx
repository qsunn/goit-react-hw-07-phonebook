import { useSelector, useDispatch } from 'react-redux';
import { onFilter, getFilter } from '../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => dispatch(onFilter({ filter: e.target.value }))}
      value={filter}
      type="text"
      placeholder="Search"
      name="filter"
    />
  );
};
