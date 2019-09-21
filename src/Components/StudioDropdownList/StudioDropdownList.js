import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudioDropdownList.css';

export default function StudioDropdownList(props) {
  return (
    <ul className="page-dropdown-list page-dropdown-list-desktop">
      <li>
        <NavLink to="/what-we-do">THE STUDIO</NavLink>
      </li>
      <li>
        <NavLink to="/lessons">LESSONS</NavLink>
      </li>
      <li>
        <NavLink to="/new-students">PROSPECTIVE STUDENTS</NavLink>
      </li>
      <li>
        <NavLink to="/suzuki">SUZUKI METHOD</NavLink>
      </li>
    </ul>
  );
}
