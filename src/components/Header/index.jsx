import React from "react"
import Helmet from "react-helmet"

import "./style.css"

import logo12 from "../../assets/img/logo12.png"

// @mui imports
import {
  IconButton,
  Badge,
  Button,
  Divider,
  Typography,
} from "@material-ui/core"
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Settings,
  ContactSupportTwoTone,
} from "@material-ui/icons"

export const Header = () => {
  // @section constant
  let date = new Date().toDateString()

  // @section Functions
  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications"
    }
    if (count > 99) {
      return "more than 99 notifications"
    }
    return `${count} notifications`
  }
  return (
    <>
      <Helmet>
        <title>Hash Technologies | Employee Panel</title>
      </Helmet>

      <div className="Nav__container">
        <img className="Nav__container__logo" src={logo12} alt="logo" />

        <div className="Nav__contianer__right">
          <Typography>{date}</Typography>

          <ul className="social__icons">
            <li>
              <ContactSupportTwoTone />
            </li>
            <li>
              <Settings fontSize="small" />
            </li>
            <li>
              <Facebook fontSize="small" />
            </li>
            <li>
              <Instagram fontSize="small" />
            </li>
            <li>
              <Twitter fontSize="small" />
            </li>
          </ul>
          <img
            className="Nav__container__right__logo__profile"
            src="https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.6435-9/86366870_2745388305514352_2727862943780700160_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MkgCEbCIJGkAX_AkJ2H&_nc_ht=scontent.fbdp1-1.fna&oh=00_AT8s1LbVDqJD0Pm2yasSKWWx-_cGypx0m0kSJLxfPR3MsQ&oe=62049281"
          />
        </div>
      </div>
      <Divider variant="middle" style={{ marginTop: "10px" }} />
    </>
  )
}
