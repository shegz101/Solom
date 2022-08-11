import React from 'react';
import '../Styles/Signup.css';
import logo from '../solomon.png';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className='signup_page'>
            <div className='signup__logo'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <Link to="/" style={{textDecoration:'none', outline:'none',}}><h1 style={{color:'white',paddingLeft:'10px', paddingTop:'8px', cursor:'pointer',}} className='header-text'>Solomon</h1></Link>
            </div>

            <div>
                <h1>Sign Up</h1>
                <input type='text' placeholder='Username'/>
                <form class="my-form">
                  <textarea className="description-field"  name="msg" rows="5" cols="50" placeholder="Description"></textarea>
               </form>
            </div>
        </div>
    )
}

export default Signup;