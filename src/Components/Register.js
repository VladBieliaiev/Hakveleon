import { useState } from "react"
import { Upload } from "upload-js";
import axios from 'axios';


export const Register = ({ userName, setUserName, userLastName, setUserLastName, userPassword, setUserPassword, userEmail, setUserEmail, userLocation, setUserLocation, image, setImage, setRegister }) => {

   const [success, setSucess] = useState(false)


   const handleSubmit = async e => {
      e.preventDefault();
      try {
         const resp = await axios.post("https://sport.herokuapp.com/v1/user", {
            name: userName,
            lastName: userLastName,
            password: userPassword,
            email: userEmail,
            location: userLocation,
            image: image,
         });
         console.log(resp);
         // setJson(resp.data)


      } catch (error) {
         console.log(error.data);
      }
   }

   const upload = Upload({

      // This is your API key:
      apiKey: "public_12a1xspFoHZRrrbZ8Ksp6zo9UCM7"

   })

   const onFileSelected = async event => {
      const file = event.target.files[0];
      const { fileUrl } = await upload.uploadFile(file)
      setImage(fileUrl)
      console.log(fileUrl);
   };



   return (
      <div className="containerForm" style={{ display: "flex", flexDirection: "column" }}>
         <form className="userForm">
            {success ? (
               <div>
                  <h1 className="formTitle">Succes!</h1>
                  <a href="#">Sign in!</a>
               </div>
            ) : (
               <>
                  <h1 className="formTitle">Register</h1>
                  <label className="formLabel">
                     First Name:
                  </label>
                  <input
                     type="text"
                     label="name...."
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <label className="formLabel">
                     Last Name:
                  </label>
                  <input
                     type="text"
                     label="name...."
                     onChange={(e) => setUserLastName(e.target.value)}
                  />
                  <label className="formLabel">
                     Password:
                  </label>
                  <input
                     type="password"
                     label="pass...."
                     onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <label className="formLabel">
                     Email:
                  </label>
                  <input
                     type="email"
                     label="email...."
                     onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <label className="formLabel">
                     Your location:
                  </label>
                  <input
                     type="text"
                     label="loacation...."
                     onChange={(e) => setUserLocation(e.target.value)}
                  />
                  <label className="formLabel">
                     Upload Img:
                  </label>
                  <input
                     type="file"
                     className="inputFile"
                     onChange={onFileSelected}
                  />
                  {image && (
                     <button
                        className="formBtn"
                        onClick={handleSubmit}
                     >
                        Accept
                     </button>
                  )}
               </>
            )}
         </form>
         <button
            className="formBtn"
            onClick={() => setRegister(prev => !prev)}
         >
            Back
         </button>
      </div >
   )
}