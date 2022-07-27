import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import { Button } from '../../components/Button'

const Footer = () => {
  return (
    <div className="width mt-14">
      <div className="footer">
        <div className="footer-email">
          <h1 className="footer_title">Get the latest movie updates</h1>
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
          <h1 className="footer_title">General</h1>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-600">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/fqa">FQA'S</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h1 className="text-lg font-semibold">Customer Care</h1>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-600">
              <NavLink to="/">Hotline: 1900 6016</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">Work time: 8:00am - 22:00PM</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">Email support: hoidap@gmail.com</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer_copyright">
          <p>Copyright © 2021 PLVH Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
