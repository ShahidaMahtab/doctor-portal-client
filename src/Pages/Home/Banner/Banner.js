import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  height: 400,
  alignItems: "center",
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 14, color: "gray", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quis veritatis illum voluptatibus in quo fuga, animi quia. Nam,
              tempora.
            </Typography>
            <Button variant="contained" style={{ background: "#0ea591" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img src={chair} alt="" style={{ width: "350px" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
