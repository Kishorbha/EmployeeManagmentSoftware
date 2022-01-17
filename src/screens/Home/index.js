import React, { useState } from "react"

import "./style.css"

// @section material-ui
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  MenuItem,
  Menu,
} from "@material-ui/core"
import { Mail, Phone, People, Book, ViewCompact } from "@material-ui/icons"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const Home = () => {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)
  const [user, setUser] = useState("employee")
  const [value, setValue] = useState()

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(updateTime, 1000)

  if (user === "admin") {
    return (
      <>
        <Header />
        <h3>Admin section</h3>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="Home__container">
        <div>
          <h2>{ctime}</h2>
        </div>

        <Button
          variant="outlined"
          color="primary"
          style={{ textTransform: "capitalize" }}
        >
          <Phone style={{ marginRight: "10px", color: "green" }} /> New Meeting
        </Button>
      </div>
      <Footer />
    </>
  )
}
