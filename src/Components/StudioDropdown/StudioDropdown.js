import React, { useState } from 'react';
import StudioDropdownList from '../StudioDropdownList/StudioDropdownList';
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
      {showDropdown && <StudioDropdownList location={props.location} />}
    </div>
  );
}
