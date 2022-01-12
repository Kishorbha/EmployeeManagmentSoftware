import React from "react"
import "./style.css"

// @section material-ui
import { Facebook, Instagram, Twitter } from "@material-ui/icons"

export const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <div class="social">
          <a href="#" className="icon-social-facebook">
            <i>
              <Facebook fontSize="small" />
            </i>
          </a>
          <a href="#">
            <i class="ion-social-instagram">
              <Instagram fontSize="small" />
            </i>
          </a>
          <a href="#">
            <i class="ion-social-twitter">
              <Twitter fontSize="small" />
            </i>
          </a>
        </div>

        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">Hash Technologies © 2022</p>
      </footer>
    </div>
  )
}
