import React, { useEffect } from 'react'
import ProfileComponent from '../Components/ProfileComponent'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log("🚀 ~ file: Profile.js:9 ~ Profile ~ token:", token)
  const user = useSelector((state)=>state.user.currentUser)
  console.log("🚀 ~ file: Profile.js:11 ~ Profile ~ user:", user)
  window.scrollTo(0, 0);


 if(!token || user){
  navigate('/login')
 }
 
  return (
    <div><ProfileComponent data={user}/></div>
  )
}

export default Profile