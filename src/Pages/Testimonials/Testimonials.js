import React from "react";
import people1 from "../../images/people-1.png";
import people2 from "../../images/people-2.png";
import people3 from "../../images/people-3.png";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Testimonial from "../Testimonial/Testimonial";
import { Typography } from "@mui/material";
const testimonials = [
  {
    key: 101,
    img: people1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione",
  },
  {
    key: 102,
    img: people2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione",
  },
  {
    key: 103,
    img: people3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus iure consequuntur maiores, ea laborum veritatis debitis labore sint ratione",
  },
];
const Testimonials = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 5 }}>
      <Box
        style={{
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: "#5ce7ed" }}>
          Testimonials
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "800" }}>
          What our Patient says
        </Typography>
      </Box>
      <Grid
        container
        sx={{ p: 5, my: 5 }}
        spacing={{ xs: 2, md: 3 }}
        className="mx-auto"
      >
        {testimonials.map((testimonial) => (
          <Testimonial
            testimonial={testimonial}
            key={testimonial.key}
          ></Testimonial>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
