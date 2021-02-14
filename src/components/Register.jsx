import {React,useRef} from 'react';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import TextField from '@material-ui/core/TextField';


import './../scss/bootstrap.min.css'
import './../scss/login-register.scss'

function Register() {


  const history = useHistory();

  const { register, handleSubmit, errors, control,watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");



  const onsubmit = async event => {
  

    try {
      const signup = await Auth.signUp({

        'username': event.email,
        'password': event.password,
        'attributes': {
          'email': event.email,
          'custom:RecoveryQuestion': "empty",
          'custom:RecoveryAnswer': "empty",
          'custom:Recque': Number(0).toString()
        }
      })
        .then(data => {
          console.log()
          alert("A verificationmail has been sent to " + event.email)
          history.push('/login')
        })
        .catch(error => {
          if (error['code'] === "UsernameExistsException") {
            console.log("User already exists")
          }
        });
    }
    catch {
      console.log("Something went wrong")
    }

  }



  return (
    <div className="Register">

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
                <a onClick={e => {
                  e.preventDefault()
                  history.push('/login')
                }}>Home</a>
              </li>
              <li className="has-sub">
                <a href="">Product</a>
              </li>
              <li className="has-sub">
                <a href="">About us </a>
              </li>
              <li className="has-sub">
                <a href="">Client Profile</a>
              </li>
            </ul>
          </nav>
        </div>

      </header>

      <section className="login-section registration-section" id="getStarted">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 login-left-pane animate__animated animate__bounceInDown">
              <h1>Get Started!</h1>
              <p className="register-text">Have an account? <a href="" onClick={e => {
                history.push('/login')
              }} id="login">Login here.</a></p>
              <form className="col-xs-12 login-form" name="contact" onSubmit={handleSubmit(onsubmit)}>
                <div className="row">
                  <div>
                    <Controller
                      as={<TextField type="text" label="Email" variant="outlined" />}
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
                  <div>
                    <Controller
                      as={<TextField type="password" label="Password" variant="outlined" />}
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

                  <div>
                    <Controller
                      as={<TextField type="password" label="Re-Type Password" variant="outlined" />}
                      name="repassword"
                      rules={{
                        required: true,
                        validate: value =>
                        value === password.current || "The passwords do not match"
                        }}
                      defaultValue=""
                      control={control}
                    />
                    {errors.repassword && errors.repassword.type === "required" && (<div className="textbox-error-msg" >Password is required</div>)}
                    {errors.repassword && <p className="textbox-error-msg">{errors.repassword.message}</p>}
                  </div>

                <button type="submit" className="btn btn-primary" >Register</button>
                </div>
              </form>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-8 login-right-pane animate__animated animate__fadeInLeftBig">
              <div className="registration-video-holder">
                <img src="images1/login-register/register-video-place-holder.jpg" className="banner" alt="Financial planning should be accessible to everyone" />
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


export default Register;