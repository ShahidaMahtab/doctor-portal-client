import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Testimonial = ({ testimonial }) => {
  const { img, desc } = testimonial;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275 }} className="mx-auto">
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {desc}
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={img} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="h6"
                      color="#0ea591"
                    >
                      Winson Herry
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      California
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;
