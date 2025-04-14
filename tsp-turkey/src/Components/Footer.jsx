import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="developer-info">
          <p>Designed By: Mert Uçan</p>
          <a 
            href="https://github.com/mertucan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
            title="GitHub Profilini Ziyaret Et"
          >
            <img 
              src="/img/github.png" 
              alt="GitHub" 
              className="github-icon" 
              width="24" 
              height="24" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;