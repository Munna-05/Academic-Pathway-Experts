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
import React from "react";
import { countries } from "../../DummyData/Datas";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const array = [1, 2, 3, 2, 3, 2];
  const navigate = useNavigate()
  return (
    <Grid container py={6} lg={8} display={'flex'}  sm={12} mx={"auto"}>
      <Grid container pb={8} mb={1} >
        <Typography variant="h4" fontWeight={600} color={"#44403c"}>
          Countries Available
        </Typography>
      </Grid>
      <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} mx={'auto'} gap={12}>
        {countries.map((res) => (
          <Grid item  >
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
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.pexels.com/photos/7245330/pexels-photo-7245330.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {res?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {res?.description}
                </Typography>
              </CardContent>
              <CardActions >
                
                <Grid display={'flex'} borderTop={'solid grey 0.25px'} pt={1}  width={'100%'} justifyContent={'space-between'}>
                <Button size="small" sx={{fontSize:12}}>Share</Button>
                <Button size="small" sx={{fontSize:12}} onClick={()=>navigate(`/about-country/${res.name}`)}>Learn More</Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Countries;
