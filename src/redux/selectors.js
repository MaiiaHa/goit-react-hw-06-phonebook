export const getContacts = state => {
  // console.log(state.contacts); // {filter: '', contacts: Array(0)}
  return state.contacts.contacts;
};

// export const getContactsName = state => state.contacts.name;
// export const getContactsNumber = state => state.contacts.number;
// export const getFilter = state => state.filter;
