import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  console.log(email);
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://ancient-eyrie-18743.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
          setEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h1>admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleOnBlur}
          label="Email"
          variant="standard"
          type="email"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
        {success && <Alert severity="success">Made Admin successfully</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
