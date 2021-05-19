import React, { Component } from 'react';
import { fields } from './fields';
import { connect } from "react-redux";
import { addContact, fetchContact } from "../../redux/operations";
import { getContacts } from '../../redux/selectors';

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
     };

    componentDidMount () {
        const { allContact } = this.props;
        allContact()
    }
    
    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, number } = this.state;
        const { onSubmit, contacts } = this.props;
        const findContacts = contacts.find(item => item.name === name || item.number === number)
        
        if (findContacts) {
           alert(`Контакст: ${name} уже существует`)
        } else {
            onSubmit(name, number); 
        }
        
        this.reset();
    };

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    };

    render() {
        const { name, number } = this.state;
        const {handleSubmit, handleChange} = this
        return (
             <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input {...fields.name}
                        onChange={handleChange}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" />
                </label>
                <label>
                    <p>Number</p>
                    <input {...fields.number}
                        onChange={handleChange}
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    contacts: getContacts(state)
});

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (name, number)=> {
            const action = addContact(name, number)
            dispatch(action);
        },
        allContact: () => {
            dispatch(fetchContact())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
