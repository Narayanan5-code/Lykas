import { useState,React  } from "react";
import { Auth } from "aws-amplify";
import axios from "axios"


function ForgetpasswordScreen() {

    const [displayResetPwd,setDisplayunit] = useState({codesent:false});

    const [codedetails,setCodedetails] = useState({concode:"",newpassword:"",confirmnewpassword:""})

    const [userdetails,setUserdetails] = useState({ email:"",code:"",answer:""})

    const onconfirmcode = async event =>{
       event.preventDefault();

       if(codedetails.newpassword === codedetails.confirmnewpassword){
          Auth.forgotPasswordSubmit(userdetails.email,codedetails.concode,codedetails.newpassword).then(data =>{
             console.log(data)
          })
       }
    }

    const onsubmit = async event => {

      event.preventDefault();

        const subdetails = {
            "email": userdetails.email,
            "questioncode":userdetails.code,
            "answer":userdetails.answer
        }

        var verified = false;

        await axios.post("http://localhost:4000/forgetpwd",subdetails).then(resp =>{
            if(resp.status === 200){
               verified = true}})

        if(verified){
         Auth.forgotPassword(userdetails.email).then(data =>{
            setDisplayunit({codesent:true})
            alert("A code has been sent to " + data['Destination'])  
         })
        }
    }

    return (
      displayResetPwd.codesent?
         <div className="forgetpwd">
       
       <header id="sticked-menu" className="header header-v5">
          <div className="container">
             <div className="logo">
                <div className="mm-toggle visible-xs visible-sm">
                   <i className="fa-remove fa fa-bars"></i><span className="mm-label">Menu</span>
                </div>
                <img src="logo.png" style={{width:"35%",height:"15%"}}/>
             </div>
             <nav className="navi-desktop-site hidden-sm hidden-xs">
                <ul className="navi-level-1 uppercase">
                   <li className="has-sub">
                      <a href="index.html">Home</a>
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
                        <form onsubmit={onsubmit} className="col-xs-12 login-form" name="contact" >
                           <div className="row">
                              <div className="form-group form-group-ani-label">
                                 <label htmlFor="reset_yourEmail"> Confirmation Code</label>
                                 <input type="email" className="form-control" name="reset_yourEmail" id="reset_yourEmail"
                                 onChange =  {e=> setCodedetails({...codedetails,concode:e.target.value})}
                                 value = {codedetails.concode} />
                              </div>

                              <div className="form-group form-group-ani-label">
                                 <label htmlFor="reset_yourEmail">New Password</label>
                                 <input type="email" className="form-control" name="reset_yourEmail" id="reset_yourEmail"
                                 onChange =  {e=> setCodedetails({...codedetails,newpassword:e.target.value})}
                                 value = {codedetails.newpassword} />
                                 </div>
                              <div className="form-group form-group-ani-label">
                                 <label htmlFor="reset_secAns1">Answer</label>
                                 <input type="email" className="form-control" name="reset_secAns1" id="reset_secAns1" 
                                  onChange =  {e=> setCodedetails({...codedetails,confirmnewpassword:e.target.value})}
                                  value = {codedetails.confirmnewpassword}/>
                                 <div className="textbox-error-msg">Password does not match</div>
                              </div>
                              <button type="submit" className="btn btn-primary">Reset</button>
                              <div className="alert alert-success">
                                New password has been changed
                              </div>
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
         
        :
            <div className="forgetpwd">
       
            <header id="sticked-menu" className="header header-v5">
          <div className="container">
             <div className="logo">
                <div className="mm-toggle visible-xs visible-sm">
                   <i className="fa-remove fa fa-bars"></i><span className="mm-label">Menu</span>
                </div>
                <img src="logo.png" style={{width:"35%",height:"15%"}}/>
             </div>
             <nav className="navi-desktop-site hidden-sm hidden-xs">
                <ul className="navi-level-1 uppercase">
                   <li className="has-sub">
                      <a href="index.html">Home</a>
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
                        <form onSubmit={onsubmit} className="col-xs-12 login-form">
                           <div className="row">
                              <div className="form-group form-group-ani-label">
                                 <label htmlFor="reset_yourEmail">Email</label>
                                 <input type="email" className="form-control" name="reset_yourEmail" id="reset_yourEmail"
                                 onChange =  {e=> setUserdetails({...userdetails,email:e.target.value})}
                                 value = {userdetails.email} />
                                 <div className="textbox-error-msg">Please enter valid email ID</div>
                              </div>

                              <div className="form-group select-box">
                                 <label htmlFor="reset_secQuestion1">Password Recovery Question</label>
                                 <select name="reset_secQuestion1" id="reset_secQuestion1">
                                 <option value="" disabled=""  onChange =  {e=> setUserdetails({...userdetails,questioncode:e.target.value})}>Password Recovery Question</option>
							<option value="1">What is your mother's maiden name?​</option>
							  <option value="2">What is the name of your first pet?​</option>
							  <option value="3">What was your first car?​</option>
							  <option value="4">What elementary school did you attend?​​</option>
							  <option value="5">What is the name of the town where you were born?​</option>
							  <option value="6">When you were young, what did you want to be when you grew up?​​</option>
							  <option value="7">Who was your childhood hero?​</option>
							  <option value="8">Where was your best family vacation as a kid?​​</option>
							  <option value="7">What was the name of your elementary / primary school?​​</option>
							  <option value="8">In what city or town does your nearest sibling live?​​</option>
                                 </select>
                                 <div className="textbox-error-msg">Please select your question</div>
                              </div>
                              <div className="form-group form-group-ani-label">
                                 <label htmlFor="reset_secAns1">Answer</label>
                                 <input type="email" className="form-control" name="reset_secAns1" id="reset_secAns1" 
                                  onChange =  {e=> setUserdetails({...userdetails,answer:e.target.value})}
                                  value = {userdetails.answer}/>
                                 <div className="textbox-error-msg">Please enter your answer</div>
                              </div>
                              <input type="submit" className="btn btn-primary" value="Verify" />
                              <div className="alert alert-success">
                                Password reset link sent to your registered email ID. Please check your mail.
                              </div>
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

export default ForgetpasswordScreen;