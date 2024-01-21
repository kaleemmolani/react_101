//import React from 'react'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export const ProductCard = ({name,description}) => {
  return (

  <Card>
  {name}
  <CardMedia
        component="img"
        height="354"
        image="/assets/images/laptop-1.jpg"
        alt="Paella dish"
      />
  <CardContent>
        <Typography variant="body2" color="text.secondary">
    {description}
        </Typography>
      </CardContent>
  </Card>

  )
}
ProductCard.propTypes = {
  name: PropTypes.string,
  description:PropTypes.string
};