import React from 'react';
import { NavLink } from 'react-router-dom';

import Emoji from '../emoji';

import './header.scss';

export default function Header() {
  return (
    <header className="hero">
      <hgroup>
        <h1>gmail-deliveries-forwarding</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </hgroup>
      <nav>
        <NavLink to="/" exact>
          <Emoji label="home" symbol="🏠" /> Home
        </NavLink>
        <a href="#" className="disabled" title="Coming soon ™">
          <Emoji label="lock" symbol="🔒" /> Something else
        </a>
      </nav>
    </header>
  );
}
