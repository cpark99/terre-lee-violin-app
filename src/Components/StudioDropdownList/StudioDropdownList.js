import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudioDropdownList.css';

export default function StudioDropdownList(props) {
  return (
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
  );
}
