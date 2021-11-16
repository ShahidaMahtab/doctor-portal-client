import { Input, TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://ancient-eyrie-18743.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2>add doctors</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            sx={{ width: "50%" }}
            defaultValue="doctorName"
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            required
            sx={{ width: "50%" }}
            label="Email"
            defaultValue="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </div>
        <div>
          <Input
            accept="image/*"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            sx={{ width: "50%", m: 2 }}
          />
        </div>

        <div>
          <Button variant="contained" type="submit">
            add doctor
          </Button>
        </div>
      </form>

      {success && <span>{success}</span>}
    </div>
  );
};

export default AddDoctor;
