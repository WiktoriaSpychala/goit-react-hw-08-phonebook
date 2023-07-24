import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter } from 'redux/selectors';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };

  return (
    <div  className={css.container}>
      <label htmlFor="findInputId">
        <h3 className={css.title}>Find contacts by name:</h3>
        <input
          className={css.input}
          type="text"
          name="filterContact"
          id="findInputId"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={filter}
          onChange={e => onFilterChange(e.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
