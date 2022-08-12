/* eslint-disable prettier/prettier */
import TicketCard from '../TicketCard'

const TicketList = props => {
  const { booking } = props
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mb-6">
        {booking?.map((item, index) => {
          return (
            <>
              <TicketCard booking={item} key={index} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default TicketList
