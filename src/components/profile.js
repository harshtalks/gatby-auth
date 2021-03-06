import React from 'react'
import { getUser } from '../services/auth'
const Profile = () => {
    return (
        <div className = "profile">
           <h1>Your Profile</h1> 
           <ul>
               <li>Name: {getUser().name}</li>
               <li>E-mail: {getUser().email}</li>
           </ul>
        </div>
    )
}

export default Profile
