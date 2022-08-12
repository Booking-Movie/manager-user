/* eslint-disable prettier/prettier */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TicketList from "../../components/TicketList"
import { getAllBookingByUserIdAction } from "../../redux/Action/Paymet_Action"

const Ticket = () => {
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const dispatch = useDispatch()
  console.log("🚀 ~ file: index.js ~ line 5 ~ Ticket ~ userLogin", userLogin)
  const { bookingByUserId } = useSelector(state => state.ManagerNewsReducer)
  console.log("🚀 ~ file: index.js ~ line 10 ~ Ticket ~ bookingByUserId", bookingByUserId)
  useEffect(() => {
    dispatch(getAllBookingByUserIdAction(userLogin.payload.id))
  }, [dispatch, userLogin])
  return (
    <div className="width">
      <h1 className="my-6 uppercase">Info Ticket</h1>
      <TicketList booking={bookingByUserId} />
    </div>
  )
}

export default Ticket