import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <Container sx={{ mt: 8, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Check Up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              color="rgb(14, 165, 145)"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Services
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Check Up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              color="rgb(14, 165, 145)"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Oral Health
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Emergency Dental Care
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Check Up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Treatment of Personal Diseases
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              check up
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              color="rgb(14, 165, 145)"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Our Address
            </Typography>
            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
              sx={{ mb: 3 }}
            >
              New York-101010 Hudson Yards
            </Typography>
            <div style={{ marginBottom: "40px" }}>
              <Typography color="rgb(14, 165, 145)" display="inline">
                <FacebookRoundedIcon fontSize="large" />
              </Typography>
              <Typography
                color="rgb(14, 165, 145)"
                display="inline"
                style={{ marginLeft: "10px" }}
              >
                <GoogleIcon fontSize="large" />
              </Typography>
              <Typography
                color="rgb(14, 165, 145)"
                display="inline"
                style={{ marginLeft: "10px" }}
              >
                <TwitterIcon fontSize="large" />
              </Typography>
            </div>

            <Typography
              variant="body2"
              display="block"
              gutterBottom
              color="GrayText"
            >
              call Now
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "rgb(14, 165, 145)" }}
            >
              +2025550295
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
