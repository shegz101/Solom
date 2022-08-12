import React, {useRef, useState} from 'react';
import '../Styles/Collection.css';
import Header from './Header';
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
            <Header/>
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