import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="width mb-10">
      <div className="grid grid-cols-12 gap-4 width px-6 py-8">
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">GENERAL</h1>
          <ul className="flex flex-col gap-y-3 ">
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
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">GENERAL</h1>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-600">
              <NavLink to="/">About Us</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">News</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">Contact</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">FQA'S</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">POLICIES</h1>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-600">
              <NavLink to="/">General rules</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">Privacy policy</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/">Company information</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">CUSTOMER CARE</h1>
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
        <div className="gap-y-4 col-span-12 text-center text-lg font-semibold mt-5">
          <p>Copyright © 2021 PLVH Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
