import { NavLink } from "react-router-dom";
import { Title } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/catalog'>Catalog</NavLink>
      <Title>GRANN</Title>
    </header>
  );
};