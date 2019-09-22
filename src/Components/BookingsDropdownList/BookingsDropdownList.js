import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BookingsDropdownList(props) {
  return (
    <ul className="page-dropdown-list page-dropdown-list-desktop">
      <li>
        <NavLink
          to="/what-we-do"
          className={props.location.pathname === '/private-events' ? 'page-active' : ''}
        >
          PRIVATE EVENTS
        </NavLink>
      </li>
    </ul>
  );
}
