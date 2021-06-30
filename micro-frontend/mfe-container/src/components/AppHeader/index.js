import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const AppHeader = () => (
  <Container>
    <header>
      <h1 className="title">◓ Poké API</h1>
      <nav>
        <ol>
          <li>
            <NavLink to="/">Browse pokémon</NavLink>
          </li>
          <li>
            <NavLink to="/random">Get a random one</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ol>
      </nav>
    </header>
  </Container>
)

export default AppHeader;