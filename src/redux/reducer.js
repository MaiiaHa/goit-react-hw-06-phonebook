import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase('contacts/fetchContacts', (state, action) => {
      console.log(initialState);
      console.log(state);
      // console.log(action);
      const filteredContacts = state.contacts.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.contacts = filteredContacts;
      state.filter = action.payload;
    })
    .addCase('contacts/addContact', (state, action) => {
      // console.log(state.contacts);
      state.contacts.push(action.payload);
      state.filter = initialState;
    })
    .addCase('contacts/deleteContact', (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
      state.filter = initialState;
    });

  // .addCase('contacts/filteredContact', (state, action) => {
  //   state.contacts = initialState;
  //   state.filter = initialState;
  // })
});

// export const contactsReducer = (state = initialState, action) => {
//   // console.log(state); //{filter: '', contacts: Array(0)}
//   // console.log(action); //{type: '@@INIT'}

//   if (action.type === 'contacts/fetchAllContacts') {
//     console.log(action.type);
//     console.log(state);
//     return {
//       ...state,
//     };
//   }
//   return state;
// };
