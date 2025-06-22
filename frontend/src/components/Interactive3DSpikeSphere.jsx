  import React, { useState, useEffect, useRef } from 'react';

export const Interactive3DSpikeSphere = ({ size = 200, intensity = 0.3, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 });
  const sphereRef = useRef(null);

  // Auto rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotation(prev => ({
        x: prev.x + 0.3,
        y: prev.y + 0.8,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sphereRef.current) return;

      const rect = sphereRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;

      setRotation({
        x: -deltaY,
        y: deltaX,
      });
    };

    const handleTouchMove = (e) => {
      if (!sphereRef.current || e.touches.length === 0) return;

      const touch = e.touches[0];
      const rect = sphereRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (touch.clientX - centerX) * intensity;
      const deltaY = (touch.clientY - centerY) * intensity;

      setRotation({
        x: -deltaY,
        y: deltaX,
      });
    };

    const handleDeviceOrientation = (e) => {
      if (e.beta !== null && e.gamma !== null) {
        setRotation({
          x: e.beta * intensity * 2,
          y: e.gamma * intensity * 2,
        });
      }
    };

    // Mouse events for desktop
    window.addEventListener('mousemove', handleMouseMove);
    
    // Touch events for mobile
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Device orientation for mobile
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
    };
  }, [intensity]);

  return (
    <div
      ref={sphereRef}
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x + autoRotation.x}deg) rotateY(${rotation.y + autoRotation.y}deg)`,
        width: `${size}px`,
        height: `${size}px`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {/* Main sphere with enhanced 3D appearance */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `
            radial-gradient(circle at 30% 30%,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(248, 187, 217, 0.9) 20%,
              rgba(255, 167, 38, 0.9) 50%,
              rgba(225, 190, 231, 0.9) 80%
            )
          `,
          transformStyle: 'preserve-3d',
          position: 'relative',
          animation: 'spherePulse 3s ease-in-out infinite alternate',
          boxShadow: `
            0 0 30px rgba(255, 167, 38, 0.6),
            inset 5px 5px 20px rgba(255, 255, 255, 0.5),
            inset -5px -5px 20px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Highlight effect for 3D appearance */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent 70%)',
            filter: 'blur(8px)',
            opacity: 0.8,
          }}
        />
        
        {/* Secondary highlight for depth */}
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '30%',
            height: '30%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent 70%)',
            filter: 'blur(6px)',
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
};
