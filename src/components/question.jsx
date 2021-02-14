import { React } from "react";
import { useHistory } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import { useForm, Controller } from 'react-hook-form'
import { MenuItem, InputLabel, TextField, Select, FormControl } from '@material-ui/core';


function RecoveryQuestion() {

   const history = useHistory();


   const { register, handleSubmit, errors, control } = useForm();


   const onsubmit = async event => {
      console.log(event)

      const RecoveryQuestion = event.Recoveryquestion

      const RecoveryAnswer = event.RecoveryAnswer

   

      await Auth.currentAuthenticatedUser()
         .then(async user => {

            await Auth.updateUserAttributes(user, {
               'custom:Recque': '1',
               'custom:RecoveryQuestion': RecoveryQuestion,
               'custom:RecoveryAnswer': RecoveryAnswer
            })

            history.push('/dashboard')

         });
   }
   return (
      <div className="recoveryquestion">

         <header id="sticked-menu" className="header header-v5">
            <div className="container">
               <div className="logo">
                  <div className="mm-toggle visible-xs visible-sm">
                     <i className="fa-remove fa fa-bars"></i><span className="mm-label">Menu</span>
                  </div>
                  <img src="logo.png" style={{ width: "35%", height: "15%" }} alt=""/>
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


         <section className="login-section forgot-pwd-section" >
            <div className="container">
               <div className="row">
                  <div className="clearfix col-xs-12 col-sm-12 col-md-6 login-left-pane">
                     <h1>Reset password</h1>
                     <form className="col-xs-12 login-form" name="contact" onClick={handleSubmit(onsubmit)}>
                        <div className="row">


                           <div className="form-group select-box">


                              <div>
                                 <FormControl variant="outlined" className="formControl">
                                    <InputLabel id="demo-simple-select-outlined-label">Password Recovery Question</InputLabel>
                                    <Controller as={
                                       <Select
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined-label">
                                          <MenuItem disabled  ><em>Password Recovery Question</em></MenuItem>
                                          <MenuItem value="1">What is your mother's maiden name?​</MenuItem>
                                          <MenuItem value="2">What is the name of your first pet?</MenuItem>
                                          <MenuItem value="3">What was your first car?</MenuItem>
                                          <MenuItem value="4">What elementary school did you attend?</MenuItem>
                                          <MenuItem value="5">What is the name of the town where you were born?​</MenuItem>
                                          <MenuItem value="6">When you were young, what did you want to be when you grew up?</MenuItem>
                                          <MenuItem value="7">Who was your childhood hero?​</MenuItem>
                                          <MenuItem value="8">Where was your best family vacation as a kid?</MenuItem>
                                          <MenuItem value="9">What was the name of your elementary / primary school?</MenuItem>
                                          <MenuItem value="10">In what city or town does your nearest sibling live?​​</MenuItem>
                                       </Select>}
                                       name="Recoveryquestion"
                                       defaultValue=""
                                       control={control}
                                    />
                                    
                                 </FormControl>
                              </div>
                              <div>
                                 <Controller
                                    as={<TextField type="text" label="Password Recovery Answer" variant="outlined" />}
                                    name="RecoveryAnswer"
                                    rules={{
                                       required: true,
                                    }}
                                    defaultValue=""
                                    control={control}
                                 />
                                 {errors.RecoveryAnswer && errors.RecoveryAnswer.type === "required" && (<p className="textbox-error-msg">All field are required</p>)}
                              </div>

                           </div>

                           <button type="submit" className="btn btn-primary">Reset</button>

                        </div>
                     </form>
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

export default RecoveryQuestion;