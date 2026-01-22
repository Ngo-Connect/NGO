import React, { useEffect, useRef, useState } from 'react';

const CursorMask = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    // 1. Movement Logic (Fast & Smooth)
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // Using translate3d for performance
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    // 2. Hover Logic (Detect links, buttons, and text)
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over interactive elements or headers
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'H1' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`mask-cursor ${isHovering ? 'hovered' : ''}`} 
    />
  );
};

export default CursorMask;