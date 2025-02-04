// App.jsx
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Squares from './blocks/Backgrounds/Squares/Squares';
import DescriptiveCards from './components/DescriptiveCard/DescriptiveCard';
import BlobCursor from './blocks/Animations/BlobCursor/BlobCursor';
import GridCard from './components/GridCard/GridCard';
import Timeline from './components/Timeline/Timeline';
import SphereDescriptiveCard from './components/SphereDescriptiveCard/SphereDescriptiveCard';
import AnimatedContent from './blocks/Animations/AnimatedContent/AnimatedContent';
import FadeContent from './blocks/Animations/FadeContent/FadeContent';




function App() {
  return (
    <div className="app-container">
      <BlobCursor />
      <Squares
        speed={0.5}
        squareSize={50}
        direction='diagonal'
        borderColor='#212121'
        hoverFillColor='grey'
      />
      <Navbar />
      <Intro />
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
      <Timeline />
      <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
        {<SphereDescriptiveCard />}
      </FadeContent>


      <DescriptiveCards
        title="Contact Me"
        description={
          <>
            <p style={{ fontSize: "1rem", textDecoration: "none", color: "inherit" }}>
              <FaEnvelope /> <a href="mailto:khushi.gupta.hm@gmail.com">khushi.gupta.hm@gmail.com</a>
              <br />
              <FaPhone /> <a href="tel:+918318118089">+91 8318118089</a>
            </p>
            <p style={{ fontSize: "2rem", textDecoration: "none", color: "inherit" }}>
              <a href="https://www.linkedin.com/in/khushi-gupta-hm" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a> &nbsp;
              <a href="https://github.com/gkhushi07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </p>
            <p>

            </p>
          </>
        }
        textAlign="left" // Make sure "left" is in lowercase
      />
    </div>
  );
}

export default App;

