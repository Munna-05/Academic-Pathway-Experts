import React, { useEffect, useState } from "react";
import MuiCard from "./MUIComponents/Card";
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
import { useDispatch } from "react-redux";
import { API, VIEW } from "../API";
import axios from "axios";
import { setService } from "../Redux/serviceSlice";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate()
   const [services,setAllServices] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/services`).then((res)=>{
            setAllServices(res?.data)
            dispatch(setService(res?.data))
        })
    },[])

  return (
    <div className="w-2/3 p-6 py-12 text-left mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-stone-700">Our Services</h1>
        <p className=" text-xs mt-2 text-stone-500  p-1 py-2 px-1">
          EXPLORE HOW WE WORK FOR YOU
        </p>
      </div>

      <div className="pt-8 pb-0">
        <Grid container gap={8}>
          {services?.slice(0,6).map((res) => (
            <Grid item>
              <Card
                elevation={6}
                sx={{
                  maxWidth: 300,
                  height: "100%",
                  borderRadius: "15px",
                  ":hover": {
                    boxShadow: 20, // theme.shadows[20]
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover", height: 200, overflow: "hidden" }}
                  image={VIEW+res?.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {res?.title}
                  </Typography>
                  <Typography
                    sx={{ width: "auto" }}
                    variant="body2"
                    color="text.secondary"
                    className="line-clamp-5 "
                  >
                    {res?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    display={"flex"}
                    borderTop={"solid grey 0.25px"}
                    pt={1}
                    width={"100%"}
                    justifyContent={"right"}
                  >
                   
                    <Button size="small" onClick={()=>navigate(`/view-service/${res?._id}`)} sx={{ fontSize: 12 }}>
                      Learn More
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OurServices;
