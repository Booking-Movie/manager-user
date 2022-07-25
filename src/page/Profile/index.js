import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const detailUser = useSelector(state => state.ManagerAuthReducer.detailUser)
  const { avatar, username, email, phone, address } = detailUser
  return (
    <div className="my-10 flex justify-center gap-5 sm:px-5">
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
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>CMND: 0123456789</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
    </div>
  )
}
export default Profile
