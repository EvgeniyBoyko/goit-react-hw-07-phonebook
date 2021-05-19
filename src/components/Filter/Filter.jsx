import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { filter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={onChange}
        type="text"
        value={value}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    value: getFilter(state)
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onChange: (e) => {
       const filterTarger = e.currentTarget.value
            const action = filter(filterTarger)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
