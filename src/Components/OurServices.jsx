import React from "react";
import { services } from "../DummyData/Datas";
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

const OurServices = () => {
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
          {services.map((res) => (
            <Grid height={450} item>
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
                  sx={{ objectFit: "contain", height: 200, overflow: "hidden" }}
                  image={res.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {res.name}
                  </Typography>
                  <Typography
                    sx={{ width: "auto" }}
                    variant="body2"
                    height={250}
                    color="text.secondary"
                  >
                    {res.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    display={"flex"}
                    borderTop={"solid grey 0.25px"}
                    pt={1}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Button size="small" sx={{ fontSize: 12 }}>
                      Share
                    </Button>
                    <Button size="small" sx={{ fontSize: 12 }}>
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
