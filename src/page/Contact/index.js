import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { MovieSlider } from "../../components/CarouselSlick"
import ContactFrom from "../../components/FromContact"
import { SliderNew } from "../../components/SliderNews"
import { getAllMovieAction } from "../../redux/Action/Movie_Action"
import { getAllNewAction } from '../../redux/Action/New_Action'
import * as Icon from 'react-feather'

const ContactPage = () => {
  const dispatch = useDispatch()
  const { newList } = useSelector(state => state.ManagerNewsReducer)
  const { movieShowingList } = useSelector(state => state.ManagerMovieReducer)
  useEffect(() => {
    dispatch(getAllNewAction())
    dispatch(getAllMovieAction())
  }, [dispatch])
  return (
    <>
      <div className="width mt-6">
        <h1 className="my-6 uppercase">Contact Us</h1>
        <div className="flex justify-between gap-x-4 mb-[96px]">
          <div className="contact-info">
            <h3>Address</h3>
            <div className="flex items-center gap-x-3">
              <Icon.MapPin size={32} color='black' />
              <p>135 Hai Bà Trưng, P. Bến Nghé, Q.1, TP.HCM</p>
            </div>
          </div>
          <div className="contact-info">
            <h3>Lets Talk</h3>
            <div className="flex items-center gap-x-3">
              <Icon.PhoneCall size={32} color='black' />
              <p>+840778655514</p>
            </div>
          </div>
          <div className="contact-info">
            <h3>General Support</h3>
            <div className="flex items-center gap-x-3">
              <Icon.Mail size={32} color='black' />
              <p>phonglvh998@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mb-[96px]">
          <h1 className="mb-6 uppercase">Send Contact Message</h1>
          <ContactFrom />
        </div>
        <div className="mb-[96px]">
          <h1 className="my-6">NOW COMMING</h1>
          <MovieSlider movies={movieShowingList} />
        </div>
        <div>
          <h1 className="my-6">PROMOTION</h1>
          <SliderNew data={newList} type={'Recruit'} />
        </div>
      </div>
    </>
  )
}

export default ContactPage
