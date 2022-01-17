import React from "react"
import Helmet from "react-helmet"

import "./style.css"

import logo12 from "../../assets/img/logo12.png"

// @mui imports
import {
  IconButton,
  Badge,
  Button,
  Backdrop,
  Modal,
  Fade,
  Divider,
  Typography,
  MenuItem,
  Menu,
  Box,
} from "@material-ui/core"
import {
  Facebook,
  Instagram,
  Twitter,
  Settings,
  ContactSupportTwoTone,
  FeedbackOutlined,
} from "@material-ui/icons"

export const Header = () => {
  // @section constant
  let date = new Date().toDateString()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCl = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Helmet>
        <title>Hash Technologies | Employee Panel</title>
      </Helmet>
      <nav>
        <div className="Nav__container">
          <img className="Nav__container__logo" src={logo12} alt="logo" />

          <div className="Nav__contianer__right">
            <Typography className="date">{date}</Typography>

            <ul className="social__icons">
              <li className="social__icons__icons__wrap">
                <ContactSupportTwoTone fontSize="small" />
                <p className="icon__support__desciption">support</p>
              </li>

              <li className="social__icons__icons__wrap">
                <FeedbackOutlined fontSize="small" />
                <p className="icon__support__desciption">feedback</p>
              </li>
              <li className="social__icons__icons__wrap">
                <Settings
                  fontSize="small"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCl}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  style={{ marginTop: "40px" }}
                >
                  <MenuItem onClick={handleCl}>My account</MenuItem>
                  <MenuItem onClick={handleCl}>Change password</MenuItem>
                  <MenuItem onClick={handleCl}>Logout</MenuItem>
                </Menu>
                <p className="icon__support__desciption">settings</p>
              </li>
              <li className="social__icons__icons__wrap">
                <Facebook fontSize="small" />
              </li>
              <li className="social__icons__icons__wrap">
                <Instagram fontSize="small" />
              </li>
              <li className="social__icons__icons__wrap">
                <Twitter fontSize="small" />
              </li>
            </ul>
            <img
              className="Nav__container__right__logo__profile"
              src="https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.6435-9/86366870_2745388305514352_2727862943780700160_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MkgCEbCIJGkAX_AkJ2H&_nc_ht=scontent.fbdp1-1.fna&oh=00_AT8s1LbVDqJD0Pm2yasSKWWx-_cGypx0m0kSJLxfPR3MsQ&oe=62049281"
            />
          </div>
        </div>
      </nav>
      <Divider variant="middle" style={{ marginTop: "10px" }} />
    </>
  )
}
