import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Box } from "@mui/system";
const Features = () => {
  return (
    <Container sx={{ marginTop: "-50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              py: 3,
              boxShadow: 0,
              background: "rgb(14, 165, 145)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="white">
              <AccessTimeIcon fontSize="large" />
            </Typography>

            <Box sx={{ ml: 3 }}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="white"
              >
                Opening Hour
              </Typography>
              <Typography variant="body2" color="white">
                Lorem ipsum dolor <br /> sit amet Veniam, rerum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              py: 3,
              boxShadow: 0,
              background: "#222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="white">
              <LocationOnIcon fontSize="large" />
            </Typography>

            <Box sx={{ ml: 3 }}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="white"
              >
                Opening Hour
              </Typography>
              <Typography variant="body2" color="white">
                Lorem ipsum dolor <br /> sit amet Veniam, rerum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              py: 3,
              boxShadow: 0,
              background: "rgb(14, 165, 145)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="white">
              <PhoneInTalkIcon fontSize="large" />
            </Typography>

            <Box sx={{ ml: 3 }}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="white"
              >
                Opening Hour
              </Typography>
              <Typography variant="body2" color="white">
                Lorem ipsum dolor <br /> sit amet Veniam, rerum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
