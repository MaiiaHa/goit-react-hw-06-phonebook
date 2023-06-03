import css from './Filter.module.css';
import { FaSistrix } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const hendleChangeInput = e => {
    dispatch(fetchContacts(e.target.value));
  };

  return (
    <label className={css.inputFind}>
      <FaSistrix />
      Find contacts by name:
      <input
        className={css.inputFindField}
        type="text"
        placeholder="search"
        name="filter"
        // value={value}
        onChange={hendleChangeInput}
      />
    </label>
  );
};

Filter.propTypes = {
  // onChange: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
};

export default Filter;
