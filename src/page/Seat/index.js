import { Fragment, memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InfoMovie from '../../components/InfoMovie'
import { DAT_VE } from '../../redux/Action/Action_Type/movie'
import { getAllSeatInShowtimeAction } from '../../redux/Action/Movie_Action'
import { createAction } from '../../redux/Action/Type'
import '../../App.css'
const Seat = props => {
  const dispatch = useDispatch()
  const { seatList, danhSachGheDangDat } = useSelector(state => state.ManagerMovieReducer)
  console.log('🚀 ~ file: index.js ~ line 13 ~ seatList', seatList)
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const { id } = props.match.params

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
          <div className="width">
            <h2 className="mb-6 uppercase">{cinema.code_theater}</h2>
            <div className="flex flex-row sm:flex-col md:flex-col lg:space-x-24 sm:space-y-8 md:space-y-8 flex-1">
              <div className="text-center">
                <h2 className="screen uppercase">Screen</h2>
                {cinema.seats.map((seat, index) => {
                  let gheDaDat = `sear-booked`
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
                      {(index + 1) % 10 === 0 ? <br /> : ''}
                    </Fragment>
                  )
                })}
                <div className="flex flex-wrap justify-center sm:justify-start mt-10 gap-4">
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[rgb(123,122,122)]"></p>
                    <h3>Default Seat</h3>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[rgb(18,176,18)]"></p>
                    <h3>Terrible Seat</h3>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="border-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] lg:m-3 sm:m-1 text-xs rounded-lg font-semibold bg-[#C0C0C0]"></p>
                    <h3>Disable Seat</h3>
                  </div>
                </div>
              </div>
              <div>
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
