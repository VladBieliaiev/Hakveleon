

export const User = ({ profile }) => {


   return (
      <div className="userProfile">
         <img src="https://upcdn.io/12a1xsp/raw/uploads/2022/11/26/Vladysalv%20Bieliaiev-4SwS.png" />
         <p>{profile.data.name}</p>
         <p>{profile.data.lastName}</p>
         <p>{profile.data.email}</p>
         <p>{profile.data.location}</p>
      </div>
   )
}