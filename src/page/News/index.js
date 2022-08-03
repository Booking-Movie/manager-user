import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NewInfoList from '../../components/NewInfoList'
import { getAllNewAction } from '../../redux/Action/New_Action'

const NewsPage = props => {
  const dispatch = useDispatch()
  const { newList } = useSelector(state => state.ManagerNewsReducer)
  useEffect(() => {
    dispatch(getAllNewAction())
  }, [])
  return (
    <div className="width">
      <div className="mb-[96px]">
        <h1>NEWS MOVIE</h1>
        <div className="grid grid-cols-12 gap-4 my-6">
          {newList
            .filter(item => {
              return item.type_name === 'Movie'
            })
            .map(listNews => {
              return <NewInfoList newItem={listNews} />
            })}
        </div>
        <div className="text-center mt-4 font-semibold text-lg">
          <NavLink exact to="news">
            <button className="btn-secondary">See All News Movie</button>
          </NavLink>
        </div>
      </div>
      <div className="mb-[96px]">
        <h1 className="my-6">NEWS DISCOUNT</h1>
        <div className="grid grid-cols-12 gap-4 my-6">
          {newList
            .filter(item => {
              return item.type_name === 'Discount '
            })
            .map(listNews => {
              return <NewInfoList newItem={listNews} />
            })}
        </div>
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to="news">
            <button className="btn-secondary">See All News Discount</button>
          </NavLink>
        </div>
      </div>
      <div>
        <h1 className="my-6">NEWS RECRUIT</h1>
        <div className="grid grid-cols-12 gap-4 my-6">
          {newList
            .filter(item => {
              return item.type_name === 'Recruit'
            })
            .map(listNews => {
              return <NewInfoList newItem={listNews} />
            })}
        </div>
        <div className="text-center mt-4 font-semibold text-lg hover:">
          <NavLink exact to="news">
            <button className="btn-secondary">See All Recruit</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
