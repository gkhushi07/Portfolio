import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard';
import React from "react";
import "./GridCard.css"; // Make sure to import the CSS file for styling

const getLogo = async (name) => {
    try {
        const logo = await import(`../../assets/SkillLogo/${name.toLowerCase()}.svg`);
        return logo.default;
    } catch {
        return null; // Return a fallback logo if not found
    }
};

// Example usage
const gridData = [
    { name: "React", logo: await getLogo("React") },
    { name: "Vue.js", logo: await getLogo("Vue") },
    { name: "Rails", logo: await getLogo("Rails") },
    { name: "Ruby", logo: await getLogo("Ruby") },
    { name: "Python", logo: await getLogo("Python") },
    { name: "JavaScript", logo: await getLogo("JavaScript") },
    { name: "HTML", logo: await getLogo("HTML") },
    { name: "CSS", logo: await getLogo("CSS") },
    { name: "Docker", logo: await getLogo("Docker") },
    { name: "Github", logo: await getLogo("Git") }
];


const GridCard = () => {
    return (
        <section className="grid-section">
            <p className="grid-title">Skills</p>
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
