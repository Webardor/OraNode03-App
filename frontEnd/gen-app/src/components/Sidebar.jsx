import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onNavigate, user }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isOptionDisabled = (option) => {
    if (!user || !user.role) return true; // Disable if no user/role
    if (user.role === 'admin') return false; // Admin can see everything
    return user.role !== option;
  };

  const handleNavClick = (e, componentName) => {
    e.preventDefault(); // Prevent page reload
    onNavigate(componentName);
  };

  return (
    <div className={isOpen ? "sidebar" : "sidebar closed"}>
      <h2>Application Options</h2>

      <ul className="menu-list">

        {/* OPTION 1 */}
        <li className={`${openIndex === 0 ? "active" : ""} ${isOptionDisabled("option1") ? "disabled" : ""}`}>
          <a className="menu-header" onClick={() => !isOptionDisabled("option1") && toggleMenu(0)}>
            Option-1
          </a>

          <ul className="sub-menu">
            <li><a href="#" onClick={(e) => handleNavClick(e, "Sub-Option1")}>Option-1-Sub-Option1</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Sub-Option2")}>Option-1-Sub-Option2</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Sub-Option3")}>Option-1-Sub-Option3</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Sub-Option4")}>Option-1-Sub-Option4</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Sub-Option5")}>Option-1-Sub-Option5</a></li>
          </ul>
        </li>

        {/* OPTION 2 */}
        <li className={`${openIndex === 1 ? "active" : ""} ${isOptionDisabled("option2") ? "disabled" : ""}`}>
          <a className="menu-header" onClick={() => !isOptionDisabled("option2") && toggleMenu(1)}>
            Option-2
          </a>

          <ul className="sub-menu">
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option2SubOption1")}>Option-2-Sub-Option1</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option2SubOption2")}>Option-2-Sub-Option2</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option2SubOption3")}>Option-2-Sub-Option3</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option2SubOption4")}>Option-2-Sub-Option4</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option2SubOption5")}>Option-2-Sub-Option5</a></li>
          </ul>
        </li>

        {/* OPTION 3 */}
        <li className={`${openIndex === 2 ? "active" : ""} ${isOptionDisabled("option3") ? "disabled" : ""}`}>
          <a className="menu-header" onClick={() => !isOptionDisabled("option3") && toggleMenu(2)}>
            Option-3
          </a>

          <ul className="sub-menu">
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option3SubOption1")}>Option-3-Sub-Option1</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option3SubOption2")}>Option-3-Sub-Option2</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option3SubOption3")}>Option-3-Sub-Option3</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option3SubOption4")}>Option-3-Sub-Option4</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, "Option3SubOption5")}>Option-3-Sub-Option5</a></li>
          </ul>
        </li>

      </ul>
    </div>
  );
}
