import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudioDropdownList.css';

export default function StudioDropdownList(props) {
  return (
    <ul className="page-dropdown-list page-dropdown-list-desktop">
      <li>
        <NavLink
          to="/what-we-do"
          className={props.location.pathname === '/what-we-do' ? 'page-active' : ''}
        >
          THE STUDIO
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/lessons"
          className={props.location.pathname === '/lessons' ? 'page-active' : ''}
        >
          LESSONS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new-students"
          className={props.location.pathname === '/new-students' ? 'page-active' : ''}
        >
          PROSPECTIVE STUDENTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/suzuki"
          className={props.location.pathname === '/suzuki' ? 'page-active' : ''}
        >
          SUZUKI METHOD
        </NavLink>
      </li>
    </ul>
  );
}
