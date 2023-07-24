import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchContact } from "redux/operations";
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList'


const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);


    return (
      <div>
        <h1 style={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 style={styles.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
};