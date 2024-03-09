import React from 'react';
import './header.css';

function Header() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
}

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>

      <div className='d-flex w-100 align-items-center justify-content-between'>
          <a href="/" className='logo d-flex align-items-center'>
              <img src="https://res.cloudinary.com/dlh4c743j/image/upload/v1709735877/white_logo_transparent_background-1-300x96_nmpbhj.png" alt="" />
          </a>

          <span className='toggle-sidebar-btn' onClick={handleToggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
      </div>

    </header>
  )
}

export default Header;