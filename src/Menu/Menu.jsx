import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './menu.css';
import Posts from '../Posts/Posts';
import {  } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="header">
        <h2> image</h2>

        <nav>
          <ul className='nav-link'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">COURSES <FontAwesomeIcon icon={faAngleDown} /></a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>

        <div className="icon-search">
          <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
        </div>
      </div>
  
   </div>
  );
}

export default Menu;
