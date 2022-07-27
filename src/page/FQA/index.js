import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieSlider } from '../../components/CarouselSlick'
import FaqComponent from '../../components/FaqComponent'
import { getAllMovieAction } from '../../redux/Action/Movie_Action'

const FQAPage = () => {
  const { movieShowingList } = useSelector(state => state.ManagerMovieReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMovieAction())
  }, [])
  const [faqs, setFAQS] = useState([
    {
      type: 'Question',
      name: 'Why Become An Online Member',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'Your unique user name and password will be your key to a whole host of benefits! As an online member you can enjoy the privilege of: </br> </br> - Ticket booking facility.  </br> - Exciting contests where you win exclusive movie merchandise. </br> - Receive fortnightly E- Newsletter - The BST Wire - that gives you all the juice, the movie gossip, the latest at BST, cool contests and a whole lot more The best part of all - you get all of the above absolutely FREE, so what are you waiting for? Get cracking, register now!'
      }
    },
    {
      type: 'Question',
      name: '5 Simple Steps To Buy Tickets Online.',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'Step 1. Go to FREE REGISTRATION, submit details & your ID is activated! If already a member then go to MEMBER ZONE and LOGIN. You need to be a registered online member to avail of the ticket booking facility. Please remember your user name and password for all future bookings. </br> </br> Step 2. Click on MOVIES subsection NOW PLAYING You can click on the movie names to view details. </br> </br> Step 3. From the top band SELECT the region, cinema, movie and date, preferred show timing and the number of tickets, category and mode of delivery. </br></br> Step 4. SUBMIT! Check ticket details and even choose the seats of your choice. Enter your payment mode details and your booking is complete! </br></br> Step 5. NOTE your Transaction ID. It must be mentioned at the time of ticket collection at the cinema counter. Do Note: Tickets must be booked at least 2 hours before the show.'
      }
    },
    {
      type: 'Question',
      name: 'Can I Book Tickets In Advance?',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'YES, for movies that will start playing the following week (from Friday). Go to NEXT CHANGE section, click on your preferred show timing for a particular movie to start the booking process.'
      }
    },
    {
      type: 'Question',
      name: 'How can my tickets be cancelled?',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'Tickets can be cancelled in the booking history section of pvrcinemas.com, BST website, in.bookmyshow.com and BookMyShow app.'
      }
    },
    {
      type: 'Question',
      name: 'Can tickets can be cancelled immediately?',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'Tickets can be cancelled 10 mins after booking confirmation.'
      }
    },
    {
      type: 'Question',
      name: 'When will refund be processed?',
      open: false,
      acceptedAnswer: {
        type: 'Answer',
        text: 'Refund will be processed within 7 working days.'
      }
    }
  ])
  const toggleFAQ = index => {
    setFAQS(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }
        return faq
      })
    )
  }
  return (
    <>
      <div className="faqs width">
        <h1 className="text-2xl my-4">FAQS</h1>
        {faqs.map((faq, i) => {
          return <FaqComponent faq={faq} index={i} toggleFAQ={toggleFAQ} />
        })}
        <div className="my-14">
          <h1 className="text-2xl my-4">NOW COMMING</h1>
          <MovieSlider movies={movieShowingList} />
        </div>
      </div>
    </>
  )
}

export default FQAPage
