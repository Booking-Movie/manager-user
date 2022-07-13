import _ from 'lodash'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const FilterResult = props => {
  const { filteredDate } = props

  const day = new Date()
  const newDate = moment(day).format('DD/MM/YYYY')

  return (
    <>
      {filteredDate.map(item => {
        return (
          <>
            {_.sortBy(item.show_time, ['time_start'])
              .filter(time => {
                return moment(time.start_date).format('DD/MM/YYYY') === newDate
              })
              .map(time => {
                return (
                  <div div key={time.id} className="gap-y-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1 ">
                    <NavLink
                      to={`/booking-page/seat/${time.id}`}
                      className="hover:bg-black hover:text-white hover:border-black rounded-lg tracking-[1px]  w-full px-2 py-2 text-lg text-black  font-semibold border-2 transition-colors button-tranform"
                    >
                      {moment(time.time_start, 'HH:mm:ss').format('HH:mm')}
                    </NavLink>
                  </div>
                )
              })}
          </>
        )
      })}
    </>
  )
}

export default FilterResult
