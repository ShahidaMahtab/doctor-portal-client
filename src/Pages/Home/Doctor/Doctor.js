import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <div className="mx-auto">
      <Grid item xs={12} sm={6} md={4}>
        <img src={`data:image/jpeg;base64,${image}`} alt="" />
        <h5>{name}</h5>
      </Grid>
    </div>
  );
};

export default Doctor;
