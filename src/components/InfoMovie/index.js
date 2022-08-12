/* eslint-disable prettier/prettier */
import moment from 'moment'
import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { connection } from '../..'
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

  const handleBooking = useCallback(() => {
    const ticket = new InfoTicket()
    ticket.movie_id = movie_id
    ticket.user_id = userLogin.payload.id
    ticket.cinema_id = cinema_id
    ticket.showtime_id = props.showtime_id
    ticket.danhSachVe = danhSachGheDangDat
    console.log("🚀 ~ file: index.js ~ line 23 ~ handleBooking ~ ticket", ticket)
    const payment = () => {
      history.push(`payment/${props.showtime_id}`)
    }
    dispatch(bookingTicketAction(ticket, payment))
  }, [cinema_id, danhSachGheDangDat, dispatch, movie_id, history, props.showtime_id, userLogin.payload.id])

  return (
    <div className="flex flex-col gap-6">
      {infoMovie.map((info, index) => {
        return (
          <div key={index} className="flex flex-col gap-6">
            <h1 className="text-center sm:text-left uppercase">{info?.name_movie}</h1>
            <div className="flex gap-x-2">
              <h3>Location: </h3>
              <p> {`${info.name_cinema} - ${info.address}`}</p>
            </div>
            <div className="flex gap-x-2">
              <h3>Theater: </h3>
              <p>{info.code_theater}</p>
            </div>
            <div className="flex gap-x-2">
              <h3>Date: </h3>
              <p>{moment(info.start_date).format('MMM Do YY')}</p>
            </div>
            <div className="flex gap-x-2">
              <h3>Time: </h3>
              <p>{moment(info.time_start, 'HH:mm:ss').format('HH:mm')}</p>
            </div>
          </div>
        )
      })}
      <div className="flex gap-x-2">
        <h3>Username: </h3>
        <p>{username}</p>
      </div>
      <div className="flex gap-x-2">
        <h3>Price: </h3>
        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
          return (tongTien += ghe.price)
        }, 0)}
        đ
      </div>
      <div className="flex gap-2 items-center flex-wrap text-lg">
        <h3>Seat Booking: </h3>
        {danhSachGheDangDat.map((seat, index) => {
          return (
            <div key={index} className="flex">
              {''}
              <button className="seat-booking">{seat.name_seat}</button>
            </div>
          )
        })}
      </div>
      <Button onClick={handleBooking} className="btn-primary tracking-wider mt-14">
        BOOKING TICKET
      </Button>
    </div>
  )
}

export default memo(InfoMovie)
