//====slice method
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    //  filter: filterReducer,
  },
});

//====

//====
// import { configureStore, createAction } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';

// const increment = createAction('muValue/increment');
// const decrement = createAction('muValue/decrement');
// console.log(increment(100)); // { type:..., payload:100}
// console.log(increment.toString()); // 'muValue/increment'

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// // console.log(myReducer.getInitialState()); // 0

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

//========
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: 'Ros',
// };

// const rootReducer = (state = initialState, action) => {
//   if (action.type === 'contacts/deleteContact') {
//     console.log('contacts/deleteContact rootReducer');
//     return {
//       ...state,
//     };
//   }
//   if (action.type === 'contacts/fetchAllContact') {
//     console.log('contacts/fetchAllContact', action);
//     // const items = contacts.filter;
//     return {
//       ...state,
//     };
//   }
//   return state;
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
