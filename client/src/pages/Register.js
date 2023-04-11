import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { registerfunction } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import '../styles/mix.css'
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/esm/Spinner';



import loginimg from "../Images/login_img.jpg";


const Register = () => {

  const [spinner, setSpinner] = useState(false);
  const [passhow, setPassShow] = useState(false);

  const [inputData, steInputData] = useState({
    fname: "",
    email: "",
    contact: "",
    password: ""
  });

  const navigate = useNavigate();

  // setinputvalue 
  const handleChange = (e) => {
    const { name, value } = e.target;
    steInputData({ ...inputData, [name]: value })
  }

  // Register Data 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, contact, password } = inputData;

    if (fname === "") {
      toast.error("Enter Your Name");
      setSpinner(false);
    }

    else if (email === "") {
      toast.error("Enter Your Email");
      setSpinner(false);
    }
    else if (!email.includes("@")) {
      toast.error("Enter a valid Email");
      setSpinner(false);
    }
    else if (!email.includes(".")) {
      toast.error("Enter a valid Email");
      setSpinner(false);
    }
    else if (contact === "") {
      toast.error("Enter Your Contact No.");
      setSpinner(false);
    }
    else if (!/[^a-zA-Z]/.test(contact)) {
      toast.error("Enter a valid Contact No.");
      setSpinner(false);
    } else if (contact.length != 10) {
      toast.error("Enter a valid Contact No.");
      setSpinner(false);
    }
    else if (password === "") {
      toast.error("Enter Your Password");
      setSpinner(false);
    }
    else if (password.length < 6) {
      toast.error("Password must contains atleast 6 characters");
      setSpinner(false);
    }
    else {
      setSpinner(true);

      const response = await registerfunction(inputData);

      if (response.status === 200) {
        steInputData({ ...inputData, fname: "", email: "", contact: "", password: "" });
        navigate("/");
      } else {
        toast.error(response.response.data.error);
      }
    }



  }

  return (
    <>


      <div className="container my-4">
        <div className="col-md-8 my4 loginBox">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

            {/* Login Image  */}
            <div className="col-md-6 col-auto d-none d-lg-block loginImgBox">
              <img src={loginimg} id='loginImg' alt="Login_Image" srcSet="" />
            </div>

            {/* Login Form  */}
            <div className="col-md-6 p-4 d-flex flex-column position-static">
              <section>
                <div className="form_data">
                  <div className="form_heading">
                    <h1>Sign Up</h1>
                  </div>

                  <form>


                    <div className="form_input">
                      <label htmlFor="email">Name</label>
                      <input type="email" name="fname" id="" onChange={handleChange} placeholder="Name" />
                    </div>

                    <div className="form_input">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="" onChange={handleChange} placeholder="Email" />
                    </div>


                    <div className="form_input">
                      <label htmlFor="contact">Contact No.</label>
                      <input type="text" name="contact" id="" onChange={handleChange} placeholder="Contact No." />
                    </div>


                    <div className="form_input">
                      <label htmlFor="password">Password</label>
                      <div className='two'>
                        <input type={!passhow ? "password" : "text"} name="password" id="" onChange={handleChange} placeholder='Password' />
                        <div className='showpass' onClick={() => setPassShow(!passhow)} >
                          {!passhow ? "Show" : "Hide"}
                        </div>
                      </div>
                    </div>
                    <button className='btn' onClick={handleSubmit}>Sign Up
                      {
                        spinner && <Spinner animation="border" />
                      }
                    </button>
                    <p>Have and account?  <NavLink to="/">Sing In</NavLink> </p>
                  </form>
                </div>

              </section>
            </div>

          </div>
        </div>
      </div>


{/* 
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage your tasks! We hope that you will get like it.</p>
          </div>

          <form>


            <div className="form_input">
              <label htmlFor="email">Name</label>
              <input type="email" name="fname" id="" onChange={handleChange} placeholder="Enter you Name" />
            </div>

            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" onChange={handleChange} placeholder="Enter you Email Address" />
            </div>


            <div className="form_input">
              <label htmlFor="contact">Contact No.</label>
              <input type="text" name="contact" id="" onChange={handleChange} placeholder="Enter you Contact No." />
            </div>


            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input type={!passhow ? "password" : "text"} name="password" id="" onChange={handleChange} placeholder='Enter Your password' />
                <div className='showpass' onClick={() => setPassShow(!passhow)} >
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up
              {
                spinner && <Spinner animation="border" />
              }
            </button>
            <p>Don't have and account </p>
          </form>
        </div>

      </section> */}

      <ToastContainer />
    </>
  )
}

export default Register