import React from 'react';
import "./playerStyle.css"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className =" bg-dark spacer">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >Me
            </a>
          </li>
          <li className="nav-item bg-dark">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Contact
            </a>
          </li>
        </ul>
     </div>  
  );
}

export default NavTabs;