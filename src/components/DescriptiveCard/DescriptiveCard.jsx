import React from 'react';
import './DescriptiveCard.css';
import AnimatedContent from '../../blocks/Animations/AnimatedContent/AnimatedContent'

const DescriptiveCard = ({ title, description, textAlign = 'center' }) => {
    return (
        
        <section className="descriptive-card-section">
            <div className="descriptive-card-container">
                <p className="descriptive-card-title" style={{ textAlign }}>{title}</p>
                <p className="descriptive-card-description" style={{ textAlign, whiteSpace: "pre-line" }}>
                    {description}
                </p>
            </div>
        </section>
    );
}

export default DescriptiveCard;
