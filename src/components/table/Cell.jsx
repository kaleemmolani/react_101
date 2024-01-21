//import React from 'react'
import PropTypes from 'prop-types';

export const Cell = ({data}) => {
  return (
    <div style={{border:'1px solid black',padding:'1rem'}}>{data}</div>
  )
}

Cell.propTypes = {
  data: PropTypes.string,
};