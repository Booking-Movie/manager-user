import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import { Button } from '../../components/Button'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-email">
        <h2>Get the latest movie updates</h2>
        <div className="email-content">
          <input
            type="search"
            className="email-content_input"
            placeholder="Your email"
            aria-label="Search"
            aria-describedby="button-addon"
          />
          <Button className="email-content_button">
            <Icon.Mail size={25} color="white" />
          </Button>
        </div>
      </div>
      <div className="footer-info">
        <h2>General</h2>
        <ul className="flex flex-col gap-3">
          <li className="text-hover">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="text-hover">
            <NavLink to="/news">News</NavLink>
          </li>
          <li className="text-hover">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="text-hover">
            <NavLink to="/fqa">FAQ'S</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-info">
        <h2>Customer Care</h2>
        <ul className="flex flex-col gap-3">
          <li className="text-hover">
            <NavLink to="/">Hotline: 1900 6016</NavLink>
          </li>
          <li className="text-hover">
            <NavLink to="/">Work time: 8:00am - 22:00PM</NavLink>
          </li>
          <li className="text-hover">
            <NavLink to="/">Email support: hoidap@gmail.com</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer_copyright">
        <p>Copyright © 2021 PLVH Ltd. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
