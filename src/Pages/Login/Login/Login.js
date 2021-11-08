import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, isLoading, loginUser, signInWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "75%", m: 1, background: "rgb(14, 165, 145)" }}
            >
              SignIn
            </Button>
            <NavLink to="/register" className="text-decoration-none">
              <Button>New user? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">successfully signed in!</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </form>
          <p>--------------------------</p>
          <Button variant="contained" onClick={handleGoogleSignIn}>
            google Sign In
          </Button>
        </Grid>
        <Grid item xs={8} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
