import React, {useRef} from 'react';
import '../Styles/Signup.css';
import Header from './Header';
import logo from '../solomon.png';
import { Link } from "react-router-dom";
import {FiUpload } from 'react-icons/fi';

const Signup = (props) => {
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (
        <div className='signup_page'>
            <Header/>
            <div className='signup__main'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <h1 className='sign-text'>Sign Up as an Artist/Creator</h1>
                <p className='sign-descp'>Already an artist? <Link to="/collection" style={{textDecoration:'none', outline:'none',}}><span style={{color:'#3e00b3',}}>Create a collection</span></Link></p>
                <div className='sign__div'>
                    <div className='img__upload' onClick={handleClick} onChange={handleChange}>
                        <FiUpload style={{position:'absolute', paddingBottom:'15px'}} className='file__uploader'/>
                        <p style={{paddingTop:'13px'}}>Upload</p>
                        <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                    </div>
                    <p style={{color:'white'}}>Set a Profile photo</p>
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