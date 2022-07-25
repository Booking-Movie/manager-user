/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'

const SearchResult = props => {
  const { id, image_movie, name_movie, comming_data, time_show } = props.result

  return (
    <>
      <NavLink to={`/booking-page/${id}`}>
        <Button>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-x-4 ">
              <img src={image_movie} className="w-[100px] h-[100px]" />
              <div>
                <h1>{name_movie}</h1>
                <p>Date: {comming_data}</p>
                <p>Time: {time_show}</p>
              </div>
            </div>
            <hr className="w-full" />
          </div>
        </Button>
      </NavLink>
    </>
  )
}

export default SearchResult
