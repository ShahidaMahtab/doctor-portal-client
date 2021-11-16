import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://ancient-eyrie-18743.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  });
  return (
    <div
      className="mt-5
    "
    >
      <h2>Our Doctors</h2>
      <div>available doc {doctors.length}</div>
      <Container className="mx-auto my-5 text-center">
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id}></Doctor>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
