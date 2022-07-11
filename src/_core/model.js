export class InfoTicket {
  user_id = 0
  movie_id = 0
  cinema_id = 0
  showtime_id = 0
  user_booking = ''
  seat_id = 0
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

export class BookingMovie {
  name_seat = ''
  status_seat = ''
  price = ''
  user_id = 0
  movie_id = 0
  cinema_id = 0
  constructor() {}
}
