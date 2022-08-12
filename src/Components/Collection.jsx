import React, {useRef, useState} from 'react';
import '../Styles/Collection.css';
import logo from '../solomon.png';
import { Link } from "react-router-dom";
import { BsCardImage } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Collection = (props) => {
    const [categorymodal, setCategoryModal] = useState(false);
    const [categorytext, setCategoryText] = useState('Select Category');
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    const openCategoryModal = () => {
        if (categorymodal === false) {
            setCategoryModal(true);
        } else {
            setCategoryModal(false);
        }
    }
    return (
        <div className='collection__page'>
            <div className='collection__logo'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <Link to="/" style={{textDecoration:'none', outline:'none',}}><h1 style={{color:'white',paddingLeft:'10px', paddingTop:'8px', cursor:'pointer',}} className='header-text'>Solomon</h1></Link>
            </div>

            <div className='collection__creation__section'>
                <h2 style={{color:'white',}}>Create new item</h2>
                <p style={{color:'white',}}>File type supported: JPG, PNG. Max Size:5 MB</p>
                <div className='img' onClick={handleClick} onChange={handleChange}>
                    <span><BsCardImage style={{width:'80px', height:'80px', color:'white'}}/></span>
                    <p>Upload your cover art</p>
                    <input type="file" ref={hiddenFileInput} style={{display:'none'}} />
                </div>
                <div>
                    <p style={{textAlign:'left', paddingLeft:'20px', color:'white',}}>Title<span style={{color:'red'}}>*</span></p>
                    <input type='text' className='collect__title' placeholder='Fill your collection tItle'/>
                    <p style={{textAlign:'left', paddingLeft:'20px', color:'white',}}>Categories</p>
                    <div onClick={openCategoryModal}>
                        <p className='catergory__default'><span style={{paddingLeft:'18px', paddingTop:'3px', fontWeight:'600'}}>{categorytext}</span>  <span style={{paddingRight:'10px', paddingTop:'3px', fontWeight:'600', fontSize:'20px'}}><RiArrowDropDownLine/></span></p>
                    </div>
                </div>
            </div>
            {
                categorymodal && (
                    <div className='category__modal'>
                        <p style={{marginTop:'8px'}} onClick={() => setCategoryText('Writing')}>Writing</p>
                        <p style={{marginTop:'-15px'}} onClick={() => setCategoryText('Video')}>Video</p>
                        <p style={{marginTop:'-15px'}} onClick={() => setCategoryText('Music')}>Music</p>
                        <p style={{marginTop:'-15px'}} onClick={() => setCategoryText('Painting')}>Painting</p>
                        <p style={{marginTop:'-15px'}} onClick={() => setCategoryText('Design')}>Design</p>
                        <p style={{marginTop:'-15px'}} onClick={() => setCategoryText('Photograph')}>Photograph</p>
                        <p style={{marginTop:'-15px', marginBottom:'3px'}} onClick={() => setCategoryText('Adult')}>Adult</p>
                    </div>
                )
            }
        </div>
    )
}

export default Collection;