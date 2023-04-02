import React from 'react'
import './ProfileScreen.css'
import Navbar from '../../components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profilescreen'>
      <Navbar />
      <div className="profilescreen_body">
        <h1>Edit Profile</h1>
        <div className="profilescreen_info">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
          alt="" />
          <div className="profilescreen_details">
            <h2>{user.email}</h2>
            <div className="profilescreen_plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className="profilescreen_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
