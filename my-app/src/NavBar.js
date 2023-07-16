import React, { useEffect } from 'react';

const NavBar = ({ isHomePage }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
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
    padding: '40px',
    color: isHomePage ? 'white' : '#000', // Set text color to white on the home page, and black on other pages
    zIndex: 999,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    backgroundColor: isHomePage ? 'transparent' : 'rgba(255, 255, 255, 0.9)', // Set background color to transparent on the home page, and the current styling on other pages
  };

  const linkStyle = {
    textDecoration: 'none',
    color: isHomePage ? '#fff' : '#000', // Set text color to white on the home page, and black on other pages
    fontWeight: 'bold',
    fontSize: '25px',
  };

  const linkSpacingStyle = {
    marginRight: '40px', // Add spacing between the links
  };

  const linkContainerStyle = {
    display: 'flex',
  };

  const annaStyle = {
    fontSize: '40px',
    cursor: 'pointer', // Add a cursor pointer to indicate it's clickable
  };

  return (
    <nav style={navStyle}>
      <div style={annaStyle} onClick={() => window.location.href = '/'}>
        Anna Picinich
      </div>
      <div>
        <div style={linkContainerStyle}>
          <div style={linkSpacingStyle}>
            <a href="/photos" style={linkStyle}>
              Photos
            </a>
          </div>
          <div style={linkSpacingStyle}>
          <a href="/mosaics" style={linkStyle}>
            Mosaics
          </a>
          </div>
          <a href="/about" style={linkStyle}>
            About
          </a>
        </div>
        
      </div>
    </nav>
     )
};

export default NavBar;
