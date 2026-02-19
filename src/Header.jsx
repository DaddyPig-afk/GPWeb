import { NavLink, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './Goldplan.css';
import logo from './image/goldplanlogo.jpg';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Goldplan Logo" />
      </div>

      <input id="menu-toggle" type="checkbox" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-btn">
        <span></span>
      </label>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
