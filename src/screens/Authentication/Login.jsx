import React from "react"

import Helmet from "react-helmet"
import { Link } from "react-router-dom"

import pic from "../../assets/img/logo12.png"

// @mui-packages
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Box,
  Typography,
  makeStyles,
  Grid,
  Container,
  FormControlLabel,
  CssBaseline,
  Checkbox,
} from "@material-ui/core"

import { Person, Lock } from "@material-ui/icons"

// @section customize mui-css
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    background: "-webkit-linear-gradient(45deg, #1477F2 30%, #3F51B5 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  lost_section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  main_container: {},
  image: { maxHeight: "220px", width: "100%", objectFit: "cover" },
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "18px",
    background: "-webkit-linear-gradient(45deg, #1477F2 30%, #3F51B5 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  login__container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
}))

export const Login = ({ setActivePage }) => {
  // @section constants

  const [isPasswordVisible, setPasswordVisible] = React.useState(false)
  const classes = useStyles()
  // @section Functions
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      Username: data.get("username"),
      password: data.get("password"),
    })
  }

  // @section return
  return (
    <>
      <Helmet>
        <title>E M S | Log In</title>
      </Helmet>
      {/* @section main body */}
      <Container component="main" maxWidth="xs">
        <Box className={classes.login__container}>
          <img className={classes.image} src={pic} />

          <Box
            className={classes.main_container}
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="user-name"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              size="small"
              variant="outlined"
            />
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="outlined"
              autoComplete="current-password"
            />
            <Grid container className={classes.lost_section}>
              <Grid>
                <FormControlLabel
                  control={
                    <Checkbox value="remember" size="small" color="primary" />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid>
                <Link className={classes.link} to="forget-password">
                  Lost password?
                </Link>
              </Grid>
            </Grid>
            <Link to="home" style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Log In
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  )
}
