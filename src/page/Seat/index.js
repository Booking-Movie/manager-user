import { set } from 'lodash'
import { Fragment, memo, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import InfoMovie from '../../components/InfoMovie'
import { DAT_VE } from '../../redux/Action/Action_Type/movie'
import { getAllSeatInShowtimeAction } from '../../redux/Action/Movie_Action'
import { createAction } from '../../redux/Action/Type'

const Seat = props => {
  const dispatch = useDispatch()
  const { seatList, danhSachGheDangDat } = useSelector(state => state.ManagerMovieReducer)
  console.log('🚀 ~ file: index.js ~ line 13 ~ seatList', seatList)
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const { id } = props.match.params
  const [isStatus, setIsStatus] = useState('')
  useEffect(() => {
    dispatch(getAllSeatInShowtimeAction(id))
  }, [dispatch, id])
  const handleSubmit = seat => {
    return () => {
      dispatch(createAction(DAT_VE, seat))
    }
  }
  return (
    <>
      {seatList.map(cinema => {
        return (
          <div className="lg:px-20">
            <h1 className="p-[13px]">{cinema.code_theater}</h1>
            <div className="flex flex-row sm:flex-col flex-1 gap-x-5">
              <div className="text-center">
                {cinema.seats.map((seat, index) => {
                  let gheDaDat = `border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[rgb(123,122,122)]`
                  let classSeatReserved = seat.status_seat === false ? `${gheDaDat}` : ''
                  let indexGheDD = danhSachGheDangDat.findIndex(seatId => seatId.id === seat.id)

                  localStorage.setItem('seatBooking', danhSachGheDangDat)
                  let classGheDaDuocDat = ''
                  let classSeatBooking = ''
                  if (seat.user_booking === userLogin.payload.username) {
                    classGheDaDuocDat = `bg-[#C0C0C0]`
                  }
                  if (indexGheDD !== -1) {
                    classSeatReserved = `bg-[rgb(18,176,18)]`
                  }
                  return (
                    <Fragment key={index}>
                      <button
                        onClick={handleSubmit(seat)}
                        disabled={seat.status_seat === true}
                        className={`${gheDaDat} ${classSeatReserved}  ${classSeatBooking} ${classGheDaDuocDat} `}
                      >
                        {seat.name_seat}
                      </button>
                      {(index + 1) % 12 === 0 ? <br /> : ''}
                    </Fragment>
                  )
                })}
                <div className="flex flex-wrap justify-center mt-10 gap-4">
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[rgb(123,122,122)]"></p>
                    <h1>Default Seat</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[rgb(18,176,18)]"></p>
                    <h1>Terrible Seat</h1>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[#C0C0C0]"></p>
                    <h1>Disable Seat</h1>
                  </div>
                </div>
              </div>
              <div className="w-[30%] max-w-[30%] sm:w-[100%] sm:max-w-[100%] mx-auto">
                <InfoMovie cinema={cinema} showtime_id={id} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default memo(Seat)
