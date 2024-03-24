import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
