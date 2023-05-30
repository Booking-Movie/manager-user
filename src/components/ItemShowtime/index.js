import _ from 'lodash'
import { NavLink, useHistory } from 'react-router-dom'
import moment from 'moment'
import Label from '../Label'
import Select from '../Select'
import { useEffect, useState } from 'react'
import { USER_LOGIN } from '../../util/setting/config'

const ItemShowTime = props => {
  const { filterCinema, handleSubmit, filteredList } = props
  const history = useHistory()
  const id = history.location.pathname.slice(14)
  const [cinema, setCinema] = useState('')
  const day = new Date()
  const newTime = moment(day, 'HH:mm:ss').format('HH:mm')
  const newDate = moment(day).format('DD/MM/YYYY')

  useEffect(() => {
    if (cinema !== '') {
      handleSubmit(cinema)
    }
    // fetchTime()
  }, [id, cinema, handleSubmit])
  return (
    <>
      <div className="flex flex-row sm:flex-col gap-5 justify-between items-center mb-10">
        <div className="flex flex-col gap-2 w-full">
          <Label label="Select Movie Form Cinema" />
          <Select onChange={e => setCinema(e.target.value)} value={cinema}>
            <option defaultValue={'disabled'}>{'Select time from cinema'}</option>
            {filterCinema.map((cinema, index) => {
              return (
                <option key={index} value={cinema.cinema_name}>
                  {cinema.name_cinema}
                </option>
              )
            })}
          </Select>
        </div>
      </div>
      {filterCinema && filteredList === '' ? (
        ''
      ) : (
        <>
          {cinema === '' ? (
            <>
              {filterCinema?.map((showtime, index) => {
                return (
                  <>
                    <div key={index} className="mb-10">
                      <h1 className="p-4 text-white self-stretch text-xl font-semibold bg-black max-w-[300px] rounded-tr-[8px] rounded-tl-[8px] ">
                        {showtime.name_cinema}
                      </h1>
                      <div className="grid grid-cols-12 gap-2 p-3 border-2">
                        {/* <FilterResult filteredDate={filteredDate} />s */}
                        {_.sortBy(showtime.show_time, ['time_start'])
                          .filter(time => {
                            return moment(time.start_date).format('DD/MM/YYYY') === newDate
                          })
                          .map((time, index) => (
                            <div
                              div
                              key={index}
                              className="gap-y-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1"
                            >
                              <NavLink
                                to={
                                  !localStorage.getItem(USER_LOGIN)
                                    ? `/sign-in`
                                    : `/booking-page/seat/${showtime.cinema_id}/${time.id}`
                                }
                                className={`${
                                  moment(time.time_start, 'HH:mm:ss').format('HH:mm') <= newTime
                                    ? 'pointer-events-none text-gray-400'
                                    : 'hover:bg-black hover:text-white hover:border-black'
                                } rounded-lg tracking-[1px]  w-full px-2 py-2 text-lg text-black  font-semibold border-2 transition-colors button-tranform`}
                              >
                                {moment(time.time_start, 'HH:mm:ss').format('HH:mm')}
                              </NavLink>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )
              })}
            </>
          ) : (
            <>
              {filteredList.map((showtime, index) => {
                return (
                  <>
                    <div key={index} className={`mb-10`}>
                      <h1 className="p-4 text-white self-stretch text-xl font-semibold bg-black max-w-[300px] rounded-tr-[8px] rounded-tl-[8px] ">
                        {showtime.name_cinema}
                      </h1>
                      <div className="grid grid-cols-12 gap-2 p-3 border-2">
                        {_.sortBy(showtime.show_time, ['time_start'])
                          .filter(time => {
                            return moment(time.start_date).format('DD/MM/YYYY') === newDate
                          })
                          .map((time, index) => (
                            <div
                              div
                              key={index}
                              className="gap-y-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1 "
                            >
                              <NavLink
                                to={
                                  !localStorage.getItem(USER_LOGIN)
                                    ? `/sign-in`
                                    : `/booking-page/seat/${showtime.cinema_id}${time.id}`
                                }
                                className={`${
                                  moment(time.time_start, 'HH:mm:ss').format('HH:mm') <= newTime
                                    ? 'pointer-events-none text-gray-400'
                                    : 'hover:bg-black hover:text-white hover:border-black'
                                } rounded-lg tracking-[1px]  w-full px-2 py-2 text-lg text-black  font-semibold border-2 transition-colors button-tranform`}
                              >
                                {moment(time.time_start, 'HH:mm:ss').format('HH:mm')}
                              </NavLink>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )
              })}
            </>
          )}
        </>
      )}
    </>
  )
}

export default ItemShowTime
