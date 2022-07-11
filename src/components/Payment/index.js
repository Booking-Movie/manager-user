import moment from 'moment'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookingAction } from '../../redux/Action/Movie_Action'
import { Button } from '../Button'
import InfoBooking from '../InfoBooking'

const Payment = props => {
  const dispatch = useDispatch()
  const { listAllBooking } = useSelector(state => state.ManagerMovieReducer)
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)

  const handleSubmit = info => {
    console.log(info)
  }
  const { id } = props.match.params
  useEffect(() => {
    dispatch(getAllBookingAction(id))
  }, [dispatch, id])
  return (
    <div className="flex flex-col items-center px-5 mt-16 sm:mt-12 mb-10">
      {listAllBooking.map(info => {
        return (
          <div key={info.id} className="flex flex-col container-payment gap-8 px-5 ">
            <div className="font-semibold text-3xl sm:text-2xl  text-center">
              <h1>{info.name_cinema.toUpperCase()}</h1>
            </div>
            <div className="font-bold text-3xl sm:text-lg text-center">
              <h1>
                Thank you for coming to Galaxy! <br /> Please check your booking information
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 text-lg">
                <h1 className="font-semibold">Username: </h1>
                <span>{info.fullname}</span>
              </div>
              <div className="flex gap-3 text-lg">
                <h1 className="font-semibold">Email: </h1>
                <span>{info.email}</span>
              </div>
              <div className="flex gap-3 text-lg">
                <h1 className="font-semibold">Phone Number: </h1>
                <span>{info.phone}</span>
              </div>
            </div>
            <div className="flex sm:flex-col gap-6">
              <img src={info.image_movie} alt="Image Movie" className="w-40 h-40 sm:w-full" />
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">{info.name_movie}</h1>
                <div className="flex gap-3 text-lg">
                  <h1 className="font-semibold">Time: </h1>
                  <span>{moment(info.time_start, 'HH:mm:ss').format('HH:mm')}</span>
                </div>
                <div className="flex gap-3 text-lg">
                  <h1 className="font-semibold">Date: </h1>
                  <span>{moment(info.start_date).format('MMM Do YY')}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex flex-wrap items-center gap-3 text-lg">
                <h1 className="font-semibold">Seat Booking: </h1>
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
              <h1 className="font-semibold">Total: </h1>
              <span>{info.total}</span>
            </div>
            <div className="flex justify-between gap-5">
              <Button className="btn-delete w-full">Cancel</Button>
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
