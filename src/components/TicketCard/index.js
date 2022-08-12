/* eslint-disable prettier/prettier */
import moment from 'moment'
const TicketCard = props => {
  console.log("🚀 ~ file: index.js ~ line 3 ~ props", props)
  const { name_movie, name_cinema, start_date, time_start, booking_seat, code_theater } = props.booking

  return (
    <div className="card-ticket">
      <h1 className="text-black">{name_movie}</h1>
      <div className="flex gap-x-2 flex-wrap">
        <h4 className="text-black">Location:</h4>
        <p className="text-black">{name_cinema}</p>
      </div>
      <div className="flex gap-x-2 flex-wrap">
        <h4 className="text-black">Theater:</h4>
        <p className="text-black">{code_theater}</p>
      </div>
      <div>
        <h4 className="text-black">Date And Time: </h4>
        <p className="text-black">{moment(start_date).format('MMM Do YY')} - {moment(time_start, 'HH:mm:ss').format('HH:mm')}</p>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap items-center gap-3 text-lg" >
          <h3 className="text-black">Seat Booking: </h3>
          {booking_seat.map((item) => {
            return (
              <span className="flex justify-center items-center font-semibold rounded-lg bg-green-500 w-[50px] h-[50px]">{item.seat_booking}</span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TicketCard
