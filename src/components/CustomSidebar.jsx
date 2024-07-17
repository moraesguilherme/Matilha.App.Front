import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFolder, FaCog, FaBars, FaChevronLeft, FaSignOutAlt, FaUserCircle, FaChevronRight } from 'react-icons/fa';
import './CustomSidebar.css';
import logo from '../assets/imgs/logo.png';

const CustomSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      setIsSubMenuOpen(false);
    }
  }, [isCollapsed]);

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
        <button className={`menu-toggle ${isCollapsed ? 'collapsed' : ''}`} onClick={handleToggleSidebar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <div className="menu">
        <div className="menu-item">
          <FaHome />
          {!isCollapsed && <Link to="/" className="menu-link">Dashboard</Link>}
        </div>
        <div className={`menu-item ${isSubMenuOpen ? 'open' : ''}`} onClick={handleToggleSubMenu}>
          <FaFolder />
          {!isCollapsed && <div className="menu-link">Orçamentos</div>}
        </div>
        {isSubMenuOpen && !isCollapsed && (
          <div className="submenu-content">
            <Link to="/novoOrcamento" className="submenu-item">Novo Orçamento</Link>
            <Link to="/consultarOrcamento" className="submenu-item">Consultar Orçamento</Link>
            <Link to="/cadastroAltaTemporada" className="submenu-item">Cadastrar Alta Temporada</Link>
            <Link to="/cadastroPreco" className="submenu-item">Cadastrar Preço Hospedagem</Link>
          </div>
        )}
      </div>
      <div className="menu-footer">
        <div className="menu-item">
          <FaCog />
          {!isCollapsed && <Link to="/settings" className="menu-link">Settings</Link>}
        </div>
        <div className="menu-item">
          <FaSignOutAlt />
          {!isCollapsed && <Link to="/logout" className="menu-link">Logout</Link>}
        </div>
        <div className="user-info">
          <FaUserCircle size={40} style={{ color: '#6c757d' }} />
          {!isCollapsed && (
            <div className="user-details">
              <span className="user-name">John Smith</span>
            </div>
          )}
        </div>
      </div>
      <div className="right-border" />
    </div>
  );
};

export default CustomSidebar;
