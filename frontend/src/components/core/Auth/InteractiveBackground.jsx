import React, { useEffect, useRef } from 'react';
import './AuthBackground.css';

const InteractiveBackground = () => {
  const backgroundRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      shapesRef.current.forEach((shape, index) => {
        if (shape) {
          const depth = index + 1; // Different depths for parallax effect
          const translateX = moveX * depth;
          const translateY = moveY * depth;
          
          shape.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${translateX}deg) scale(${1 + Math.abs(moveX) / 100})`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="auth-background" ref={backgroundRef}>
      <div 
        className="floating-shape"
        ref={el => shapesRef.current[0] = el}
      />
      <div 
        className="floating-shape"
        ref={el => shapesRef.current[1] = el}
      />
      <div 
        className="floating-shape"
        ref={el => shapesRef.current[2] = el}
      />
    </div>
  );
};

export default InteractiveBackground;
