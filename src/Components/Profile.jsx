import React, { useState } from 'react';
import '../Styles/Profile.css';
import { Link } from "react-router-dom";
import Header from './Header';
import { MdContentCopy } from 'react-icons/md';

const Profile = () => {
    const [item, setItem] = useState(false);
    const [collection, setCollection] = useState(false);
    const [activity, setActivity] = useState(false);
    const address = '4fJScLXQYafWCfRS29t6EsqhTH3RCeZaRsWFCwidsQAQ';
    const minimize = `${address?.slice(0, 6)}..${address?.slice(-4)}` ;
    return (
        <div className='profile__section'>
            <div style={{marginRight:'40px',}}><Header /></div>
           <div className='profile__img'>
              <div className='img__div'></div>
              <div className='address__edit' style={{marginTop:'-13px'}}>
                <p><span style={{color:'white',}}>{minimize}</span> <span style={{marginTop:'60px'}}><MdContentCopy style={{color:'#3e00b3',}}/></span></p>
                <Link to="/signup" style={{textDecoration:'none', outline:'none',}}><button style={{backgroundColor:'#17076C',outline:'none', textDecoration:'none', border:'1px solid transparent', color:'white', marginTop:'-10px', height:'30px'}}>Edit profile</button></Link>
              </div>
              <div>
                <nav className='diff__sections'>
                    <ul onClick={() => setItem(true)}>My Items</ul>
                    <ul onClick={() => setCollection(true)}>CollectIons</ul>
                    <ul onClick={() => setActivity(true)}>Activities</ul>
                </nav>
              </div>
           </div>

           <div clasName='activities__space'>
              {
                item && (
                    <p style={{color:'white',}}>You have no items yet</p>
                )
              }

              {
                collection && (
                    <p style={{color:'white',}}>Create a collection</p>
                )
              }

              {
                activity && (
                    <p style={{color:'white',}}>No Activity yet</p>
                )
              }
           </div>
        </div>
    )
}

export default Profile;