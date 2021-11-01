import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./topbar.css"
/* global gapi */
export default function Topbar() {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    
    function signOut() {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">YourStudents</span>
            </div>
            <div className="centerBar">
            <img src={/*user.profilePicture ? PF+user.profilePicture : */"./assets/avatar.jpg"} alt="" className="topbarImg" />
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <a href="#" className="signOut" onClick={signOut}>Sign out</a>
                </div>
                
            </div>
        </div>
    )
}
