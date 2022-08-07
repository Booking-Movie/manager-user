/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React, { Fragment, memo, useCallback, useEffect } from 'react'
import { useState } from 'react'
import * as Icon from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from '../../components/Button'
import LinkComponents from '../../components/LinkComponent'
import { getDetailUser, signOut } from '../../redux/Action/Auth_Action'
import _ from 'lodash'
import { getAllSearchResult } from '../../redux/Action/Movie_Action'
import Search from '../../page/Search'
import SearchResult from '../../components/SearchResult'

const Header = () => {
  const dispatch = useDispatch()
  const [openHamBurgerMenu, setOpenHamBurgerMenu] = useState(false)
  const [openProfileMenu, setOpenProfileMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openSearchResult, setOpenSearchResult] = useState(false)
  const { userLogin, detailUser } = useSelector(state => state.ManagerAuthReducer)
  const { searchResult } = useSelector(state => state.ManagerMovieReducer)
  const { avatar, username, id } = detailUser
  const { pathname } = useLocation()


  const onSearchSubmit = async term => {
    dispatch(getAllSearchResult(term))
    setOpenSearchResult(true)
  }
  const clearResults = useCallback(() => {
    setOpenSearchResult(false)
  }, [])
  useEffect(() => {
    setOpenHamBurgerMenu(false)
    setOpenProfileMenu(false)
    setOpenSearch(false)

    const screenWidth = window.innerWidth
    function handleResize() {
      if (screenWidth >= 1024) {
        setOpenHamBurgerMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)
    if (_.isEmpty(userLogin)) {
      return ''
    } else {
      return dispatch(getDetailUser(userLogin.payload.id))
    }
  }, [userLogin, dispatch, pathname])

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <NavLink NavLink to="/sign-in">
            <Button className={`btn-secondary  ${openSearch ? 'hidden lg:block' : ''} `}>Sign In</Button>
          </NavLink>
        </Fragment>
      )
    }
    return (
      <>
        <div className={`flex items-center ${openSearch ? 'hidden lg:block' : ''}`}>
          <button className="btn-infomation_user" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
            {avatar ? (
              <img src={avatar} className="w-14 h-14 rounded-[50%]" alt="Avarta Here" />
            ) : (
              <img src="/default-avatar.png" className="w-14 h-14 rounded-[50%]" alt="Avarta Here" />
            )}
            <span className="text-lg sm:text-base font-semibold sm:hidden">{username}</span>
          </button>
          <ul className={`profile-menu ${openProfileMenu ? '' : 'hidden'}`}>
            <li>
              <NavLink to={`/profile/${id}`}>
                <Button className="flex gap-x-5 items-center p-2">
                  <Icon.User size={32} color="black" />
                  <h1 className="text-lg font-semibold sm:text-base">Profile</h1>
                </Button>
              </NavLink>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Button
                  className="flex gap-x-5 items-center p-2 "
                  onClick={() => {
                    dispatch(signOut())
                  }}
                >
                  <Icon.LogOut size={32} color="black" />
                  <h1 className="text-lg font-semibold sm:text-base">Log out</h1>
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  }

  return (
    <nav className="navbar-header z-[102]">
      {/* <div className={`${openHamBurgerMenu ? '' : 'fixed inset-0 w-[100%] z-[100] bg-[rgba(255, 255, 255, 0.5)]'}`}></div> */}
      {/* <div className={`flex items-center ${openSearch ? 'hidden lg:block' : ''}`}>
      </div> */}
      <div className="flex flex-row items-center justify-between px-5 w-[100%] mx-auto max-w-[1500px] z-[101]">
        <img src="/logoMovies.png" className={`lg:w-28  ${openSearch ? 'hidden lg:block' : ''} `} alt="Logo Image" />

        <div className={`lg:block sm:w-full ${openSearch ? 'block z-[120]' : 'hidden'}`}>
          <div className="flex items-center gap-x-2 relative lg:w-[480px] sm:w-full">
            <div className="absolute z-[50] top-[50%] translate-y-[-50%] left-5">
              <Icon.Search size={16} color="gray" />
            </div>
            <Search onSearchSubmit={term => onSearchSubmit(term)} clearResults={term => clearResults(term)} />
            <div
              className={`flex flex-col gap-5 absolute w-[480px] top-[72px] max-h-[350px] h-auto sm:w-[100%]  overflow-auto transition-all p-6 bg-white text-subtitle font-semibold z-0 shadow-lg ${openSearchResult ? '' : 'hidden'
                } `}
            >
              {searchResult.map(result => {
                return <SearchResult result={result} />
              })}
            </div>
            <button className="btn-search lg:hidden" onClick={() => setOpenSearch(false)}>
              <Icon.X size={32} color="black" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex lg:hidden">
            {openHamBurgerMenu ? (
              <button onClick={() => setOpenSearch(false)}>
                <Icon.Search size={56} color="black" />
              </button>
            ) : (
              <button className={`${openSearch ? 'hidden' : ''}`} onClick={() => setOpenSearch(true)}>
                <Icon.Search size={56} color="black" />
              </button>
            )}
          </div>
          {renderLogin()}
          <div className={`flex ${openSearch ? 'hidden' : ''}`}>
            <div className="flex items-center">
              <button
                className="border-2 rounded-2xl px-3 py-1"
                onClick={() => setOpenHamBurgerMenu(!openHamBurgerMenu)}
              >
                <Icon.MoreHorizontal size={35} color="black" />
              </button>
              <div className={`hamburger-menu_open gap-9 ${openHamBurgerMenu ? '' : 'hidden'}`}>
                <div className="flex w-full flex-col flex-grow">
                  <button className="flex justify-end" onClick={() => setOpenHamBurgerMenu(!openHamBurgerMenu)}>
                    {' '}
                    <Icon.X size={32} color="black" />
                  </button>
                  <div className="flex-col flex-grow">
                    <ul>
                      <li>
                        <LinkComponents link={'/'} title="Home">
                          <Icon.Home size={32} color="black" />
                        </LinkComponents>
                      </li>
                      <li>
                        <LinkComponents link={'/about'} title="About">
                          <Icon.Home size={32} color="black" />
                        </LinkComponents>
                      </li>
                      <li>
                        <LinkComponents link={'/news'} title="News">
                          <Icon.Info size={32} color="black" />
                        </LinkComponents>
                      </li>
                      <li>
                        <LinkComponents link={'/contact'} title="Contact">
                          <Icon.PhoneCall size={32} color="black" />
                        </LinkComponents>
                      </li>
                      <li>
                        <LinkComponents link={'/fqa'} title="Faq's">
                          <Icon.PhoneCall size={32} color="black" />
                        </LinkComponents>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex justify-center items-center">
                      <div className="my-3 h-[1px] bg-[#E8E8E8] m-4 w-[100%]" />
                    </div>
                    <ul className="flex flex-row items-end text-center gap-8">
                      <li>
                        <a href="https://twitter.com/rarible">
                          <img width="30px" height="30px" src="/1.png" alt="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="http://instagram.com/rarible">
                          <img width="30px" height="30px" src="/instagram.jpg" alt="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.gg/cdaFbV5">
                          <img width="30px" height="30px" src="/3.png" alt="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <img width="30px" height="30px" src="/5.png" alt="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://mail.google.com/">
                          <img width="30px" height="30px" src="/6.png" alt="twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default memo(Header)
