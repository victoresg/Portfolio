import { Container } from './styles';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <Container>
      <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
      >
          Home
      </NavLink>

      <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
      >
          Sobre
      </NavLink>

      <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
      >
          Contato
      </NavLink>
    </Container>
  );
}
