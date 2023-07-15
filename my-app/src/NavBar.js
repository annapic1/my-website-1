import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: isSticky ? '#ffffff' : 'transparent',
    color: '#344966',
    position: isSticky ? 'fixed' : 'static',
    top: isSticky ? '0' : 'auto',
    left: isSticky ? '0' : 'auto',
    right: isSticky ? '0' : 'auto',
    boxShadow: isSticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: 999,
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#344966',
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const annaStyle = {
    fontSize: '40px',
    position: 'absolute', // Add a position property
    left: '50%', // Move it to the horizontal center
    transform: 'translateX(-50%)', // Adjust the position to center it precisely
  };

  return (
    <nav style={navStyle}>
      <div>
        <a href="/" style={linkStyle}>
          Home
        </a>
      </div>
      <div style={annaStyle}>Anna Picinich</div>
      <div>
        <a href="/photos" style={linkStyle}>
          Photos
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
