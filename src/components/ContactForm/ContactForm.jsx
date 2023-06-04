import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { FaUserPlus, FaTty, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/slice';

const ContactForm = () => {
  const dispatch = useDispatch();

  // const name = useSelector(state => state.contacts.name);
  // const number = useSelector(state => state.contacts.number);
  const nameRandomId = nanoid(10);
  const numberRandomId = nanoid(10);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      addContact({
        id: nanoid(5),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  // const hendleChange = e => {
  //   // console.log(e.target.name); from store name & number
  //   // const { name, value } = e.target;
  //   // switch (name) {
  //   //   case 'name':
  //   //     setName(value);
  //   //     break;
  //   //   case 'number':
  //   //     setNumber(value);
  //   //     break;
  //   //   default:
  //   //     return;
  //   // }
  // };

  return (
    <form className={css.contacts} action="" onSubmit={formSubmit}>
      <label className={css.input} htmlFor={nameRandomId}>
        {/* htmlFor={nameRandomId} */}
        <FaUserAlt width={160} height={160} />
        <span className={css.inputName}>Name:</span>
        <input
          className={css.inputField}
          type="text"
          name="name"
          placeholder="Name Surname"
          id={nameRandomId}
          // value={name}
          // onChange={hendleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.input} htmlFor={numberRandomId}>
        {/* htmlFor={numberRandomId} */}
        <FaTty />
        <span className={css.inputName}>Number:</span>
        <input
          className={css.inputField}
          type="tel"
          name="number"
          placeholder="555-55-55"
          id={numberRandomId}
          // value={number}
          // onChange={hendleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.inputBtn} type="submit" aria-label="Add contact">
        <FaUserPlus />
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
