import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Typography,
  } from "@mui/material";

const MuiCard = ({name , description ,image}) => {
  return (
    <Grid container gap={8}>
        <Grid item>
    <Card
    
    
      elevation={8}
      sx={{
        maxWidth: 300,
        borderRadius:"15px",
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
        },
      }}
    >
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{width:280}} color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions >
        
        <Grid display={'flex'} borderTop={'solid grey 0.25px'} pt={1}  width={'100%'} justifyContent={'space-between'}>
        <Button size="small" sx={{fontSize:12}}>Share</Button>
        <Button size="small" sx={{fontSize:12}} >Learn More</Button>
        </Grid>
      </CardActions>
    </Card>
  </Grid>


    </Grid>
    
  )
}

export default MuiCard