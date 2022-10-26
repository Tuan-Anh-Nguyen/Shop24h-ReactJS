import imglogin from '../../assets/images/login.jpg';

import auth from '../../firebase';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const provider = new GoogleAuthProvider();

export default function LogInBox() {
     const [user, setUser] = useState(null);

     const signIn = () => {
          signInWithPopup(auth, provider)
               .then((result) => {
                    console.log(result);
                    setUser(result);
               })
               .catch((err) => {
                    console.error(err.message);
               })
     }

     const logOut = () => {
          signOut(auth)
               .then((result) => {
                    setUser(null);
               })
               .catch((err) => {
                    console.error(err.message);
               })
     }

     return (
          <>
               <section className="login_box_area section_gap">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6">
                                   <div className="login_box_img">
                                        <img className="img-fluid" src={imglogin} alt="" />
                                        <div className="hover">
                                             {
                                                  user ?
                                                       <>
                                                            <h4>Hi, {user._tokenResponse.displayName}!</h4>
                                                            <img src={user._tokenResponse.photoUrl} style={{ width: '50px', borderRadius: '50%' }} alt='avatar'></img>
                                                            <br />
                                                            <br />
                                                            <button className="primary-btn" style={{ border: '0px' }}
                                                                 onClick={logOut}>Sign Out</button>
                                                       </>
                                                       :
                                                       <>
                                                            <h4>Do you want to sign in with Google?</h4>
                                                            <p>There are advances being made in science and technology everyday,
                                                                 and this is a good example.</p>
                                                            <button className="primary-btn" style={{ border: '0px' }}
                                                                 onClick={signIn}><i className="fa-brands fa-google"></i>&nbsp;
                                                                 Sign in with Google</button>
                                                       </>
                                             }
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="login_form_inner">
                                        <h3>Log in to enter</h3>
                                        <form className="row login_form" id="contactForm" noValidate="novalidate">
                                             <div className="col-md-12 form-group">
                                                  <input type="text" className="form-control" placeholder="Username" />
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <input type="password" className="form-control" placeholder="Password" />
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <div className="creat_account">
                                                       <input type="checkbox" id="f-option2" name="selector" />
                                                       <label htmlFor="f-option2">Keep me logged in</label>
                                                  </div>
                                             </div>
                                             <div className="col-md-12 form-group">
                                                  <button type="submit" value="submit" className="primary-btn">Log In</button>
                                                  <a href="/login">Forgot Password?</a>
                                             </div>
                                             <div className='col-md-12'>
                                                  <p>Don't have an account? <a href='/login' style={{ color: 'orange' }}>
                                                       Sign up here</a></p>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}