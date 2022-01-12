import React from "react"
import { Helmet } from "react-helmet"

/**
 * @custom main components
 */
import { Login } from "./Login"
import "./styles/style.css"

import { ForgetPassword } from "./ForgetPassword"

export const Authentication = () => {
  const [activePage, setActivePage] = React.useState("login")

  return (
    <div className="authentication__container">
      <Helmet>
        <title>E M S | Hash Technologies </title>
      </Helmet>
      {activePage === "login" ? (
        <Login setActivePage={setActivePage} />
      ) : (
        <ForgetPassword setActivePage={setActivePage} />
      )}
    </div>
  )
}
