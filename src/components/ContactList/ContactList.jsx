import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { getContacts, getFilter } from "../../redux/selectors";

const ContactList = ({ contacts, onDelete }) => {
  const contactElement = contacts.map(({ name, number, id }) => (
    <li key={id}>
      <p>{name}: {number} <button type="button" onClick={() => onDelete(id)}>Delete</button></p>
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
  contacts: contactFilter(getContacts(state), getFilter(state))
});

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (id) => {
      const action = deleteContact(id)
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

 