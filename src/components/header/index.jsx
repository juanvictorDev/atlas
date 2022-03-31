import React from 'react';
import './style.scss';

export function Header() {
  return(
    <header>
      <div className="header-container">
        <img src='assets/logo.png' alt='logo' className="header-logo"/>
        <a href='#' className="header-link">Obter acesso antecipado</a>
      </div>
    </header>
  )
}