import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
//----------------------
export const fetchContacts = createAction('contacts/fetchContacts');
//----------------------

//input for filter
// export const fetchAllContacts = input => {
//   return {
//     type: 'contacts/fetchAllContacts',
//     payload: input,
//   };
// };

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(5),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const filteredContact = input => {
  return {
    type: 'contacts/filteredContact',
    payload: input,
  };
};
