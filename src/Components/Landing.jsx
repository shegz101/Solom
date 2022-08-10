import React from 'react';
import Header from './Header';
import '../Styles/Landing.css';

const Landing = () => {
    return (
        <div className='landing__section'>
            <Header/>
            <div>
                <div>
                    <h1 className='intro__text'>Discover and Connect Your deligent Fans</h1>
                    <p className='intro__desc'>Let your most passionate fans support your creative work via monthly membership.</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Landing;