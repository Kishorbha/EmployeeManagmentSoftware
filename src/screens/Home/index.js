import React, { useState } from "react"

import "./style.css"

// @section material-ui
import { Button } from "@material-ui/core"
import { Mail, Phone } from "@material-ui/icons"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const Home = () => {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }

  setInterval(updateTime, 1000)

  return (
    <>
      <Header />
      <div className="Home__container">
        <div>
          <h2>{ctime}</h2>
        </div>

        <Button variant="outlined" color="secondary">
          <Phone /> New Meeting
        </Button>
      </div>
      <Footer />
    </>
  )
}
