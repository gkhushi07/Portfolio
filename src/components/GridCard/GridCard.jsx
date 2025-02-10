import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard';
import './GridCard.css';

const getLogo = async (name) => {
    try {
        const logo = await import(`../../assets/SkillLogo/${name.toLowerCase()}.svg`);
        return logo.default;
    } catch {
        return null;
    }
};

const skills = [
    'React', 'Vue', 'Rails', 'Ruby', 'Python', 
    'JavaScript', 'HTML', 'CSS', 'Docker', 'Git'
];

const GridCard = () => {
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        const loadLogos = async () => {
            const data = await Promise.all(
                skills.map(async (name) => ({
                    name,
                    logo: await getLogo(name)
                }))
            );
            setGridData(data);
        };
        loadLogos();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="grid-section">
            <p className="grid-title">Skills</p>
            <Slider {...settings} className="grid-slider">
                {gridData.map((val, index) => (
                    <div key={index} className="grid-card">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img src={val.logo} alt={val.name} className="grid-logo" />
                            <h3 className="grid-name">{val.name}</h3>
                        </SpotlightCard>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default GridCard;