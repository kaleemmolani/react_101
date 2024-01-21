//import React from 'react'
import PropTypes from 'prop-types';
import { Cell } from './Cell';

export const Row = ({cells}) => {
  return (
    <div style={{display:'flex'}}>
    {cells.map((cell)=>(
      <Cell data={cell} key={Math.random()*5}/>
    ))}
    </div>
  )
}

Row.propTypes = {
  cells: PropTypes.array,
};