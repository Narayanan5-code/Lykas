import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import './../scss/bootstrap.min.css'
import './../scss/login-register.scss'
import { TextField } from '@material-ui/core';


function Login() {

   const history = useHistory();

   const { register, handleSubmit, errors, control} = useForm();
  
   const onsubmit = async event => {

      try {
         const signin = await Auth.signIn(event.email, event.password)
            .then(async data => {

               const attributes = await Auth.userAttributes(data);
            
               if (attributes[4].getValue('value') === '0') {
                  history.push("/securityquestion")
               }
               else {
                  history.push("/dashboard")
               }
            })
            .catch(error => {
               console.log(error)
               if (error['code'] === "NotAuthorizedException") {
                  alert("Username or Password is incorrect")
               }
               if (error['code'] === "UserNotConfirmedException") {
                  alert("User is not confirmed")
               }
            })
      }
      catch {
         history.push("/register")
      }
   }



   return (

      <div className="login">
         <header id="sticked-menu" className="header header-v5">
            <div className="container">
               <div className="logo">
                  <div className="mm-toggle visible-xs visible-sm">
                     <i className="fa-remove fa fa-bars"></i><span className="mm-label">Menu</span>
                  </div>
                  <img src="logo.png" style={{ width: "35%", height: "15%" }} />
               </div>
               <nav className="navi-desktop-site hidden-sm hidden-xs">
                  <ul className="navi-level-1 uppercase">
                     <li className="has-sub">
                        <a onClick={(event) => {
                           event.preventDefault()
                           history.push('/')
                        }} >Home</a>
                     </li>
                     <li className="has-sub">
                        <a href="servicesList.html">Product</a>
                     </li>
                     <li className="has-sub">
                        <a href="projectList.html">About us </a>
                     </li>
                     <li className="has-sub">
                        <a href="blogList.html">Client Profile</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </header>

         <section className="login-section" id="loginNow">
            <div className="container">
               <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-4 login-left-pane animate__animated animate__bounceInDown">
                     <h1>Welcome</h1>
                     <p className="register-text">Are you new user? <a href="" onClick={(event) => {
                        event.preventDefault()
                        history.push('/register')
                     }} id="register">Create an account.</a></p>

                     <form className="col-xs-12 login-form" name="contact" onSubmit={handleSubmit(onsubmit)}>
                        <div className="row">

                           <div>
                              <Controller
                                 as={<TextField label="Email" variant="outlined" />}
                                 name="email"
                                 rules={{
                                    required: true,
                                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                 }}
                                 defaultValue=""
                                 control={control}
                              />
                              {errors.email && errors.email.type === "required" && (<p className="textbox-error-msg">Email is required</p>)}
                              {errors.email && errors.email.type === "pattern" && (<p className="textbox-error-msg">Enter a vaild email</p>)}
                           </div>

                           <p className="forgot-pwd">
                              <a href="" onClick={(event) => {
                                 event.preventDefault()
                                 history.push('/forgetpwd')
                              }} id="forgot" >Forgot password?</a></p>
                           <div>
                              <Controller
                                 as={<TextField label="Password" variant="outlined" />}
                                 name="password"
                                 rules={{
                                    required: true,
                                    pattern: /^(?=.{8,15})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/
                                 }}
                                 defaultValue=""
                                 control={control}
                              />
                           </div>
                           {errors.password && errors.password.type === "required" && (<p className="textbox-error-msg" >Password is required</p>)}
                           {errors.password && errors.password.type === "pattern" && (
                              <em className="textbox-error-msg">A minimum 8 characters password contains a combination of <strong>uppercase and lowercase letter</strong> and <strong>number</strong>.</em>)}
                           <div className="form-group remember-device">

                              <div>
                                 <label>
                                    <input type="checkbox" /> Remember this device
                              </label>
                              </div>
                           </div>
                           <button type="submit" className="btn btn-primary">Sign-in</button>
                        </div>
                     </form>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-8 login-right-pane animate__animated animate__fadeInLeftBig">
                     <div className="registration-video-holder">
                        <img src="images1/login-register/login-banner.png" className="banner" alt="Financial planning should be accessible to everyone" />
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <footer className=" bg-dark footer">
            <div className="container">
               <div className="row">

                  <div className="col-md-12 footer-link">
                     <p>Copyright © 2021 LYKAS. All rights reserved.</p>
                     <ul>
                        <li><a href="about.html">Home </a></li>
                        <li><a href="contact.html">Product </a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Client Profile </a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );

}




export default Login;
