import React, { useState, useEffect, useRef } from 'react';

export const Interactive3DCube = ({ size = 120, intensity = 0.3, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [autoRotation, setAutoRotation] = useState({ x: 0, y: 0 });
  const cubeRef = useRef(null);

  // Auto rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotation(prev => ({
        x: prev.x + 0.5,
        y: prev.y + 1,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cubeRef.current) return;

      const rect = cubeRef.current.getBoundingClientRect();
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
      if (!cubeRef.current || e.touches.length === 0) return;

      const touch = e.touches[0];
      const rect = cubeRef.current.getBoundingClientRect();
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
          x: e.beta * intensity * 2, // Tilt forward/backward
          y: e.gamma * intensity * 2, // Tilt left/right
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
      ref={cubeRef}
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x + autoRotation.x}deg) rotateY(${rotation.y + autoRotation.y}deg) rotateZ(45deg)`,
        width: `${size}px`,
        height: `${size}px`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f8bbd9 0%, #ffa726 50%, #e1bee7 100%)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          position: 'relative',
        }}
      >
        {/* Top face */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f8bbd9 0%, #ffa726 100%)',
            transform: 'rotateX(90deg) translateZ(50px)',
            borderRadius: '12px',
            opacity: 0.8,
          }}
        />
        {/* Right face */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #ffa726 0%, #e1bee7 100%)',
            transform: 'rotateY(90deg) translateZ(50px)',
            borderRadius: '12px',
            opacity: 0.6,
          }}
        />
        {/* Bottom face */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #e1bee7 0%, #f8bbd9 100%)',
            transform: 'rotateX(-90deg) translateZ(50px)',
            borderRadius: '12px',
            opacity: 0.4,
          }}
        />
      </div>
    </div>
  );
};
