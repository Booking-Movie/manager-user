import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bookingTicketAction, getInfoMovieAction } from '../../redux/Action/Movie_Action'
import { InfoTicket } from '../../_core/model'
import { Button } from '../Button'

const InfoMovie = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { infoMovie, danhSachGheDangDat } = useSelector(state => state.ManagerMovieReducer)

  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const { username } = userLogin.payload
  const { cinema_id, movie_id, id } = props.cinema
  useEffect(() => {
    dispatch(getInfoMovieAction(id))
  }, [dispatch, cinema_id, movie_id, id])

  const handleBooking = async () => {
    const ticket = new InfoTicket()
    ticket.movie_id = movie_id
    ticket.user_id = userLogin.payload.id
    ticket.cinema_id = cinema_id
    ticket.showtime_id = props.showtime_id
    ticket.user_booking = userLogin.payload.username
    ticket.danhSachVe = await danhSachGheDangDat
    await dispatch(bookingTicketAction(ticket, payment))
  }
  const payment = () => {
    history.push(`payment/${cinema_id}`, infoMovie)
  }
  return (
    <div className="flex flex-col gap-6 px-4 sm:py-5">
      {infoMovie.map(info => {
        return (
          <>
            <h1 className="text-center font-semibold text-3xl">{info?.name_movie}</h1>
            <h1>
              <span className="text-lg font-semibold word-wrap">Location: </span>
              {`${info.name_cinema} - ${info.address}`}
            </h1>
            <h1>
              <span className="text-lg font-semibold">Theater: </span> {info.code_theater}
            </h1>
            <h1>
              <span className="text-lg font-semibold">Date: </span> {moment(info.start_date).format('MMM Do YY')}
            </h1>
            <h1>
              <span className="text-lg font-semibold">Time: </span>
              {moment(info.time_start, 'HH:mm:ss').format('HH:mm')}
            </h1>
          </>
        )
      })}
      <div className="flex gap-x-1 text-lg">
        <h1 className=" font-semibold">Username: </h1>
        <span>{username}</span>
      </div>
      <div className="flex gap-x-1 text-lg">
        <h1 className="font-semibold">Price: </h1>
        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
          return (tongTien += ghe.price)
        }, 0)}
        đ
      </div>
      <div className="flex gap-2 items-center flex-wrap text-lg">
        <h1 className="break-normal font-semibold">Seat Booking: </h1>
        {danhSachGheDangDat.map((seat, index) => {
          return (
            <div key={index} className="flex">
              {''}
              <button className="flex justify-center items-center font-semibold rounded-lg bg-green-500 w-[50px] h-[50px]">
                {seat.name_seat}
              </button>
            </div>
          )
        })}
      </div>
      <Button onClick={handleBooking} className="btn-primary tracking-wider my-14">
        BOOKING TICKET
      </Button>
    </div>
  )
}

export default InfoMovie
