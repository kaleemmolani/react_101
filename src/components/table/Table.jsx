
import PropTypes from 'prop-types';
import { Row } from './Row';

export const Table = ({rows}) => {
  return (
    <div>
    {rows.map((row)=>(
      <Row cells={row} key={row.length*Math.random()}/>
    ))}
    </div>
  )
}

Table.propTypes = {
  rows: PropTypes.array,
};
