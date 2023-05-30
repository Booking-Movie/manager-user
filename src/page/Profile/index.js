import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const detailUser = useSelector(state => state.ManagerAuthReducer.detailUser)
  console.log('🚀 ~ file: index.js ~ line 6 ~ Profile ~ detailUser', detailUser)
  const { avatar, username, email, phone, address, fullname } = detailUser
  return (
    <div className="my-[96px] flex justify-center gap-5 sm:px-5">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-5 justify-center items-center">
          {avatar ? (
            <img src={avatar} className="rounded-[50%] w-24 h-24" alt="Avarta Here" />
          ) : (
            <img src="/default-avatar.png" className="rounded-[50%] w-24 h-24" alt="Avarta Here" />
          )}
          <h1 className="text-2xl font-semibold">{username}</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            <b>Full Name:</b> {fullname}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Address:</b> {address}
          </p>
          <p>
            <b>Phone:</b> {phone}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Profile
