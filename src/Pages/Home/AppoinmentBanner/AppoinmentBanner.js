import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";
const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};
const AppoinmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: 400, marginTop: "-110px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 5 }}
              style={{ color: "#5ce7ed" }}
            >
              Appointment{" "}
            </Typography>
            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: "800" }}
            >
              Make An Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5 }}
              style={{ color: "white", fontSize: "13px", fontWeight: "300" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              in natus ad eius, deleniti expedita ut aspernatur veritatis!
              Commodi, doloribus.
            </Typography>

            <Button variant="contained" style={{ background: "#0ea591" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
