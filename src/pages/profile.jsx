//import React from 'react'
import Card from '@mui/material/Card';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
export const Profile = () => {
  return (
<Container maxWidth="sm">
      
      <Card sx={{ minWidth: 45,maxWidth:500 ,height:600,marginTop:'2rem'}}>
      <CardMedia
        component="img"
        height="354"
        image="/assets/images/27470334_7309681.jpg"
        alt="Paella dish"
      />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions >
      <Button variant="contained">Contained</Button>
      </CardActions>
      </Card>
   
</Container>
  )
}
