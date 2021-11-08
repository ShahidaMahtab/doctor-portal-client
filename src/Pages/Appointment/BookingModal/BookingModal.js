import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  booking,
  openBooking,
  handleBookingClose,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const { name, time } = booking;
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    //collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    console.log(appointment);
    //send to the server
    fetch("https://ancient-eyrie-18743.herokuapp.com/appointments", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          console.log(data);
          handleBookingClose();
        }
      });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form>
            <TextField
              sx={{ m: 1, width: "90%" }}
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ m: 1, width: "90%" }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user?.displayName}
              size="small"
            />
            <TextField
              sx={{ m: 1, width: "90%" }}
              id="outlined-size-small"
              onBlur={handleOnBlur}
              defaultValue={user?.email}
              name="email"
              size="small"
            />
            <TextField
              sx={{ m: 1, width: "90%" }}
              id="outlined-size-small"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              name="phone"
              size="small"
            />
            <TextField
              disabled
              sx={{ m: 1, width: "90%" }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button
              onClick={handleBookingSubmit}
              type="submit"
              variant="contained"
              sx={{ ml: 1 }}
            >
              submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
