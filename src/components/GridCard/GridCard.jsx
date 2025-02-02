import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard';
import React from "react";
import "./GridCard.css"; // Make sure to import the CSS file for styling

const gridData = [
    { name: "JavaScript", logo: "path-to-logo1.png" },
    { name: "React", logo: "path-to-logo2.png" },
    { name: "Node.js", logo: "path-to-logo3.png" },
    { name: "CSS", logo: "path-to-logo4.png" },
    { name: "HTML", logo: "path-to-logo5.png" },
    { name: "Python", logo: "path-to-logo6.png" },
];

const GridCard = () => {
    return (
        <section className="grid-section">
            <p className="grid-title">My grid</p>
            <div className="grid-grid">
                {gridData.map((val, index) => (
                    <div key={index} className="grid-card">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <img
                                src={val.logo}
                                alt={val.name}
                                className="grid-logo"
                            />
                            <h3 className="grid-name">{val.name}</h3>
                        </SpotlightCard>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default GridCard;
