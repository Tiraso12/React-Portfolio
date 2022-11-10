import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Gonzalo
      </div>
    </footer>
  );
};

export default Footer;
