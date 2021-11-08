import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Box component="div">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
