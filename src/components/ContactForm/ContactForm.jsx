import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { FaUserPlus, FaTty, FaUserAlt } from 'react-icons/fa';

// Імпортуємо хук
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';

const ContactForm = () => {
  //====from app

  //onSubmit =onSubmit={addContact}

  // const addContact = ({ name, number }) => {
  //   const newUserData = {
  //     id: nanoid(10),
  //     name,
  //     number,
  //   };
  //   const checkedName = contacts.find(({ name }) => name === newUserData.name);
  //   if (checkedName) {
  //     alert(`${name} is already in list. Please enter other name.`);
  //     return;
  //   }

  //   setContacts(contacts => [newUserData, ...contacts]);
  // };

  //====from app

  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const name = useSelector(state => state.contacts.name);
  const number = useSelector(state => state.contacts.number);
  const nameRandomId = nanoid(10);
  const numberRandomId = nanoid(10);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // console.log(form.elements.number.value);
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    // dispatch(addContact(form.elements.text.value));
    dispatch(
      addContact({
        id: nanoid(5),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  const hendleChange = e => {
    // console.log(e.target.name); from store name & number
    // const { name, value } = e.target;
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
    // console.log(e.target.value); // 34-34-34
    // console.log(e.target.name); // number
    // dispatch(
    //   addContact({
    //     name: e.target.name,
    //     number: e.target.number,
    //   })
    // );
  };

  // const resetForm = () => {
  //   // setName('');
  //   // setNumber('');
  // };

  // const formSubmit = event => {
  //   event.preventDefault();

  //   // onSubmit({ name, number });
  //   resetForm();
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
          value={name}
          onChange={hendleChange}
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
          value={number}
          onChange={hendleChange}
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

ContactForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
//==========
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
// import { FaUserPlus, FaTty, FaUserAlt } from 'react-icons/fa';
// import useLocalStorage from '../Hooks/UseLocalStoraje';
// import PropTypes from 'prop-types';

// export default function ContactForm({ onSubmit }) {
//   const [name, setName] = useLocalStorage('name', '');
//   const [number, setNumber] = useLocalStorage('number', '');
//   const nameRandomId = nanoid(10);
//   const numberRandomId = nanoid(10);

//   const hendleChange = e => {
//     // console.log(e.target.name);
//     const { name, value } = e.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   const formSubmit = event => {
//     event.preventDefault();

//     onSubmit({ name, number });
//     resetForm();
//   };

//   return (
//     <form className={css.contacts} action="" onSubmit={formSubmit}>
//       <label className={css.input} htmlFor={nameRandomId}>
//         <FaUserAlt width={160} height={160} />
//         <span className={css.inputName}>Name:</span>
//         <input
//           className={css.inputField}
//           type="text"
//           name="name"
//           placeholder="Name Surname"
//           id={nameRandomId}
//           value={name}
//           onChange={hendleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={css.input} htmlFor={numberRandomId}>
//         <FaTty />
//         <span className={css.inputName}>Number:</span>
//         <input
//           className={css.inputField}
//           type="tel"
//           name="number"
//           placeholder="555-55-55"
//           id={numberRandomId}
//           value={number}
//           onChange={hendleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.inputBtn} type="submit" aria-label="Add contact">
//         <FaUserPlus />
//         Add contact
//       </button>
//     </form>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
