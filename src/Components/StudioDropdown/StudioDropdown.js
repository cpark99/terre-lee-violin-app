import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './StudioDropdown.css';

export default function StudioDropdown(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdownMenu() {
    if (showDropdown === false) {
      setShowDropdown(true);
    }
    if (showDropdown === true) {
      setShowDropdown(false);
    }
  }

  return (
    <div className="page-dropdown">
      <span className="page-dropdown-button bold" onClick={toggleDropdownMenu}>
        {showDropdown ? <span>-</span> : '+'}
      </span>
      {showDropdown && (
        <ul className="page-dropdown-list">
          {props.location.pathname !== '/what-we-do' && (
            <li>
              <NavLink to="/what-we-do">THE STUDIO</NavLink>
            </li>
          )}
          {props.location.pathname !== '/lessons' && (
            <li>
              <NavLink to="/lessons">LESSONS</NavLink>
            </li>
          )}
          {props.location.pathname !== '/new-students' && (
            <li>
              <NavLink to="/new-students">PROSPECTIVE STUDENTS</NavLink>
            </li>
          )}
          {props.location.pathname !== '/suzuki' && (
            <li>
              <NavLink to="/suzuki">SUZUKI METHOD</NavLink>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
