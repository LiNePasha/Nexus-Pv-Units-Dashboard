import React, { useEffect } from 'react';
import { Collapse } from 'bootstrap';
import './sidebar.css';

function MyAside({ sidebarItems }) {
  useEffect(() => {
    // Initialize Bootstrap Collapse component
    const collapseElementList = document.querySelectorAll('.collapse');
    collapseElementList.forEach(collapseEl => {
      new Collapse(collapseEl);
    });
  }, []); // Empty dependency array - useEffect runs only once

  return (
    <aside id='sidebar' className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        {sidebarItems.map((item, index) => (
          <li key={index} className={`nav-item ${item.dropdown ? 'dropdown' : ''}`}>
            <a href={item.link} className={`nav-link ${item.dropdown ? 'collapsed' : ''}`} data-bs-toggle={item.dropdown ? 'collapse' : ''} data-bs-target={item.dropdown ? `#dropdown-${index}` : ''}>
              {item.icon && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  {item.icon}
                </svg>
              )}
              <span>{item.text}</span>
              {item.dropdown && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dropdownSvg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
              )}
            </a>

            {item.dropdown && (
              <ul id={`dropdown-${index}`} className={`nav-content collapse ${item.dropdown ? 'show' : ''}`}>
                {item.dropdownItems.map((dropdownItem, i) => (
                  <li key={i}>
                    <a href={dropdownItem.link}>
                      <span>{dropdownItem.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MyAside;
