import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'
import { Button } from '../../components/Button'

const Footer = () => {
  return (
    <div className="width mt-14">
      <div className="grid grid-cols-12 gap-8 width px-6 py-8 items-stretch justify-between">
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-4 lg:col-span-4">
          <h1 className="text-lg font-semibold">Get the latest movie updates</h1>
          <div className="flex items-center gap-x-2 relative w-full lg:w-[350px]">
            <input
              type="search"
              className="relative flex-auto min-w-0 block w-full rounded-xl px-3 py-[13px] text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:border-2 focus:outline-none"
              placeholder="Your email"
              aria-label="Search"
              aria-describedby="button-addon"
            />
            <Button className="absolute z-[50] top-[50%] translate-y-[-50%] right-2 bg-black py-2 px-5 rounded-lg">
              <Icon.Mail size={25} color="white" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">General</h1>
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
        {/* <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
          <h1 className="text-lg font-semibold">Policies</h1>
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
        </div> */}
        <div className="flex flex-col gap-y-5 sm:col-span-12 md:col-span-3 lg:col-span-3">
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
        <div className="gap-y-4 col-span-12 text-center text-lg font-semibold mt-5">
          <p>Copyright © 2021 PLVH Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
