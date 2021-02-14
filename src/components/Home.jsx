import React from 'react';
import {useHistory} from 'react-router-dom'


function Home() {
  const history = useHistory();
  
  function toLogin() {
    history.push("/login"); 

  }
  function toRegister(){
    history.push("/register")
  }

  return (
    <div className="App">

         <div>
        <header id="sticked-menu" className="header header-v5">
          <div className="container">
             <div className="logo">
                <div className="mm-toggle visible-xs visible-sm">
                   <i className="fa-remove fa fa-bars"></i><span className="mm-label">Menu</span>
                </div>
                <h1 >LYKAS</h1>
             </div>
             <nav className="navi-desktop-site hidden-sm hidden-xs">
                <ul className="navi-level-1 uppercase">
                   <li className="has-sub">
                      <a href="index.html">Home</a>
                   </li>
                   <li className="has-sub">
                      <a href="#">Product</a>
                   </li>
                   <li className="has-sub">
                      <a href="#">About us </a>
                   </li>
                   <li className="has-sub">
                      <a href="#">Client Profile</a>
                   </li>
                    
                    <li className="has-sub">
                    <a >
                       <button onClick={toLogin} className="btn btn-important">Login</button>
                      </a>
                    </li>
                    <li className="has-sub" >
                    <a>
                        <button onClick={toRegister} className="btn btn-important btn-blue-color" >Get Started
                      </button>
                     </a>
                    </li>

                </ul>
             </nav>
          </div>
          
         
        </header>
        




    <section className="slider clearfix">
         <div className="fullwidthbanner-container">
          <div id="revolution-slider-home-3" className="slider-home-5">
            <ul>  
              
              <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
                 
                  <img src="images/Slider/5.jpg"  alt="slidebg1"  data-bgfit="cover" data-bgposition="center" data-bgrepeat="no-repeat"/>
              </li>
            </ul>
          </div>
        </div>
    </section>
    





<section className="padding-top-50">
            <div className="container">
               <div className="row">
                     
                     <div className="col-md-4">
                        <div className="item-blog">
                          <div className="thumbnail">
                              <a href="" className="img-blog-contain"><img src="images/Blog/3.jpg" alt=""/></a>
                              <div className="caption">
                                 <a href="#.html">
                                    <h4>Why</h4>
                                 </a>
                                 <p>
                                    Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                                 </p>
                                 <a className="learn-more" href="#.html">
                                    <i className="fa fa-caret-right" aria-hidden="true"></i>Learn More
                                 </a>
                              </div>
                           </div>
                          
                        </div>
                     </div>

                     <div className="col-md-4">
                        <div className="item-blog">
                          <div className="thumbnail">
                              <a href="" className="img-blog-contain"><img src="images/Blog/3.jpg" alt=""/>


                          </a> 
                              <div className="caption">
                                 <a href="#.html">
                                    <h4>Promise</h4>
                                 </a>
                                 <p>
                                    Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                                 </p>
                                 <a className="learn-more" href="#.html">
                                    <i className="fa fa-caret-right" aria-hidden="true"></i>Learn More
                                 </a>
                              </div>
                           </div>
                          
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="item-blog">
                           <div className="thumbnail">
                              <a href="#.html" className="img-blog-contain"><img src="images/Blog/2.jpg" alt=""/></a>
                              <div className="caption">
                                 <a href="blogDetail.html">
                                    <h4>COST</h4>
                                 </a>
                                 <p>
                                    Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                                 </p>
                                 <a className="learn-more" href="#.html"><i className="fa fa-caret-right" aria-hidden="true"></i> Learn More
                                 </a>
                              </div>
                           </div>                           
                        </div>
                     </div>
                  </div>
               </div>
               
            </section>



      <section className="bg-grey">
            <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <h2 className="title">Our Services</h2>
                         
                          <div className="customNavigation">
                            <a className="btn prev-project"><i className="fa fa-angle-left"></i></a>
                            <a className="btn next-project"><i className="fa fa-angle-right"></i></a>
                         </div>

                        <div id="owl-project" className="owl-carousel owl-theme  owl-project clearfix">
                              <div className="item">
                                    <a>
                                      <img src="images/Project/1.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Retirement Planning</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a>
                                      <img src="images/Project/2.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Estate Planning</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a >
                                      <img src="images/Project/3.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Tax Planning</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a >
                                      <img src="images/Project/5.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Goals</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a>
                                      <img src="images/Project/6.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Financial Report</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a >
                                      <img src="images/Project/7.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">2016 Retirement Plan</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a >
                                      <img src="images/Project/8.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Business Growth Solutions</h5>
                                    </a>
                              </div>
                              <div className="item">
                                    <a >
                                      <img src="images/Project/9.jpg" className="img-responsive" alt="Image"/>
                                      <h5 className="title-project">Insurance Life</h5>
                                    </a>
                              </div>
                        </div> 
                    </div>
                  </div>
            </div> 
      </section>
     
    <section>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h2 className="title">Our Experts</h2>
                      <div className="customNavigation">
                        <a className="btn prev-experts"><i className="fa fa-angle-left"></i></a>
                        <a className="btn next-experts"><i className="fa fa-angle-right"></i></a>
                      </div>  
                      <div id="owl-experts" className="owl-carousel owl-theme owl-experts clearfix">
                        <div className="item item-experts text-center">
                          <div className="expert-img-container">
                              <div className="avatar">
                                <img src="images/1.jpg" className="img-responsive" alt="Image"/>
                              </div>
                               <a href="https://www.linkedin.com/" className="in-experts">
                                  <i className="fa fa-linkedin"></i>
                              </a>
                          </div>                             
                          <div className="clearfix"></div>
                          <h4 className="">David K. O'Mara</h4>
                          <p className="job-experts">Founder and Managing Partner</p>
                        </div>
                        <div className="item item-experts text-center">
                          <div className="expert-img-container">
                              <a href="https://www.linkedin.com/" className="in-experts">
                                  <i className="fa fa-linkedin"></i>

                              </a>
                              <div className="avatar">
                                <img src="images/5.png" className="img-responsive" alt="Image"/>
                              </div>
                          </div> 
                          <div className="clearfix"></div>
                          <h4 className="">Name</h4>
                          <p className="job-experts">Designation</p>
                        </div>
                        <div className="item item-experts text-center">
                          <div className="expert-img-container">
                              <a href="https://www.linkedin.com/" className="in-experts">
                                  <i className="fa fa-linkedin"></i>
                              </a>
                              <div className="avatar">
                                <img src="images/5.png" className="img-responsive" alt="Image"/>
                              </div>
                          </div> 
                          <div className="clearfix"></div>
                          <h4 className="">Name</h4>
                          <p className="job-experts">Designation</p>
                        </div>                        <div className="item item-experts text-center">
                          <div className="expert-img-container">
                              <a href="https://www.linkedin.com/" className="in-experts">
                                  <i className="fa fa-linkedin"></i>
                              </a>
                              <div className="avatar">
                                <img src="images/5.png" className="img-responsive" alt="Image"/>
                              </div>
                          </div> 
                          <div className="clearfix"></div>
                          <h4 className="">Name</h4>
                          <p className="job-experts">Designation</p>
                        </div>
                        <div className="item item-experts text-center">
                          <div className="expert-img-container">
                              <a href="https://www.linkedin.com/" className="in-experts">
                                  <i className="fa fa-linkedin"></i>
                              </a>
                              <div className="avatar">
                                <img src="images/5.png" className="img-responsive" alt="Image"/>
                              </div>
                          </div> 
                          <div className="clearfix"></div>
                          <h4 className="">Name</h4>
                          <p className="job-experts">Designation</p>
                        </div>
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
   </div>

   
  );
}

export default Home;