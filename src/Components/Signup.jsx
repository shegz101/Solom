import React from 'react';
import '../Styles/Signup.css';
import logo from '../solomon.png';
import { Link } from "react-router-dom";
import {FiUpload } from 'react-icons/fi';

const Signup = () => {
    return (
        <div className='signup_page'>
            <div className='signup__logo'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <Link to="/" style={{textDecoration:'none', outline:'none',}}><h1 style={{color:'white',paddingLeft:'10px', paddingTop:'8px', cursor:'pointer',}} className='header-text'>Solomon</h1></Link>
            </div>

            <div className='signup__main'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <h1 className='sign-text'>Sign Up as an Artist/Creator</h1>
                <p className='sign-descp'>Already an artist? <span style={{color:'#3e00b3',}}>Create a collection</span></p>
                <div className='sign__div'>
                    <div className='img__upload'>
                        <div ><FiUpload style={{paddingTop:'30px'}} className='file__uploader'/></div>
                        <div ><p style={{paddingBottom:'20px', fontSize:'15px'}}>Upload</p></div>
                    </div>
                    <p>Set a Profile photo</p>
                    <input type='text'  className='input__user' placeholder='Enter a username'/>
                    <form class="my-form">
                       <textarea className="description-field"  name="msg" rows="5" cols="50" placeholder="Tell us a little about yourself"></textarea>
                    </form>
                    <button className='create__btn'>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;