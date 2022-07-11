import axios from 'axios'
import _ from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemShowTime from '../ItemShowtime'

const ShowTime = props => {
  const { id } = props
  console.log('🚀 ~ file: index.js ~ line 9 ~ id', id)
  console.log('🚀 ~ file: index.js ~ line 9 ~ props', props.id)
  const { detailMovie } = props
  const { userLogin } = useSelector(state => state.ManagerAuthReducer)
  const [filterCinema, setFilterCinema] = useState([])
  const [selectCinema, setSelectCinema] = useState('')
  console.log('🚀 ~ file: index.js ~ line 12 ~ filterCinema', filterCinema)

  const handleSubmit = async cinema => {
    console.log('🚀 ~ file: index.js ~ line 21 ~ cinema', cinema)
    setSelectCinema(cinema)
  }
  function getFilteredList() {
    if (!selectCinema) {
      return filterCinema
    }
    return filterCinema?.filter(item => item.name_cinema === selectCinema)
  }

  const filterList = getFilteredList()
  console.log('🚀 ~ file: index.js ~ line 28 ~ filterList', filterList)
  var filteredList = useMemo(getFilteredList, [selectCinema, filterCinema])
  useEffect(() => {
    const fetchMovie = () => {
      axios({
        url: `http://localhost:7000/api/v1/movie-cinema/${id}`,
        method: 'GET'
      })
        .then(res => {
          console.log('🚀 ~ file: index.js ~ line 29 ~ fetchMovie ~ res', res.data)
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
