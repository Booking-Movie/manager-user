import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getAllBookingAction } from '../../redux/Action/Movie_Action'
import { cancelSeatBookingAction } from '../../redux/Action/New_Action'
import { Button } from '../Button'

const Payment = props => {
  const dispatch = useDispatch()
  const { listAllBooking } = useSelector(state => state.ManagerMovieReducer)
  const handleSubmit = info => {
    console.log(info)
  }
  const handleCancelBooking = username => {
    dispatch(cancelSeatBookingAction(username))
  }
  const { id } = props.match.params
  useEffect(() => {
    dispatch(getAllBookingAction(id))
  }, [dispatch, id])
  return (
    <div className="payment">
      {listAllBooking?.map(info => {
        return (
          <div key={info.id} className="payment-content">
            <div className="payment-content_title">
              <h1>{info.name_cinema.toUpperCase()}</h1>
            </div>
            <div className="payment-content_text">
              <h1>
                Thank you for coming to Galaxy! <br /> Please check your booking information
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 text-lg">
                <h3>Username: </h3>
                <span>{info.fullname}</span>
              </div>
              <div className="flex gap-3 text-lg">
                <h3>Email: </h3>
                <span>{info.email}</span>
              </div>
              <div className="flex gap-3 text-lg">
                <h3>Phone Number: </h3>
                <span>{info.phone}</span>
              </div>
            </div>
            <div className="flex sm:flex-col gap-6">
              <img src={info.image_movie} alt="Image Movie" className="w-40 h-40 sm:w-full" />
              <div className="flex flex-col gap-2">
                <h3>{info.name_movie}</h3>
                <div className="flex gap-3 text-lg">
                  <h3>Time: </h3>
                  <span>{moment(info.time_start, 'HH:mm:ss').format('HH:mm')}</span>
                </div>
                <div className="flex gap-3 text-lg">
                  <h3>Date: </h3>
                  <span>{moment(info.start_date).format('MMM Do YY')}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex flex-wrap items-center gap-3 text-lg">
                <h3>Seat Booking: </h3>
                {info.booking_seat.map((seat, index) => {
                  return (
                    <span className="flex justify-center items-center font-semibold rounded-lg bg-green-500 w-[50px] h-[50px]">
                      {seat.seat_booking}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="flex justify-end gap-3 text-lg">
              <h3>Total: </h3>
              <span>{info.total}</span>
            </div>
            <div className="flex justify-between gap-5">
              <NavLink
                onClick={handleCancelBooking(info.username)}
                className="w-full text-center"
                to={`/booking-page/seat/${listAllBooking[0].showtime_id}`}
              >
                <Button className="btn-delete w-full">Cancel</Button>
              </NavLink>
              <Button onClick={handleSubmit(info)} className="btn-primary w-full">
                Payment
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Payment
