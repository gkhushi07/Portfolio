// App.jsx
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Squares from './blocks/Backgrounds/Squares/Squares';
import DescriptiveCards from './components/DescriptiveCard/DescriptiveCard';
import GridCard from './components/GridCard/GridCard';
import Timeline from './components/Timeline/Timeline';
import SphereDescriptiveCard from './components/SphereDescriptiveCard/SphereDescriptiveCard';
import AnimatedContent from './blocks/Animations/AnimatedContent/AnimatedContent';
import FadeContent from './blocks/Animations/FadeContent/FadeContent';
import * as React from "react";
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { text } from 'framer-motion/client';

function App() {
  return (
    <div className="app-container">
      <Squares
        speed={0.5}
        squareSize={50}
        direction='diagonal'
        borderColor='#212121'
        hoverFillColor='grey'
      />
      <Navbar />
      <section id='home'>
        <Intro />
      </section>
      <section id='about'>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <DescriptiveCards
            title="About Me"
            description="Hi, I'm Khushi Gupta! I'm a passionate Software Developer with 2+ years of experience in building impactful, user-centric web applications. My expertise spans across full-stack development, from building interactive frontends to crafting robust backends. I’m constantly learning and evolving, and I’m eager to tackle new challenges in the world of software development."
            textAlign="left" // Can be 'center', 'left', 'right', or any other value
          />
        </AnimatedContent>
        <GridCard />
      </section>

      <section id='experience'>
        <Timeline />
      </section>
      <section id='projects'>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          {<SphereDescriptiveCard />}
        </FadeContent>
      </section>
      <section id='contact'>


        <DescriptiveCards
          title="Contact Me"
          description={
            <>
              <p style={{ fontSize: "1rem", textDecoration: "none", color: "inherit" }}>
                <FaEnvelope /> <a href="mailto:khushi.gupta.hm@gmail.com">khushi.gupta.hm@gmail.com</a>
                <br />
                <FaPhone /> <a href="tel:+918318118089">+91 8318118089</a>
              </p>
            </>
          }
          textAlign="left" // Make sure "left" is in lowercase
        />
      </section>
      <br />
      <p style={{textAlign: "center", }}> © 2023 Khushi Gupta</p>
    </div>

  );
}

export default App;

