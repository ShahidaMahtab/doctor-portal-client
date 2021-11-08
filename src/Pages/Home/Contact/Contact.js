import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
const contactBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};
const Contact = () => {
  return (
    <Box style={contactBg} sx={{ p: 4 }}>
      <Typography
        variant="h6"
        component="span"
        sx={{ fontWeight: "bold" }}
        color="#5ce7ed"
      >
        Contact Us
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold", pb: 5 }}
        color="white"
      >
        Always connect with us
      </Typography>
      <div
        sx={{
          display: "flex",
          border: "2px solid red",
          alignItems: "center",
          justifyContent: "center",
        }}
        component="div"
      >
        <form>
          <TextField
            sx={{ background: "white", width: "50%", m: 1 }}
            id="outlined-size-small"
            defaultValue="Name"
            size="Normal"
            variant="outlined"
          />

          <TextField
            sx={{ background: "white", width: "50%", m: 1 }}
            id="outlined-size-small"
            defaultValue="Subject"
            size="Normal"
          />

          <TextField
            sx={{ background: "white", width: "50%", m: 1 }}
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Your Message"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#5ce7ed",
              px: 5,
              m: 1,
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Contact;
