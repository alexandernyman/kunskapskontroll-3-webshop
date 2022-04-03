import React from "react";
import useStyles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useRecoilState } from "recoil";
import { PasswordState, SuccessState, UsernameState } from "../../atoms";
import useAuth from "../Hooks/useAuth";

const Loginreg = () => {
  const classes = useStyles();

  const [username, setUsername] = useRecoilState(UsernameState);
  const [password, setPassword] = useRecoilState(PasswordState);
  const [success, setSuccess] = useRecoilState(SuccessState); // Change when all stuff is in place so it directs to a different page

  const { setAuth } = useAuth(); // Authentication through the context folder, wrapping the whole app
  const loginUrl = "https://k4backend.osuka.dev/auth/login"; //API Url for login

  // LOGIN CODE
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        loginUrl,
        // JSON.stringify({ username, password }),
        JSON.stringify({
          username: username,
          password: password,
        }),

        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response.data)); // logs the token, just for clearification lmao

      // Choosed to store the data from the api in local storage for later usage in the application
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password)); // inte alls en säkerhetsrisk

      // ROLES
      const userId = response.data.userId;

      const userResponse = await axios.get(
        `https://k4backend.osuka.dev/users/${userId}`
      );
      const role = userResponse.data.role;

      const email = userResponse.data.email;

      const global = userResponse.data.name;

      const nameSpread = { ...global };

      const firstName = nameSpread.firstname;
      const lastName = nameSpread.lastname;

      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("firstName", JSON.stringify(firstName));
      localStorage.setItem("lastName", JSON.stringify(lastName));

      setAuth({ username, password, role });
      setUsername("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        console.log("ERROR");
      } else if (err.response.status === 400) {
        console.log("missing username or password");
      } else if (err.response.status === 401) {
        console.log("Unauthorized");
        alert("Wrong username or password, try again!");
      } else {
        console.log("login failed");
      }
    }
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  return (
    <>
      {success ? (
        <div>
          <div className={classes.toolbar} />

          <h1 className={classes.title}>
            Welcome {localStorage.getItem("username")}!
          </h1>
          <h4 className={classes.title}>
            Username: {localStorage.getItem("username")}
          </h4>
          <h4 className={classes.title}>
            Email: {localStorage.getItem("email")}
          </h4>
          <h4 className={classes.title}>
            First Name: {localStorage.getItem("firstName")}
          </h4>
          <h4 className={classes.title}>
            Last Name: {localStorage.getItem("lastName")}
          </h4>

          <a href="http://localhost:3000/login" className={classes.title}>
            <button onClick={handleLogout}>Log Out</button>{" "}
            {/* Clear the local storage on logout so a new user can be prompted */}
          </a>
        </div>
      ) : (
        <div className={classes.root}>
          <div className={classes.toolbar} />
          <Grid container classes={classes.container}>
            <Grid item xs={12} className={classes.login}>
              <Typography variant="h6">Login</Typography>
              <form
                className={classes.formContainer}
                onSubmit={handleSubmitLogin}
              >
                <input
                  type="text"
                  placeholder="Username..."
                  className={classes.input}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
                <input
                  type="password"
                  placeholder="Password..."
                  className={classes.input}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <button className={classes.input}>Login</button>
              </form>
              <a href="/register">NOT REGISTERED YET?</a>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Loginreg;
