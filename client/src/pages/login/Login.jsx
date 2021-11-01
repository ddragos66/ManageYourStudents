import "./login.css"
import { loginCall } from "../../apiCalls"
import { useContext, useRef } from "react"
import { AuthContext } from "../../components/context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
}from "react-router-dom";
/* global gapi */



export default function Login() {
        const username = useRef();
        const email = useRef();
        const regEmail = useRef();
        const password = useRef();
        const regPassword = useRef();
        const regPasswordAgain = useRef();
        const history = useHistory();
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        const { user, isfetching, error, dispatch} = useContext(AuthContext);


        const sign_up_btn = ()=>{
          const sign_up_btn = document.getElementsByClassName("container");
          sign_up_btn[0].className="container sign-up-mode"
         }

         const sign_in_btn = () =>{ 
          const sign_in_btn = document.getElementsByClassName("container");
         sign_in_btn[0].className="container"
         }
         
        // if(localStorage["username"]){
        //         const user = {
        //                 username: localStorage["username"],
        //                 email: localStorage["email"],
        //                 password: "123"}
        //                 const res = axios.post("/auth/register", user);
        //         loginCall({
        //         email: localStorage["email"], 
        //         password: "123"
        // },dispatch)
        // }

        const handleClick = (e)=>{
          <Redirect to="/"/>
                e.preventDefault();
                loginCall({
                        email: email.current.value, 
                        password: password.current.value
                },dispatch
                );
                console.log(email.current.value);
                console.log(password.current.value);
        };

        const handleClickRegister = async(e)=>{
                e.preventDefault();
                <Redirect to="/"/>
                console.log(email.current.value)
                          const user = {
                          username: username.current.value,
                          email: email.current.value,
                          password: password.current.value
                  }
                  try {
                          const res = await axios.post("/auth/register", user);
                          console.log("Register succesfully "+ user);
                          //history.push("/");
                                  
                  } catch (err) {
                          console.log(user);
                
                
                }
        };
        console.log("aici 1 ");

        // const sign_up_btn = () =>{
        //   element.setAttribute(class, "container sign-up-mode sign-up-mode");
        // }

        
    return (
        <div >
          <script src="https://kit.fontawesome.com/f51dada446.js" crossOrigin="anonymous"></script>
       
          <div className="container">
      <div className="forms-container">
        <div className="signin-signup">

          <form action="#" onSubmit={handleClick} className="sign-in-form">
            
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input placeholder="email" type="email" required ref={email} placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input placeholder="password" type="password" required ref={password} placeholder="Password" />
            </div>
            <input type="submit" value="Sign in" onClick={handleClick} className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">

            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
          </form>

          <form action="#" onSubmit={handleClickRegister} className="sign-up-form">
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input placeholder="username" required ref={username} className="registerInput" />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input placeholder="email" type="email" required ref = {regEmail} className="registerInput" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input placeholder="password" type="password" required ref={regPassword} className="registerInput" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input placeholder="password again" type="password" required ref={regPasswordAgain} className="registerInput" />
            </div>

            <input type="submit" className="btn" value="Sign up" />

            <p className="social-text">Or Sign up with social platforms</p>

            <div className="social-media">

            <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>

          </form>

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              You don't have an account? Create one here!
            </p>
            <button className="btn transparent" onClick={sign_up_btn}  id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="./assets/teacher.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
                You can sign in over here!
            </p>
            <button className="btn transparent" onClick={sign_in_btn}  id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="./assets/tests.svg"  className="image" alt="" />
        </div>
      </div>
    </div>
        <script src="animations.js"></script>
        </div>
     
    )
}
