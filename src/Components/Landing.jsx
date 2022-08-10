import React from 'react';
import Header from './Header';
import nft from '../solnftbg.png';
import '../Styles/Landing.css';

const Landing = () => {
    return (
        <div className='landing__section'>
            <Header/>
            <div className='landing__row'>
                <div>
                    <h1 className='intro__text'>Discover and Connect Your deligent Fans</h1>
                    <p className='intro__descp'>Let your most passionate fans support your creative work via monthly membership.</p>
                </div>
                <div>
                    <span><img src={nft} className="nft__img" alt='nft-img'/></span>
                </div>
            </div>

            <div className='grp__btn'>
                <button className='explore__btn'>Explore</button>
                <button className='collection__btn'>Create Collection</button>
            </div>
        </div>
    )
}

export default Landing;