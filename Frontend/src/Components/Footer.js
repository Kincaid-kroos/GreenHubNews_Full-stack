import React from 'react';
import '../Styles/Footer.css';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const timeline = new Date().getFullYear();

  return (
    
    
    <div className='footercontainer'>
      <div className='footerinside'>
      <h6 className='padding-left'>Useful Links</h6>
      <ul className="no-bullets">
        <li>
            <a  href="#about-section">About</a>
          </li>
          <li>
            <a  href="#about-section">Latest Articles</a>
          </li>
          <li>
            <a  href="#featured-section">Featured Article</a>
          </li>
       
        
      </ul>
      <h6 className='padding-left'>Contacts</h6>
      <ul className="no-bullets">
        <li>
        <p><NavLink className='footerlink design'><EmailIcon/>GreenHubNews@info.co.ke</NavLink> </p></li>
        <li><PhoneIcon/>+254701218138</li>
      </ul>
      </div>

      <div className='footer footerdivcss'>
        <footer className='footercss text-center '>
          <p>GreenHubNews</p> 
          Copyright©{timeline}: || All rights reserved
        </footer>
        <ul className='socio-icons no-bullets'>
          <li> <a href='https://www.facebook.com/kinc.kroos'><FacebookIcon /></a></li>
          <li> <a href='https://twitter.com/kincaid_kroos'><TwitterIcon /></a></li> 
          <li><a href='www.linkedin.com/in/kiprotich-kincaid-b50664203'><LinkedInIcon /></a></li>
          <li><InstagramIcon /></li>
        </ul>

      </div>
    </div>
  
  );
};

export default Footer;
