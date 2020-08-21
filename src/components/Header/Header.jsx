import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageSelector from '../LanguageSelector';
import './Header.scss';

function Header({ changeLanguage, lang }) {
  return (
    <nav className="navbar position-relative bg-light justify-content-end header">
      {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/detail/8d6e280a-4dc8-4957-b2b4-feb07ce9ff6b">BTS2020 - Detail</Link>
        </li>
      </ul> */}
      <form className="form-inline flex-nowrap align-items-center">
        <FontAwesomeIcon icon={["fas", "globe"]} className="h2 mb-0 mr-2 text-primary" />
        <LanguageSelector mainClass="" changeLanguage={changeLanguage} lang={lang} />
      </form>
    </nav>
  );
}

export default Header;