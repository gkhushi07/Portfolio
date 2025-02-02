// App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Squares from './blocks/Backgrounds/Squares/Squares';
import DescriptiveCards from './components/DescriptiveCard/DescriptiveCard';
import BlobCursor from './blocks/Animations/BlobCursor/BlobCursor';
import GridCard from './components/GridCard/GridCard';
import Timeline from './components/Timeline/Timeline';
import SphereDescriptiveCard from './components/SphereDescriptiveCard/SphereDescriptiveCard';



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

      <DescriptiveCards
        title="About Me"
        description="Hi, I'm Khushi Gupta! I'm a passionate Software Developer with 2+ years of experience in building impactful, user-centric web applications. My expertise spans across full-stack development, from building interactive frontends to crafting robust backends. I’m constantly learning and evolving, and I’m eager to tackle new challenges in the world of software development."
        textAlign="left" // Can be 'center', 'left', 'right', or any other value
      />
      <DescriptiveCards
        title="About Me"
        description="Hi, I'm Khushi Gupta! I'm a passionate Software Developer with 2+ years of experience in building impactful, user-centric web applications. My expertise spans across full-stack development, from building interactive frontends to crafting robust backends. I’m constantly learning and evolving, and I’m eager to tackle new challenges in the world of software development."
        textAlign="right" // Can be 'center', 'left', 'right', or any other value
      />
      <GridCard />
      <Timeline />
      <SphereDescriptiveCard/>
    </div>
  );
}

export default App;

