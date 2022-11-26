import "./styles/App.css";
import "./styles/reset.css";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import Main from "./Components/Main";
import { useState } from "react";



function App() {
   const [userName, setUserName] = useState()
   const [userLastName, setUserLastName] = useState()
   const [userPassword, setUserPassword] = useState()
   const [userEmail, setUserEmail] = useState()
   const [userLocation, setUserLocation] = useState()
   const [image, setImage] = useState('')
   const [register, setRegister] = useState(false)


   return (
      <div >
         {register ? (
            <Register
               userName={userName}
               setUserName={setUserName}
               userLastName={userLastName}
               setUserLastName={setUserLastName}
               userPassword={userPassword}
               setUserPassword={setUserPassword}
               userEmail={userEmail}
               setUserEmail={setUserEmail}
               userLocation={userLocation}
               setUserLocation={setUserLocation}
               image={image}
               setImage={setImage} />
         ) : (<Login register={register} setRegister={setRegister} />)}
         {/* <Register /> */}
         {/* <Register
            userName={userName}
            setUserName={setUserName}
            userLastName={userLastName}
            setUserLastName={setUserLastName}
            userPassword={userPassword}
            setUserPassword={setUserPassword}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            userLocation={userLocation}
            setUserLocation={setUserLocation}
            image={image}
            setImage={setImage} /> */}
         {/* <Login /> */}
         {/* <Main /> */}
      </div>
   );
}

export default App;
