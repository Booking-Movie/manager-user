export class InfoTicket {
  user_id = 0
  movie_id = 0
  cinema_id = 0
  showtime_id = 0
  user_booking = ''
  danhSachVe = []
  constructor() {}
}

export class Seat {
  name_seat = ''
  price = ''
  showtime_id = ''
  status_seat = true
  constructor() {}
}

export class Payment {
  user_id = ''
  movie_id = ''
  cinema_id = ''
  user_booking = ''
  email = ''
  name_movie = ''
  name_cinema = ''
  time_start = ''
  start_date = ''
  code_theater = ''
  total = ''
  data = []
  booking_seat = []
}

export class BookingMovie {
  name_seat = ''
  status_seat = ''
  price = ''
  user_id = 0
  movie_id = 0
  cinema_id = 0
  constructor() {}
}
