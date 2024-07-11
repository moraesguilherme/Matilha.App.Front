import '../styles/Nav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <aside className='menu-area'>
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"> Início</i>
        </Link>
        <div className="menu-orcamento" onClick={toggleSubMenu}>
          <i className="fa fa-home"> Orçamento</i>
          <div className={`submenu ${showSubMenu ? 'show' : ''}`}>
            <Link to="/novoOrcamento">Novo Orçamento</Link>
            <Link to="/consultarOrcamento">Consultar Orçamento</Link>
            <Link to="/cadastroAltaTemporada">Cadastrar Alta Temporada</Link>
            <Link to="/cadastroPreco">Cadastrar Preço Hospedagem</Link>
          </div>
        </div>
        {/* <Link to="/ConsultaOrcamento">
          <i className="fa fa-home"> Consultar Orçamento</i>
        </Link> */}
      </nav>
    </aside>
  );
};

export default Nav;
