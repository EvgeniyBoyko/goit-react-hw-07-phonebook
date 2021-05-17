// import React, { Component } from 'react';
// import shortid from 'shortid';
// import { connect } from "react-redux";
// import {addContact} from "../../redux/actions"

import Section from '../Section';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';


const PhoneBook = () => {
    return (
            <>
                <Section title={'PhoneBook'}>
                    <ContactForm />
                </Section>
                <Section title={'Contacts'}>
                    <Filter />
                    <ContactList /> 
                </Section>
            </>
        );
}

export default PhoneBook;



// import { initialState } from "./initialState";

// class PhoneBook extends Component {

//     onDelete = (idx) => {
//         this.setState(({ contacts }) => {
//             const newList = [...contacts];
//             newList.splice(idx, 1);
//             return {
//                 contacts: newList,
//             }
//         });
//     };

    // changeFilter = e => {
    //     this.setState({ filter: e.currentTarget.value });
    // };

//     componentDidMount() {
//         const contactsList = JSON.parse(localStorage.getItem('contacts'));
//         this.setState({
//             contacts: contactsList || [],
//         });
//     };

//     componentDidUpdate() {
//         const { contacts } = this.state;
//         const contactsList = JSON.stringify(contacts);
//         localStorage.setItem('contacts', contactsList);
//     };

//     render() {
//         const { contacts, filter } = this.state;
//         const { addContact, onDelete, changeFilter } = this;

//         return (
//             <>
//                 < title={'Contacts'}>
//                     <Filter value={filter} changeFilter={changeFilter}/>
//                     <ContactList
//                         contacts={contacts}
//                         filter={filter}
//                         onDelete={onDelete} />
//                 </>
//             </>
//         );
//     }
// };



