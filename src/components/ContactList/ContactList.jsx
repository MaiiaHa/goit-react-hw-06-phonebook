import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/slice';
// import { fetchAllContacts } from 'redux/actions';
// import { useEffect, useState } from 'react';
// import { fetchAllContacts } from 'redux/actions';
// import { deleteContact } from 'redux/actions';

const ContactList = () => {
  //{ contacts, deleteContact }
  // const [input, setInput] = useState('');
  //====from app
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const contacts = getVisibleContacts();

  // const deleteContact = userId => {
  //   setContacts(prevState => prevState.filter(({ id }) => userId !== id));
  // };
  //====from app

  // const dispatch = useDispatch();
  // const hendleNewContact = e => {
  //   dispatch(addContact(e.target.value));
  // };

  const contacts = useSelector(getContacts);
  // console.log('comes contacts from state', contacts); // {contacts} - [] contacts-{filter: '', contacts: Array(4)}
  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    // console.log('delete contact', id);
    // contactId add
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContacts(id)}
            aria-label="Delete contact"
          >
            <DeleteIcon fill="white" />
            {/* Delete */}
          </button>
          {/* <button onClick={deleteContacts}>Delete item</button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
//=========
// // import React, { Component } from 'react';
// import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={css.listItem} key={id}>
//           {name}: {number}
//           <button
//             className={css.btn}
//             type="button"
//             onClick={() => deleteContact(id)}
//             aria-label="Delete contact"
//           >
//             <DeleteIcon fill="white" />
//             {/* Delete */}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
