import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <Container className="my-5">
      <Grid container spacing={2}>
        <div className="d-lg-flex justify-center align-items-center">
          <Grid
            item
            xs={12}
            md={6}
            className="text-right d-lg-flex flex-row-reverse pe-5"
          >
            <div className="ps-5 ps-lg-0" style={{ width: "300px" }}>
              <img src={treatment} alt="" className="img-fluid " />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "left",
              }}
              className=" ps-5 ps-lg-0"
            >
              <Typography variant="h4" gutterBottom component="div">
                Exceptional Dental Care <br /> On Your Terms
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="GrayText"
                component="div"
                sx={{
                  textAlign: "left",

                  p: 1,
                  my: 0.5,
                }}
              >
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, background: "rgb(14, 165, 145)" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
