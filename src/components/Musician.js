import React from "react";
import Grid from "@mui/material/Grid";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Musician = ({ musicien }) => {
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            className="imgMusicien"
          component="img"
          height="140"
          image={musicien.image}
          title={musicien.name}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {musicien.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {musicien.description.substring(0, 200)} ...
          </Typography>
        </CardContent>
        <CardActions>
            <a href={musicien.link} target="_blank"> 
                <Button size="small">Learn More</Button>
            </a>
        </CardActions>
      </Card>


    </Grid>
  );
};

export default Musician;
