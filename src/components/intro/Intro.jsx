import React from 'react';
import './Intro.css';
import Dp from '../../assets/kg_dp.jpg';
import Waves from '../../blocks/Backgrounds/Waves/Waves';
import StatusIndicator from '../StatusIndicator';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-background">
                <Waves
                    lineColor="#252323"
                    backgroundColor="black"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>

            <div className="intro-content">
                <div className="profile-content">
                    <div className="profile-image">
                        <img src={Dp} alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <div className='left'>

                            <h1>Khushi Gupta</h1>
                            <h2>Software Developer</h2>

                            <div className="status-wrapper">
                                <StatusIndicator text='Available for Work' isActive={true} />

                            </div>
                        </div>
                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/khushi-gupta-hm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/gkhushi07"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://medium.com/@khushi.gupta.hm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaMedium />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Intro;