import { NavLink } from 'react-router-dom'
import * as Icon from 'react-feather'

const LinkComponents = props => {
  return (
    <>
      <NavLink to={props.link} className="flex gap-x-6 items-center">
        <div className="hidden-icon">{props.children}</div>
        <div>
          <h2 className="text-3xl pb-3  text-[#495057] hover:text-[#212529] hover:list-decimal lg:transition-all">
            {props.title}
          </h2>
        </div>
        <div className="hidden-icon ml-auto">
          <Icon.ChevronRight size={32} color="black" />
        </div>
      </NavLink>
    </>
  )
}
export default LinkComponents
