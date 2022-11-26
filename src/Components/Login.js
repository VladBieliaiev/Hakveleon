import { useEffect, useState } from "react"
import axios from 'axios';
import Main from "./Main";
import { Register } from "./Register";


export const Login = ({ register, setRegister }) => {
   const [profile, setProfile] = useState()
   const [userName, setUserName] = useState()
   const [userPassword, setUserPassword] = useState()
   const [success, setSucess] = useState(false)



   const handleSubmit = async (e) => {
      e.preventDefault();
      if (userName === profile.data.name.toLowerCase() && userPassword === profile.data.password) {
         setSucess(true);
      }
   }

   const fetchProfile = async () => {
      try {
         const resp = axios(`https://sport.herokuapp.com/v1/user/1`)
            .then(resp => setProfile(resp));
      } catch (error) {
         console.log(error.response);
      }
   };

   useEffect(() => {
      fetchProfile();
   }, [])



   return (
      <div className="containerForm">

         {success ? (
            <Main setRegister={setRegister} />
         ) : (
            <div>
               <form className="userForm">
                  <h1 className="formTitle">Login</h1>
                  <label className="formLabel">
                     Username:
                  </label>
                  <input
                     type="text"
                     label="name...."
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <label className="formLabel">
                     Password:
                  </label>
                  <input
                     type="text"
                     label="pass...."
                     onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <button
                     className="formBtn"
                     onClick={handleSubmit}
                  >
                     Login
                  </button>
                  <button
                     className="formBtn"
                     onClick={() => setRegister(prev => !prev)}
                  >
                     Register
                  </button>
               </form>

            </div>
         )}
      </div>
   )
}