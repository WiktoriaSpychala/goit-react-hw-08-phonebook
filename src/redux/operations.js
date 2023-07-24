import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContact = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
            const response = await axios.get('/contacts');
            return response.data;
        } 
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } 
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    }
);