import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 border relative">
      {/* Left: Hamburger for mobile */}
      <div className="sm:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="font-bold text-[24px]">AryaVart</div>

      {/* Center Links (visible only on laptop/desktop) */}
      <div className="hidden sm:flex gap-5 font-semibold text-[18px]">
        <div className="cursor-pointer">War Log</div>
        <div className="cursor-pointer">Leaders</div>
        <div className="cursor-pointer">Join us</div>
      </div>

      {/* Right: Profile button */}
      <div className="cursor-pointer" onClick={() => setProOpen(!proOpen)}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-black text-white p-4 rounded shadow-md sm:hidden">
          <Link to="/" className="block py-1">Home</Link>
          <Link to="/leaders" className="block py-1">Leaders</Link>
          <Link to="/join" className="block py-1">Join us</Link>
          <Link to="/form" className="block py-1">Form</Link>
        </div>
      )}

      {/* Profile Dropdown */}
      {proOpen && (
        <div className="absolute right-0 top-full w-40 bg-black p-4 rounded shadow-md text-white flex flex-col">
          <a href="/" className="block py-1">Profile</a>
          <a href="/settings" className="block py-1">Settings</a>
          <a href="/login" className="block py-1">Sign in/out</a>
        </div>
      )}
    </div>
  );
}
