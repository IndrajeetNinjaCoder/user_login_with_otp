import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mix.css"

import loginimg from "../Images/login_img.jpg";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";


const Login = () => {

    const [passhow, setPassShow] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spiner, setSpiner] = useState(false);

    const navigate = useNavigate();



    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else if (password === "") {
            toast.error("Enter Your Password");
        }
        else if (password.length < 6) {
            toast.error("Password must contains atleast 6 characters");
        } else {
            setSpiner(true);
            const data = {
                email: email,
                password: password
            }

            const response = await sentOtpFunction(data);

            if (response.status === 200) {
                setSpiner(false)
                navigate("/user/otp", { state: email })
            } else {
                toast.error(response.response.data.error);
            }
        }
        setSpiner(false);
    }

    return (
        <>

            <div className="container my-4">
                <div className="col-md-8 my4 loginBox">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                        {/* Login Image  */}
                        <div className="col-md-6 col-auto d-none d-lg-block loginImgBox">
                            <img src={loginimg} id='loginImg' alt="Login Image" srcSet="" />
                        </div>

                        {/* Login Form  */}
                        <div className="col-md-6 p-4 d-flex flex-column position-static">
                            {/* <section> */}
                            <div className="form_data">
                                <div className="formTop my-4 d-flex justify-content-between">
                                    <div className="form_heading" id='signinHeading'>
                                        <h1 >Sign In</h1>
                                    </div>

                                    <div className="logobox">

                                        <div className="facebook logos">
                                            <a href="#">
                                                <img src={facebook} className='logo' alt="" />
                                            </a>
                                        </div>



                                        <div className="twitter logos">
                                            <a href="#">
                                                <img src={twitter} className='logo' alt="" />
                                            </a>
                                        </div>


                                    </div>
                                </div>
                                <form>
                                    <div className="form_input">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                    </div>


                                    <div className="form_input">
                                        <label htmlFor="password">Password</label>
                                        <div className='two'>
                                            <input type={!passhow ? "password" : "text"} name="password" id="" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                            <div className='showpass' onClick={() => setPassShow(!passhow)} >
                                                {!passhow ? "Show" : "Hide"}
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn' id='signinBtn' onClick={sendOtp}>Sign In
                                        {
                                            spiner ? <span><Spinner animation="border" /></span> : ""
                                        }
                                    </button>

                                    <input className="form-check-input bg-warning mx-2" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{marginLeft: "30px"}}> Remember Me</label>

                                    <a href="#" id='forgotPass'>Forgot Password</a>

                                    <p>Not a member? <NavLink to="/register">Sing up</NavLink> </p>
                                </form>
                            </div>

                            {/* </section> */}
                        </div>

                    </div>
                </div>
            </div>




            <ToastContainer />
        </>
    )
}

export default Login