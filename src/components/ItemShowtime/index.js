import _ from 'lodash'
import { NavLink, useHistory } from 'react-router-dom'
import moment from 'moment'
import Label from '../Label'
import Select from '../Select'
import axios from 'axios'
import InputComponent from '../InputComponent'
import { useEffect, useState } from 'react'
import FilterDate from '../FilterDate'
import { useMemo } from 'react'
import FilterResult from '../FilterResult'

const ItemShowTime = props => {
  const { filterCinema, handleSubmit, filteredList, handleSubmitDate } = props
  console.log('🚀 ~ file: index.js ~ line 15 ~ filteredList', filteredList)
  const history = useHistory()
  const id = history.location.pathname.slice(14)
  const [cinema, setCinema] = useState('')
  const [date, setDate] = useState('')

  const day = new Date()
  const newTime = moment(day, 'HH:mm:ss').format('HH:mm')
  const [selectDate, setSelectDate] = useState('')
  const [filterDate, setFilterDate] = useState([])
  const newDate = moment(day).format('DD/MM/YYYY')
  const handleFilterDate = date => {
    setSelectDate(date)
  }
  function getFilterDate() {
    if (!selectDate && selectDate !== '') {
      return filterDate
    }
    return filterDate.filter(item => {
      console.log('🚀 ~ file: index.js ~ line 32 ~ getFilterDate ~ item', item)
      return item.show_time.start_date === selectDate
    })
  }
  var filteredDate = useMemo(getFilterDate, [selectDate, filterDate])
  console.log('🚀 ~ file: index.js ~ line 32 ~ filteredDate', filteredDate)

  // const fetchTime = () => {
  //   axios({
  //     url: `http://localhost:7000/api/v1/search/filter/${id}`,
  //     method: 'GET'
  //   })
  //     .then(res => {
  //       console.log('🚀 ~ file: index.js ~ line 29 ~ fetchMovie ~ res', res)
  //       setFilterDate(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  useEffect(() => {
    if (cinema !== '') {
      handleSubmit(cinema)
    }
    console.log('🚀 ~ file: index.js ~ line 57 ~ useEffect ~ cinema', cinema)
    // fetchTime()
  }, [id, cinema, handleSubmit])
  return (
    <>
      <div className="flex flex-row sm:flex-col gap-5 justify-between items-center mb-10">
        <div className="flex flex-col gap-2 w-full items-center">
          <Label label="Select Movie Form City" />
          <Select>
            <option disabled value={'disabled'}>
              {'Select movie from city'}
            </option>
            <option value="0">Ca Mau</option>
            <option value="1">Binh Duong</option>
            <option value="2">Binh Thuan</option>
            <option value="3">Ninh Binh</option>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-full items-center">
          <Label label="Select Movie Form Date" />
          <InputComponent type="date" />
        </div>
        {/* <FilterDate handleFilterDate={date => handleFilterDate(date)} /> */}
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
                          .map(time => (
                            <div
                              div
                              key={time.id}
                              className="gap-y-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1"
                            >
                              <NavLink
                                to={`/booking-page/seat/${time.id}`}
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
                          .map(time => (
                            <div
                              div
                              key={time.id}
                              className="gap-y-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1 "
                            >
                              <NavLink
                                to={`/booking-page/seat/${time.id}`}
                                className={`${
                                  moment(time.time_start, 'HH:mm:ss').format('HH:mm') < newTime
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
