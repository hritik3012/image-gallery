import React from 'react';
import logo from './logo.png'; // Import your logo image file

function Header() {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <h1 style={titleStyle}>imageGallery</h1>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0px',
  borderBottom: '1px solid #ddd',
  backgroundColor: '#ccc', 
  borderRadius: '10px',
};

const logoStyle = {
  width: '50px', 
  marginLeft: '30px',
};

const titleStyle = {
    display: 'flex',
    margin: 'auto',
};



export default Header;
