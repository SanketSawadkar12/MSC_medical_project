import React from "react";
import Particles from "react-tsparticles";

export default function Particle() {
  return (
    
      <Particles 
      id="tsparticles"
      options={{fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: { enable: false, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.5,
              size: 40,
            },
            push: { particles_nb: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ffffff' },
          links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: {
            bounce: false,
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { random: true, value: 5 },
        },
        detectRetina: true,}} />
      
    
    
    
  );
}

// export default Particle;
