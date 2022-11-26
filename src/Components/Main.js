import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Main() {
   const [profile, setProfile] = useState();
   const [users, setUser] = useState()

   const fetchUsers = async () => {
      try {
         // const resp = axios(`https://sport.herokuapp.com/v1/user/1`)
         const resp = axios('https://randomuser.me/api/?results=15')
            .then(resp => setUser(resp.data.results));
      } catch (error) {
         console.log(error.response);
      }
   }

   const fetchProfile = async () => {
      try {
         const resp = axios(`https://sport.herokuapp.com/v1/user/1`)
            // const resp = axios('https://randomuser.me/api/?results=5')
            .then(resp => setProfile(resp));
      } catch (error) {
         console.log(error.response);
      }
   }

   useEffect(() => {
      fetchUsers();
      fetchProfile();
   }, [setUser]);


   {
      if (users && profile) {
         return (
            <div className="containerMain">
               <div className="mainPage">
                  <div className="userProfile">
                     <img src="https://upcdn.io/12a1xsp/raw/uploads/2022/11/26/Vladysalv%20Bieliaiev-4SwS.png" />
                     <p>{profile.data.name}</p>
                     <p>{profile.data.lastName}</p>
                     <p>{profile.data.email}</p>
                     <p>{profile.data.location}</p>
                  </div>
                  <div className="usersBlocksGroup">
                     {users.map(i => <div className="usersBlock">
                        <img src={i.picture.large} />
                        <p>{i.name.first}</p>
                        <p>{i.name.last}</p>
                        <p>{i.email}</p>
                        <p>{i.location.city}</p>
                        <p>Contact</p>
                     </div>)}
                  </div>
               </div>
            </div>
         )
      }
   }
}
