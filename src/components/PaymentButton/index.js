/* eslint-disable prettier/prettier */
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { cancelSeatBookingAction, updateStatusBookingAction } from '../../redux/Action/New_Action'
import { sendEmailAction } from '../../redux/Action/Paymet_Action'
import { Payment } from '../../_core/model'
import './style.css'

const PaypalButton = props => {
  const dispatch = useDispatch()
  const { total, name_movie, name_cinema, booking_seat, username, user_email, time_start, start_date, code_theater } = props.listAllBooking[0]
  const [paidFor, setPaidFor] = useState(false)
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const [error, setError] = useState(null)
  const [data, setData] = useState('')

  const handleApprove = (orderId) => {
    setPaidFor(true)
  }
  const sendEmail = useCallback((paymentList) => {
    dispatch(sendEmailAction(paymentList))
  }, [dispatch])
  if (paidFor) {
    const paymentList = new Payment()
    paymentList.user_id = userLogin.payload.id
    paymentList.email = user_email
    paymentList.name_movie = name_movie
    paymentList.name_cinema = name_cinema
    paymentList.time_start = time_start
    paymentList.start_date = start_date
    paymentList.code_theater = code_theater
    paymentList.data = data
    paymentList.booking_seat = booking_seat
    paymentList.user_booking = username
    dispatch(cancelSeatBookingAction(paymentList))
    dispatch(updateStatusBookingAction(userLogin.payload.id))
    sendEmail(paymentList)
    return < Redirect to={`/booking-page/seat/${props.listAllBooking[0].showtime_id}`} />
  }

  if (error) {
    alert(error)
  }
  console.log('🚀 ~ file: index.js ~ line 6 ~ PaypalButton ~ total', total)
  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, action) => {
          const hasAlreadyBoughtCourse = false
          if (hasAlreadyBoughtCourse) {
            setError("You Already Bough This Course")
            return action.reject()
          } else {
            return action.resolve()
          }
        }}
        createOrder={(data, action) => {
          return action.order.create({
            purchase_units: [
              {
                description: name_movie,
                amount: {
                  value: total
                },
              }
            ]
          })
        }}
        onApprove={async (data, action) => {
          const order = await action.order.capture()
          setData(order)
          console.log('order', order)
          handleApprove(data.userId)
        }}
        onCancel={() => {

        }}
        onError={(err) => {
          setError(err)
          console.log("Paypal Checkout On Error", err)
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
