import React, { useRef, useState } from 'react';
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';
import PixelTransition from '../../blocks/Animations/PixelTransition/PixelTransition';
import './Intro.css'
import Dp from '../../assets/kg_dp.png'

const Intro = () => {
    return (
        <div id='hero'>
            <div id='intro'>
                <DecryptedText
                    text="Hi! My name is Khushi Gupta."
                    animateOn="view"
                    revealDirection="center"
                    speed={200}
                    fontSize="25px"
                />
            </div>
            <div id='dp'>
                <img src={Dp.default || Dp} alt="Profile" />    

            </div>
        </div>
    )
}

export default Intro;
