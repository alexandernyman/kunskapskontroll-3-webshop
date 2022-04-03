import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { RegisterPassword, RegisterUser, SuccessState } from "../../atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [username, setUsername] = useRecoilState(RegisterUser);
  const [password, setPassword] = useRecoilState(RegisterPassword);

  const [success, setSuccess] = useRecoilState(SuccessState);

  const registerURL = "https://k4backend.osuka.dev/users";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        registerURL,
        // JSON.stringify({ username, password }),
        JSON.stringify({
          email: "John@gmail.com",
          username: username,
          password: password,
          role: "user",
          name: {
            firstname: "John",
            lastname: "Doe",
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
          },
          phone: "1-570-236-7033",
        }),

        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);

      // const role = response.data.role;

      setSuccess(true);

      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password)); // inte alls en säkerhetsrisk
      //clear input
    } catch (error) {
      if (!error.response) {
        console.log("no server response");
      } else if (error.response.status === 409) {
        console.log("username taken");
      } else {
        console.log("registration failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <div className={classes.toolbar} />

          <h1>Registration was SUCCESSFUL!</h1>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
              window.location.reload();
            }}
          >
            Go to login
          </button>
        </section>
      ) : (
        <div className={classes.root}>
          <div className={classes.toolbar} />
          <Grid item xs={12} className={classes.reg}>
            <Typography variant="h6">Register</Typography>
            <form className={classes.formContainer} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username..."
                className={classes.input}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password..."
                className={classes.input}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button className={classes.input}>Register</button>
            </form>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Already got an account? Login
            </button>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Register;
