import axios from 'axios'
import _ from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemShowTime from '../ItemShowtime'

const ShowTime = props => {
  const { id } = props
  const [filterCinema, setFilterCinema] = useState([])
  const [selectCinema, setSelectCinema] = useState('')

  const handleSubmit = async cinema => {
    setSelectCinema(cinema)
  }
  function getFilteredList() {
    if (!selectCinema) {
      return filterCinema
    }
    return filterCinema?.filter(item => item.name_cinema === selectCinema)
  }
  var filteredList = useMemo(getFilteredList, [selectCinema, filterCinema])
  useEffect(() => {
    const fetchMovie = () => {
      axios({
        url: `http://localhost:7000/api/v1/cinema/filter-cinema/${id}`,
        method: 'GET'
      })
        .then(res => {
          setFilterCinema(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchMovie()
  }, [id])
  return (
    <div className="flex flex-col">
      <h1 className="text-black text-2xl font-semibold mb-5">SHOWTIME</h1>
      <ItemShowTime
        filteredList={filteredList}
        filterCinema={filterCinema}
        handleSubmit={cinema => handleSubmit(cinema)}
      />
    </div>
  )
}

export default ShowTime
