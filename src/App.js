import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import Seat from './page/Seat'
import './index.css'
import BookingPage from './page/BookingPage'
import Home from './page/Home'
import { UserTempalete } from './templates'
import Signin from './page/Signin'
import Profile from './page/Profile'
import Payment from './components/Payment'
import SeeMore from './page/Seemore'
import NewsPage from './page/News'
import AboutPage from './page/About'
import FQAPage from './page/FQA'
import ContactPage from './page/Contact'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Signup from './page/Signinup'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { TICKET } from './util/setting/config'
import Ticket from './page/Ticket'

export const history = createBrowserHistory()

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
      <Router history={history}>
        <Switch>
          <Route path="/sign-in" exact component={Signin} />
          <Route path="/sign-up" exact component={Signup} />
          <UserTempalete path="/" exact Component={Home} />
          <UserTempalete path="/profile/:id" exact Component={Profile} />
          <UserTempalete path="/news" exact Component={NewsPage} />
          <UserTempalete path="/see-all-news" exact Component={NewsPage} />
          <UserTempalete path="/about" exact Component={AboutPage} />
          <UserTempalete path="/fqa" exact Component={FQAPage} />
          <UserTempalete path="/contact" exact Component={ContactPage} />
          <UserTempalete path="/seemore" exact Component={SeeMore} />
          <UserTempalete path="/booking-page/:id" exact Component={BookingPage} />
          <UserTempalete path="/booking-page/seat/:id" exact Component={Seat} />
          <UserTempalete path="/booking-page/seat/payment/:id" exact Component={Payment} />
          <UserTempalete path="/ticket" exact Component={Ticket} />
        </Switch>
      </Router>
    </PayPalScriptProvider>
  )
}

export default App
