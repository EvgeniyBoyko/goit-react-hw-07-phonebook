import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";

const ContactList = ({ contacts, onDelete }) => {
  const contactElement = contacts.map(({ name, number, id }, idx) => (
    <li key={id}>
      <p>{name}: {number} <button type="button" onClick={() => onDelete(idx)}>Delete</button></p>
    </li>
  ));
  return <ul>{contactElement}</ul>;
};

const contactFilter = (contacts, filter) => {
  if (!filter) {
    return contacts
  };

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return filterContacts;
}


const mapStateToProps = (state) => ({
  contacts: contactFilter(state.contacts, state.filter)
});

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (idx) => {
      const action = deleteContact(idx)
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)

// ContactList.defaultProps = {
//   onDelete: () => {},
//   contacts: [],
//   filter: () => {}
// }

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
//   onDelete: PropTypes.func,
// }

 